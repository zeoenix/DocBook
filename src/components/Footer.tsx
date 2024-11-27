import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-lg mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold text-white">DocBook India</span>
          </Link>
          <p className="mt-4 text-gray-300">
            Your trusted healthcare companion. Book appointments with top doctors across India.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { to: '/book', text: 'Book Appointment' },
              { to: '/about', text: 'About Us' },
              { to: '/contact', text: 'Contact' },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <span>1800-123-4567</span>
            </li>
            <li className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>support@docbook.in</span>
            </li>
            <li className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Delhi, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Emergency</h3>
          <div className="bg-red-500/10 p-4 rounded-lg">
            <p className="text-red-400 font-semibold mb-2">24/7 Emergency</p>
            <p className="text-white text-xl font-bold">112</p>
            <p className="text-gray-300 mt-2 text-sm">
              National Emergency Number
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-300">
          <p>© {new Date().getFullYear()} DocBook India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}