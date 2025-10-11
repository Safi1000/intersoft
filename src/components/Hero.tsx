import React, { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
// Use public path for production reliability

interface HeroProps {
  onPageChange: (page: string) => void;
  revealTrigger?: boolean;
  revealDelayMs?: number;
}

export default function Hero({ onPageChange, revealTrigger, revealDelayMs }: HeroProps) {
  const [autoReveal, setAutoReveal] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Disable legacy auto-reveal spinner logic to prevent flicker with new title
    setAutoReveal(true);
  }, []);

  // Background video playback rate
  useEffect(() => {
    if (videoRef.current) {
      try {
        videoRef.current.playbackRate = 1.5;
      } catch (e) {
        // no-op if browser blocks modification
      }
    }
  }, []);
  return (
    <section className="gradient-bg relative min-h-screen overflow-hidden pt-28 md:pt-36">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="/images/herovid.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{ transform: 'scale(1.2)', opacity: 0.5 }}
      />
      {/* Animated wave layers */}
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center text-center pt-25 md:pt-38" style={{ marginTop: '260px' }}>
        <Reveal durationMs={350}>
          <div className="inline-block">
            <img
              src="/images/logo.png"
              alt="Intersoft International"
              className="mx-auto object-contain logo-float"
              style={{ height: 'clamp(72px, 14vw, 160px)', width: 'auto' }}
            />
          </div>
        </Reveal>
      </div>
      
      {/* Subtitle and Cards positioned below the absolute h2 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-6 md:pb-8">
        <div className="text-center max-w-6xl md:max-w-7xl mx-auto px-6">
          {/* Subtitle */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <span className="px-4 py-2 text-lg md:text-xl rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/90">
                Electronics Solutions
              </span>
              <span className="px-4 py-2 text-lg md:text-xl rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/90">
                Software Development
              </span>
            </div>
          </div>

          {/* Mission Statement Block */}
          <div className="max-w-4xl mx-auto">
            <div className="mission-text-block relative bg-black/10 backdrop-blur-sm border border-white/10 rounded-lg p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#24c4c4]/5 via-transparent to-[#bc3723]/5 rounded-lg"></div>
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed italic">
                  "Bridging the gap between <span className="font-medium">innovation</span> and <span className="font-medium">implementation</span>, 
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