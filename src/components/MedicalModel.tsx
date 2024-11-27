import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial, Group } from 'three';
import { motion } from 'framer-motion-3d';

function Heart() {
  const heartRef = useRef<Group>();
  const [heartVisible, setHeartVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartVisible(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (heartRef.current) {
      heartRef.current.rotation.y = Math.sin(state.clock.elapsedTime / 2) * 0.2;
      const baseScale = heartVisible ? 1 : 0;
      const pulseScale = Math.sin(state.clock.elapsedTime * 4) * 0.04;
      const scale = baseScale + pulseScale;
      heartRef.current.scale.set(scale, scale, scale);
    }
  });

  const material = new MeshStandardMaterial({
    color: "#ef4444",
    metalness: 0.4,
    roughness: 0.3,
    transparent: true,
    opacity: heartVisible ? 1 : 0,
  });

  return (
    <motion.group
      ref={heartRef as any}
      initial={{ scale: 0 }}
      animate={{ scale: heartVisible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      position={[0, 0.5, 0]}
    >
      {/* Main chambers */}
      <mesh material={material}>
        <sphereGeometry args={[0.8, 32, 32]} />
      </mesh>
      
      <mesh position={[0.4, 0.2, 0]} material={material}>
        <sphereGeometry args={[0.6, 32, 32]} />
      </mesh>

      {/* Aorta */}
      <motion.mesh
        position={[0, 1.2, 0]}
        material={material}
        animate={{ scaleY: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <cylinderGeometry args={[0.25, 0.2, 0.8, 16]} />
      </motion.mesh>

      {/* Arteries */}
      {[45, 90, 135].map((angle, i) => (
        <motion.group key={i} position={[0, 1.2, 0]}>
          <motion.mesh
            position={[
              0.6 * Math.cos((angle * Math.PI) / 180),
              0.3,
              0.6 * Math.sin((angle * Math.PI) / 180)
            ]}
            rotation={[0, (angle * Math.PI) / 180, 0]}
            material={material}
            animate={{ 
              scaleX: [1, 1.1, 1],
              scaleY: [1, 1.05, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2
            }}
          >
            <cylinderGeometry args={[0.15, 0.1, 0.8, 12]} />
          </motion.mesh>
        </motion.group>
      ))}

      {/* Veins */}
      {[-60, -30, 0, 30, 60].map((angle, i) => (
        <motion.mesh
          key={`vein-${i}`}
          position={[
            0.9 * Math.cos((angle * Math.PI) / 180),
            -0.3,
            0.9 * Math.sin((angle * Math.PI) / 180)
          ]}
          rotation={[0, (angle * Math.PI) / 180, Math.PI / 4]}
          material={material}
          animate={{ 
            scaleY: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3
          }}
        >
          <cylinderGeometry args={[0.08, 0.05, 0.6, 8]} />
        </motion.mesh>
      ))}
    </motion.group>
  );
}

function Stethoscope() {
  const ref = useRef<Group>();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime / 2) * 0.3;
    }
  });

  const material = new MeshStandardMaterial({
    color: "#2563eb",
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: visible ? 1 : 0,
  });

  const tubeMaterial = new MeshStandardMaterial({
    color: "#1d4ed8",
    metalness: 0.7,
    roughness: 0.3,
    transparent: true,
    opacity: visible ? 0.9 : 0,
  });

  return (
    <motion.group
      ref={ref as any}
      initial={{ scale: 0 }}
      animate={{ scale: visible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      position={[0, -0.5, 0]}
    >
      {/* Chest piece */}
      <group position={[0, -1, 0]}>
        <mesh material={material}>
          <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
        </mesh>
        <mesh position={[0, 0.1, 0]} material={material}>
          <cylinderGeometry args={[0.4, 0.6, 0.1, 32]} />
        </mesh>
        <mesh position={[0, 0.2, 0]} material={material}>
          <cylinderGeometry args={[0.2, 0.4, 0.1, 32]} />
        </mesh>
      </group>

      {/* Main tube */}
      <mesh position={[0, -0.5, 0]} material={tubeMaterial}>
        <cylinderGeometry args={[0.08, 0.08, 1, 16]} />
      </mesh>

      {/* Flexible tubing */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 23) * Math.PI;
        const radius = 0.8;
        const x = Math.sin(angle) * radius;
        const y = Math.cos(angle) * radius + 0.5;
        return (
          <group key={i}>
            <mesh position={[x, y, 0]} material={tubeMaterial}>
              <cylinderGeometry args={[0.06, 0.06, 0.2, 12]} />
            </mesh>
            <mesh 
              position={[x, y, 0]} 
              rotation={[0, 0, angle]}
              material={tubeMaterial}
            >
              <cylinderGeometry args={[0.06, 0.06, 0.2, 12]} />
            </mesh>
          </group>
        );
      })}

      {/* Ear tubes */}
      {[-0.4, 0.4].map((x) => (
        <group key={x}>
          <mesh position={[x, 1.8, 0]} material={material}>
            <cylinderGeometry args={[0.04, 0.04, 0.5, 12]} />
          </mesh>
          <mesh position={[x, 2.1, 0]} rotation={[0, 0, Math.PI / 4]} material={material}>
            <cylinderGeometry args={[0.04, 0.04, 0.3, 12]} />
          </mesh>
          <mesh position={[x * 1.2, 2.2, 0]} material={material}>
            <sphereGeometry args={[0.12, 16, 16]} />
          </mesh>
        </group>
      ))}
    </motion.group>
  );
}

export function MedicalModel() {
  return (
    <group>
      <Heart />
      <Stethoscope />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </group>
  );
}