import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! I'm your TimeTravel Agency assistant. How can I help you plan your journey through time?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, { text: inputValue, isBot: false }]);
    setInputValue('');

    setTimeout(() => {
      const responses = [
        "That's a fascinating question! Our temporal experts can provide detailed information about that destination.",
        "I'd be happy to help you with that! Let me connect you with one of our time travel specialists.",
        "Great choice! This time period offers incredible experiences. Would you like to know more about the itinerary?",
        "Excellent question! Our safety protocols are industry-leading. I can provide you with detailed safety information.",
        "I can help you with booking! Let me gather some information about your preferences first.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-96 h-[500px] bg-gray-800 rounded-2xl shadow-2xl border border-yellow-600/30 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle className="w-6 h-6 text-gray-900 mr-2" />
              <div>
                <h3 className="font-bold text-gray-900">TimeTravel Assistant</h3>
                <p className="text-xs text-gray-800">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-700 text-gray-100'
                      : 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 p-2 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 w-16 h-16 rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all flex items-center justify-center"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}
