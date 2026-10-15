'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { caseStudies, CaseStudy } from '@/data/case-studies';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { GithubIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

export const CaseStudiesSection: React.FC = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalStudies = caseStudies.length;

  const primaryStudy = caseStudies[0];
  const supportingStudies = caseStudies.slice(1);

  const handleNext = useCallback(() => {
    setDirection(1);
    setMobileIndex((prev) => (prev + 1) % totalStudies);
  }, [totalStudies]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setMobileIndex((prev) => (prev - 1 + totalStudies) % totalStudies);
  }, [totalStudies]);

  const currentMobileStudy = caseStudies[mobileIndex];

  return (
    <section id="case-studies" className="py-16 md:py-32 relative border-t border-[#EAD8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 md:mb-12">
          <SectionHeading
            eyebrow="SELECTED CASE STUDIES"
            title="From problem to product."
            description="An inside look at the problems I solve, the decisions I make, and the products I build."
            className="mb-0"
          />

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FFFCF7] border border-[#EAD8C8] text-xs font-semibold text-[#29251F] hover:bg-[#F2E4D8] hover:border-[#B76E4F] transition-all duration-200 shadow-xs self-start md:self-end"
          >
            <BookOpen size={14} className="text-[#B76E4F]" />
            <span>All Case Studies ({totalStudies})</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* ======================================================== */}
        {/* MOBILE SLIDER (Visible on mobile/tablet < md screens)    */}
        {/* ======================================================== */}
        <div className="block md:hidden">
          {/* Mobile Top Navigation Toolbar */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#EAD8C8]/60">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base text-[#29251F]">
                {String(mobileIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#965239]">
                / {String(totalStudies).padStart(2, '0')} Studies
              </span>
            </div>

            {/* Prev / Next Circular Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Case Study"
                className="w-9 h-9 rounded-full bg-[#FFFCF7] border border-[#EAD8C8] text-[#29251F] flex items-center justify-center hover:bg-[#B76E4F] hover:text-[#FFFCF7] hover:border-[#B76E4F] active:scale-95 transition-all shadow-2xs cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Case Study"
                className="w-9 h-9 rounded-full bg-[#FFFCF7] border border-[#EAD8C8] text-[#29251F] flex items-center justify-center hover:bg-[#B76E4F] hover:text-[#FFFCF7] hover:border-[#B76E4F] active:scale-95 transition-all shadow-2xs cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Swipeable Active Case Study Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={currentMobileStudy.slug}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -40 || info.velocity.x < -300) {
                    handleNext();
                  } else if (info.offset.x > 40 || info.velocity.x > 300) {
                    handlePrev();
                  }
                }}
                className="w-full rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] overflow-hidden shadow-lg flex flex-col cursor-grab active:cursor-grabbing touch-pan-y"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2E4D8]/60 border-b border-[#EAD8C8]">
                  <Image
                    src={currentMobileStudy.imageUrl}
                    alt={`${currentMobileStudy.title} - ${currentMobileStudy.category}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFFCF7]/95 text-[#965239] backdrop-blur-xs border border-[#EAD8C8] shadow-2xs">
                      {currentMobileStudy.category}
                    </span>
                  </div>

                  {mobileIndex === 0 && (
                    <div className="absolute bottom-3 right-3 bg-[#FFFCF7]/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#965239] border border-[#EAD8C8] shadow-2xs">
                      Primary Study
                    </div>
                  )}
                </div>

                {/* Details Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#29251F] leading-snug">
                        {currentMobileStudy.title}
                      </h3>

                      <div className="flex items-center gap-1 shrink-0 pt-0.5">
                        {currentMobileStudy.repoUrl && (
                          <a
                            href={currentMobileStudy.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${currentMobileStudy.title} repository`}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[#6E675F] hover:text-[#965239] hover:bg-[#F2E4D8] transition-colors"
                          >
                            <GithubIcon size={14} />
                          </a>
                        )}
                        {currentMobileStudy.liveUrl && (
                          <a
                            href={currentMobileStudy.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit live site for ${currentMobileStudy.title}`}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[#6E675F] hover:text-[#965239] hover:bg-[#F2E4D8] transition-colors"
                          >
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-[#965239] mb-3">
                      {currentMobileStudy.overview}
                    </p>

                    {/* Problem / Solution Snapshot */}
                    <div className="space-y-2 mb-4 bg-[#F8F1E8]/70 p-3.5 rounded-2xl border border-[#EAD8C8]/70 text-[11px]">
                      <div>
                        <span className="font-bold uppercase tracking-wider text-[#965239] flex items-center gap-1 mb-0.5">
                          <AlertCircle size={12} className="text-[#B76E4F]" />
                          The Problem
                        </span>
                        <p className="text-[#6E675F] leading-relaxed line-clamp-2">
                          {currentMobileStudy.problem}
                        </p>
                      </div>
                      <div>
                        <span className="font-bold uppercase tracking-wider text-[#965239] flex items-center gap-1 mb-0.5">
                          <CheckCircle2 size={12} className="text-emerald-700" />
                          Solution
                        </span>
                        <p className="text-[#6E675F] leading-relaxed line-clamp-2">
                          {currentMobileStudy.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {currentMobileStudy.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#F8F1E8] text-[#29251F] font-medium border border-[#EAD8C8]/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read Case Study CTA */}
                  <div className="pt-3 border-t border-[#EAD8C8]/60 flex items-center justify-between">
                    <Link
                      href={`/case-studies/${currentMobileStudy.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B76E4F] hover:bg-[#965239] text-[#FFFCF7] text-xs font-semibold shadow-xs transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={13} />
                    </Link>

                    <span className="text-[10px] uppercase tracking-wider text-[#6E675F]">
                      Swipe &rarr;
                    </span>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="w-full mt-5 flex items-center justify-center gap-2 mx-auto">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setDirection(idx > mobileIndex ? 1 : -1);
                  setMobileIndex(idx);
                }}
                aria-label={`Go to case study ${idx + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300 cursor-pointer p-0 border-0 outline-none',
                  mobileIndex === idx ? 'w-8 bg-[#B76E4F]' : 'w-2 bg-[#EAD8C8] hover:bg-[#B76E4F]/40'
                )}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP LAYOUT (Visible on md and larger screens)        */}
        {/* ======================================================== */}
        <div className="hidden md:block">
          {/* Primary Case Study Spotlight */}
          <div className="mb-10">
            <CaseStudyCard caseStudy={primaryStudy} featured={true} />
          </div>

          {/* Supporting Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportingStudies.map((study) => (
              <CaseStudyCard key={study.slug} caseStudy={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
