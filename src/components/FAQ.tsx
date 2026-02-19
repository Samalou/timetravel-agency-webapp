import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is time travel safe?',
    answer: 'Absolutely. Our temporal stabilization technology has a perfect safety record. Each journey is carefully monitored by our team of experts, and we use quantum-encrypted temporal coordinates to ensure your safe return.',
  },
  {
    question: 'How long does a typical journey last?',
    answer: 'Journey durations vary by destination. Most experiences range from 3 to 7 days in the target time period, though your return will be just moments after departure from your original timeline.',
  },
  {
    question: 'Can I interact with historical figures?',
    answer: 'Yes, but within strict guidelines to preserve the timeline. Our guides are trained in temporal etiquette and will brief you on appropriate interactions. Some experiences include arranged meetings with historical figures.',
  },
  {
    question: 'What should I bring on my journey?',
    answer: 'We provide period-appropriate clothing and essentials. Personal items are limited to what can fit in a small temporal-safe container. Modern electronics must remain at our facility for timeline preservation.',
  },
  {
    question: 'What if there is a temporal anomaly?',
    answer: 'Our emergency extraction protocols can retrieve you within nanoseconds if any anomaly is detected. Every traveler carries a personal temporal beacon monitored 24/7 by our operations center.',
  },
  {
    question: 'How much does a journey cost?',
    answer: 'Pricing varies by destination and experience level. Our journeys start at $50,000 for shorter trips and can exceed $500,000 for exclusive extended experiences. Contact us for detailed pricing.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about temporal tourism
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-yellow-500 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
