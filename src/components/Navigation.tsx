import { useState } from 'react';

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
          <div className="text-2xl font-bold text-white">
            <span className="text-[#24c4c4]">Inter</span>soft
          </div>

          {/* Navigation Menu */}
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
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('electronics'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Hardware Design
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('electronics'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  IoT Solutions
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('electronics'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Circuit Analysis
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
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('software'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Web Applications
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('software'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Mobile Apps
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); onPageChange('software'); setOpenMenu(null); (document.activeElement as HTMLElement)?.blur?.(); }}>
                  Enterprise Software
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
        </div>
      </div>
    </nav>
  );
}