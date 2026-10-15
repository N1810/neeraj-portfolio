'use client';

import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  ShoppingBag,
  Wrench,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CardCornerCrosshairs } from '@/components/ui/CornerAccents';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  'cms-ecommerce': ShoppingBag,
  'tools-devops': Wrench,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Cpu size={13} className="text-[#B76E4F]" />}
          eyebrow="CAPABILITIES &amp; TOOLING"
          title="Technologies I work with"
          description="A comprehensive toolkit refined across full-stack engineering, production systems, and modern UI architectures."
        />

        {/* Filter buttons that actually work */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={cn(
              'px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border',
              selectedCategory === 'all'
                ? 'bg-[#B76E4F] text-[#FFFCF7] border-[#B76E4F] shadow-xs'
                : 'bg-[#FFFCF7] text-[#6E675F] border-[#EAD8C8] hover:text-[#29251F] hover:bg-[#F2E4D8]'
            )}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                'px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border',
                selectedCategory === cat.id
                  ? 'bg-[#B76E4F] text-[#FFFCF7] border-[#B76E4F] shadow-xs'
                  : 'bg-[#FFFCF7] text-[#6E675F] border-[#EAD8C8] hover:text-[#29251F] hover:bg-[#F2E4D8]'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((category) => {
            const Icon = iconMap[category.id] || Wrench;
            return (
              <div
                key={category.id}
                className="relative p-6 rounded-2xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs hover:border-[#B76E4F]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <CardCornerCrosshairs color="text-[#B76E4F]/20" size={10} />
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F2E4D8] text-[#965239] flex items-center justify-center shrink-0 border border-[#EAD8C8]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-serif font-bold text-[#29251F]">
                        {category.name}
                      </h3>
                      <span className="text-[11px] text-[#6E675F]">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#6E675F] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#F8F1E8] text-[#29251F] border border-[#EAD8C8]/80 hover:border-[#B76E4F]/60 transition-colors"
                      >
                        <CheckCircle2 size={12} className="text-[#A6A58D]" />
                        <span>{skill}</span>
                      </span>
                    ))}
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
