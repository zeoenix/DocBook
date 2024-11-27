import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Star, Users, MapPin, Phone, Calendar } from 'lucide-react';
import type { Hospital } from '../data/hospitals';

interface HospitalCardProps {
  hospital: Hospital;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'government':
        return 'bg-green-900/50 text-green-200';
      case 'private':
        return 'bg-blue-900/50 text-blue-200';
      case 'clinic':
        return 'bg-purple-900/50 text-purple-200';
      default:
        return 'bg-gray-900/50 text-gray-200';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="relative">
        <img 
          src={hospital.image} 
          alt={hospital.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(hospital.type)}`}>
            {hospital.type.charAt(0).toUpperCase() + hospital.type.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{hospital.name}</h3>
          <div className="flex items-center text-white">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span>{hospital.rating}</span>
          </div>
        </div>
        
        <p className="mt-2 text-gray-300">{hospital.description}</p>
        
        <div className="mt-4 flex items-center text-gray-300">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{hospital.address}</span>
        </div>
        
        <div className="mt-2 flex items-center text-gray-300">
          <Users className="w-4 h-4 mr-2" />
          <span>{hospital.doctorsCount} Doctors</span>
        </div>

        <div className="mt-2 flex items-center text-gray-300">
          <Phone className="w-4 h-4 mr-2" />
          <span>{hospital.emergencyNumber}</span>
        </div>

        <div className="mt-2 flex items-center text-gray-300">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Est. {hospital.establishedYear}</span>
        </div>
        
        <div className="mt-4">
          <h4 className="font-semibold text-white mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {hospital.specialties.map((specialty, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <Link
          to="/book"
          className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Building2 className="w-5 h-5 mr-2" />
          View Doctors
        </Link>
      </div>
    </div>
  );
};