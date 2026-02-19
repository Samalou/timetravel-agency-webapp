import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Paris1889 from './pages/Paris1889';
import Cretaceous from './pages/Cretaceous';
import Florence1504 from './pages/Florence1504';
import ChatBot from './components/ChatBot';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'paris':
        return <Paris1889 />;
      case 'cretaceous':
        return <Cretaceous />;
      case 'florence':
        return <Florence1504 />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <ChatBot />
    </div>
  );
}

export default App;
