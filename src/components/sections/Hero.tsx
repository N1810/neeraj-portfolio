import React from 'react';
import Image from 'next/image';
import { Download, ArrowDown, Sparkles, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { CardCornerCrosshairs } from '@/components/ui/CornerAccents';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative Warm Ambient Blur Shapes */}
      <div
        className="absolute top-10 left-1/4 -z-10 w-96 h-96 rounded-full bg-[#EAD8C8]/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 -z-10 w-80 h-80 rounded-full bg-[#F2E4D8]/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFCF7] border border-[#D9DDCB] shadow-xs mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A6A58D] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A6A58D]" />
              </span>
              <span className="text-xs font-medium text-[#29251F]">
                Available for new opportunities
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1.5px] bg-[#B76E4F]" aria-hidden="true" />
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFCF7] border border-[#EAD8C8] shadow-2xs">
                <Code2 size={13} className="text-[#B76E4F]" />
                <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.18em] text-[#965239]">
                  FULL STACK DEVELOPER
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#29251F] font-bold tracking-tight leading-[1.08] mb-4">
              Hi, I&apos;m <span className="text-[#B76E4F] italic font-normal">Neeraj Kumar</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-[#965239] mb-5 tracking-wide">
              Full Stack Developer &amp; Problem Solver
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#6E675F] max-w-xl leading-relaxed mb-8">
              Full Stack Developer &amp; Software Engineer building high-performance, scalable web applications with React, Next.js, TypeScript, and Node.js. Delivering clean architecture, robust APIs, and production solutions from New Delhi, India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button href="#projects" variant="primary" size="lg" icon={<ArrowDown size={16} />}>
                Explore My Projects
              </Button>
              <Button
                href="/resume/Neeraj_FullStack_Developer.pdf"
                download="Neeraj_FullStack_Developer.pdf"
                variant="secondary"
                size="lg"
                icon={<Download size={16} />}
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links Bar */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-4 border-t border-[#EAD8C8] w-full max-w-xl">
              <span className="text-xs uppercase tracking-wider text-[#6E675F] font-semibold shrink-0">
                Connect:
              </span>
              <SocialLinks variant="pill" />
            </div>
          </div>

          {/* Right Column: Premium Workspace Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Editorial Layered Frame */}
              <div
                className="absolute -inset-3 rounded-3xl bg-[#EAD8C8]/50 -rotate-1 -z-10 border border-[#EAD8C8]"
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#EAD8C8] bg-[#FFFCF7] shadow-xl aspect-[4/3] group">
                <CardCornerCrosshairs color="text-[#FFFCF7]/70" />
                <Image
                  src="/images/hero-workspace.jpg"
                  alt="Neeraj Kumar developer workspace with code editor on laptop, warm ambient lighting and notebooks"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Gradient Wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#29251F]/40 via-transparent to-transparent opacity-60" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#FFFCF7]/95 backdrop-blur-md border border-[#EAD8C8] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F2E4D8] text-[#965239] flex items-center justify-center">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#29251F]">Clean Architecture</p>
                      <p className="text-[11px] text-[#6E675F]">React, Next.js, Node &amp; Cloud</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#B76E4F] bg-[#F8F1E8] px-2.5 py-1 rounded-full border border-[#EAD8C8]">
                    New Delhi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
