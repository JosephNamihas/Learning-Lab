// // Import the necessary modules: React and THREE.
// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";


// // Define a functional component named ThreeShapes.
// // Use the useRef() hook to create a reference to the container element.
// const ThreeShapes = () => {
//   const mount = useRef(null);
  
// // Use the useEffect() hook to initialize the scene, camera, and renderer.
//   useEffect(() => {
//     // Create a scene, camera, and renderer using THREE.
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
// // Set the size of the renderer to match the dimensions of the container element.
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mount.current.appendChild(renderer.domElement); // Check if mount.current is not null before calling appendChild

// // Create a cube using BoxGeometry and MeshBasicMaterial and add it to the scene.
//     const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
//     const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//     cube.position.set(-2.5, 0, 0);
//     scene.add(cube);

// // Create a sphere using SphereGeometry and MeshBasicMaterial and add it to the scene.
//     const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
//     const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//     const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//     sphere.position.set(-1.5, 0, 0);
//     scene.add(sphere);

//     // Create a cylinder using CylinderGeometry and MeshBasicMaterial and add it to the scene.
//     const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
//     const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
//     const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
//     cylinder.position.set(-0.5, 0, 0);
//     scene.add(cylinder);

// // Create a cone using ConeGeometry and MeshBasicMaterial and add it to the scene.
//     const coneGeometry = new THREE.ConeGeometry(0.5, 1, 32);
//     const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
//     const cone = new THREE.Mesh(coneGeometry, coneMaterial);
//     cone.position.set(0.5, 0, 0);
//     scene.add(cone);

// // Create a torus using TorusGeometry and MeshBasicMaterial and add it to the scene.
//     const torusGeometry = new THREE.TorusGeometry(0.5, 0.1, 16, 100);
//     const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//     const torus = new THREE.Mesh(torusGeometry, torusMaterial);
//     torus.position.set(1.5, 0, 0);
//     scene.add(torus);

//     // Position camera
//     camera.position.z = 2;

// // Define a renderScene() function that renders the scene and camera using the renderer.
//     const renderScene = () => {
//       renderer.render(scene, camera);
//     };
// // Define an animateScene() function that updates the rotation of each object and calls renderScene() to render the scene.
//     const animateScene = () => {
//       requestAnimationFrame(animateScene);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       sphere.rotation.x += 0.01;
//       sphere.rotation.y += 0.01;
//       cylinder.rotation.x += 0.01;
//       cylinder.rotation.y += 0.01;
//       cone.rotation.x += 0.01;
//       cone.rotation.y += 0.01;
//       torus.rotation.x += 0.01;
//       torus.rotation.y += 0.01;
//       renderScene();
//     };
// // Call animateScene() to start the animation loop.
//     animateScene();
//   }, []);
// // Return a div with the ref set to the container element.
//   return <div ref={mount} />;
// };

// export default ThreeShapes;

// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const ThreeShapes = () => {
//   const mount = useRef(null);

//   useEffect(() => {
//     // Create scene, camera and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mount.current.appendChild(renderer.domElement); // Check if mount.current is not null before calling appendChild

//     // Cube
//     const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
//     const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//     cube.position.set(-2.5, 0, 0);
//     scene.add(cube);

//     // Sphere
//     const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
//     const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//     const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//     sphere.position.set(-1.5, 0, 0);
//     scene.add(sphere);

//     // Cylinder
//     const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
//     const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
//     const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
//     cylinder.position.set(-0.5, 0, 0);
//     scene.add(cylinder);

//     // Cone
//     const coneGeometry = new THREE.ConeGeometry(0.5, 1, 32);
//     const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
//     const cone = new THREE.Mesh(coneGeometry, coneMaterial);
//     cone.position.set(0.5, 0, 0);
//     scene.add(cone);

//     // Torus
//     const torusGeometry = new THREE.TorusGeometry(0.5, 0.1, 16, 100);
//     const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//     const torus = new THREE.Mesh(torusGeometry, torusMaterial);
//     torus.position.set(1.5, 0, 0);
//     scene.add(torus);

//     // Position camera
//     camera.position.z = 2;

//     // Render scene
//     const renderScene = () => {
//       renderer.render(scene, camera);
//     };

//     // Animate scene
//     const animateScene = () => {
//       requestAnimationFrame(animateScene);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       sphere.rotation.x += 0.01;
//       sphere.rotation.y += 0.01;
//       cylinder.rotation.x += 0.01;
//       cylinder.rotation.y += 0.01;
//       cone.rotation.x += 0.01;
//       cone.rotation.y += 0.01;
//       torus.rotation.x += 0.01;
//       torus.rotation.y += 0.01;
//       renderScene();
//     };

//     animateScene();
//   }, []);

//   return (
//     <div ref={mount} />
//   );
// };

// export default ThreeShapes;

// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const ThreeShapes = () => {
//   const mount = useRef(null);

//   useEffect(() => {
//     // Create scene, camera and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mount.current.appendChild(renderer.domElement); // Check if mount.current is not null before calling appendChild

//     // Cube
//     const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
//     const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//     cube.position.set(-2.5, 0, 0);
//     scene.add(cube);

//     // Sphere
//     const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
//     const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//     const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//     sphere.position.set(-1.5, 0, 0);
//     scene.add(sphere);

//     // Cylinder
//     const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
//     const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
//     const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
//     cylinder.position.set(-0.5, 0, 0);
//     scene.add(cylinder);

//     // Cone
//     const coneGeometry = new THREE.ConeGeometry(0.5, 1, 32);
//     const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
//     const cone = new THREE.Mesh(coneGeometry, coneMaterial);
//     cone.position.set(0.5, 0, 0);
//     scene.add(cone);

//     // Torus
//     const torusGeometry = new THREE.TorusGeometry(0.5, 0.1, 16, 100);
//     const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//     const torus = new THREE.Mesh(torusGeometry, torusMaterial);
//     torus.position.set(1.5, 0, 0);
//     scene.add(torus);

//     // Position camera
//     camera.position.z = 2;

//     // Render scene
//     const renderScene = () => {
//       renderer.render(scene, camera);
//     };

//     // Animate scene
//     const animateScene = () => {
//       requestAnimationFrame(animateScene);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       sphere.rotation.x += 0.01;
//       sphere.rotation.y += 0.01;
//       cylinder.rotation.x += 0.01;
//       cylinder.rotation.y += 0.01;
//       cone.rotation.x += 0.01;
//       cone.rotation.y += 0.01;
//       torus.rotation.x += 0.01;
//       torus.rotation.y += 0.01;
//       renderScene();
//     };

//     animateScene();
//   }, []);

//   return (
// <div className="col-md-6">
// <div style={{ width: "100%", height: "100vh" }} ref={mount}></div>
// </div>
// );
// };

// export default ThreeShapes;

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeShapes = () => {
  const mount = useRef(null);

  useEffect(() => {
    // Create scene, camera and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 200, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(600, 200);
    mount.current.appendChild(renderer.domElement); // Check if mount.current is not null before calling appendChild

    // Cube
    const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-2.5, 0, 0);
    scene.add(cube);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(-1.5, 0, 0);
    scene.add(sphere);

    // Cylinder
    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.set(-0.5, 0, 0);
    scene.add(cylinder);

    // Cone
    const coneGeometry = new THREE.ConeGeometry(0.5, 1, 32);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    cone.position.set(0.5, 0, 0);
    scene.add(cone);

    // Torus
    const torusGeometry = new THREE.TorusGeometry(0.5, 0.1, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(1.5, 0, 0);
    scene.add(torus);

    // Position camera
    camera.position.z = 2;

    // Render scene
    const renderScene = () => {
      renderer.render(scene, camera);
    };

    // Animate scene
    const animateScene = () => {
      requestAnimationFrame(animateScene);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      cylinder.rotation.x += 0.01;
      cylinder.rotation.y += 0.01;
      cone.rotation.x += 0.01;
      cone.rotation.y += 0.01;
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderScene();
    };

    animateScene();
  }, []);

return (
    <div style={{ width: "600px", height: "200px" }}>
        <div ref={mount} style={{ width: "100%", height: "100%" }} />
    </div>
);

};

export default ThreeShapes;