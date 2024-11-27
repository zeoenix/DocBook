import { useState } from 'react';
import { motion } from 'framer-motion';
import { hospitals } from '../data/hospitals';
import { doctors } from '../data/doctors';
import { DoctorCard } from '../components/DoctorCard';
import { BookingModal } from '../components/BookingModal';
import { AuthModal } from '../components/AuthModal';
import type { Doctor } from '../data/doctors';
import type { Hospital } from '../data/hospitals';

export function BookAppointment() {
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = localStorage.getItem('user');
    return !!user;
  });
  const [isGuest, setIsGuest] = useState(false);

  const filteredDoctors = selectedHospital
    ? doctors.filter(doctor => doctor.hospitalId === selectedHospital.id)
    : doctors;

  const handleBooking = (doctor: Doctor) => {
    if (!isAuthenticated && !isGuest) {
      setShowAuth(true);
      setSelectedDoctor(doctor);
    } else {
      setSelectedDoctor(doctor);
    }
  };

  const handleAuthSuccess = (isGuestBooking?: boolean) => {
    if (isGuestBooking) {
      setIsGuest(true);
    } else {
      setIsAuthenticated(true);
    }
    setShowAuth(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen pt-20 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Book an Appointment</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Select Hospital</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedHospital(null)}
              className={`px-4 py-2 rounded-full ${
                !selectedHospital
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              All Hospitals
            </button>
            {hospitals.map((hospital) => (
              <button
                key={hospital.id}
                onClick={() => setSelectedHospital(hospital)}
                className={`px-4 py-2 rounded-full ${
                  selectedHospital?.id === hospital.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {hospital.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={handleBooking}
            />
          ))}
        </div>

        {showAuth && (
          <AuthModal
            onClose={() => {
              setShowAuth(false);
              setSelectedDoctor(null);
            }}
            onSuccess={handleAuthSuccess}
          />
        )}

        {selectedDoctor && (isAuthenticated || isGuest) && (
          <BookingModal
            doctor={selectedDoctor}
            onClose={() => setSelectedDoctor(null)}
            isGuest={isGuest}
          />
        )}
      </div>
    </motion.div>
  );
}