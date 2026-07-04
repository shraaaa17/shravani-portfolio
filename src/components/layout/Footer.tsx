import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 mt-20 relative z-10 bg-moon-bg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-heading font-bold text-white">
          Shravani Ashish Chavan
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/shraaaa17" target="_blank" rel="noreferrer" className="text-white/60 hover:text-moon-highlight transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shravani-chavan-858894292/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-moon-highlight transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:shravanich.17@gmail.com" className="text-white/60 hover:text-moon-highlight transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-moon-muted">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};
