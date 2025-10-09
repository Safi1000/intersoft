interface FooterProps {
  onPageChange: (page: string) => void;
}

import { Reveal } from './Reveal';

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-6 py-16">
        <Reveal>
        {/* Top Row: Company Info */}
        <div className="mb-8 -mt-4 md:-mt-6">
          <div className="flex-1 min-w-[260px] text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center text-white mb-4">
                <img src="/images/logo.jpg" alt="Intersoft logo" className="shrink-0 rounded-sm object-contain" style={{ height: '84px', width: '240px' }} />
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
                Leading the future through cutting-edge electronics and innovative software solutions. 
                Where hardware meets software in perfect harmony.
              </p>
            </div>
            
          </div>
        </div>
        </Reveal>

        

        {/* Bottom Row: Sections */}
        <Reveal delay={0.08}>
        <div className="mb-12 mt-[96px] flex flex-col sm:flex-row flex-wrap items-start justify-center w-full gap-y-12 gap-x-12 sm:gap-x-16 lg:gap-x-24 xl:gap-x-32">
          {/* Company & Links (Left) */}
          <div className="min-w-[220px] sm:basis-[260px] text-center flex-1 mt-[25px]">
            <h3 className="text-lg font-bold text-white mb-8">Company</h3>
            <ul className="space-y-3 lg:space-y-4">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); onPageChange('home'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onPageChange('about'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">About</a></li>
              <li><a href="#electronics" onClick={(e) => { e.preventDefault(); onPageChange('electronics'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Electronics</a></li>
              <li><a href="#software" onClick={(e) => { e.preventDefault(); onPageChange('software'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Software</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onPageChange('contact'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Software (Center) */}
          <div className="min-w-[220px] sm:basis-[260px] text-center flex-none mt-[25px]">
            <h3 className="text-lg font-bold text-white mb-8">Software</h3>
            <ul className="space-y-3 lg:space-y-4">
              <li><a href="#software-web" onClick={(e) => { e.preventDefault(); onPageChange('software-web'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Web Applications</a></li>
              <li><a href="#software-mobile" onClick={(e) => { e.preventDefault(); onPageChange('software-mobile'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Mobile Apps</a></li>
              <li><a href="#software-enterprise" onClick={(e) => { e.preventDefault(); onPageChange('software-enterprise'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Enterprise Software</a></li>
              <li><a href="#software-data" onClick={(e) => { e.preventDefault(); onPageChange('software-data'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Data Analytics</a></li>
              <li><a href="#software-devops" onClick={(e) => { e.preventDefault(); onPageChange('software-devops'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">DevOps & Cloud</a></li>
              <li><a href="#software-ml" onClick={(e) => { e.preventDefault(); onPageChange('software-ml'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">AI & Machine Learning</a></li>
            </ul>
          </div>

          {/* Electronics (Right) */}
          <div className="min-w-[220px] sm:basis-[260px] text-center flex-1 mt-[25px]">
            <h3 className="text-lg font-bold text-white mb-8">Electronics</h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a href="#electronics-hardware" onClick={(e) => { e.preventDefault(); onPageChange('electronics-hardware'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Hardware Design</a>
              </li>
              <li>
                <a href="#electronics-iot" onClick={(e) => { e.preventDefault(); onPageChange('electronics-iot'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">IoT Solutions</a>
              </li>
              <li>
                <a href="#electronics-embedded" onClick={(e) => { e.preventDefault(); onPageChange('electronics-embedded'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Embedded Systems</a>
              </li>
              <li>
                <a href="#electronics-signal" onClick={(e) => { e.preventDefault(); onPageChange('electronics-signal'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Signal Processing</a>
              </li>
              <li>
                <a href="#electronics-power" onClick={(e) => { e.preventDefault(); onPageChange('electronics-power'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Power Systems</a>
              </li>
              <li>
                <a href="#electronics-testing" onClick={(e) => { e.preventDefault(); onPageChange('electronics-testing'); }} className="text-gray-400 hover:text-[#24c4c4] transition-colors">Testing & Validation</a>
              </li>
            </ul>
          </div>
        </div>
        </Reveal>

        {/* Bottom Bar */}
        <Reveal delay={0.08}>
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Intersoft International. All rights reserved.
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </footer>
  );
}