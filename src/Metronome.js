import React from 'react';
import './Metronome.css';
import metro from './metronome.mp3'
import InputRange from "react-input-range";



class Metronome extends React.Component {
constructor(props) {
    super(props);
    this.state={
        bpm: 120
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handlePause = this.handlePause.bind(this)
}

handleChange (bpm) {
    this.setState({bpm})
    const click = document.getElementsByClassName("audio-el")[0]
    click.playbackRate=this.state.bpm/110
    click.play()     //Changes bpm while playing
}



handleStart() {
        const click = document.getElementsByClassName("audio-el")[0]
        click.play()
    click.playbackRate=this.state.bpm/110    //time stretching the metronome track
    click.loop=true    //looping the metronome track
}


    handlePause() {
    const click = document.getElementsByClassName("audio-el")[0]
    click.load()
}


    render() {
        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div className="bpm-text">{this.state.bpm} BPM</div>
                    <div className="input-range">
                    <InputRange  maxValue={240} minValue={40} value={this.state.bpm}
                                onChange={this.handleChange}
                                    />
                </div>
                </div>
                <button  className="start-button" onClick={()=>this.handleStart()}>Start</button>
                <button  className="pause-button" onClick={()=>this.handlePause()}>Stop</button>
                <audio className="audio-el">
                    <source src={metro}></source>
                </audio>
            </div>
        )
    }
}
export default Metronome