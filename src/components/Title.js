import React, { Component } from 'react';
import '../App.css';

class Title extends Component {
  render() {
    return (
      <div className="Titlepanel">
        <h1 className="Titlepanel__title">ThermoSmart</h1>
        <p>Maximum Energy Savings</p>
        <br />
        <br />
        <form onSubmit={this.props.getWeather}>
          <button>Calculate</button>
        </form>
      </div>
    );
  }
}

export default Title;
