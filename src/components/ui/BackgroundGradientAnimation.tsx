import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Moon Palette (per user request)
const COLORS = {
  bgStart: '#210635',
  bgEnd: '#420D4B',
  blob1: '#6667AB',
  blob2: '#7B337E',
  blob3: '#420D4B',
  blob4: '#6667AB',
  blob5: '#F5D5E0',
  pointer: '#6667AB',
};

export const BackgroundGradientAnimation: React.FC = () => {
  const pointerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = pointerRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      // move with transform for GPU acceleration
      el.style.transform = `translate3d(${x - 60}px, ${y - 60}px, 0)`; // offset to center
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Subtle movement variants for blobs
  const slowMove = {
    animate: {
      x: ['0vw', '6vw', '-6vw', '0vw'],
      y: ['0vh', '4vh', '-4vh', '0vh'],
      scale: [1, 1.05, 0.95, 1],
    },
  } as const;

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1,
        background: `linear-gradient(180deg, ${COLORS.bgStart} 0%, ${COLORS.bgEnd} 100%)`,
        willChange: 'transform, opacity',
        WebkitTransform: 'translateZ(0)',
      }}
    >
      {/* Large blurred gradient blobs */}
      <motion.div
        {...slowMove}
        transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full"
        style={{
          left: '2%',
          top: '8%',
          width: '95vw',
          height: '95vw',
          background: `radial-gradient(circle at 28% 28%, ${COLORS.blob1} 0%, rgba(102,103,171,0.58) 22%, transparent 55%)`,
          filter: 'blur(120px) saturate(0.62)',
          opacity: 0.62,
          mixBlendMode: 'soft-light',
          transform: 'translateZ(0)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0vw', '-6vw', '6vw', '0vw'], y: ['0vh', '-6vh', '6vh', '0vh'], scale: [1, 1.06, 0.96, 1] }}
        transition={{ duration: 44, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        className="absolute rounded-full"
        style={{
          right: '0%',
          top: '18%',
          width: '105vw',
          height: '105vw',
          background: `radial-gradient(circle at 72% 38%, ${COLORS.blob2} 0%, rgba(123,51,126,0.48) 20%, transparent 55%)`,
          filter: 'blur(140px) saturate(0.6)',
          opacity: 0.5,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0vw', '4vw', '-4vw', '0vw'], y: ['0vh', '8vh', '-8vh', '0vh'], scale: [1, 1.04, 0.96, 1] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute rounded-full"
        style={{
          left: '8%',
          bottom: '2%',
          width: '100vw',
          height: '100vw',
          background: `radial-gradient(circle at 18% 78%, ${COLORS.blob3} 0%, rgba(66,13,75,0.44) 22%, transparent 60%)`,
          filter: 'blur(120px) saturate(0.6)',
          opacity: 0.5,
          mixBlendMode: 'soft-light',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0vw', '-3vw', '3vw', '0vw'], y: ['0vh', '-4vh', '4vh', '0vh'], scale: [1, 1.03, 0.97, 1] }}
        transition={{ duration: 44, repeat: Infinity, ease: 'easeInOut', delay: 9 }}
        className="absolute rounded-full"
        style={{
          right: '6%',
          bottom: '10%',
          width: '100vw',
          height: '100vw',
          background: `radial-gradient(circle at 78% 78%, ${COLORS.blob4} 0%, rgba(102,103,171,0.4) 18%, transparent 58%)`,
          filter: 'blur(130px) saturate(0.58)',
          opacity: 0.42,
          mixBlendMode: 'soft-light',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0vw', '2vw', '-2vw', '0vw'], y: ['0vh', '3vh', '-3vh', '0vh'], scale: [1, 1.02, 0.98, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute rounded-full"
        style={{
          left: '28%',
          top: '36%',
          width: '95vw',
          height: '95vw',
          background: `radial-gradient(circle at 50% 50%, ${COLORS.blob5} 0%, rgba(245,213,224,0.28) 16%, transparent 56%)`,
          filter: 'blur(100px) saturate(0.52)',
          opacity: 0.28,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle textured overlay to soften transitions */}
      <motion.div
        animate={{ opacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          mixBlendMode: 'overlay',
          opacity: 0.02,
          pointerEvents: 'none',
        }}
      />

      {/* Interactive pointer glow (very subtle) */}
      <div
        ref={pointerRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 120,
          height: 120,
          borderRadius: '50%',
          pointerEvents: 'none',
          background: `radial-gradient(circle, ${COLORS.pointer} 0%, rgba(102,103,171,0.08) 25%, transparent 60%)`,
          transform: 'translate3d(-9999px,-9999px,0)',
          mixBlendMode: 'screen',
          opacity: 0.12,
          filter: 'blur(18px) saturate(0.65)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Soft frosted overlay to slightly dim the background so content stands out */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(24px) brightness(0.98) saturate(0.9)',
          pointerEvents: 'none',
          opacity: 0.06,
        }}
      />
    </div>
  );
};

export default BackgroundGradientAnimation;
