import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { SocialLinks } from '@/components/ui/SocialLinks';

const footerNav = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Interests', href: '/#interests' },
  { name: 'Contact', href: '/#contact' },
];

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#EAD8C8] bg-[#F8F1E8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EAD8C8]">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#B76E4F] text-[#FFFCF7] flex items-center justify-center font-serif font-bold text-base shadow-xs group-hover:bg-[#965239] transition-colors">
                NK
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-[#29251F] tracking-tight group-hover:text-[#965239] transition-colors">
                  Neeraj Kumar
                </span>
                <span className="text-xs uppercase tracking-widest text-[#6E675F] font-medium">
                  Full Stack Developer
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#6E675F] max-w-sm leading-relaxed mt-2">
              Building modern, scalable web applications with clean code, purposeful design, and robust architectures.
            </p>

            <div className="mt-2">
              <SocialLinks variant="boxed" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#965239] mb-2">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#6E675F] hover:text-[#965239] transition-colors inline-block py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tagline & Scroll To Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#965239] mb-2 md:text-right">
                Philosophy
              </h4>
              <p className="font-serif italic text-lg text-[#29251F] md:text-right">
                &ldquo;Build. Learn. Grow.&rdquo;
              </p>
              <p className="text-xs text-[#6E675F] mt-1 md:text-right">
                Based in New Delhi, India
              </p>
            </div>

            <a
              href="#home"
              aria-label="Scroll back to top of page"
              className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[#6E675F] hover:text-[#965239] transition-colors bg-[#FFFCF7] border border-[#EAD8C8] px-3.5 py-2 rounded-full shadow-xs hover:border-[#B76E4F]"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E675F]">
          <p>© {currentYear} Neeraj Kumar. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed &amp; engineered with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
