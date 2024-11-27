import React, { useState } from 'react';
import type { Doctor } from '../data/doctors';
import { X, Calendar, Clock, Mail, Phone, User, MapPin, Check, XCircle } from 'lucide-react';

interface BookingModalProps {
  doctor: Doctor;
  onClose: () => void;
  isGuest?: boolean;
}

interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  symptoms: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ doctor, onClose }) => {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>(() => {
    const user = localStorage.getItem('user');
    const userData = user ? JSON.parse(user) : {};
    
    return {
      name: userData.name || '',
      email: userData.email || '',
      phone: userData.phone || '',
      date: '',
      time: '',
      symptoms: ''
    };
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Booking confirmed! Check your email and phone for details.');
    setIsProcessing(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="my-8 bg-white/10 backdrop-blur-lg rounded-xl w-full max-w-2xl p-4 sm:p-6 relative">
        <div className="absolute right-2 top-2 sm:right-4 sm:top-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 pr-12">Book Appointment</h2>
        
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-900/20 rounded-lg">
          <h3 className="font-semibold text-lg text-white mb-2">{doctor.name}</h3>
          <p className="text-blue-200">{doctor.specialization}</p>
          <div className="flex items-center mt-2 text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{doctor.location}</span>
          </div>
          <div className="mt-2 text-blue-200 font-semibold">
            Consultation Fee: ₹{doctor.price}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-200 mb-1 sm:mb-2 text-sm">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                required
                value={bookingDetails.name}
                onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-200 mb-1 sm:mb-2 text-sm">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                required
                value={bookingDetails.email}
                onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-200 mb-1 sm:mb-2 text-sm">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={bookingDetails.phone}
                onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="9876543210"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-200 mb-1 sm:mb-2 text-sm">Preferred Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="date"
                required
                value={bookingDetails.date}
                onChange={(e) => setBookingDetails({ ...bookingDetails, date: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-200 mb-1 sm:mb-2 text-sm">Preferred Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                required
                value={bookingDetails.time}
                onChange={(e) => setBookingDetails({ ...bookingDetails, time: e.target.value })}
                className="w-full pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">Select time</option>
                {doctor.availability.includes('Mon') && (
                  <>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                  </>
                )}
                {doctor.availability.includes('Tue') && (
                  <>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-gray-200 mb-1 sm:mb-2 text-sm">Symptoms/Reason for Visit</label>
            <textarea
              required
              value={bookingDetails.symptoms}
              onChange={(e) => setBookingDetails({ ...bookingDetails, symptoms: e.target.value })}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 text-sm"
              placeholder="Please describe your symptoms or reason for visit"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-200 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
              disabled={isProcessing}
            >
              <XCircle className="w-4 h-4" />
              Cancel
            </button>
            <button
              type="submit"
              disabled={isProcessing}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Confirm Booking</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};