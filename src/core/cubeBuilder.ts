import * as THREE from "three";
import Colors from "./interfaces/colors";

class CubeBuilder {
    loader: any;
    colors: Colors;
    geometry: any;

    constructor() {
        this.loader = new THREE.TextureLoader();

        this.colors = {
            WHITE: new THREE.MeshBasicMaterial({
                map: this.loader.load('http://localhost:3000/img/cube_white.png'),
            }),

            RED: new THREE.MeshBasicMaterial({
                map: this.loader.load('http://localhost:3000/img/cube_red.png'),
            }),

            GREEN: new THREE.MeshBasicMaterial({
                map: this.loader.load('http://localhost:3000/img/cube_green.png'),
            }),

            YELLOW: new THREE.MeshBasicMaterial({
                map: this.loader.load('http://localhost:3000/img/cube_yellow.png'),
            }),

            PURPLE: new THREE.MeshBasicMaterial({
                map: this.loader.load('http://localhost:3000/img/cube_purple.png'),
            }),

            BLUE: new THREE.MeshBasicMaterial({
                map: this.loader.load('http://localhost:3000/img/cube_blue.png'),
            }),
        }

        this.geometry = new THREE.BoxGeometry(1, 1, 1);
    }

    getCube(x : number = 0, y: number = 0, z:number = 0) {
        let cube = new THREE.Mesh(this.geometry, this.colors.WHITE);

        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;

        return cube;
    };

    getColors() {
        return this.colors;
    };
}

export default CubeBuilder;