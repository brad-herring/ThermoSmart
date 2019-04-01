import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App">
      <center>
        <h1>Overview</h1>
        <br />
        <form onSubmit={this.props.getWeather}>
          <button>Calculate</button>
        </form>
        <br />
        </center>
      </div>
    );
  }
}

export default Header;
