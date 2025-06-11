// PlyViewer.js
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

function PlyModel({ url }) {
  const geometry = useLoader(PLYLoader, url);

  geometry.computeVertexNormals();
  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
  });

  return <mesh geometry={geometry} material={material} />;
}

export default function PlyViewer({ plyUrl }) {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <gridHelper args={[10, 10, "black", "black"]} position={[0, -1, 0]} />

      <Suspense fallback={null}>
        <PlyModel url={plyUrl} />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}
