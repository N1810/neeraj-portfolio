import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ExternalLink, Wrench, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { CaseStudy } from '@/data/case-studies';
import { CardCornerBrackets } from '@/components/ui/CornerAccents';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  featured = false,
  className = '',
}) => {
  if (featured) {
    return (
      <article
        className={cn(
          'group relative rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#B76E4F]/50 transition-all duration-300',
          className
        )}
      >
        <CardCornerBrackets color="text-[#B76E4F]/25" size={14} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual Side */}
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#F2E4D8]/60 border-b lg:border-b-0 lg:border-r border-[#EAD8C8]">
            <Image
              src={caseStudy.imageUrl}
              alt={`${caseStudy.title} - ${caseStudy.category}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFCF7]/95 text-[#965239] backdrop-blur-xs border border-[#EAD8C8] shadow-xs">
                {caseStudy.category}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#FFFCF7]/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-medium text-[#6E675F] border border-[#EAD8C8] shadow-xs">
              Primary Case Study
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F] group-hover:text-[#965239] transition-colors">
                  {caseStudy.title}
                </h3>

                <div className="flex items-center gap-1.5 shrink-0">
                  {caseStudy.repoUrl && (
                    <a
                      href={caseStudy.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${caseStudy.title} source code on GitHub`}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E675F] hover:text-[#965239] hover:bg-[#F2E4D8] transition-colors"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {caseStudy.liveUrl && (
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit live demo for ${caseStudy.title}`}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E675F] hover:text-[#965239] hover:bg-[#F2E4D8] transition-colors"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm font-medium text-[#965239] mb-4">
                {caseStudy.overview}
              </p>

              {/* Problem / Solution Snapshot */}
              <div className="space-y-3 mb-6 bg-[#F8F1E8]/70 p-4 rounded-2xl border border-[#EAD8C8]/70 text-xs">
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#965239] flex items-center gap-1 mb-1">
                    <AlertCircle size={13} className="text-[#B76E4F]" />
                    The Problem
                  </span>
                  <p className="text-[#6E675F] leading-relaxed line-clamp-2">
                    {caseStudy.problem}
                  </p>
                </div>
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#965239] flex items-center gap-1 mb-1">
                    <CheckCircle2 size={13} className="text-emerald-700" />
                    My Solution
                  </span>
                  <p className="text-[#6E675F] leading-relaxed line-clamp-2">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Challenges */}
              {caseStudy.challenges.length > 0 && (
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#965239] block mb-1.5 flex items-center gap-1">
                    <Wrench size={12} />
                    Key Technical Challenges
                  </span>
                  <ul className="space-y-1 text-xs text-[#6E675F]">
                    {caseStudy.challenges.slice(0, 2).map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#B76E4F]">&bull;</span>
                        <span className="line-clamp-1">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Stack & CTA */}
            <div className="pt-4 border-t border-[#EAD8C8]/60">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {caseStudy.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#F8F1E8] text-[#29251F] font-medium border border-[#EAD8C8]/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/case-studies/${caseStudy.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B76E4F] hover:bg-[#965239] text-[#FFFCF7] text-xs font-semibold shadow-xs hover:shadow-md transition-all duration-200"
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#B76E4F]/50 transition-all duration-300',
        className
      )}
    >
      <CardCornerBrackets color="text-[#B76E4F]/25" size={14} />
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2E4D8]/60 border-b border-[#EAD8C8]">
        <Image
          src={caseStudy.imageUrl}
          alt={`${caseStudy.title} - ${caseStudy.category}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFCF7]/95 text-[#965239] backdrop-blur-xs border border-[#EAD8C8] shadow-xs">
            {caseStudy.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-serif font-bold text-[#29251F] group-hover:text-[#965239] transition-colors">
            {caseStudy.title}
          </h3>

          <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
            {caseStudy.repoUrl && (
              <a
                href={caseStudy.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${caseStudy.title} on GitHub`}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#6E675F] hover:text-[#965239] hover:bg-[#F2E4D8] transition-colors"
              >
                <GithubIcon size={15} />
              </a>
            )}
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live site for ${caseStudy.title}`}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#6E675F] hover:text-[#965239] hover:bg-[#F2E4D8] transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs font-semibold text-[#965239] mb-3">
          {caseStudy.overview}
        </p>

        <p className="text-xs text-[#6E675F] line-clamp-3 leading-relaxed mb-4">
          {caseStudy.problem}
        </p>

        {/* Stack & Link */}
        <div className="mt-auto pt-4 border-t border-[#EAD8C8]/60">
          <div className="flex flex-wrap gap-1 mb-4">
            {caseStudy.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-0.5 rounded bg-[#F8F1E8] text-[#29251F] font-medium border border-[#EAD8C8]/60"
              >
                {t}
              </span>
            ))}
            {caseStudy.technologies.length > 4 && (
              <span className="text-[10px] px-1.5 py-0.5 text-[#6E675F]">
                +{caseStudy.technologies.length - 4}
              </span>
            )}
          </div>

          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B76E4F] group-hover:text-[#965239] transition-colors"
          >
            <span>Read Case Study</span>
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};
