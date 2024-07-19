import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';



const InteractiveSphere = ({ containerWidth, containerHeight,image }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(5, 32, 32);

    // Load texture (icon)
    const loader = new THREE.TextureLoader();
    const texture = loader.load(image); // Replace with your icon path
    texture.mapping = THREE.SphericalReflectionMapping;
    // Sphere material
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      // transparent: true,
      // opacity: 1,
      // blending: THREE.NormalBlending,
      // color: 0x000000
    });
    // material.opacity = 0.7; 
// material.blending = THREE.NormalBlending;

// Optionally, you can manipulate the color of the material
// material.color.set(0x000000)
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
 // Set initial rotation (90 degrees around X-axis)
 sphere.rotation.set(1.2525166153354188, -1.4499792451487685, 1.033366029591594);
 // Position the camera
//  camera.position.set(0, 0, 20);

 // Make the sphere look at the camera
//  sphere.lookAt(camera.position);
    camera.position.z = 20;
    // sphere.rotation.set(Math.PI / 2, Math.PI/1.4, Math.PI / 2);

    // Mouse control variables
    let isDragging = false;
    let previousMousePosition = {
      x: 0,
      y: 0,
    };
    let velocity = {
      x: 0,
      y: 0,
    };
    const friction = 0.95;

    const toRadians = (angle) => {
      return angle * (Math.PI / 180);
    };

    const onMouseDown = (event) => {
      isDragging = true;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (event) => {
      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      if (isDragging) {
console.log( sphere.rotation)

        const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            toRadians(deltaMove.y * 1),
            toRadians(deltaMove.x * 1),
            0,
            'XYZ'
          )
        );

        sphere.quaternion.multiplyQuaternions(deltaRotationQuaternion, sphere.quaternion);

        // Store the velocity for inertia effect
        velocity.x = deltaMove.x;
        velocity.y = deltaMove.y;
      }

      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };
    const applyInertia = () => {
      if (!isDragging) {
        // Apply friction to reduce velocity over time
        velocity.x *= friction;
        velocity.y *= friction;

        const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            toRadians(velocity.y * 1),
            toRadians(velocity.x * 1),
            0,
            'XYZ'
          )
        );

        sphere.quaternion.multiplyQuaternions(deltaRotationQuaternion, sphere.quaternion);
      }
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      applyInertia();
      renderer.render(scene, camera);
    };

    animate();

    // Event listener for window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [containerWidth, containerHeight]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%', display:"flex",justifyContent:"center",backgroundColor:"transparent" }}/>;
};

export default InteractiveSphere;
