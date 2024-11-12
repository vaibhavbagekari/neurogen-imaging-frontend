// 3DModelViewer.js

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import './demo.css'; // Import your custom CSS file

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.5} />;
}

function ModelViewer({ path, fov ,x,y,z}) {
  return (
    <div className="canvas-container"> {/* Container with custom CSS styling */}
      <Canvas
        camera={{ position: [x || 0, y || 0,z || 400], fov: fov || 85 }}
        shadows
        style={{ borderRadius: '15px' }} // Rounded canvas border
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Optional Environment to improve lighting effects */}
        <Environment preset="city" />
        
        {/* Adding contact shadows to ground the model visually */}
        <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={10} blur={1.5} />

        <Model modelPath={path} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
