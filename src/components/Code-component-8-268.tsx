import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
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
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange('electronics'); }}
                className={currentPage === 'electronics' ? 'text-white' : ''}
              >
                Electronics
              </a>
              <div className="submenu">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded">Hardware Design</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded">IoT Solutions</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded">Circuit Analysis</a>
              </div>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange('software'); }}
                className={currentPage === 'software' ? 'text-white' : ''}
              >
                Software Development
              </a>
              <div className="submenu">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded">Web Applications</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded">Mobile Apps</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded">Enterprise Software</a>
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