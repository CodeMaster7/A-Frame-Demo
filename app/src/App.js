import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';

class App extends Component {

  render() {
    return (
      <Scene>
        <a-assets>
          <img id="skyTexture" src="https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/"/>
        </a-assets>

        {/* Adding background image */}
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture"  width="2048"/>

        {/* Adding snow */}
        {/* <Entity particle-system={{preset: 'snow', particleCount: 8000}}/> */}

        {/* Adding text*/}
        <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>


        <Entity primitive='a-box' color="red" position="0 0 -5"/>
        <Entity primitive='a-sphere' color="green" position="-2 0 -3"/>
        <Entity primitive='a-cylinder' color="blue" position="2 0 -3"/>

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>

      </Scene>
    );
  }
}

export default App;
