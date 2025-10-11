import { useState } from 'react';
import { Reveal } from './Reveal';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Reveal>
            <div className="flex items-center text-white">
              <img src="/images/logo.png" alt="Intersoft logo" className="shrink-0 rounded-sm object-contain" style={{ height: '54px', width: '153px' }} />
            </div>
          </Reveal>

          {/* Navigation Menu */}
          <Reveal delay={0.06}>
          <ul className="nav-menu">
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange('home'); }}
                className={currentPage === 'home' ? 'text-white' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange('about'); }}
                className={currentPage === 'about' ? 'text-white' : ''}
              >
                About
              </a>
            </li>
            <li onMouseEnter={() => setOpenMenu('electronics')} onMouseLeave={() => setOpenMenu(null)} className={openMenu === 'electronics' ? 'is-open' : ''}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange('electronics'); }}
                className={currentPage === 'electronics' ? 'text-white' : ''}
              >
                Electronics
                <svg className="dropdown-arrow inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="submenu">
                <a href="#electronics-hardware" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('electronics-hardware'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Hardware Design
                </a>
                <a href="#electronics-iot" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('electronics-iot'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  IoT Solutions
                </a>
                <a href="#electronics-embedded" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('electronics-embedded'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Embedded Systems
                </a>
                <a href="#electronics-signal" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('electronics-signal'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Signal Processing
                </a>
                <a href="#electronics-power" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('electronics-power'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Power Systems
                </a>
                <a href="#electronics-testing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('electronics-testing'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Testing & Validation
                </a>
              </div>
            </li>
            <li onMouseEnter={() => setOpenMenu('software')} onMouseLeave={() => setOpenMenu(null)} className={openMenu === 'software' ? 'is-open' : ''}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange('software'); }}
                className={currentPage === 'software' ? 'text-white' : ''}
              >
                Software Development
                <svg className="dropdown-arrow inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="submenu">
                <a href="#software-web" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('software-web'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Web Applications
                </a>
                <a href="#software-mobile" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('software-mobile'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Mobile Apps
                </a>
                <a href="#software-enterprise" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('software-enterprise'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Enterprise Software
                </a>
                <a href="#software-data" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('software-data'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Data Analytics
                </a>
                <a href="#software-devops" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('software-devops'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  DevOps & Cloud
                </a>
                <a href="#software-ml" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('software-ml'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  AI & Machine Learning
                </a>
              </div>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange('contact'); }}
                className={currentPage === 'contact' ? 'text-white' : ''}
              >
                Contact Us
              </a>
            </li>
          </ul>
          </Reveal>
        </div>
      </div>
    </nav>
  );
}