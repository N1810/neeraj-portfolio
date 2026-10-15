import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, UserCheck, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { CaseStudy } from '@/data/case-studies';

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ caseStudy }) => {
  return (
    <div className="pt-28 pb-12 sm:pb-16 border-b border-[#EAD8C8]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#965239] hover:text-[#29251F] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Category & Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#B76E4F]" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#965239]">
              {caseStudy.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#29251F] tracking-tight leading-[1.1] mb-4">
            {caseStudy.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#6E675F] max-w-3xl leading-relaxed">
            {caseStudy.overview}
          </p>
        </div>

        {/* Metadata Card Bar */}
        <div className="p-6 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs mb-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#965239] flex items-center gap-1.5 mb-1">
              <UserCheck size={12} />
              Role
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#29251F]">
              {caseStudy.role}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#965239] flex items-center gap-1.5 mb-1">
              <Calendar size={12} />
              Timeline
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#29251F]">
              {caseStudy.timeline}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#965239] flex items-center gap-1.5 mb-1">
              <Layers size={12} />
              Focus Area
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#29251F] truncate">
              {caseStudy.category.split('/')[0]}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#965239] block mb-1.5">
              Links
            </span>
            <div className="flex items-center gap-2">
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#B76E4F] hover:text-[#965239]"
                >
                  <span>Live Site</span>
                  <ExternalLink size={12} />
                </a>
              )}
              {caseStudy.repoUrl && (
                <a
                  href={caseStudy.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#6E675F] hover:text-[#29251F]"
                >
                  <GithubIcon size={14} />
                  <span>Repo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hero Visual Frame */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#EAD8C8] bg-[#FFFCF7] shadow-xl">
          <Image
            src={caseStudy.imageUrl}
            alt={`${caseStudy.title} interface preview`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};
