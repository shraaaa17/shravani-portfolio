import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: any;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon, children, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-moon-primary hover:bg-moon-accent text-white shadow-[0_0_20px_rgba(102,103,171,0.4)]',
      secondary: 'bg-moon-surface hover:bg-moon-surface/80 text-white border border-white/10',
      outline: 'bg-transparent border border-moon-primary text-moon-primary hover:bg-moon-primary/10',
      ghost: 'bg-transparent text-moon-highlight hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
