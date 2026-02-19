import { Clock, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-yellow-600/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold text-yellow-500">TimeTravel Agency</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your gateway to the past and future. Experience history with luxury and precision.
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Safety Guidelines
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-yellow-500" />
                +1 (555) TIME-2145
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-yellow-500" />
                info@timetravelagency.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
                123 Temporal Plaza, Future City
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2145 TimeTravel Agency. All rights reserved across all timelines.</p>
        </div>
      </div>
    </footer>
  );
}
