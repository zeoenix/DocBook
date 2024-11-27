import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Vector3 } from 'three';

function NeuronPoints() {
  const ref = useRef<any>();
  const count = 2000;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  // Initialize positions and velocities
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (Math.random() - 0.5) * 3;
    positions[i + 1] = (Math.random() - 0.5) * 3;
    positions[i + 2] = (Math.random() - 0.5) * 3;

    velocities[i] = (Math.random() - 0.5) * 0.005;
    velocities[i + 1] = (Math.random() - 0.5) * 0.005;
    velocities[i + 2] = (Math.random() - 0.5) * 0.005;
  }

  useFrame((_state, delta) => {
    if (!ref.current) return;

    const positions = ref.current.geometry.attributes.position.array;
    
    // Update positions based on velocities
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += velocities[i] * delta * 50;
      positions[i + 1] += velocities[i + 1] * delta * 50;
      positions[i + 2] += velocities[i + 2] * delta * 50;

      // Bounce off boundaries
      if (Math.abs(positions[i]) > 1.5) velocities[i] *= -1;
      if (Math.abs(positions[i + 1]) > 1.5) velocities[i + 1] *= -1;
      if (Math.abs(positions[i + 2]) > 1.5) velocities[i + 2] *= -1;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#88ccff"
        size={0.004}
        sizeAttenuation={true}
        depthWrite={false}
        blending={2}
      />
    </Points>
  );
}

function NeuronConnections() {
  const ref = useRef<any>();
  const lineCount = 100;
  const positions = new Float32Array(lineCount * 6); // 2 points per line, 3 coordinates per point

  for (let i = 0; i < positions.length; i += 6) {
    const p1 = new Vector3(
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3
    );
    const p2 = new Vector3(
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3
    );

    positions[i] = p1.x;
    positions[i + 1] = p1.y;
    positions[i + 2] = p1.z;
    positions[i + 3] = p2.x;
    positions[i + 4] = p2.y;
    positions[i + 5] = p2.z;
  }

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.1;
    ref.current.rotation.y += delta * 0.15;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#4488ff" opacity={0.3} transparent />
    </lineSegments>
  );
}

export function Background() {
  return (
    <div className="fixed inset-0 bg-[#000308]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <NeuronPoints />
        <NeuronConnections />
        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}