import { useEffect, useState } from 'react';

interface HeroProps {
  onPageChange: (page: string) => void;
}

export default function Hero({ onPageChange }: HeroProps) {
  const [autoReveal, setAutoReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAutoReveal(true), 1500); // start reveal after 1.5s
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <section className="gradient-bg relative min-h-screen">
      {/* Animated wave layers */}
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 min-h-screen">
        {/* Main Hero Title - positioned absolutely via CSS */}
        <h2 className={`hero-title ${autoReveal ? 'auto-reveal' : ''}`}>
          Intersoft
          <span>Intersoft</span>
          <span>Intersoft</span>
          <span>International</span>
        </h2>
      </div>
      
      {/* Subtitle and Cards positioned below the absolute h2 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-20">
        <div className="text-center max-w-6xl mx-auto px-6">
          {/* Subtitle */}
          <div className="mb-16">
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Leading the future through cutting-edge electronics and innovative software solutions
            </p>
          </div>

          {/* Mission Statement Block */}
          <div className="max-w-4xl mx-auto">
            <div className="mission-text-block relative bg-black/10 backdrop-blur-sm border border-white/10 rounded-lg p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#24c4c4]/5 via-transparent to-[#bc3723]/5 rounded-lg"></div>
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed italic">
                  "Bridging the gap between <span className="brand-gradient-text font-medium">innovation</span> and <span className="brand-gradient-text font-medium">implementation</span>, 
                  we transform visionary ideas into tangible solutions that shape tomorrow's technological landscape."
                </blockquote>
                <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-[#24c4c4] to-[#bc3723] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}