// 3DModelViewer.js

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { MeshBasicMaterial, BoxGeometry } from 'three';

function ColoredCube() {
  const meshRef = useRef();

  // Automatic rotation using useFrame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  // Define materials with different colors for each face
  const faceMaterials = [
    new MeshBasicMaterial({ color: 'red' }),    // Front face
    new MeshBasicMaterial({ color: 'green' }),  // Back face
    new MeshBasicMaterial({ color: 'blue' }),   // Top face
    new MeshBasicMaterial({ color: 'yellow' }), // Bottom face
    new MeshBasicMaterial({ color: 'orange' }), // Left face
    new MeshBasicMaterial({ color: 'purple' })  // Right face
  ];

  return (
    <mesh ref={meshRef} geometry={new BoxGeometry(1, 1, 1)}>
      {faceMaterials.map((material, index) => (
        <primitive key={index} object={material} attach={`material-${index}`} />
      ))}
    </mesh>
  );
}

function Viewer() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 85 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Use the Grid component instead of GridHelper */}
      {/* <Grid args={[50, 50]} /> */}

      {/* Render Colored Cube with automatic rotation */}
      <ColoredCube />

      <OrbitControls />
    </Canvas>
  );
}

export default Viewer;
