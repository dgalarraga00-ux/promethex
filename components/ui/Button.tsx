import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  target?: '_blank' | '_self';
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  href,
  target,
  rel,
  children,
  className = '',
}: ButtonProps) {
  const variantClasses: Record<string, string> = {
    primary:
      'bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors duration-200 inline-block',
    secondary:
      'border border-brand text-text-main px-6 py-3 rounded-lg hover:border-accent transition-colors duration-200 inline-block',
    ghost: 'text-accent underline-offset-4 hover:underline inline-block',
  };

  const classes = `${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}

export default Button;
