import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const NavBar = ({ isSpanish, setIsSpanish }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: isSpanish ? 'Inicio' : 'Home' },
    { href: '#about', label: isSpanish ? 'Sobre Mi' : 'About' },
    { href: '#services', label: isSpanish ? 'Servicios' : 'Services' },
    { href: '#gallery', label: isSpanish ? 'Galería' : 'Gallery' },
    { href: '#reviews', label: isSpanish ? 'Opiniones' : 'Reviews' },
    { href: '#contact', label: isSpanish ? 'Contacto' : 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#2A2A2A]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-white">Chef Antonio</span>
          
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#FF9100] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsSpanish(!isSpanish)}
              className="px-3 py-1 text-white hover:text-[#FF9100] transition-colors"
            >
              {isSpanish ? 'EN' : 'ES'}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}/>
            </svg>
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-[#2A2A2A]"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {menuItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#FF9100] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsSpanish(!isSpanish);
                setIsMobileMenuOpen(false);
              }}
              className="text-white hover:text-[#FF9100] transition-colors text-left"
            >
              {isSpanish ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};