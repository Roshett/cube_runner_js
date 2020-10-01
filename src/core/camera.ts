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
}

export default Camera;