import * as THREE from "three";
import { SPEED_PLAYER, CAMERA_X, CAMERA_Y, CAMERA_Z } from './constants';

class Camera {
    camera: any;
    moveX: number;
    moveY: number;

    constructor() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.cameraStartPosition();
        this.initKeyInputhanlder();

        this.moveX = 0;
        this.moveY = 0;

        this.camera.counter = { x: 0, y: 0, z: 0, d: 0 };
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
        this.camera.position.x = playerPosition.x + CAMERA_X + this.moveX;
        this.camera.position.y = playerPosition.y + CAMERA_Y + this.moveX;
        this.camera.position.z = playerPosition.z + CAMERA_Z + this.moveY;
        // this.camera.position.z = 0;
        console.log(this.camera.rotation.x, this.camera.rotation.y)
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

    private onDocumentKeyDown = (event: any) => {
        const keyCode = event.which;

        // A
        if (keyCode === 65) {
            this.camera.rotateX(-0.1);
            this.camera.counter.x -= 1;
        }

        // S
        if (keyCode === 83) {
            this.camera.rotateX(0.1);
            this.camera.counter.x += 1;
        }

        // Z
        if (keyCode === 90) {
            this.camera.rotateY(-0.1);
            this.camera.counter.y -= 1;
        }

        // X
        if (keyCode === 88) {
            this.camera.rotateY(0.1);
            this.camera.counter.y += 1;
        }

        // Q
        if (keyCode === 81) {
            this.camera.rotateZ(-0.1);
            this.camera.counter.z -= 1;
        }

        // W
        if (keyCode === 87) {
            this.camera.rotateZ(0.1);
            this.camera.counter.z += 1;
        }

        if (keyCode == 82) {
            this.moveY = -5;
            this.moveX = 2;

            this.camera.rotateY(-5.0);
            this.camera.rotateX(-0.2);
            this.camera.rotateZ(0.4);
            this.camera.rotateX(-0.8);

            // this.camera.rotation.x = -1.4809343758523843;
            // this.camera.rotation.y = 0.5941301587532624;
            // this.camera.rotation.z = 1.4877794132605313;
        }
        // I
        if (keyCode === 73) {
            console.log(this.camera.counter)
            console.log(this.camera.rotation)
        }
    };

    private initKeyInputhanlder = () => {
        document.addEventListener("keydown", this.onDocumentKeyDown, false);
    };
}

export default Camera;