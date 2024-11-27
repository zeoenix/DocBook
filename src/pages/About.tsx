import { motion } from 'framer-motion';
import { Shield, Users, Clock, Award, Building2, Stethoscope, Heart, Trophy } from 'lucide-react';
import { HospitalModel } from '../components/3DModel';

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold mb-6"
          >
            About DocBook India
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Revolutionizing healthcare access in India through technology and innovation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Capstone Project</h2>
            <p className="text-gray-300 mb-6">
              Purpose of making: This website I designed for college Capstone Project called DocBook India,
              It's a Prototype website launching it to online, we are not responsible for any activity, we're committed to making quality healthcare accessible to everyone. 
              Our platform connects patients with the best healthcare providers across the country, 
              ensuring timely and efficient medical care.
            </p>
            <div className="space-y-4">
              {[
                { icon: Shield, text: "Indian Institute of Technology, Patna" },
                { icon: Clock, text: "Time is equal to money "},
                { icon: Users, text: "By Team 31" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <HospitalModel />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { icon: Building2, number: "500+", label: "Partner Hospitals" },
            { icon: Stethoscope, number: "10,000+", label: "Qualified Doctors" },
            { icon: Heart, number: "1M+", label: "Happy Patients" },
            { icon: Trophy, number: "50+", label: "Cities Covered" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8">
            <Award className="w-12 h-12 text-yellow-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
            <p className="text-gray-300">
              All healthcare providers on our platform are thoroughly verified and credentialed
              to ensure the highest standards of medical care.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8">
            <Clock className="w-12 h-12 text-green-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">Instant Booking</h3>
            <p className="text-gray-300">
              Book appointments instantly with your preferred doctors and specialists,
              saving time and ensuring prompt medical attention.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8">
            <Shield className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">Secure Platform</h3>
            <p className="text-gray-300">
              Your health data and personal information are protected with enterprise-grade
              security measures and encryption.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "AIIMS Delhi",
              "Apollo Hospitals",
              "Max Healthcare",
              "Fortis Healthcare"
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 flex items-center justify-center"
              >
                <span className="text-xl font-semibold text-gray-300">{partner}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}