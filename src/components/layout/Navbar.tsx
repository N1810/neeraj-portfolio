'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Case Studies', href: '/#case-studies' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Interests', href: '/#interests' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'case-studies', 'projects', 'experience', 'skills', 'interests', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#F8F1E8]/95 backdrop-blur-md border-b border-[#EAD8C8] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B76E4F] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-full bg-[#B76E4F] text-[#FFFCF7] flex items-center justify-center font-serif font-bold text-sm tracking-wider shadow-xs group-hover:bg-[#965239] transition-colors">
              NK
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg text-[#29251F] tracking-tight group-hover:text-[#965239] transition-colors leading-tight">
                Neeraj Kumar
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#6E675F] font-medium">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FFFCF7]/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#EAD8C8]/80 shadow-xs">
            {navItems.map((item) => {
              const targetId = item.href.replace('/#', '').replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
                    isActive
                      ? 'bg-[#B76E4F] text-[#FFFCF7] shadow-xs'
                      : 'text-[#6E675F] hover:text-[#29251F] hover:bg-[#EAD8C8]/40'
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Let's Connect CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="/#contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              icon={<ArrowUpRight size={14} />}
            >
              Let&apos;s Connect
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-xl text-[#29251F] hover:bg-[#EAD8C8]/60 focus:outline-none focus:ring-2 focus:ring-[#B76E4F]"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F1E8] border-b border-[#EAD8C8] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const targetId = item.href.replace('/#', '').replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between',
                    isActive
                      ? 'bg-[#B76E4F] text-[#FFFCF7]'
                      : 'text-[#29251F] hover:bg-[#EAD8C8]/50'
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FFFCF7]" />}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#EAD8C8]">
              <Button
                href="/#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowUpRight size={16} />}
              >
                Let&apos;s Connect
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
