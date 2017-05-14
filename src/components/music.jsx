import React, { Component } from 'react'
import * as d3 from "d3";
import '../../public/style.css'
import byebyemac from '../../public/clips/byebyemac.wav'

export default class Music extends Component {
  constructor() {
    super()

    this.state = {
      audio: 'play',
    }

    this.audio = document.getElementsByTagName("audio")[0]
  }

  componentDidMount() {
    var audioElements = document.getElementsByTagName("audio")
    this.byebyemac = audioElements[0]
    this.byebyemac.volume = .8
    this.byebyemac.play()
  }



  render() {
    return (
      <div className="container">
        <audio><source src={byebyemac}></source></audio>

        <div className="player">


        </div>
      </div>
    )
  }
}
