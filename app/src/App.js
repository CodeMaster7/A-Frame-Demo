import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

class App extends Component {

  render() {
    return (
      <Scene>

        <Entity primitive="a-sky" src="https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/"  />


        <Entity particle-system={{preset: 'snow', particleCount: 8000, color: "blue"}}/>
     

        <Entity primitive='a-box' color="blue" position="12 0 -5"/>
        <Entity primitive='a-sphere' color="green" position="1 0 -10"/>
        <Entity primitive='a-cylinder' color="purple" position="12 1.5 -5" rotation="90 90 180"/>


        <Entity primitive="a-camera">
        <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
      </Entity>

      </Scene>
    );
  }
}

export default App;
