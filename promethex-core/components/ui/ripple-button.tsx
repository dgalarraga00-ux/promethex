import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

interface Ripple {
  x: number;
  y: number;
  size: number;
  key: number;
}

export interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
  duration?: string;
}

export function RippleButton({
  children,
  rippleColor = 'rgba(255,255,255,0.3)',
  duration = '600ms',
  className,
  onClick,
  ...rest
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const key = Date.now();

    setRipples(prev => [...prev, { x, y, size, key }]);

    const handle = setTimeout(() => {
      setRipples(prev => prev.filter(r => r.key !== key));
    }, parseInt(duration));

    timeouts.current.push(handle);

    onClick?.(e);
  }

  return (
    <button
      {...rest}
      className={cn('relative overflow-hidden', className)}
      onClick={handleClick}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.key}
          className="absolute rounded-full pointer-events-none animate-[rippling_var(--duration)_ease-out]"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor,
            '--duration': duration,
          } as React.CSSProperties}
        />
      ))}
    </button>
  );
}
