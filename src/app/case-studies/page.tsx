import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';

export const metadata: Metadata = {
  title: 'Selected Case Studies — Neeraj Kumar | Full Stack Developer',
  description:
    'In-depth technical case studies on software architecture, developer tooling, AI publishing, and eCommerce by Neeraj Kumar.',
  alternates: {
    canonical: 'https://neerajkumar.dev/case-studies',
  },
  openGraph: {
    title: 'Selected Case Studies — Neeraj Kumar',
    description:
      'An inside look at the problems I solve, the decisions I make, and the products I build.',
    url: 'https://neerajkumar.dev/case-studies',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  const primaryStudy = caseStudies[0];
  const supportingStudies = caseStudies.slice(1);

  return (
    <div className="min-h-screen pt-28 pb-24 editorial-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#965239] hover:text-[#29251F] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Main Portfolio</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#B76E4F]" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#965239]">
              SELECTED CASE STUDIES
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#29251F] tracking-tight leading-[1.1]">
            From problem to product.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6E675F] leading-relaxed">
            An inside look at the problems I solve, the decisions I make, and the products I build.
            Explore architecture designs, developer tooling, AI integrations, and responsive client platforms.
          </p>
        </div>

        {/* Featured Primary Spotlight */}
        <div className="mb-12">
          <CaseStudyCard caseStudy={primaryStudy} featured={true} />
        </div>

        {/* Supporting Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportingStudies.map((study) => (
            <CaseStudyCard key={study.slug} caseStudy={study} />
          ))}
        </div>
      </div>
    </div>
  );
}
