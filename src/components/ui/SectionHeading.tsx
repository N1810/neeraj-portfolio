import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  icon?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  icon,
}) => {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-5 h-[1.5px] bg-[#B76E4F]" aria-hidden="true" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFCF7] border border-[#EAD8C8] shadow-2xs">
            {icon && <span className="text-[#B76E4F] shrink-0">{icon}</span>}
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.18em] text-[#965239]">
              {eyebrow}
            </span>
          </div>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#29251F] tracking-tight leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#6E675F] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
