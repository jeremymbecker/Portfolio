import * as React from "https://cdn.skypack.dev/react@17.0.1";
import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import './DrumMachine.css'

let heaterSoundClips = [
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater 1"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater 2"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater 3"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater 4"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open HH"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick n' Hat"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed HH"
  }
];

let smoothPianoSoundClips = [
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    name: "Chord 1"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    name: "Chord 2"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    name: "Chord 3"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    name: "Shaker"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    name: "Open-HH"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    name: "Closed-HH"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    name: "Punchy-Kick"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    name: "Side-Stick"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    name: "Snare"
  }
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      soundClips: heaterSoundClips, 
      displayName: "",
      power: "On",
      volume: 50,
      currentKit: "Heater"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handlePowerButtonClick = this.handlePowerButtonClick.bind(this);
    this.handleKitSwitchButtonClick = this.handleKitSwitchButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
   
  }
  
  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress)
  }
  
  handleClick(e) {
    if(this.state.power === "Off") {
      return;
    }
    e.target.firstElementChild.volume = (this.state.volume) / 100;
    e.target.firstElementChild.currentTime = 0;
    e.target.firstElementChild.play();
    var displayText = e.target.value;
    this.setState({
      displayName: displayText
    });
  }
  
  handlePowerButtonClick(e) {
    if(this.state.power === "Off") {
      this.setState({
        displayName: "Power is On",
        power: "On"
      });
      $('#power-icon').css({"color": "white"});
      $('#power-icon').css({"box-shadow": "inset 0px 1px 0px 0px rgb(255,255,255, 0.5), 0px 0px 3px 2px rgb(255, 255, 255, 0.5)"});
      
      $('#power-indicator').css({"background-color":"rgb(0,255,0)", "box-shadow": "inset 0px 1px 0px 0px rgb(255,255,255, 0.5), 0px 0px 3px 2px rgb(0, 255, 0, 0.5)"});
    }
    
    else if(this.state.power === "On") {
      this.setState({
        displayName: "Power is Off",
        power: "Off"
      });
      $('#power-icon').css({"color": "#404040"});
      $('#power-icon').css({"box-shadow": "none"});
      
      $('#power-indicator').css({"background-color":"rgb(255,0,0)", "box-shadow" : "inset 0px 1px 0px 0px rgb(255,255,255, 0.5), 0px 0px 3px 2px rgb(255, 0, 0, 0.5)"});
    }
  }
  
  handleChange(e) {
    if(this.state.power === "Off") {
      return;
    }
    let volumeStr = "Volume: " + e.target.value;
    console.log(volumeStr);
    this.setState({
      volume: e.target.value,
      displayName: volumeStr
    });
  }
  
  handleKitSwitchButtonClick(e) {
    if(this.state.currentKit === "Heater") {
      this.setState({
        soundClips: smoothPianoSoundClips,
        displayName: "Smooth Piano Kit",
        currentKit: "Smooth Piano"
      });
    }
      
    else if(this.state.currentKit === "Smooth Piano") {
      this.setState({
        soundClips: heaterSoundClips,
        displayName: "Heater Kit",
        currentKit: "Heater"
      });
    }
  }
  
  handleKeyPress(e) {
    if(this.state.power === "Off") {
      return;
    }
    switch(e.keyCode) {
      case 81: 
      case 113:
        document.getElementById("Q").volume = (this.state.volume) / 100;
        document.getElementById("Q").currentTime = 0;
        document.getElementById("Q").play();
        if(this.state.currentKit === "Heater"){
          this.setState({
            displayName: "Heater 1"
          });
        }
        else if(this.state.currentKit === "Smooth Piano") {
          this.setState({
            displayName: "Chord 1"
          });
        }
        break;
      case 87:
      case 119:
        document.getElementById("W").volume = (this.state.volume) / 100;
        document.getElementById("W").currentTime = 0;
        document.getElementById("W").play();
        if(this.state.currentKit === "Heater"){
          this.setState({
            displayName: "Heater 2"
          });
        }
        else if(this.state.currentKit === "Smooth Piano") {
          this.setState({
            displayName: "Chord 2"
          });
        }
        break;
      case 69:
      case 101:
        document.getElementById("E").volume = (this.state.volume) / 100;
        document.getElementById("E").currentTime = 0;
        document.getElementById("E").play();
        if(this.state.currentKit === "Heater"){
          this.setState({
            displayName: "Heater 3"
          });
        }
        else if(this.state.currentKit === "Smooth Piano") {
          this.setState({
            displayName: "Chord 3"
          });
        }
        break;
      case 65:
      case 97:
        document.getElementById("A").volume = (this.state.volume) / 100;
        document.getElementById("A").currentTime = 0;
        document.getElementById("A").play();
        if(this.state.currentKit === "Heater"){
          this.setState({
            displayName: "Heater 4"
          });
        }
        else if(this.state.currentKit === "Smooth Piano") {
          this.setState({
            displayName: "Shaker"
          });
        }
        break;
      case 83:
      case 115:
        document.getElementById("S").volume = (this.state.volume) / 100;
        document.getElementById("S").currentTime = 0;
        document.getElementById("S").play();
        if(this.state.currentKit === "Heater"){
          this.setState({
            displayName: "Clap"
          });
        }
        else if(this.state.currentKit === "Smooth Piano") {
          this.setState({
            displayName: "Open HH"
          });
        }
        break;
      case 68:
      case 100:
        document.getElementById("D").volume = (this.state.volume) / 100;
        document.getElementById("D").currentTime = 0;
        document.getElementById("D").play();
        if(this.state.currentKit === "Heater"){
          this.setState({
            displayName: "Open HH"
          });
        }
        else if(this.state.currentKit === "Smooth Piano") {
          this.setState({
            displayName: "Closed HH"
          });
        }
        break;
      case 90:
      case 122:
        document.getElementById("Z").volume = (this.state.volume) / 100;
        document.getElementById("Z").currentTime = 0;
        document.getElementById("Z").play();
        if(this.state.currentKit === "Heater"){
          this.setState({
            displayName: "Kick n' Hat"
          });
        }
        else if(this.state.currentKit === "Smooth Piano") {
          this.setState({
            displayName: "Punchy Kick"
          });
        }
        break;
      case 88:
      case 120:
        document.getElementById("X").volume = (this.state.volume) / 100;
        document.getElementById("X").currentTime = 0;
        document.getElementById("X").play();
        if(this.state.currentKit === "Heater"){
          this.setState({
            displayName: "Kick"
          });
        }
        else if(this.state.currentKit === "Smooth Piano") {
          this.setState({
            displayName: "Side Stick"
          });
        }
        break;
      case 67:
      case 99:
        document.getElementById("C").volume = (this.state.volume) / 100;
        document.getElementById("C").currentTime = 0;
        document.getElementById("C").play();
        if(this.state.currentKit === "Heater"){
          this.setState({
            displayName: "Closed HH"
          });
        }
        else if(this.state.currentKit === "Smooth Piano") {
          this.setState({
            displayName: "Snare"
          });
        }
        break;
      default:
        break;
    }
    
  }
  
  
  
  render() {
    return (
      <div id="drum-machine">
        <div id="drum-display">
          
          <div id="keypad" className="keypad" >
            <button id ="heater1" className="drum-pad" value={this.state.soundClips[0].name} onClick={this.handleClick} onKeyPress={(e) => this.handleKeyPress(e)}>
              <audio src={this.state.soundClips[0].src} className="clip" id="Q"></audio>
              Q
            </button>
            <button id ="heater2" className="drum-pad" value={this.state.soundClips[1].name} onClick={this.handleClick} onKeyPress={(e) => this.handleKeyPress(e)}>
              <audio src={this.state.soundClips[1].src} className="clip" id="W"></audio>
              W
            </button>
            <button id ="heater3" className="drum-pad" value={this.state.soundClips[2].name} onClick={this.handleClick} onKeyPress={(e) => this.handleKeyPress(e)}>
              <audio src={this.state.soundClips[2].src} className="clip" id="E"></audio>
              E
            </button>
            <button id ="heater4" className="drum-pad" value={this.state.soundClips[3].name} onClick={this.handleClick} onKeyPress={(e) => this.handleKeyPress(e)}>
              <audio src={this.state.soundClips[3].src} className="clip" id="A"></audio>
              A
            </button>
            <button id ="clap" className="drum-pad" value={this.state.soundClips[4].name} onClick={this.handleClick} onKeyPress={(e) => this.handleKeyPress(e)}>
              <audio src={this.state.soundClips[4].src} className="clip" id="S"></audio>
              S
            </button>
            <button id ="open-hh" className="drum-pad" value={this.state.soundClips[5].name} onClick={this.handleClick} onKeyPress={(e) => this.handleKeyPress(e)}>
              <audio src={this.state.soundClips[5].src} className="clip" id="D"></audio>
              D
            </button>
            <button id ="kick-n-hat" className="drum-pad" value={this.state.soundClips[6].name} onClick={this.handleClick} onKeyPress={(e) => this.handleKeyPress(e)}>
              <audio src={this.state.soundClips[6].src} className="clip" id="Z"></audio>
              Z
            </button>
            <button id ="kick" className="drum-pad" value={this.state.soundClips[7].name} onClick={this.handleClick} onKeyPress={(e) => this.handleKeyPress(e)}>
              <audio src={this.state.soundClips[7].src} className="clip" id="X"></audio>
              X
            </button>
            <button id ="closed-hh" className="drum-pad" value={this.state.soundClips[8].name} onClick={this.handleClick} onKeyPress={(e) => this.handleKeyPress(e)}>
              <audio src={this.state.soundClips[8].src} className="clip" id="C"></audio>
              C
            </button>
          </div>
          <div id="controls-panel">
            <div id="logo">
              <h1 className="drum-machine-h1"><strong><em>FCC <i className="fa fa-free-code-camp" aria-hidden="true"></i></em></strong></h1>
            </div>
            <button id="power" className="power-button" onClick={this.handlePowerButtonClick}><i id ="power-icon" className="fa fa-power-off fa-2x" aria-hidden="true"></i></button>
            <div id="power-indicator" ></div>
            <div id="display-name-panel">
              <h2>{this.state.displayName}</h2>
            </div>
            <div id="volume-slider-drum-machine">
              <input type="range" id="volume" min="0" max ="100" value ={this.state.volume} onChange={this.handleChange}></input>
            </div>
            <button id="drum-piano-switch" className="drum-piano" onClick={this.handleKitSwitchButtonClick}>
              Kit Switch
            </button>
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default DrumMachine;