import React, { Component } from 'react';
// import logo from './logo.svg';
import LittleBigGiant from './LittleBigGiant.png';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>

        <div className="App-header">
          <img src={LittleBigGiant} className="App-logo" alt="logo" />
          <h2>Little Big Giant</h2>
        </div>
        <div className="parallax">
            <div className="reveal curve">
              <a href="https://github.com/lgrapstein/bear">Github</a>
            </div>

            <div className="reveal plug">
              <a href="https://github.com/lgrapstein/bear">Github</a>
            </div>

            <div className="reveal paper">
              <a href="https://github.com/lgrapstein/bear">Github</a>
            </div>
          </div>
        </div>
    )
  }
}
