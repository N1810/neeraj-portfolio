import React from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const mainLink = project.liveUrl || project.repoUrl || '#';
  const isExternal = Boolean(project.liveUrl || project.repoUrl);

  return (
    <article
      className={cn(
        'group flex flex-col rounded-2xl bg-[#FFFCF7] border border-[#EAD8C8] overflow-hidden transition-all duration-300 hover:border-[#B76E4F]/50 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {/* Project Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2E4D8]/60 border-b border-[#EAD8C8]">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} - ${project.category}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <span className="font-serif text-xl text-[#965239]">{project.title}</span>
          </div>
        )}

        {/* Category Pill Tag Overlay */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFCF7]/90 text-[#965239] backdrop-blur-xs border border-[#EAD8C8]/80 shadow-xs">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-serif font-bold text-[#29251F] group-hover:text-[#965239] transition-colors">
            {project.title}
          </h3>

          <div className="flex items-center gap-1.5 shrink-0 pt-1">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E675F] hover:text-[#965239] hover:bg-[#F2E4D8] transition-colors"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live site for ${project.title}`}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E675F] hover:text-[#965239] hover:bg-[#F2E4D8] transition-colors"
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-[#6E675F] line-clamp-3 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-auto pt-4 border-t border-[#EAD8C8]/60">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F8F1E8] text-[#6E675F] border border-[#EAD8C8]/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <a
            href={mainLink}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B76E4F] group-hover:text-[#965239] transition-colors"
          >
            <span>{project.liveUrl ? 'Visit Website' : 'View Project'}</span>
            <ExternalLink size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
