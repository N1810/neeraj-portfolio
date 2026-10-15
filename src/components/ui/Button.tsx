import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  download?: boolean | string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  download,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer text-center select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-7 py-3 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#B76E4F] hover:bg-[#965239] text-[#FFFCF7] shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-[#B76E4F]',
    secondary:
      'bg-[#EAD8C8] hover:bg-[#F2E4D8] text-[#29251F] border border-[#EAD8C8] hover:border-[#B76E4F]/40 shadow-xs',
    outline:
      'bg-transparent hover:bg-[#EAD8C8]/30 text-[#29251F] border border-[#EAD8C8] hover:border-[#B76E4F]',
    ghost:
      'bg-transparent hover:bg-[#EAD8C8]/40 text-[#6E675F] hover:text-[#29251F]',
  };

  const combinedStyles = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          download={download}
        >
          {children}
          {icon && <span className="inline-flex shrink-0">{icon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} download={download}>
        {children}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
