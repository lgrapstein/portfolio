import React, { Component } from 'react'
import LittleBigGiant from '../public/images/logo/LittleBigGiant.png'
import './App.css'
import Music from './components/music.jsx'
import GitHub from '../public/images/social/github.png'
import Tumblr from '../public/images/social/tumblr.png'


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <img className="App-header" src={LittleBigGiant} alt="logo"/>
          <div className="social-media display-flex">
            <a href="https://github.com/lgrapstein" target="_blank">
              <img className="social" src={GitHub} alt="github"/>
            </a>
            <a href="https://laurengrapstein.tumblr.com/" target="_blank">
              <img className="social" src={Tumblr} alt="tumblr"/>
            </a>
          </div>

        <Music />

        <div className="parallax">

          <div className="reveal travelshare display-flex">
            <a className="flex-auto" href="https://github.com/lgrapstein/travel-share" target="_blank">Github</a>
            <a className="flex-auto" href="http://travel-share.herokuapp.com/" target="_blank">App</a>
          </div>

          <div className="reveal bear display-flex">
            <a className="flex-auto" href="https://github.com/lgrapstein/bear" target="_blank">Github</a>
            <a className="flex-auto" href="http://beargame.surge.sh/home" target="_blank">App</a>
          </div>

          <div className="reveal wifi display-flex">
            <a className="flex-auto" href="https://github.com/lgrapstein/nyc-wifi-2" target="_blank">Github</a>
            <a className="flex-auto" href="https://wifi-freerider.herokuapp.com/" target="_blank">App</a>
          </div>

        </div>

      </div>
    )
  }
}
