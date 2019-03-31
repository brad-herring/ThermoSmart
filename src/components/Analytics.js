import React, { Component } from 'react';

class Analytics extends Component {
  render() {
    return (
      <div className="App">
        <center>
        <p>Location: { this.props.city }, { this.props.country }</p>
        <p>Outside Temperature: { this.props.temperature }</p>
        <p>Recommended Thermostat Setting: { this.props.thermostat_temp } { this.props.thermostat_setting }</p>
        <p>{ this.props.error }</p>
        </center>
      </div>
    );
  }
}

export default Analytics;
