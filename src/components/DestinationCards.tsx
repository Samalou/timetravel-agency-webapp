import { ArrowRight, MapPin } from 'lucide-react';

interface DestinationCardsProps {
  onNavigate: (page: string) => void;
}

const destinations = [
  {
    id: 'paris',
    title: 'Paris 1889',
    subtitle: 'The Belle Époque',
    description: 'Witness the unveiling of the Eiffel Tower and immerse yourself in the golden age of art and culture.',
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1200',
    year: '1889',
    era: '19th Century',
  },
  {
    id: 'cretaceous',
    title: 'Cretaceous Period',
    subtitle: '65 Million Years Ago',
    description: 'Experience the age of dinosaurs in their natural habitat. A once-in-a-lifetime prehistoric adventure.',
    image: 'https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '-65,000,000',
    era: 'Mesozoic Era',
  },
  {
    id: 'florence',
    title: 'Florence 1504',
    subtitle: 'The Renaissance Apex',
    description: 'Meet the masters. Walk the streets where Michelangelo and Leonardo da Vinci changed art forever.',
    image: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '1504',
    era: 'Renaissance',
  },
];

export default function DestinationCards({ onNavigate }: DestinationCardsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Handpicked moments in time, curated for the discerning traveler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={dest.id}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-700 hover:border-yellow-500/50 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onNavigate(dest.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-gray-900 text-sm font-bold">{dest.era}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2 text-yellow-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{dest.year}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-yellow-500 group-hover:text-yellow-400 transition-colors">
                  {dest.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {dest.description}
                </p>

                <div className="flex items-center text-yellow-500 font-semibold group-hover:text-yellow-400 transition-colors">
                  <span className="mr-2">Explore Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
