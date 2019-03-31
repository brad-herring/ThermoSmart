import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

const LOCATION_KEY = `a54097ce431e4b1241f6129bb302ebdd`;
const WEATHER_KEY = `a3643d9ab50eedf3e1cae0983ab63d53`;

class App extends Component {
  state = {
    temperature: undefined,
    thermostat: undefined,
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
    this.setState({
      temperature: data.main.temp
    });
  }

  render() {
    return (
      <div className="App">
        <Header getWeather={this.getWeather}/>
      </div>
    );
  }
}

export default App;
