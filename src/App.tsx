import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Electronics from './components/Electronics';
import Software from './components/Software';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Use public assets for production reliability
import { Reveal } from './components/Reveal';
// import SectionDivider from './components/SectionDivider';
import LoaderOverlay from './components/Loader';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const getPageFromHash = (): string => {
    if (typeof window === 'undefined') return 'home';
    const raw = window.location.hash.replace('#', '').trim().toLowerCase();
    const valid = ['home', 'about', 'electronics', 'software', 'contact'];
    return valid.includes(raw) ? raw : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  // Always jump to top when switching pages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [currentPage]);

  // Always load from the top on hard refresh (disable browser scroll restoration)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      const prev = (history as any).scrollRestoration;
      (history as any).scrollRestoration = 'manual';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return () => {
        (history as any).scrollRestoration = prev || 'auto';
      };
    }
  }, []);

  // Sync current page to URL hash
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const desired = `#${currentPage}`;
    if (window.location.hash !== desired) {
      window.location.hash = currentPage;
    }
  }, [currentPage]);

  // React to URL hash changes (back/forward or manual edits)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage((prev) => (prev === page ? prev : page));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Wait for critical media to be ready (logo img, hero video, homepage images)
  useEffect(() => {
    const promises: Promise<unknown>[] = [];

    // Preload logo
    promises.push(new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve;
      img.src = '/images/logo.jpg';
    }));

    // Preload homepage images
    ['/images/home_electronics.jpg', '/images/home_software.jpg'].forEach((src) => {
      promises.push(new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = src;
      }));
    });

    // Attempt to buffer hero video metadata
    promises.push(new Promise((resolve) => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true as any;
      video.onloadeddata = () => resolve(null);
      video.onerror = () => resolve(null);
      video.src = '/images/herovid.mp4';
    }));

    Promise.all(promises).then(() => {
      setIsReady(true);
    });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'electronics':
        return <Electronics onPageChange={setCurrentPage} />;
      case 'software':
        return <Software onPageChange={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero onPageChange={setCurrentPage} />
            
            {/* Quick Overview Section */}
            <section className="bg-black py-20 md:py-28">
              <div className="max-w-6xl md:max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <Reveal>
                    <h2 className="text-4xl font-bold mb-6">
                      Intersoft <span className="brand-gradient-text">International</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      At Intersoft International, we bridge the gap between cutting-edge electronics and 
                      innovative software solutions, delivering integrated systems that push technological boundaries.
                    </p>
                  </Reveal>
                </div>

                {/* Removed wave divider */}

                {/* Detailed Electronics Section */}
                <Reveal delay={0.06} durationMs={400}>
                <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 mb-16 md:min-h-[680px]">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-[#24c4c4] mb-4">Electronics Solutions</h3>
                      <p className="text-gray-300 mb-6">
                        We design and build reliable hardware systems — from concept to production. Our team
                        covers PCB design, embedded firmware, sensor integration, low-power systems, and EMC-ready
                        layouts, backed by rigorous testing and documentation.
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-3 text-gray-300">
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-[#24c4c4]"></span> PCB design and layout (HDI, high-speed, RF)</li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-[#24c4c4]"></span> Embedded firmware (C/C++, RTOS, drivers)</li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-[#24c4c4]"></span> IoT hardware and connectivity (BLE, Wi‑Fi, LoRa)</li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-[#24c4c4]"></span> Prototyping, bring‑up, test automation</li>
                      </ul>
                      <div className="mt-6" style={{ marginTop: '2.5rem' }}>
                        <button className="btn pt-1 mt-8" onClick={() => setCurrentPage('electronics')}>
                          <span></span><span></span><span></span><span></span>
                          Explore Electronics
                        </button>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="relative inline-block w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                        <img src="/images/home_electronics.jpg" alt="Electronics solutions" className="w-full h-[380px] md:h-[460px] object-cover" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  </div>
                </section>
                </Reveal>

                {/* Removed wave divider */}

                {/* Removed wave divider */}
                {/* Detailed Software Development Section */}
                <Reveal delay={0.06} durationMs={400}>
                <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 mb-20 md:min-h-[680px]">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="text-3xl font-bold text-[#bc3723] mb-4">Software Development</h3>
                      <p className="text-gray-300 mb-6">
                        We build scalable, secure software — from product MVPs to enterprise platforms. Our
                        delivery includes cloud‑native backends, modern web/mobile frontends, CI/CD pipelines,
                        and observability baked in from day one.
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-4 md:gap-5 text-gray-300">
                        <li className="flex items-start gap-3 leading-relaxed"><span className="w-2 h-2 mt-2 rounded-full bg-[#bc3723]"></span> Web apps (React/Next), mobile apps</li>
                        <li className="flex items-start gap-3 leading-relaxed"><span className="w-2 h-2 mt-2 rounded-full bg-[#bc3723]"></span> APIs and microservices, GraphQL/REST</li>
                        <li className="flex items-start gap-3 leading-relaxed"><span className="w-2 h-2 mt-2 rounded-full bg-[#bc3723]"></span> Cloud & DevOps (Docker, Kubernetes, CI/CD)</li>
                        <li className="flex items-start gap-3 leading-relaxed"><span className="w-2 h-2 mt-2 rounded-full bg-[#bc3723]"></span> Data pipelines, analytics, integrations</li>
                        <li className="flex items-start gap-3 leading-relaxed"><span className="w-2 h-2 mt-2 rounded-full bg-[#bc3723]"></span> Security & compliance (OWASP, IAM, encryption-at-rest/in-transit)</li>
                      </ul>
                      <div className="mt-6" style={{ marginTop: '2.5rem' }}>
                        <button className="btn pt-1 mt-8" onClick={() => setCurrentPage('software')}>
                          <span></span><span></span><span></span><span></span>
                          Explore Software
                        </button>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 text-center md:text-left">
                      <div className="relative inline-block w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                        <img src="/images/home_software.jpg" alt="Software development" className="w-full h-[380px] md:h-[460px] object-cover" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  </div>
                </section>
                </Reveal>

                {/* Removed wave divider */}

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                  <Reveal>
                    <div className="text-center group">
                      <div className="w-20 h-20 bg-[#24c4c4]/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#24c4c4]/30 transition-all duration-300">
                        <svg className="w-10 h-10 text-[#24c4c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Rapid Innovation</h3>
                      <p className="text-gray-400">From concept to deployment in record time with our agile development approach</p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.08}>
                    <div className="text-center group">
                      <div className="w-20 h-20 bg-[#bc3723]/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#bc3723]/30 transition-all duration-300">
                        <svg className="w-10 h-10 text-[#bc3723]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Proven Reliability</h3>
                      <p className="text-gray-400">Enterprise-grade solutions with 99.9% uptime and comprehensive support</p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.16}>
                    <div className="text-center group">
                      <div className="w-20 h-20 bg-[#24c4c4]/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#24c4c4]/30 transition-all duration-300">
                        <svg className="w-10 h-10 text-[#24c4c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                      <p className="text-gray-400">Serving clients across 15 countries with localized support and expertise</p>
                    </div>
                  </Reveal>
                </div>

                {/* Value Proposition Section */}
                {/* Removed wave divider */}
                <Reveal>
                  <div className="text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-12">
                    <h3 className="text-2xl font-bold mb-6">Why Choose Intersoft</h3>
                    <div className="grid sm:grid-cols-3 gap-8 text-gray-300">
                      <div>
                        <div className="text-4xl font-extrabold text-white mb-2">10+ yrs</div>
                        <p className="text-gray-400">Integrated hardware–software delivery across industries</p>
                      </div>
                      <div>
                        <div className="text-4xl font-extrabold text-white mb-2">99.9%</div>
                        <p className="text-gray-400">Reliability targets with robust testing and QA</p>
                      </div>
                      <div>
                        <div className="text-4xl font-extrabold text-white mb-2">15 countries</div>
                        <p className="text-gray-400">Global footprint with localized support</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="gradient-bg relative overflow-hidden" style={{marginTop: '0.25rem', paddingTop: '7.8rem', paddingBottom: '7.8rem', minHeight: 'auto', height: 'auto'}}>
              <div className="wave wave-1"></div>
              <div className="wave wave-2"></div>
              <div className="wave wave-3"></div>
              
              <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-8" style={{color: 'rgba(255,255,255,0.8)'}}>
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed" style={{color: 'rgba(255,255,255,0.8)'}}>
                  Join the ranks of industry leaders who trust Intersoft International 
                  to deliver cutting-edge technology solutions that drive real results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <button 
                    className="btn"
                    onClick={() => setCurrentPage('contact')}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Get Started Today
                  </button>
                  
                  <button 
                    className="btn"
                    onClick={() => setCurrentPage('about')}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Learn More About Us
                  </button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen gradient-bg text-white">
      {!isReady && <LoaderOverlay />}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main style={{ visibility: isReady ? 'visible' : 'hidden' }}>
        {renderPage()}
      </main>
      
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}