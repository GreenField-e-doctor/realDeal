import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './model';

const Human = () => {
  return (
    <div className='bg-gray-400'>
      <Canvas style={{ width: '300px', height: '400px' }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 0, 5]} intensity={1} />
          <OrbitControls />
          <group position={[0, -2, 0]}> {/* Adjust the Y position as needed */}
            <group scale={[3, 3, 3]}>
              <Model />
            </group>
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Human;
