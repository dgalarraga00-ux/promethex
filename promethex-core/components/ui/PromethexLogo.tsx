import React from 'react';
import { cn } from '../../utils/cn';

export interface PromethexLogoProps {
  /** Scale multiplier. Base size is designed for navbar (1x). Use 2–4 for hero. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: { text: 'text-lg',  bracket: 'w-7 h-7 text-xl',   slash: 'text-xl'  },
  md: { text: 'text-2xl', bracket: 'w-10 h-10 text-3xl', slash: 'text-3xl' },
  lg: { text: 'text-5xl', bracket: 'w-16 h-16 text-5xl', slash: 'text-5xl' },
  xl: { text: 'text-6xl md:text-8xl', bracket: 'w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl', slash: 'text-2xl md:text-3xl' },
};

export function PromethexLogo({ size = 'md', className }: PromethexLogoProps) {
  const s = sizeMap[size];

  return (
    <div className={cn('inline-flex flex-nowrap items-center whitespace-nowrap font-montserrat font-bold tracking-tight select-none', className)}>
      {/* PROMETHE — white */}
      <span className={cn('text-white', s.text)}>
        PROMETHE
      </span>

      {/* X — rosa accent */}
      <span
        className={cn(s.text)}
        style={{ color: 'var(--promethex-cta, #E2B0B3)' }}
      >
        X
      </span>

      {/* Spacer */}
      <span className="mx-1" />

      {/* Bordered square with slash */}
      <div
        className={cn(
          'inline-flex items-center justify-center border-2 border-white font-bold text-white',
          s.bracket,
        )}
        style={{ lineHeight: 1 }}
      >
        <span className={s.slash}>/</span>
      </div>
    </div>
  );
}
