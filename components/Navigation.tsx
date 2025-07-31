'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">
              Spotify
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-white hover:text-green-400 transition-colors duration-200">
                Premium
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors duration-200">
                Help
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors duration-200">
                Download
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Sign up
              </a>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                Log in
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2">
              <a href="#" className="block px-3 py-2 text-white hover:text-green-400 transition-colors duration-200">
                Premium
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-green-400 transition-colors duration-200">
                Help
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-green-400 transition-colors duration-200">
                Download
              </a>
              <div className="border-t border-gray-600 my-2"></div>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">
                Sign up
              </a>
              <div className="px-3 py-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  Log in
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}