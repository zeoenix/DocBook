import React from 'react';
import { Star, MapPin, IndianRupee, Calendar, GraduationCap, Languages } from 'lucide-react';
import type { Doctor } from '../data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctor: Doctor) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBook }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 mr-1 text-yellow-500" />
            <span>{doctor.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{doctor.name}</h3>
        <p className="text-blue-300">{doctor.specialization}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{doctor.location}</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <GraduationCap className="w-4 h-4 mr-2" />
            <span>{doctor.experience} years exp.</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <IndianRupee className="w-4 h-4 mr-2" />
            <span>₹{doctor.price} Consultation</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{doctor.availability.join(", ")}</span>
          </div>

          <div className="flex items-center text-gray-300">
            <Languages className="w-4 h-4 mr-2" />
            <span>{doctor.languages.join(", ")}</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-white mb-2">Qualifications</h4>
          <div className="flex flex-wrap gap-2">
            {doctor.qualifications.map((qualification, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm"
              >
                {qualification}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => onBook(doctor)}
          className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};