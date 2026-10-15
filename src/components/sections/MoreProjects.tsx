'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronUp, FolderGit2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { additionalProjects } from '@/data/projects';
import { Button } from '@/components/ui/Button';

export const MoreProjects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? additionalProjects : additionalProjects.slice(0, 4);

  return (
    <section className="py-12 border-t border-[#EAD8C8]/60 bg-[#F8F1E8]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#B76E4F]" aria-hidden="true" />
              <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#965239]">
                ARCHIVE &amp; EXPERIMENTS
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#29251F]">
              Other Notable Projects
            </h3>
            <p className="text-sm text-[#6E675F] mt-1">
              Additional applications, utility services, and open-source explorations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll(!showAll)}
              icon={showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            >
              {showAll ? 'Show Fewer Projects' : `View All (${additionalProjects.length})`}
            </Button>
            <Link
              href="/projects"
              className="text-xs font-semibold text-[#B76E4F] hover:text-[#965239] transition-colors inline-flex items-center gap-1"
            >
              Full Archive Page &rarr;
            </Link>
          </div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedProjects.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs hover:border-[#B76E4F]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {item.imageUrl && (
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 border border-[#EAD8C8]/60 bg-[#F2E4D8]/50">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F1E8] text-[#965239] flex items-center justify-center border border-[#EAD8C8]/60 group-hover:bg-[#B76E4F] group-hover:text-[#FFFCF7] transition-colors">
                    <FolderGit2 size={16} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.repoUrl && (
                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${item.title} repository`}
                        className="text-[#6E675F] hover:text-[#965239] p-1 transition-colors"
                      >
                        <GithubIcon size={15} />
                      </a>
                    )}
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${item.title}`}
                        className="text-[#6E675F] hover:text-[#965239] p-1 transition-colors"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#965239]">
                  {item.category}
                </span>
                <h4 className="text-base font-serif font-bold text-[#29251F] mt-0.5 group-hover:text-[#965239] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6E675F] mt-2 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAD8C8]/60 flex flex-wrap gap-1">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded bg-[#F8F1E8] text-[#6E675F]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
