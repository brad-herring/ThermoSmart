import React, { Component } from 'react';

class Analytics extends Component {
  render() {
    return (
      <div className="Analytics">
        <br />
        <p className="Location">Location: { this.props.city } { this.props.country }</p>
        <p className="OutsideTemp">Outside Temperature: { this.props.temperature }</p>
        <p className="ThermostatSetting">Recommended Thermostat Setting: { this.props.thermostat_temp } { this.props.thermostat_setting }</p>
        <p className="error">{ this.props.error }</p>
      </div>
    );
  }
}

export default Analytics;
