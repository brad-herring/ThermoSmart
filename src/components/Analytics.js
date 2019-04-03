import React, { Component } from 'react';

const Analytics = props => (
      <div className="Analytics">
        <br />
        { props.city && props.country &&
          <p className="weather__key">Location: <span className="weather__value">{ props.city } { props.country }</span></p>
        }
        { props.temperature &&
          <p className="weather__key">Outside Temperature: <span className="weather__value">{ props.temperature }</span></p>
        }
        { props.thermostat_temp && props.thermostat_setting &&
          <p className="weather__key">Recommended Thermostat Setting: <span className="weather__value">{ props.thermostat_temp } { props.thermostat_setting }</span></p>
        }
        { props.error &&
          <p className="weather__error">{ props.error }</p>
        }
      </div>
    );

export default Analytics;
