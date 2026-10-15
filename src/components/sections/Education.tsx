import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { educationList } from '@/data/experience';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CardCornerBrackets } from '@/components/ui/CornerAccents';

export const Education: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative border-t border-[#EAD8C8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<GraduationCap size={13} className="text-[#B76E4F]" />}
          eyebrow="ACADEMIC BACKGROUND"
          title="Education &amp; Foundations"
          description="Formal degree coursework focusing on software engineering principles, distributed systems, and computer applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs hover:border-[#B76E4F]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <CardCornerBrackets color="text-[#B76E4F]/25" size={12} />
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F2E4D8] text-[#965239] flex items-center justify-center shrink-0 border border-[#EAD8C8]">
                    {edu.status === 'Pursuing' ? (
                      <BookOpen size={20} />
                    ) : (
                      <GraduationCap size={22} />
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#F8F1E8] text-[#965239] border border-[#EAD8C8]">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B76E4F]">
                    {edu.status || 'Graduated'}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#29251F] leading-snug">
                  {edu.degree}
                </h3>

                <p className="text-sm font-medium text-[#6E675F] mt-1.5">
                  {edu.institution}
                </p>

                {edu.description && (
                  <p className="text-xs text-[#6E675F] mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
