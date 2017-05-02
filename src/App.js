import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Little Big Giant</h2>
        </div>

        <div className="flex-box-demo">

          <div className="left-side">
            <p>Left side</p>
          </div>

          <div className="middle">
            <p>Middle</p>
          </div>

          <div className="right-side">
            <p>Right side</p>
          </div>

        </div>

      </div>
    )
  }
}
