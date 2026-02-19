import { Award, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Our proprietary temporal stabilization technology ensures your journey is completely safe.',
  },
  {
    icon: Award,
    title: 'Luxury Experience',
    description: 'First-class accommodations and expert guides in every time period.',
  },
  {
    icon: Clock,
    title: 'Precise Timing',
    description: 'Arrive at the exact moment you desire with millisecond accuracy.',
  },
  {
    icon: Users,
    title: 'Expert Guides',
    description: 'Historians and temporal specialists accompany every journey.',
  },
];

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Why Choose TimeTravel Agency
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just a travel agency—we're pioneers in temporal tourism,
            offering unparalleled experiences across the fabric of time itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-600/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-500">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-600/30 rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-yellow-500">
              Over 10,000 Successful Journeys
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Since 2145, we've been the premier choice for time travelers seeking
              authentic historical experiences. Our commitment to safety, luxury,
              and historical accuracy is unmatched in the temporal tourism industry.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-1">10K+</div>
                <div className="text-gray-400 text-sm">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-1">50+</div>
                <div className="text-gray-400 text-sm">Time Periods</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-1">100%</div>
                <div className="text-gray-400 text-sm">Safety Record</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
