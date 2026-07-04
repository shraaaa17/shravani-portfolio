import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from './Button';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  hoverEffect = true,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6 } : {}}
      className={cn(
        'glass-card p-6 md:p-8',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
