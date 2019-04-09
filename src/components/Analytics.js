import React, { Component } from 'react';

const Analytics = props => (
      <div className="Analytics">
        <br />

        <p className="weather__key">Location: { props.city && props.country &&
          <span className="weather__value">{ props.city } { props.country }</span>
        }</p>

        <p className="weather__key">Outside Temperature: { props.temperature &&
          <span className="weather__value">{ props.temperature }</span>
        }</p>

        <p className="weather__key">Recommended Thermostat Setting: { props.thermostat_temp && props.thermostat_setting &&
          <span className="weather__value">{ props.thermostat_temp } { props.thermostat_setting }</span>
        }</p>

        { props.error &&
          <p className="weather__error">{ props.error }</p>
        }
      </div>
    );

export default Analytics;
