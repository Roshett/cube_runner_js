import * as THREE from "three";

class Scene {
    scene: any;
    sceneItems: Array<any>;

    constructor() {
        this.scene = new THREE.Scene();
        this.sceneItems = [];
    }

    buildPath(cubeBuilder: any) {
        for (let
            index = 0; index < 100; index++) {
            let cubes = [];

            let cube = cubeBuilder.getCube(-index, -1, 0);
            cube.name = `index-cube-${index}`;
            cubes.push({ x: cube.position.x, y: cube.position.y, z: cube.position.z, name: cube.name });
            this.add(cube);

            if (index % 5 === 0 && index != 0) {
                cube = cubeBuilder.getCube(-index, 0, 0);
                cube.name = `index-cube-${index}`;
                cubes.push({ x: cube.position.x, y: cube.position.y, z: cube.position.z, name: cube.name });
                this.add(cube);
            }

            this.sceneItems.push(cubes);
        }
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