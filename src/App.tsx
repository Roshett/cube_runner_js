import React, { useEffect } from 'react';
import Player from './core/player';
import Camera from './core/camera';
import Scene from './core/scene';
import CubeBuilder from './core/cubeBuilder';
import * as THREE from "three";
import './App.css';

function App() {

  useEffect(() => {
    const scene = new Scene().scene;
    const camera = new Camera().camera;
    const renderer = new THREE.WebGLRenderer( { antialias: true } );

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let cubeBuilder = new CubeBuilder();
    let player = new Player(cubeBuilder);
    scene.add(player.body);

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  });

  return (
    <div></div>
  );
}

export default App;
