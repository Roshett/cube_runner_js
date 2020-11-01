import * as THREE from "three";
import { SPEED_PLAYER, CAMERA_X, CAMERA_Y, CAMERA_Z } from './constants';

class Camera {
    camera: any;

    constructor() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.cameraStartPosition();
    }

    cameraStartPosition = () => {

        this.camera.position.x = CAMERA_X;
        this.camera.position.y = CAMERA_Y;
        this.camera.position.z = CAMERA_Z;

        this.camera.rotateX(-0.4);
        this.camera.rotateY(0.2);
    };

    getCamera() {
        return this.camera;
    };

    move(playerPosition: any) {
        this.camera.position.x = playerPosition.x + CAMERA_X;
        this.camera.position.y = playerPosition.y + CAMERA_Y;
        this.camera.position.z = playerPosition.z + CAMERA_Z;
    };

    playAudio() {
        const listener = new THREE.AudioListener();
        this.camera.add(listener);
        const sound = new THREE.Audio(listener);
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load('http://localhost:3000/music/Neffex-Rumors.mp3', function (buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(false);
            sound.setVolume(1);
            sound.play();
        });
    }
}

export default Camera;