import React from 'react';
import { CheckCircle2, AlertCircle, Wrench, Sparkles, Terminal } from 'lucide-react';
import { CaseStudy } from '@/data/case-studies';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ caseStudy }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Executive Problem / Solution Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-7 sm:p-8 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-sm mb-16">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#F8F1E8] text-[#965239] flex items-center justify-center border border-[#EAD8C8]">
              <AlertCircle size={15} />
            </div>
            <h3 className="font-serif font-bold text-base text-[#29251F]">
              The Problem Statement
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#6E675F] leading-relaxed">
            {caseStudy.problem}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#F2E4D8] text-emerald-800 flex items-center justify-center border border-[#EAD8C8]">
              <CheckCircle2 size={15} />
            </div>
            <h3 className="font-serif font-bold text-base text-[#29251F]">
              My Engineering Solution
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#6E675F] leading-relaxed">
            {caseStudy.solution}
          </p>
        </div>
      </div>

      {/* Structured Sections */}
      <div className="space-y-16">
        {caseStudy.sections.map((section, idx) => (
          <section key={idx} className="scroll-mt-24">
            <div className="mb-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F]">
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="text-sm font-semibold uppercase tracking-wider text-[#965239] mt-1">
                  {section.subtitle}
                </p>
              )}
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-base text-[#6E675F] leading-relaxed">
              {section.content.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Highlights / Callouts */}
            {section.highlight && (
              <div className="my-6 p-5 rounded-2xl bg-[#F8F1E8] border-l-4 border-[#B76E4F] border border-[#EAD8C8] shadow-xs">
                <div className="flex items-start gap-3">
                  <Sparkles size={18} className="text-[#B76E4F] shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-[#29251F] italic leading-relaxed">
                    &ldquo;{section.highlight}&rdquo;
                  </p>
                </div>
              </div>
            )}

            {/* Bullets */}
            {section.bullets && section.bullets.length > 0 && (
              <div className="my-6 p-6 rounded-2xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs">
                <ul className="space-y-2.5">
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#29251F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B76E4F] shrink-0 mt-2" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Code Snippet */}
            {section.codeSnippet && (
              <div className="my-6 rounded-2xl overflow-hidden border border-[#29251F] bg-[#1E1B18] text-[#F8F1E8] shadow-md">
                <div className="px-4 py-2 bg-[#29251F] flex items-center justify-between border-b border-[#3D3730]">
                  <div className="flex items-center gap-2 text-xs text-[#A6A58D]">
                    <Terminal size={14} />
                    <span>{section.codeSnippet.language}</span>
                  </div>
                  {section.codeSnippet.caption && (
                    <span className="text-[11px] text-[#A6A58D] font-mono">
                      {section.codeSnippet.caption}
                    </span>
                  )}
                </div>
                <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed text-[#EAD8C8]">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Technical Challenges Deep-Dive */}
      {caseStudy.challenges.length > 0 && (
        <div className="mt-16 p-8 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Wrench size={18} className="text-[#965239]" />
            <h3 className="font-serif font-bold text-xl text-[#29251F]">
              Technical Challenges &amp; Mitigations
            </h3>
          </div>
          <div className="space-y-3">
            {caseStudy.challenges.map((challenge, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#F8F1E8] border border-[#EAD8C8]/60 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-[#EAD8C8] text-[#965239] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-xs sm:text-sm text-[#29251F] leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies Used Grid */}
      <div className="mt-12 p-8 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#965239] mb-4">
          Technologies &amp; Architecture
        </h3>
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-xl bg-[#F8F1E8] text-[#29251F] text-xs font-medium border border-[#EAD8C8] shadow-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
