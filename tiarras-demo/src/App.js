import React, { Component } from 'react';
import './App.css';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import mars2 from './mars2.jpeg';
import ReactDOM from 'react-dom';


class App extends Component {

  render() {
    return (
      <div>
        <a-scene>
          <Entity primitive="a-sky" src={mars2}/>
          <Entity primitive='a-box' height="12" width="3" depth="5" color="#333130" position="-120 0 -30" />
          <Entity particle-system={{preset: 'dust', particleCount: 8000, color: '#844c35'}}/>
          <Entity text={{value: "Ominously floating text", lineHeight: '50', color: "white"}} position={{x:0, y:2, z:-1}}
          ></Entity>
        </a-scene>
      </div>
    );
  }
}

export default App;
