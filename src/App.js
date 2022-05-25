
import './App.css';
import React from 'react';


import fart1 from './farts/fart1.mp3';
import fart2 from './farts/fart2.mp3';
import fart3 from './farts/fart3.mp3';
import fart4 from './farts/fart4.mp3';
import fart5 from './farts/fart5.mp3';
import fart6 from './farts/fart6.mp3';
import fart7 from './farts/fart7.mp3';
import fart8 from './farts/fart8.mp3';
import fart9 from './farts/fart9.mp3';

const fartCollection = [
  { sound: fart1, label: 'Q', keyCode: 81, id:'fart1' },
  { sound: fart2, label: 'W', keyCode: 87, id:'fart2' },
  { sound: fart3, label: 'E', keyCode: 69, id:'fart3' },
  { sound: fart4, label: 'A', keyCode: 65, id:'fart4' },
  { sound: fart5, label: 'S', keyCode: 83, id:'fart5' },
  { sound: fart6, label: 'D', keyCode: 68, id:'fart6' },
  { sound: fart7, label: 'Z', keyCode: 90, id:'fart7' },
  { sound: fart8, label: 'X', keyCode: 88, id:'fart8' },
  { sound: fart9, label: 'C', keyCode: 67, id:'fart9' },
];



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      soundObject: {}
    }
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.renderButtonsAndSound = this.renderButtonsAndSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress (e) {
    fartCollection.map((soundObj) => {
      if(e.key.toUpperCase() == soundObj.label){
        this.playSound(soundObj.label);
        this.setState({ soundObject: soundObj });
      }
    })
  }
  
  playSound = (id) => {
    document.getElementById(id).play();
  }

  renderButtonsAndSound = () => {
      return fartCollection.map((soundObj, index) => {

        return (
          <div>
            <button
              id={soundObj.id} 
              className='drum-pad'
              key={index} 
              onClick={() => {
                //Update state with all info about the sound object.
                this.setState(() => ({ soundObject: soundObj }));
                //activate the audio element we're about to create as a child.
                this.playSound(soundObj.label);  
              }}
              >
              {soundObj.label}
              <audio id={soundObj.label} src={soundObj.sound} className='clip'>
              </audio>
            </button>
          </div>
        )
      })
    }
 
  render(){
    return (
      <div className="App" id='drum-machine'>
        <h1 id='display'>{this.state.soundObject.id}</h1>
        {this.renderButtonsAndSound()}
      </div>
    );
  }
}



export default App;
