import React, { useEffect } from 'react';
import Player from './core/player';
import Camera from './core/camera';
import Scene from './core/scene';
import CubeBuilder from './core/cubeBuilder';
import * as THREE from "three";
import './App.css';

function App() {
  localStorage.setItem('position', JSON.stringify([]));

  useEffect(() => {

    setTimeout(() => {
      let element = document.getElementsByClassName('overlay')[0]
      element.setAttribute("style", "opacity: 1.0;");
    }, 1000)

    setTimeout(() => {
      let element = document.getElementsByClassName('overlay')[0]
      element.setAttribute("style", "opacity: 0;");
    }, 5000)

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

    setInterval(animate, 17);
  });

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
    </div>
  );
}

export default App;