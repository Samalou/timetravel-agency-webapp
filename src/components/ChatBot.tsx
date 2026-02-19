import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type ChatMsg = { text: string; isBot: boolean };

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      text: "Bonjour ! Je suis l’assistant de TimeTravel Agency. Quelle destination t’intéresse : Paris 1889, Crétacé -65M, ou Florence 1504 ?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    const userText = inputValue.trim();
    if (!userText || isLoading) return;

    setMessages((prev) => [...prev, { text: userText, isBot: false }]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      if (!res.ok) {
        const err = data?.error ? JSON.stringify(data.error) : "Erreur API";
        setMessages((prev) => [...prev, { text: `❌ ${err}`, isBot: true }]);
      } else {
        setMessages((prev) => [...prev, { text: data.content ?? "…", isBot: true }]);
      }
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        { text: `❌ Impossible de contacter le serveur: ${e?.message ?? "error"}`, isBot: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
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
                <p className="text-xs text-gray-800">Conseils & réservation</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-900 hover:text-gray-700 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/50">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? "bg-gray-700 text-gray-100"
                      : "bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-700 text-gray-100 opacity-80">
                  ⏳ Je prépare ta recommandation…
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez-moi vos questions sur les voyages temporels…"
                className="flex-1 bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 p-2 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all disabled:opacity-60"
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
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
}
