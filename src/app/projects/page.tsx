'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Search, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { featuredProjects, additionalProjects, Project } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allProjects: Project[] = [
    ...featuredProjects,
    ...additionalProjects.map((p) => ({
      ...p,
      featured: false,
      type: 'personal' as const,
    })),
  ];

  const filtered = allProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag =
      selectedTag === 'all'
        ? true
        : selectedTag === 'featured'
        ? p.featured
        : p.category.toLowerCase().includes(selectedTag.toLowerCase()) ||
          p.type.toLowerCase().includes(selectedTag.toLowerCase());

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 editorial-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#965239] hover:text-[#29251F] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Main Portfolio</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#B76E4F]" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#965239]">
              FULL CATALOG
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#29251F] tracking-tight">
            Projects &amp; Open Source Archive
          </h1>
          <p className="mt-4 text-base text-[#6E675F] leading-relaxed">
            A comprehensive catalog of web applications, developer tooling, client storefronts,
            and software experiments crafted with modern full-stack technologies.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6E675F]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, stack (e.g. Next.js, Java)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F8F1E8] border border-[#EAD8C8] text-xs sm:text-sm text-[#29251F] focus:outline-none focus:border-[#B76E4F]"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['all', 'featured', 'developer', 'freelance', 'eCommerce'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-[#B76E4F] text-[#FFFCF7]'
                    : 'bg-[#F8F1E8] text-[#6E675F] hover:text-[#29251F] border border-[#EAD8C8]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Results Status */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#6E675F]">
          <span>
            Showing <strong className="text-[#29251F]">{filtered.length}</strong> project{filtered.length === 1 ? '' : 's'}
          </span>
          {(searchQuery || selectedTag !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('all');
              }}
              className="text-[#965239] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Projects Display */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div key={project.id}>
                {project.featured ? (
                  <ProjectCard project={project} />
                ) : (
                  <div className="h-full p-6 rounded-2xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs flex flex-col justify-between hover:border-[#B76E4F]/50 transition-all overflow-hidden">
                    <div>
                      {project.imageUrl && (
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 border border-[#EAD8C8]/60 bg-[#F2E4D8]/50">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#965239]">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#6E675F] hover:text-[#965239]"
                              aria-label={`View ${project.title} repository`}
                            >
                              <GithubIcon size={15} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#6E675F] hover:text-[#965239]"
                              aria-label={`Visit ${project.title}`}
                            >
                              <ExternalLink size={15} />
                            </a>
                          )}
                        </div>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-[#29251F]">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#6E675F] mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#EAD8C8]/60 flex flex-wrap gap-1">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#F8F1E8] text-[#6E675F]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 p-8 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8]">
            <p className="font-serif text-xl text-[#29251F]">No projects matched your search criteria.</p>
            <p className="text-xs text-[#6E675F] mt-2">Try clearing your filters or search keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}
