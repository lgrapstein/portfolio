import React, { Component } from 'react'
import '../../public/style.css'
import nine from '../../public/clips/nine.mp3'
import play from '../../public/images/logo/play.png'
import pause from '../../public/images/logo/pause.png'

export default class Music extends Component {
  constructor() {
    super()

    this.state = {
      sound: true,
      soundImage: 'play',
    }

    this.audio = document.getElementsByTagName("audio")[0]
    // this.img = document.getElementsByTagName("img")[0]
    this.audioControlButton = this.audioControlButton.bind(this)
    this.toggleAudio = this.toggleAudio.bind(this)
  }

  componentDidMount() {
    var audioElements = document.getElementsByTagName("audio")
    // var imgElements = document.getElementsByTagName("img")
    // this.play = imgElements[0]
    this.nine = audioElements[0]
    this.nine.volume = 0.8
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
      soundImage: !this.state.soundImage,
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
          <img src={this.state.soundImage} />
          <img type="button" id="playOrPause" src={this.state.soundImage} onClick={this.audioControlButton} />
        </div>
      </div>
    )
  }
}
