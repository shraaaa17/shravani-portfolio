import React from 'react';
import { cn } from './Button';

interface TechChipProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export const TechChip: React.FC<TechChipProps> = ({ label, icon, className }) => {
  return (
    <div className={cn(
      'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium',
      'bg-moon-surface/60 border border-white/5 text-moon-highlight',
      'transition-all duration-300 hover:bg-moon-primary/20 hover:border-moon-primary/30',
      className
    )}>
      {icon && <span className="text-moon-primary">{icon}</span>}
      {label}
    </div>
  );
};
