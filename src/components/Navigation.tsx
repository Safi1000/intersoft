import { useState, useEffect, useCallback, useRef } from 'react';
import { Reveal } from './Reveal';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isLightMode, setIsLightMode] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsLightMode(document.documentElement.classList.contains('light'));
    }
    const observer = new MutationObserver(() => {
      if (typeof document !== 'undefined') {
        setIsLightMode(document.documentElement.classList.contains('light'));
      }
    });
    if (typeof document !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('body-scroll-locked');
    } else {
      document.body.classList.remove('body-scroll-locked');
    }
    return () => document.body.classList.remove('body-scroll-locked');
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handlePageChange = useCallback((page: string) => {
    onPageChange(page);
    setMobileOpen(false);
    setMobileSubmenu(null);
    setOpenMenu(null);
  }, [onPageChange]);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(prev => prev === menu ? null : menu);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/5" ref={navRef}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Reveal>
              <div className="flex items-center text-white">
                <img
                  src={isLightMode ? '/images/logo_lightmode.jpg' : '/images/logo.png'}
                  alt="Intersoft logo"
                  className="shrink-0 rounded-sm object-contain"
                  style={{ height: '54px', width: '153px' }}
                />
              </div>
            </Reveal>

            {/* Desktop Navigation Menu — hidden on mobile via CSS */}
            <Reveal delay={0.06}>
              <ul className="nav-menu desktop-nav">
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange('home'); }}
                    className={currentPage === 'home' ? 'text-white' : ''}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange('about'); }}
                    className={currentPage === 'about' ? 'text-white' : ''}
                  >
                    About
                  </a>
                </li>
                <li onMouseEnter={() => setOpenMenu('electronics')} onMouseLeave={() => setOpenMenu(null)} className={openMenu === 'electronics' ? 'is-open' : ''}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange('electronics'); }}
                    className={currentPage === 'electronics' ? 'text-white' : ''}
                  >
                    Electronics
                    <svg className="dropdown-arrow inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <div className="submenu">
                    <a href="#electronics-hardware" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-hardware'); }}>Hardware Design</a>
                    <a href="#electronics-iot" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-iot'); }}>IoT Solutions</a>
                    <a href="#electronics-embedded" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-embedded'); }}>Embedded Systems</a>
                    <a href="#electronics-signal" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-signal'); }}>Signal Processing</a>
                    <a href="#electronics-power" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-power'); }}>Power Systems</a>
                    <a href="#electronics-testing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-testing'); }}>Testing & Validation</a>
                  </div>
                </li>
                <li onMouseEnter={() => setOpenMenu('software')} onMouseLeave={() => setOpenMenu(null)} className={openMenu === 'software' ? 'is-open' : ''}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange('software'); }}
                    className={currentPage === 'software' ? 'text-white' : ''}
                  >
                    Software Development
                    <svg className="dropdown-arrow inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <div className="submenu">
                    <a href="#software-web" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('software-web'); }}>Web Applications</a>
                    <a href="#software-mobile" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('software-mobile'); }}>Mobile Apps</a>
                    <a href="#software-enterprise" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('software-enterprise'); }}>Enterprise Software</a>
                    <a href="#software-data" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('software-data'); }}>Data Analytics</a>
                    <a href="#software-devops" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('software-devops'); }}>DevOps & Cloud</a>
                    <a href="#software-ml" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded" onClick={(e) => { e.preventDefault(); handlePageChange('software-ml'); }}>AI & Machine Learning</a>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handlePageChange('contact'); }}
                    className={currentPage === 'contact' ? 'text-white' : ''}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </Reveal>

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Hamburger Button - Mobile Only */}
              <button
                className="hamburger-btn md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`mobile-nav-panel ${mobileOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-content">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange('home'); }}
            className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`}
          >
            Home
          </a>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange('about'); }}
            className={`mobile-nav-link ${currentPage === 'about' ? 'active' : ''}`}
          >
            About
          </a>

          {/* Electronics Accordion */}
          <div className="mobile-nav-accordion">
            <button
              className={`mobile-nav-link accordion-toggle ${currentPage === 'electronics' ? 'active' : ''}`}
              onClick={() => toggleMobileSubmenu('electronics')}
              aria-expanded={mobileSubmenu === 'electronics'}
            >
              Electronics
              <svg className={`accordion-arrow ${mobileSubmenu === 'electronics' ? 'rotated' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`mobile-submenu ${mobileSubmenu === 'electronics' ? 'expanded' : ''}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('electronics'); }} className="mobile-submenu-link">All Electronics</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-hardware'); }} className="mobile-submenu-link">Hardware Design</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-iot'); }} className="mobile-submenu-link">IoT Solutions</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-embedded'); }} className="mobile-submenu-link">Embedded Systems</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-signal'); }} className="mobile-submenu-link">Signal Processing</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-power'); }} className="mobile-submenu-link">Power Systems</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('electronics-testing'); }} className="mobile-submenu-link">Testing & Validation</a>
            </div>
          </div>

          {/* Software Accordion */}
          <div className="mobile-nav-accordion">
            <button
              className={`mobile-nav-link accordion-toggle ${currentPage === 'software' ? 'active' : ''}`}
              onClick={() => toggleMobileSubmenu('software')}
              aria-expanded={mobileSubmenu === 'software'}
            >
              Software
              <svg className={`accordion-arrow ${mobileSubmenu === 'software' ? 'rotated' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`mobile-submenu ${mobileSubmenu === 'software' ? 'expanded' : ''}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('software'); }} className="mobile-submenu-link">All Software</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('software-web'); }} className="mobile-submenu-link">Web Applications</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('software-mobile'); }} className="mobile-submenu-link">Mobile Apps</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('software-enterprise'); }} className="mobile-submenu-link">Enterprise Software</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('software-data'); }} className="mobile-submenu-link">Data Analytics</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('software-devops'); }} className="mobile-submenu-link">DevOps & Cloud</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange('software-ml'); }} className="mobile-submenu-link">AI & Machine Learning</a>
            </div>
          </div>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange('contact'); }}
            className={`mobile-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}