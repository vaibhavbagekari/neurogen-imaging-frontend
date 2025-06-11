// PLYModelViewerRemote.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const PLYModelViewer = ({ fileUrl }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const loader = new PLYLoader();

    loader.load(
      fileUrl,
      (geometry) => {
        geometry.computeVertexNormals();

        const material = new THREE.PointsMaterial({
          size: 0.005,
          vertexColors: geometry.hasAttribute('color'),
        });

        const mesh = new THREE.Points(geometry, material);
        mesh.scale.set(1500, 1500, 1500);
        scene.add(mesh);
      },
      undefined,
      (err) => {
        console.error("PLY loading error:", err);
      }
    );

    camera.position.z = 1.5;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, [fileUrl]);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default PLYModelViewer;
