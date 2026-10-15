import React from 'react';
import { Calendar, Building2, MapPin, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';
import { experiences } from '@/data/experience';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CardCornerBrackets } from '@/components/ui/CornerAccents';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative bg-[#F8F1E8]/60 border-t border-[#EAD8C8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Briefcase size={13} className="text-[#B76E4F]" />}
          eyebrow="CAREER &amp; TRACK RECORD"
          title="My professional journey"
          description="Real-world engineering experience developing production applications, optimizing performance, and mentoring developers."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#EAD8C8] space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Marker */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#FFFCF7] border-4 border-[#B76E4F] shadow-xs group-hover:scale-125 transition-transform duration-200"
                aria-hidden="true"
              />

              <div className="relative p-6 sm:p-8 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs hover:border-[#B76E4F]/50 hover:shadow-md transition-all duration-300 overflow-hidden">
                <CardCornerBrackets color="text-[#B76E4F]/25" size={14} />
                {/* Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#29251F]">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-medium text-[#965239]">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 size={15} />
                        {exp.company}
                      </span>
                      <span className="text-[#EAD8C8]">&bull;</span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#6E675F]">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F8F1E8] text-[#965239] border border-[#EAD8C8] shrink-0 self-start sm:self-auto">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-[#6E675F] leading-relaxed mb-6 pt-2">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6 bg-[#F8F1E8]/70 rounded-2xl p-4 sm:p-5 border border-[#EAD8C8]/70">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#965239] mb-3 flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-[#B76E4F]" />
                      Key Quantifiable Achievements
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#29251F]">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <ArrowRight size={14} className="text-[#B76E4F] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#F2E4D8]/60 text-[#29251F] font-medium border border-[#EAD8C8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
