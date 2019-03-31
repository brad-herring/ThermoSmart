import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App">
      <center>
        <h1>ThermoSmart Home Thermostat</h1>
        <form onSubmit={this.props.getWeather}>
          <button>Calculate</button>
        </form>
        </center>
      </div>
    );
  }
}

export default Header;
