import { Calendar, Users, Clock, Star, MapPin, Palette } from 'lucide-react';
import Footer from '../components/Footer';

export default function Florence1504() {
  const highlights = [
    'Meet Leonardo da Vinci and Michelangelo',
    'Witness David sculpture in progress',
    'Visit Renaissance workshops and studios',
    'Attend exclusive Medici court events',
    'Experience the birth of modern art',
  ];

  const itinerary = [
    { day: 'Day 1', activity: 'Arrival & Tour of Florence Renaissance Architecture' },
    { day: 'Day 2', activity: "Visit Leonardo da Vinci's Workshop" },
    { day: 'Day 3', activity: "Michelangelo's Studio - Witness David in Creation" },
    { day: 'Day 4', activity: 'Medici Palace & High Society Renaissance Dinner' },
    { day: 'Day 5', activity: 'Art Market & Master Craftsmen Studios' },
    { day: 'Day 6', activity: 'Final Gallery Tour & Departure' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="inline-block bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-yellow-500/50">
              <span className="text-yellow-500 font-semibold">1504 - High Renaissance</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Florence 1504
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Meet the masters who defined the Renaissance at the peak of artistic innovation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <Palette className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-yellow-500 font-bold mb-2">Exclusive Artist Access</h3>
              <p className="text-gray-300 text-sm">
                Private arranged meetings with Leonardo da Vinci and Michelangelo. Limited to art
                enthusiasts and patrons only.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-yellow-600/20">
              <h2 className="text-3xl font-bold mb-4 text-yellow-500">Journey Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Step into Florence at the absolute zenith of the Renaissance. The year 1504 marks a
                pivotal moment when two titans of art—Leonardo da Vinci and Michelangelo—both work in
                Florence simultaneously. This is the city where modern Western art was born, and you'll
                witness its creation firsthand.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your journey includes unprecedented access to the workshops of the masters themselves.
                Watch Michelangelo putting finishing touches on David, discuss innovation with Leonardo,
                and mingle with the Medici family at exclusive court events. This isn't just
                sightseeing—it's participation in one of history's greatest cultural moments.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Florence in 1504 is a city alive with creativity, where every street corner reveals
                another masterpiece in progress. The Medici patronage has created an environment where
                art, science, and philosophy flourish together, and you'll experience it all through the
                eyes of those who lived it.
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
              <h2 className="text-3xl font-bold mb-6 text-yellow-500">6-Day Cultural Immersion</h2>
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

            <div className="bg-gray-800 rounded-xl p-8 border border-yellow-600/20">
              <h2 className="text-3xl font-bold mb-4 text-yellow-500">What's Included</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Private meetings with Leonardo da Vinci and Michelangelo
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Exclusive access to artist workshops and studios
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Medici court event invitation and period attire
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Luxury accommodation in historic palazzo
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  All meals featuring authentic Renaissance cuisine
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Expert Renaissance historian guide
                </li>
              </ul>
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
                    <div className="font-semibold">6 Days / 5 Nights</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Group Size</div>
                    <div className="font-semibold">Max 6 Travelers</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Time Period</div>
                    <div className="font-semibold">September 1504</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="font-semibold">Florence, Italy</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Palette className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Experience</div>
                    <div className="font-semibold">Cultural Immersion</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-yellow-600/30 pt-6 mb-6">
                <div className="text-3xl font-bold text-yellow-500 mb-2">$150,000</div>
                <div className="text-sm text-gray-400">per traveler</div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
                Book This Journey
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Very limited availability - Book 6 months in advance
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
