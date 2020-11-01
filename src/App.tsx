import React, { useEffect } from 'react';
import Player from './core/player';
import Camera from './core/camera';
import Scene from './core/scene';
import CubeBuilder from './core/cubeBuilder';
import * as THREE from "three";
import './App.css';

const scene = new Scene();
const camera = new Camera();
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cubeBuilder = new CubeBuilder();
let player = new Player(cubeBuilder, scene.getSceneItems());
scene.add(player.body);
scene.buildPath(cubeBuilder);

const animate = function () {
  let pos = player.move();
  camera.move(player.getPosition());
  renderer.render(scene.getScene(), camera.getCamera());
};

const play = () => {
  setMusicTitle();
  camera.playAudio();
  setInterval(animate, 17);
}

function App() {
  localStorage.setItem('position', JSON.stringify([]));

  return (
    <div className="overlay">
      <div className="song">
        <div className="song-bg"></div>
        <div className="group-name">
          NEFFEX
      </div>
        <div className="song-name">
          Rusmors
      </div>

      </div>

      <div className="controls">
        <button onClick={() => play()}>Play</button>
      </div>
    </div>
  );
}

function setMusicTitle() {
  let controls = document.getElementsByClassName('controls')[0]
  controls.setAttribute("style", "display: none;");


  setTimeout(() => {
    let element = document.getElementsByClassName('song')[0]
    element.setAttribute("style", "opacity: 1.0;");
  }, 1000)

  setTimeout(() => {
    let element = document.getElementsByClassName('song')[0]
    element.setAttribute("style", "opacity: 0;");
  }, 5000)
}

export default App;