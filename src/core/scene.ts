import * as THREE from "three";
import levelJSON from "./levels/neffexrusmors.json";

class Scene {
    scene: any;
    sceneItems: Array<any>;

    constructor() {
        this.scene = new THREE.Scene();
        this.sceneItems = [];
    }

    buildPath(cubeBuilder: any) {
        let level = levelJSON;
        level.forEach((item, index) => {
            let cubes = [];

            let cube = cubeBuilder.getCube(item.x, item.y, item.z);
            cube.name = `index-cube-${index}`;

            cube.x = cube.position.x
            cube.y = cube.position.y
            cube.z = cube.position.z
            
            cubes.push(cube);
            this.add(cube);
            this.sceneItems.push(cubes);
        })

    };

    add(body: any) {
        this.scene.add(body);
    };

    getScene() {
        return this.scene;
    };

    getSceneItems() {
        return this.sceneItems;
    }
}

export default Scene;