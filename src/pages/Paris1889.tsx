import { Calendar, Users, Clock, Star, MapPin, Utensils } from 'lucide-react';
import Footer from '../components/Footer';

export default function Paris1889() {
  const highlights = [
    'Witness the Eiffel Tower inauguration',
    'Attend the Paris Exposition Universelle',
    'Meet famous artists of the Belle Époque',
    'Dine at authentic 19th-century restaurants',
    'Experience the birth of modern art',
  ];

  const itinerary = [
    { day: 'Day 1', activity: 'Arrival & Eiffel Tower Inauguration Ceremony' },
    { day: 'Day 2', activity: 'Paris Exposition Tour & Meet Gustave Eiffel' },
    { day: 'Day 3', activity: 'Montmartre Art Scene & Artist Studios' },
    { day: 'Day 4', activity: 'Seine River Cruise & Belle Époque Theatre' },
    { day: 'Day 5', activity: 'Final Day Shopping & Departure' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="inline-block bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-yellow-500/50">
              <span className="text-yellow-500 font-semibold">1889 - Belle Époque</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Paris 1889
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Experience the unveiling of the Eiffel Tower and the golden age of French culture
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-yellow-600/20">
              <h2 className="text-3xl font-bold mb-4 text-yellow-500">Journey Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Step into the heart of Paris during its most transformative year. The 1889 World's Fair
                marks the centennial of the French Revolution and showcases the Eiffel Tower—initially
                controversial, now iconic. This is Paris at its cultural zenith, where art, innovation,
                and joie de vivre combine to create an unforgettable experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Stroll through cobblestone streets lit by gas lamps, witness the birth of the Art Nouveau
                movement, and dine in establishments that would become legendary. Your expert guide will
                introduce you to key figures of the era while ensuring you experience authentic Parisian
                life during this golden age.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-yellow-600/20">
              <h2 className="text-3xl font-bold mb-6 text-yellow-500">Experience Highlights</h2>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-yellow-600/20">
              <h2 className="text-3xl font-bold mb-6 text-yellow-500">5-Day Itinerary</h2>
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-gray-900/50 p-4 rounded-lg border border-gray-700"
                  >
                    <div className="bg-yellow-500 text-gray-900 font-bold px-3 py-1 rounded-lg mr-4 flex-shrink-0">
                      {item.day}
                    </div>
                    <div className="text-gray-300">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 rounded-xl p-6 border border-yellow-600/30 sticky top-20">
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">Journey Details</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="font-semibold">5 Days / 4 Nights</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Group Size</div>
                    <div className="font-semibold">Max 8 Travelers</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Time Period</div>
                    <div className="font-semibold">May 1889</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="font-semibold">Paris, France</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Utensils className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Meals</div>
                    <div className="font-semibold">All Included</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-yellow-600/30 pt-6 mb-6">
                <div className="text-3xl font-bold text-yellow-500 mb-2">$75,000</div>
                <div className="text-sm text-gray-400">per traveler</div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
                Book This Journey
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Flexible cancellation up to 30 days before departure
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
