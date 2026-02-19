import { Calendar, Users, Clock, Star, MapPin, Shield } from 'lucide-react';
import Footer from '../components/Footer';

export default function Cretaceous() {
  const highlights = [
    'Observe T-Rex and Triceratops in their natural habitat',
    'Witness the last days of the dinosaurs',
    'Explore lush Cretaceous jungles',
    'See massive flying pterosaurs',
    'Experience Earth 65 million years ago',
  ];

  const itinerary = [
    { day: 'Day 1', activity: 'Arrival & Safety Briefing in Secure Observation Base' },
    { day: 'Day 2', activity: 'Herbivore Valley - Triceratops & Hadrosaur Herds' },
    { day: 'Day 3', activity: 'Predator Territory - T-Rex Observation from Safe Distance' },
    { day: 'Day 4', activity: 'Coastal Expedition - Marine Reptiles & Pterosaurs' },
    { day: 'Day 5', activity: 'Jungle Trek & Ancient Flora Studies' },
    { day: 'Day 6', activity: 'Night Observation & Departure' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="inline-block bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-yellow-500/50">
              <span className="text-yellow-500 font-semibold">65 Million Years Ago</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Cretaceous Period
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Walk with dinosaurs in the final chapter of the Mesozoic Era
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-yellow-500 font-bold mb-2">Extreme Safety Protocols</h3>
              <p className="text-gray-300 text-sm">
                This expedition requires advanced safety certification. All observations are conducted from
                fortified temporal bases with state-of-the-art protection systems.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-yellow-600/20">
              <h2 className="text-3xl font-bold mb-4 text-yellow-500">Journey Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Travel back 65 million years to the Late Cretaceous Period, the final age of the dinosaurs.
                Experience Earth as it was before the asteroid impact that would change everything. This is
                the ultimate adventure for those seeking to witness prehistoric life in its full glory.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                From our state-of-the-art temporal observation bases, you'll safely observe the most
                impressive creatures ever to walk the Earth. Watch massive sauropods grazing in herds,
                witness the terrifying power of Tyrannosaurus Rex, and see pterosaurs soaring through
                Cretaceous skies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This journey is not just about dinosaurs—it's about experiencing an alien Earth with
                completely different continents, climate, and ecosystems. The Cretaceous world is warmer,
                with no ice caps, higher sea levels, and vegetation unlike anything in our modern era.
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
              <h2 className="text-3xl font-bold mb-6 text-yellow-500">6-Day Expedition</h2>
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
              <h2 className="text-3xl font-bold mb-4 text-yellow-500">Safety & Requirements</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Advanced temporal safety certification required
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Physical fitness assessment mandatory
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  All activities conducted from fortified observation posts
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Personal temporal beacon active at all times
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Minimum age: 18 years
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 rounded-xl p-6 border border-yellow-600/30 sticky top-20">
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">Expedition Details</h3>

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
                    <div className="font-semibold">Late Cretaceous</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="font-semibold">North America</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Shield className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Safety Level</div>
                    <div className="font-semibold">Maximum Security</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-yellow-600/30 pt-6 mb-6">
                <div className="text-3xl font-bold text-yellow-500 mb-2">$250,000</div>
                <div className="text-sm text-gray-400">per traveler</div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
                Book This Expedition
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Advanced booking required - Limited slots available
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
