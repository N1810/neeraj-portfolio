import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { MoreProjects } from '@/components/sections/MoreProjects';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { BeyondCode } from '@/components/sections/BeyondCode';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <div className="editorial-bg">
      <Hero />
      <Stats />
      <About />
      <CaseStudiesSection />
      <FeaturedProjects />
      <MoreProjects />
      <Skills />
      <Experience />
      <Education />
      <BeyondCode />
      <Contact />
    </div>
  );
}
