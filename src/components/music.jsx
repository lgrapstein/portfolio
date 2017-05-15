import React, { Component } from 'react'
import '../../public/style.css'
import byebyemac from '../../public/clips/byebyemac.wav'

export default class Music extends Component {
  constructor() {
    super()

    this.state = {
      sound: true,
    }

    this.audio = document.getElementsByTagName("audio")[0]
    this.audioControlButton = this.audioControlButton.bind(this)
    this.toggleAudio = this.toggleAudio.bind(this)
  }

  componentDidMount() {
    var audioElements = document.getElementsByTagName("audio")
    this.byebyemac = audioElements[0]
    this.byebyemac.volume = .8
    this.byebyemac.play()
  }

  toggleAudio() {
    this.setState({
      sound: !this.state.sound,
    })
  }

  audioControlButton() {
     if (this.state.sound !== true) {
       this.byebyemac.play()
       this.toggleAudio()
       console.log('music is playing')
     } else {
       this.byebyemac.pause()
       this.toggleAudio()
       console.log('music is paused')
     }
   }

  render() {
    return (
      <div className="container">
        <audio src={byebyemac}></audio>

        <div className="player">
          <button type="button" onClick={this.audioControlButton}>INSERT IMAGE</button>
        </div>
      </div>
    )
  }
}
