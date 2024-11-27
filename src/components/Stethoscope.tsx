import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

export function Stethoscope(props: any) {
  const ref = useRef<any>();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime / 2) * 0.3;
    }
  });

  const material = new MeshStandardMaterial({
    color: "#2563eb",
    metalness: 0.8,
    roughness: 0.2,
  });

  return (
    <group ref={ref} {...props}>
      {/* Chest piece (diaphragm) */}
      <mesh position={[0, -1, 0]} material={material}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, -0.5, 0]} material={material}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
      </mesh>

      {/* Tubing (main) */}
      <group position={[0, 0.5, 0]}>
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 19) * Math.PI;
          const x = Math.sin(angle) * 0.5;
          const y = Math.cos(angle) * 0.5;
          return (
            <mesh key={i} position={[x, y, 0]} material={material}>
              <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
              <mesh rotation={[0, 0, angle]}>
                <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
              </mesh>
            </mesh>
          );
        })}
      </group>

      {/* Ear tubes */}
      <group position={[0, 1.5, 0]}>
        {[-0.3, 0.3].map((x) => (
          <mesh key={x} position={[x, 0, 0]} material={material}>
            <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
          </mesh>
        ))}
      </group>

      {/* Ear tips */}
      <group position={[0, 1.5, 0]}>
        {[-0.3, 0.3].map((x) => (
          <mesh key={x} position={[x, 0.2, 0]} material={material}>
            <sphereGeometry args={[0.1, 16, 16]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}