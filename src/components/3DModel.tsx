import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Hospital() {
  return (
    <group>
      {/* Main building */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 3, 2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[4.4, 0.4, 2.4]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      
      {/* Entrance */}
      <mesh position={[0, -1, 1.1]}>
        <boxGeometry args={[1.5, 1, 0.2]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Windows */}
      {[-1.2, 0, 1.2].map((x, i) => (
        <mesh key={i} position={[x, 0.2, 1.1]}>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#93c5fd" />
        </mesh>
      ))}
      
      {/* Hospital Sign */}
      <mesh position={[0, 1, 1.1]}>
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
    </group>
  );
}

export const HospitalModel: React.FC = () => {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
      <Canvas
        camera={{ position: [6, 4, 8], fov: 45 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
        />
        <Hospital />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};