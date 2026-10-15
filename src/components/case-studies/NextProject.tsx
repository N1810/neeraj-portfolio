import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MessageSquare, BookOpen } from 'lucide-react';
import { CaseStudy } from '@/data/case-studies';
import { Button } from '@/components/ui/Button';

interface NextProjectProps {
  currentSlug: string;
  nextCaseStudy: CaseStudy;
}

export const NextProject: React.FC<NextProjectProps> = ({ nextCaseStudy }) => {
  return (
    <div className="border-t border-[#EAD8C8] bg-[#F8F1E8]/70 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Next Case Study Preview */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#965239] block mb-2">
            Next Case Study
          </span>
          <Link
            href={`/case-studies/${nextCaseStudy.slug}`}
            className="group block p-8 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs hover:border-[#B76E4F]/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#965239]">
                  {nextCaseStudy.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F] group-hover:text-[#965239] transition-colors mt-1">
                  {nextCaseStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E675F] mt-2 line-clamp-2 max-w-xl">
                  {nextCaseStudy.overview}
                </p>
              </div>

              <div className="w-12 h-12 rounded-full bg-[#F8F1E8] text-[#965239] flex items-center justify-center shrink-0 border border-[#EAD8C8] group-hover:bg-[#B76E4F] group-hover:text-[#FFFCF7] transition-all group-hover:translate-x-1">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        </div>

        {/* Contact CTA Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#965239] mb-2">
              <MessageSquare size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">
                Work Together
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#29251F]">
              Have a similar problem or product in mind?
            </h4>
            <p className="text-xs sm:text-sm text-[#6E675F] mt-1.5 max-w-lg leading-relaxed">
              I&apos;m open to technical collaborations, full-stack consulting, freelance builds, and full-time opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              href="/#contact"
              variant="primary"
              size="md"
              icon={<ArrowUpRight size={15} />}
            >
              Let&apos;s Connect
            </Button>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#EAD8C8] text-xs font-semibold text-[#29251F] hover:bg-[#F2E4D8] transition-colors"
            >
              <BookOpen size={13} />
              <span>All Studies</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
