import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Environment } from '@react-three/drei';
import { MedicalModel } from '../components/MedicalModel';
import { HospitalCard } from '../components/HospitalCard';
import { Chatbot } from '../components/Chatbot/Chatbot';
import { hospitals } from '../data/hospitals';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-16"
    >
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <group position={[0, -0.75, 0]}>
                <MedicalModel />
              </group>
            </PresentationControls>
            <Environment preset="city" />
          </Canvas>
        </div>

        <div className="relative z-10 text-center text-white px-4 mt-[-10vh]">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Your Health, Our Priority
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Connect with top healthcare providers in Delhi. Book appointments
            instantly and get the care you deserve.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl sm:text-3xl font-bold text-white text-center mb-12"
        >
          Leading Healthcare Providers
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hospitals.map((hospital, index) => (
            <motion.div
              key={hospital.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <HospitalCard hospital={hospital} />
            </motion.div>
          ))}
        </div>
      </section>

      <Chatbot />
    </motion.div>
  );
}