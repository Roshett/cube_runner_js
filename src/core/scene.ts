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
        // for (let
        //     index = 0; index < 1000; index++) {
        //     let cubes = [];

        //     let cube = cubeBuilder.getCube(-index, -1, 0);
        //     cube.name = `index-cube-${index}`;
        //     cube.x = cube.position.x
        //     cube.y = cube.position.y
        //     cube.z = cube.position.z
        //     cubes.push(cube);
        //     this.add(cube);

        //     // if (index % 5 === 0 && index != 0) {
        //     //     cube = cubeBuilder.getCube(-index, 0, 0);
        //     //     cube.name = `index-cube-${index}`;
        //     //     cube.x = cube.position.x
        //     //     cube.y = cube.position.y
        //     //     cube.z = cube.position.z

        //     //     // cubes.push({ x: cube.position.x, y: cube.position.y, z: cube.position.z, name: cube.name, ...cube});
        //     //     cubes.push(cube);
        //     //     this.add(cube);
        //     // }

        //     this.sceneItems.push(cubes);
        // }

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