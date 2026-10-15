import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  variant?: 'minimal' | 'boxed' | 'pill';
  showLabels?: boolean;
}

export const socialLinksData = [
  {
    name: 'GitHub',
    href: 'https://github.com/N1810',
    icon: GithubIcon,
    label: 'Visit Neeraj Kumar on GitHub',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/neerajkumar1810/',
    icon: LinkedinIcon,
    label: 'Connect with Neeraj Kumar on LinkedIn',
  },
  {
    name: 'Email',
    href: 'mailto:sharmaneeraj1810@gmail.com',
    icon: Mail,
    label: 'Email Neeraj Kumar directly',
  },
];

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  variant = 'boxed',
  showLabels = false,
}) => {
  return (
    <div className={cn('flex flex-wrap items-center gap-2 sm:gap-3', className)}>
      {socialLinksData.map((item) => {
        const Icon = item.icon;

        if (variant === 'pill') {
          return (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={item.label}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#EAD8C8] bg-[#FFFCF7] text-[#29251F] text-[11px] sm:text-xs font-medium hover:border-[#B76E4F] hover:bg-[#F2E4D8] transition-all duration-200 shadow-2xs hover:-translate-y-0.5 shrink-0"
            >
              <Icon size={14} className="text-[#B76E4F]" />
              <span>{item.name}</span>
            </a>
          );
        }

        if (variant === 'minimal') {
          return (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={item.label}
              className="text-[#6E675F] hover:text-[#B76E4F] p-1.5 transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          );
        }

        return (
          <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            aria-label={item.label}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[#EAD8C8] bg-[#FFFCF7] text-[#29251F] hover:text-[#FFFCF7] hover:bg-[#B76E4F] hover:border-[#B76E4F] transition-all duration-200 shadow-xs hover:-translate-y-0.5 group"
          >
            <Icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
            {showLabels && <span className="sr-only">{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
};
