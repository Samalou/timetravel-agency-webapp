import { Calendar, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(234, 179, 8, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900 z-10" />

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <Sparkles className="w-8 h-8 text-yellow-500 mr-2" />
          <span className="text-yellow-500 text-sm tracking-widest uppercase font-semibold">
            Journey Through Time
          </span>
          <Sparkles className="w-8 h-8 text-yellow-500 ml-2" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight animate-fade-in-up">
          Experience History Like Never Before
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
          Journey to the most extraordinary moments in human history and beyond.
          Our luxury time travel experiences are crafted with precision and care.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <button className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50 flex items-center">
            <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Book Your Journey
          </button>

          <button className="px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-lg font-semibold text-lg hover:bg-yellow-500/10 transition-all flex items-center">
            Explore Destinations
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
