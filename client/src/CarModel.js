import React, { useEffect } from "react";
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Lambo from "./assets/lambo/out.glb";
const CarModel = () => {
  useEffect(() => {
    let container;
    let scene;
    let camera;
    let renderer;
    let controls;
    let car;
    async function init() {
      container = document.querySelector(".scene");
      // create the scene
      scene = new Three.Scene();

      // camera setup
      const fov = 40;
      const aspect = container.clientWidth / container.clientHeight;
      const near = 1;
      const far = 500;

      camera = new Three.PerspectiveCamera(fov, aspect, near, far);
      //   camera.rotateY = (45 / 180) * Math.PI;
      //   camera.rotation.y = (12 / 180) * Math.PI;
      //   camera.rotation.X = (45 / 180) * Math.PI;
      // camera.position.set(800, 100, 1000);
      camera.position.set(5, 3, 1);
      // camera.position.set(xCamera, yCamera, zCamera);

      // light
      const ambient = new Three.AmbientLight(0x404040, 5);
      scene.add(ambient);

      const lightD = new Three.DirectionalLight(0xffffff, 100);
      lightD.position.set(0, 1, 0);
      lightD.castShadow = true;
      scene.add(lightD);

      const lightP1 = new Three.PointLight(0xc4c4c4, 10);
      lightP1.position.set(0, 300, 500);
      scene.add(lightP1);

      const lightP2 = new Three.PointLight(0xc4c4c4, 10);
      lightP1.position.set(500, 100, 0);
      scene.add(lightP2);

      const lightP3 = new Three.PointLight(0xc4c4c4, 10);
      lightP1.position.set(0, 100, -500);
      scene.add(lightP3);

      const lightP4 = new Three.PointLight(0xc4c4c4, 10);
      lightP1.position.set(-540, 300, 0);
      scene.add(lightP4);

      renderer = new Three.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener("change", renderer);

      //   const animate = () => {
      //     renderer.render(scene, camera);
      //     requestAnimationFrame(animate);
      //   };
      // load Module
      let loader = new GLTFLoader();

      //   const gltf = await loader.loadAsync(Lambo);
      loader.load(Lambo, (gltf) => {
        console.log(gltf);
        scene.add(gltf.scene);
        car = gltf.scene.children[0];

        renderer.render(scene, camera);
        animate();
      });
      //   console.log(gltf);
    }
    init();

    function animate() {
      renderer.render(scene, camera);
      //   console.log(car.rotation.z);
      car.rotation.z += 0.005;
      requestAnimationFrame(animate);
    }
    function onWindowResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div className="scene"></div>;
};

export default CarModel;
