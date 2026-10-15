import React from 'react';
import { Briefcase, CodeXml, Laptop, BookOpen } from 'lucide-react';

const statsData = [
  {
    value: '2+',
    label: 'Years Experience',
    description: 'Production web development',
    icon: Briefcase,
  },
  {
    value: '10+',
    label: 'Projects Completed',
    description: 'Web & full-stack apps',
    icon: CodeXml,
  },
  {
    value: '10+',
    label: 'Freelance Projects',
    description: 'Delivered for clients',
    icon: Laptop,
  },
  {
    value: 'Always',
    label: 'Learning & Exploring',
    description: 'Modern tools & standards',
    icon: BookOpen,
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="relative py-10 border-y border-[#EAD8C8] bg-[#FFFCF7]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-[#F8F1E8]/60 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F2E4D8] text-[#965239] flex items-center justify-center shrink-0 border border-[#EAD8C8] group-hover:scale-105 group-hover:bg-[#B76E4F] group-hover:text-[#FFFCF7] transition-all duration-300">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F] leading-tight group-hover:text-[#965239] transition-colors">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-[#29251F] mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs text-[#6E675F] mt-0.5">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
