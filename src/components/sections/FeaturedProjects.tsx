'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ArrowDown,
  ArrowUp,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { featuredProjects, Project } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GithubIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'developer-tool', label: 'Developer Tools' },
  { id: 'personal', label: 'Personal & Open Source' },
  { id: 'freelance', label: 'Freelance & Client Works' },
];

// Curated luxury pastel palettes for each slide matching Slider Verticalix design
const slideColorPalettes = [
  {
    bg: 'bg-[#EAE4F5]', // Soft Lilac / Purple (like the Framer template screenshot)
    textColor: 'text-[#2D1B4E]',
    subtextColor: 'text-[#5B437D]',
    accentColor: 'text-[#50298A]',
    borderColor: 'border-[#D5C7EA]',
    buttonBorder: 'border-[#2D1B4E]/30',
    buttonHover: 'hover:bg-[#2D1B4E]/10 active:bg-[#2D1B4E]/15',
    tagBg: 'bg-[#FFFFFF]/85 text-[#4A2875] border-[#D5C7EA]',
  },
  {
    bg: 'bg-[#F5ECE1]', // Warm Editorial Sand / Terracotta
    textColor: 'text-[#2B2118]',
    subtextColor: 'text-[#6B5A4B]',
    accentColor: 'text-[#965239]',
    borderColor: 'border-[#E2D2C3]',
    buttonBorder: 'border-[#2B2118]/30',
    buttonHover: 'hover:bg-[#2B2118]/10 active:bg-[#2B2118]/15',
    tagBg: 'bg-[#FFFFFF]/85 text-[#965239] border-[#E2D2C3]',
  },
  {
    bg: 'bg-[#E3EFF6]', // Crisp Slate Sky Blue
    textColor: 'text-[#162938]',
    subtextColor: 'text-[#446279]',
    accentColor: 'text-[#0284C7]',
    borderColor: 'border-[#C5DFEE]',
    buttonBorder: 'border-[#162938]/30',
    buttonHover: 'hover:bg-[#162938]/10 active:bg-[#162938]/15',
    tagBg: 'bg-[#FFFFFF]/85 text-[#0369A1] border-[#C5DFEE]',
  },
  {
    bg: 'bg-[#EAF2E7]', // Sage Botanical Green
    textColor: 'text-[#1C321E]',
    subtextColor: 'text-[#47674A]',
    accentColor: 'text-[#2E7D32]',
    borderColor: 'border-[#CFE3CB]',
    buttonBorder: 'border-[#1C321E]/30',
    buttonHover: 'hover:bg-[#1C321E]/10 active:bg-[#1C321E]/15',
    tagBg: 'bg-[#FFFFFF]/85 text-[#2E7D32] border-[#CFE3CB]',
  },
  {
    bg: 'bg-[#F9ECEB]', // Rose Blush / Muted Coral
    textColor: 'text-[#3E1A20]',
    subtextColor: 'text-[#7B464F]',
    accentColor: 'text-[#C24158]',
    borderColor: 'border-[#EED1D5]',
    buttonBorder: 'border-[#3E1A20]/30',
    buttonHover: 'hover:bg-[#3E1A20]/10 active:bg-[#3E1A20]/15',
    tagBg: 'bg-[#FFFFFF]/85 text-[#A22B42] border-[#EED1D5]',
  },
  {
    bg: 'bg-[#FDF4DF]', // Warm Amber / Butterscotch
    textColor: 'text-[#3B290A]',
    subtextColor: 'text-[#735A2D]',
    accentColor: 'text-[#B45309]',
    borderColor: 'border-[#F5DEB0]',
    buttonBorder: 'border-[#3B290A]/30',
    buttonHover: 'hover:bg-[#3B290A]/10 active:bg-[#3B290A]/15',
    tagBg: 'bg-[#FFFFFF]/85 text-[#B45309] border-[#F5DEB0]',
  },
  {
    bg: 'bg-[#ECEFF3]', // Studio Graphite / Cool Silver
    textColor: 'text-[#1E252D]',
    subtextColor: 'text-[#4B5663]',
    accentColor: 'text-[#334155]',
    borderColor: 'border-[#CBD5E1]',
    buttonBorder: 'border-[#1E252D]/30',
    buttonHover: 'hover:bg-[#1E252D]/10 active:bg-[#1E252D]/15',
    tagBg: 'bg-[#FFFFFF]/85 text-[#334155] border-[#CBD5E1]',
  },
  {
    bg: 'bg-[#F6EBF8]', // Orchid / Lavender Frost
    textColor: 'text-[#341738]',
    subtextColor: 'text-[#69426F]',
    accentColor: 'text-[#86198F]',
    borderColor: 'border-[#E8CEEC]',
    buttonBorder: 'border-[#341738]/30',
    buttonHover: 'hover:bg-[#341738]/10 active:bg-[#341738]/15',
    tagBg: 'bg-[#FFFFFF]/85 text-[#86198F] border-[#E8CEEC]',
  },
];

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProjects: Project[] =
    activeFilter === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.type === activeFilter);

  const totalSlides = filteredProjects.length;

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(1);
  }, [activeFilter]);

  // Handle slide transitions
  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [isAnimating, totalSlides]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [isAnimating, totalSlides]);

  // Keyboard navigation (ArrowDown / ArrowUp)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        goToNext();
      } else if (e.key === 'ArrowUp') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Wheel listener with throttle (desktop)
  const lastWheelTime = useRef<number>(0);
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 600) return;

    if (Math.abs(e.deltaY) > 35) {
      lastWheelTime.current = now;
      if (e.deltaY > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];
  const palette = slideColorPalettes[currentIndex % slideColorPalettes.length];

  // Previous and next project for background vertical peek cards
  const prevProject =
    filteredProjects[(currentIndex - 1 + totalSlides) % totalSlides];
  const nextProject =
    filteredProjects[(currentIndex + 1) % totalSlides];

  const prevPalette =
    slideColorPalettes[
      (currentIndex - 1 + totalSlides) % slideColorPalettes.length
    ];
  const nextPalette =
    slideColorPalettes[(currentIndex + 1) % slideColorPalettes.length];

  // Framer Motion vertical slide variants
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: 'spring' as const, stiffness: 240, damping: 28 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: {
        y: { type: 'spring' as const, stiffness: 240, damping: 28 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  const imageVariants: Variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 70 : -70,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: 'spring' as const, stiffness: 220, damping: 26, delay: 0.04 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -70 : 70,
      opacity: 0,
      scale: 0.96,
      transition: {
        y: { type: 'spring' as const, stiffness: 220, damping: 26 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-28 relative overflow-hidden"
      onWheel={handleWheel}
      aria-label="Slider Verticalix Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6 sm:mb-8">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Some things I've built"
            description="A mix of freelance, personal, and open-source projects."
            className="mb-0"
          />

          {/* Category Filter Pills (Horizontal scrollable on mobile) */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs w-max">
              {filterCategories.map((cat) => {
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveFilter(cat.id)}
                    className={cn(
                      'px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap',
                      isActive
                        ? 'bg-[#B76E4F] text-[#FFFCF7] shadow-xs'
                        : 'text-[#6E675F] hover:text-[#29251F] hover:bg-[#EAD8C8]/40'
                    )}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* SLIDER VERTICALIX GALLERY STAGE */}
        <div className="relative py-4 sm:py-8 md:py-12 select-none">
          {/* Top Peeking Slide (Blurred Previous Card, visible on mobile & desktop) */}
          {prevProject && (
            <div
              className={cn(
                'absolute top-1 sm:top-0 left-2 right-2 sm:left-6 sm:right-6 md:left-12 md:right-12 h-10 sm:h-16 md:h-20 rounded-[20px] sm:rounded-[28px] md:rounded-[36px] border opacity-40 blur-[2px] sm:blur-[2.5px] scale-[0.97] -translate-y-2 sm:-translate-y-4 pointer-events-none transition-colors duration-500 overflow-hidden',
                prevPalette.bg,
                prevPalette.borderColor
              )}
              aria-hidden="true"
            />
          )}

          {/* Bottom Peeking Slide (Blurred Next Card, visible on mobile & desktop) */}
          {nextProject && (
            <div
              className={cn(
                'absolute bottom-1 sm:bottom-0 left-2 right-2 sm:left-6 sm:right-6 md:left-12 md:right-12 h-10 sm:h-16 md:h-20 rounded-[20px] sm:rounded-[28px] md:rounded-[36px] border opacity-40 blur-[2px] sm:blur-[2.5px] scale-[0.97] translate-y-2 sm:translate-y-4 pointer-events-none transition-colors duration-500 overflow-hidden',
                nextPalette.bg,
                nextPalette.borderColor
              )}
              aria-hidden="true"
            />
          )}

          {/* Main Active Stage Card with Multi-Gesture Swipe (touch vertical & horizontal) */}
          <motion.div
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={0.16}
            onDragEnd={(e, info) => {
              const isVertical = Math.abs(info.offset.y) >= Math.abs(info.offset.x);
              if (isVertical) {
                if (info.offset.y < -35 || info.velocity.y < -300) {
                  goToNext();
                } else if (info.offset.y > 35 || info.velocity.y > 300) {
                  goToPrev();
                }
              } else {
                // Support natural horizontal swipe on mobile
                if (info.offset.x < -35 || info.velocity.x < -300) {
                  goToNext();
                } else if (info.offset.x > 35 || info.velocity.x > 300) {
                  goToPrev();
                }
              }
            }}
            className={cn(
              'relative z-10 w-full min-h-[480px] sm:min-h-[520px] md:min-h-[560px] rounded-[24px] sm:rounded-[32px] md:rounded-[44px] border shadow-xl sm:shadow-2xl p-5 sm:p-8 md:p-12 lg:p-16 transition-colors duration-500 flex flex-col justify-between overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y',
              palette.bg,
              palette.borderColor
            )}
          >
            {/* Background watermark icon */}
            <div
              className="absolute -right-12 -bottom-12 w-64 h-64 sm:w-96 sm:h-96 opacity-[0.035] pointer-events-none select-none"
              aria-hidden="true"
            >
              <Sparkles className="w-full h-full text-current" />
            </div>

            <AnimatePresence
              mode="wait"
              custom={direction}
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={currentProject.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col lg:grid lg:grid-cols-12 gap-5 sm:gap-8 md:gap-12 items-center flex-1 my-auto"
              >
                {/* Mobile View: Image is displayed on top / desktop on right */}
                <motion.div
                  variants={imageVariants}
                  className="w-full lg:col-span-6 order-1 lg:order-2"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-black/10 shadow-lg sm:shadow-xl bg-black/5 group">
                    {currentProject.imageUrl ? (
                      <Image
                        src={currentProject.imageUrl}
                        alt={`${currentProject.title} - ${currentProject.category}`}
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-8 text-center bg-[#F8F1E8]">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-[#29251F]">
                          {currentProject.title}
                        </span>
                      </div>
                    )}

                    {/* Quick Launch Tag on mobile / Full hover overlay on desktop */}
                    <a
                      href={currentProject.liveUrl || currentProject.repoUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/35 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-xs sm:text-sm"
                    >
                      <span className="bg-white/95 text-black px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <span>{currentProject.liveUrl ? 'Visit Website' : 'Explore Source'}</span>
                        <ExternalLink size={14} />
                      </span>
                    </a>
                  </div>
                </motion.div>

                {/* Content Side: Title, Details, and Verticalix Controls */}
                <div className="w-full lg:col-span-6 order-2 lg:order-1 flex flex-col justify-between">
                  <div>
                    {/* Category Pill Tag */}
                    <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-4">
                      <span
                        className={cn(
                          'inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border shadow-2xs backdrop-blur-xs',
                          palette.tagBg
                        )}
                      >
                        {currentProject.category}
                      </span>
                    </div>

                    {/* Massive Bold Headline (Slider Verticalix signature style) */}
                    <h3
                      className={cn(
                        'text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-black tracking-tight leading-[1.08] mb-2.5 sm:mb-4',
                        palette.textColor
                      )}
                    >
                      {currentProject.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={cn(
                        'text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-4 max-w-xl mb-3.5 sm:mb-6',
                        palette.subtextColor
                      )}
                    >
                      {currentProject.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-8">
                      {currentProject.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={cn(
                            'text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border backdrop-blur-xs',
                            palette.tagBg
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Bar & Controls (Matching Slider Verticalix exactly) */}
                  <div className="pt-3 sm:pt-4 border-t border-current/15 flex items-center justify-between gap-3 mt-auto">
                    {/* Arrow Navigation and Index Counter */}
                    <div className="flex items-center gap-2.5 sm:gap-4">
                      {/* Down Arrow Button (↓ Next Slide) */}
                      <button
                        type="button"
                        onClick={goToNext}
                        aria-label="Next Slide"
                        title="Next Slide (↓)"
                        className={cn(
                          'w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95 shadow-2xs cursor-pointer',
                          palette.buttonBorder,
                          palette.buttonHover,
                          palette.textColor
                        )}
                      >
                        <ArrowDown size={18} />
                      </button>

                      {/* Up Arrow Button (↑ Previous Slide) */}
                      <button
                        type="button"
                        onClick={goToPrev}
                        aria-label="Previous Slide"
                        title="Previous Slide (↑)"
                        className={cn(
                          'w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95 shadow-2xs cursor-pointer',
                          palette.buttonBorder,
                          palette.buttonHover,
                          palette.textColor
                        )}
                      >
                        <ArrowUp size={18} />
                      </button>

                      {/* Index Counter e.g. 1 / 8 */}
                      <div
                        className={cn(
                          'font-serif font-bold text-sm sm:text-base md:text-lg tracking-wider ml-0.5 sm:ml-1',
                          palette.textColor
                        )}
                      >
                        <span>{currentIndex + 1}</span>
                        <span className="opacity-40 mx-1 font-normal">/</span>
                        <span className="opacity-70">{totalSlides}</span>
                      </div>
                    </div>

                    {/* Direct Action Link */}
                    <div className="flex items-center gap-2">
                      {currentProject.repoUrl && (
                        <a
                          href={currentProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${currentProject.title} repository`}
                          className={cn(
                            'inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-full border transition-colors',
                            palette.tagBg
                          )}
                        >
                          <GithubIcon size={13} />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                      )}
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit live demo for ${currentProject.title}`}
                          className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-full bg-[#29251F] text-[#FFFCF7] hover:bg-[#B76E4F] transition-colors shadow-xs"
                        >
                          <span>Visit</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Centered Pagination Dots */}
          <div className="w-full mt-5 flex items-center justify-center gap-2 mx-auto">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300 cursor-pointer p-0 border-0 outline-none',
                  currentIndex === idx
                    ? 'w-8 bg-[#B76E4F]'
                    : 'w-2 bg-[#EAD8C8] hover:bg-[#B76E4F]/40'
                )}
              />
            ))}
          </div>

          {/* Centered Navigation Hint */}
          <div className="mt-3 flex items-center justify-center text-center text-xs text-[#6E675F]">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider">
              Swipe card or use <kbd className="px-1.5 py-0.5 rounded bg-[#EAD8C8]/60 text-[#29251F] font-mono text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-[#EAD8C8]/60 text-[#29251F] font-mono text-[10px]">↓</kbd> arrows to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
