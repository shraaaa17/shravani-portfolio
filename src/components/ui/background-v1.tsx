import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackgroundV1: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-moon-bg pointer-events-none">
      {/* Orb 1: Primary Purple */}
      <motion.div
        animate={{
          x: ['0vw', '20vw', '-10vw', '0vw'],
          y: ['0vh', '15vh', '-20vh', '0vh'],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-moon-primary/30 mix-blend-screen filter blur-[100px]"
      />

      {/* Orb 2: Deep Accent */}
      <motion.div
        animate={{
          x: ['0vw', '-25vw', '15vw', '0vw'],
          y: ['0vh', '-15vh', '25vh', '0vh'],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 right-1/4 w-[45vw] h-[45vw] rounded-full bg-moon-accent/30 mix-blend-screen filter blur-[120px]"
      />

      {/* Orb 3: Light Highlight */}
      <motion.div
        animate={{
          x: ['0vw', '10vw', '-15vw', '0vw'],
          y: ['0vh', '-20vh', '10vh', '0vh'],
          scale: [1, 1.5, 0.7, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 left-1/3 w-[30vw] h-[30vw] rounded-full bg-moon-highlight/20 mix-blend-screen filter blur-[90px]"
      />
      
      {/* Dynamic Starfield Overlay */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"
      />

      {/* Glassmorphism Frosted Overlay */}
      <div className="absolute inset-0 backdrop-blur-[60px] bg-moon-bg/20" />
    </div>
  );
};

export default AnimatedBackgroundV1;
