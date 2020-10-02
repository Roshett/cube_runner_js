import React, { useEffect } from 'react';
import Player from './core/player';
import Camera from './core/camera';
import Scene from './core/scene';
import CubeBuilder from './core/cubeBuilder';
import * as THREE from "three";
import './App.css';

function App() {

  useEffect(() => {
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
      player.move();
      camera.move(player.getPosition());
      renderer.render(scene.getScene(), camera.getCamera());
      // requestAnimationFrame(animate);
    };

    setInterval(animate, 17);
    // animate();
  });

  return (
    <div></div>
  );
}

export default App;