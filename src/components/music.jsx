import React, { Component } from 'react'
import '../../public/style.css'
import nine from '../../public/clips/nine.mp3'
import buttons from '../../public/images/buttons/pause.png'

export default class Music extends Component {
  constructor() {
    super()

    this.state = {
      sound: true,
      button: 'play',
    }

    this.audio = document.getElementsByTagName("audio")[0]
    this.img = document.getElementsByTagName("img")[1]
    this.audioControlButton = this.audioControlButton.bind(this)
    this.toggleAudio = this.toggleAudio.bind(this)
  }

  componentDidMount() {
    var audioElements = document.getElementsByTagName("audio")
    var imgElements = document.getElementsByTagName("img")
    this.buttons = imgElements[1]
    this.nine = audioElements[0]
    this.nine.volume = 0
    this.nine.play()
  }
  //
  // showAppropriateAudioImage(playOrPause) {
  //   var p = (playOrPause === this.nine.play) ? this.playImage : !this.playImage
  //   p.play()
  // }

  toggleAudio() {
    this.setState({
      sound: !this.state.sound,
      button: !this.state.button,
    })
  }

  audioControlButton() {
     if (this.state.sound !== true) {
       this.nine.play()
       this.toggleAudio()
       console.log('music is playing')
     } else {
       this.nine.pause()
       this.toggleAudio()
       console.log('music is paused')
     }
   }

  render() {
    return (
      <div className="container">
        <audio src={nine}></audio>

        <div className="player">
          <button id="playOrPause" onClick={this.audioControlButton}>
            <img src={this.state.button} alt="audio picture" />
          </button>
        </div>
      </div>
    )
  }
}
