import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on devices with pointer (non-touch)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
      setIsVisible(prev => {
        if (!prev) return true;
        return prev;
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  const smoothX = useSpring(cursorX, { damping: 40, stiffness: 300 });
  const smoothY = useSpring(cursorY, { damping: 40, stiffness: 300 });

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glowing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-moon-primary/50 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-25%',
          translateY: '-25%',
        }}
      />
      {/* Inner solid dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-moon-highlight rounded-full pointer-events-none z-50 shadow-[0_0_15px_#F5D5E0]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
};
