import * as THREE from "three";

class Camera {
    camera: any;

    constructor() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.cameraStartPosition();
    }

    cameraStartPosition = () => {
        this.camera.position.z = 5;
        this.camera.position.y = 2.5;
        this.camera.position.x = 1.5;

        this.camera.rotateX(-0.4);
        this.camera.rotateY(0.2);
    };
}

export default Camera;