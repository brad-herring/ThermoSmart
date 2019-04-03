import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Analytics from './components/Analytics';
import Title from './components/Title';

const LOCATION_KEY = `a54097ce431e4b1241f6129bb302ebdd`;
const WEATHER_KEY = `a3643d9ab50eedf3e1cae0983ab63d53`;

function fahrenheit_base_temperatures(temp) {
    var base;

    if(temp >= -20 && temp < 0){
        base = 58;
    } else if(temp >= 0 && temp < 20){
        base = 60;
    } else if(temp >= 20 && temp < 30){
        base = 61;
    } else if(temp >= 30 && temp < 40){
        base = 62;
    } else if(temp >= 40 && temp < 50){
        base = 63;
    } else if(temp >= 50 && temp < 60){
        base = 71;
    } else if(temp >= 60 && temp < 70){
        base = 72;
    } else if(temp >= 70 && temp < 80){
        base = 73;
    } else if(temp >= 80 && temp < 95){
        base = 74;
    } else if(temp >= 95 && temp < 105){
        base = 75;
    } else if(temp >= 105 && temp < 115){
        base = 76;
    } else if(temp >= 115 && temp < 120){
        base = 77;
    }
    return base;
}
function time_index(hours) {
  var index;

  if (hours >= 6 && hours < 11) {
    index = 1;
  } else if (hours >= 11 && hours < 17) {
    index = 2;
  } else if (hours >= 17 && hours < 23) {
    index = 3;
  } else if (hours >= 23 || hours < 6) {
    index = 4;
  } else {
    index = null;
  }
  return index;
}
function base_adjustment(temp, time) {
    var adj_temp;

    if(time === 2 && temp <= 70){
        adj_temp = temp + 2;
    } else if(time === 2 && temp > 70){
        adj_temp = temp + 4;
    } else if(time === 4 && temp <= 70){
        adj_temp = temp + 2;
    } else if(time === 4 && temp > 70){
        adj_temp = temp + 4;
    } else {
        adj_temp = temp;
    }
    return adj_temp;
}
function heat_or_cool(base) {
    const heat = "heat";
    const cool = "cool";

    if(base >= 58 && base < 70) {
        return heat;
    } else if(base >= 70 && base <= 82) {
        return cool;
    }
}


class App extends Component {
  state = {
    temperature: undefined,
    thermostat_temp: undefined,
    thermostat_setting: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const api_call1 = await fetch(`http://api.ipstack.com/72.188.107.209?access_key=${LOCATION_KEY}`);
    const loc_data = await api_call1.json();
    const city = loc_data.city;
    const country = loc_data.country_code;
    const api_call2 = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${WEATHER_KEY}&units=imperial`);
    const data = await api_call2.json();
    let date = new Date();
    let hour = date.getHours();
    console.log(data);
    console.log(hour);
    let pretemp_reading = fahrenheit_base_temperatures(data.main.temp);
    let temp_reading = base_adjustment(pretemp_reading, time_index(hour));
    let heatCool_reading = heat_or_cool(base_adjustment(pretemp_reading, time_index(hour)));
    console.log(pretemp_reading);
    console.log(temp_reading);
    console.log(heatCool_reading);
    this.setState({
      temperature: data.main.temp,
      thermostat_temp: temp_reading,
      thermostat_setting: heatCool_reading,
      city: data.name,
      country: data.sys.country,
      error: null
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-4 title-container">
                  <Title getWeather={this.getWeather}/>
                </div>
                <div className="col-xs-8 form-container">
                  <Header />
                  <Analytics
                  temperature={this.state.temperature}
                  thermostat_temp={this.state.thermostat_temp}
                  thermostat_setting={this.state.thermostat_setting}
                  city={this.state.city}
                  country={this.state.country}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
