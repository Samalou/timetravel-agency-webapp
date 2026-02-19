import Hero from '../components/Hero';
import DestinationCards from '../components/DestinationCards';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-16">
      <Hero />
      <DestinationCards onNavigate={onNavigate} />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}
