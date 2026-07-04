import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}>
          <a href="#home" className="text-xl font-heading font-bold tracking-tight text-moon-highlight z-50">
            Shravani's Portfolio
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open('https://drive.google.com/file/d/175YjiPudY60i6PQAruH9_lsm8V75I7AQ/view?usp=sharing', '_blank')}
            >
              Resume
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-moon-bg/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col items-center gap-6 mb-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-heading font-medium text-white hover:text-moon-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="md"
              onClick={() => window.open('https://drive.google.com/file/d/175YjiPudY60i6PQAruH9_lsm8V75I7AQ/view?usp=sharing', '_blank')}
            >
              Download Resume
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
