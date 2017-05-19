import React, { Component } from 'react'
import '../../public/style.css'
import nine from '../../public/clips/nine.mp3'

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
    this.nine = audioElements[0]
    this.nine.volume = 0
    this.nine.play()
  }

  toggleAudio() {
    this.setState({
      sound: !this.state.sound,
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
          <button type="button" onClick={this.audioControlButton}>INSERT IMAGE</button>
        </div>
      </div>
    )
  }
}
