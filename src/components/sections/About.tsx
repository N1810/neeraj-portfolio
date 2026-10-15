import React from 'react';
import Image from 'next/image';
import { MapPin, GraduationCap, Compass, Briefcase, Heart } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CardCornerCrosshairs } from '@/components/ui/CornerAccents';

const aboutDetails = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'New Delhi, India',
    sub: 'Open to remote & hybrid roles',
  },
  {
    icon: Briefcase,
    label: 'Status',
    value: 'Open to Opportunities',
    sub: 'Full-stack & frontend engineering',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'MCA (Pursuing) & BCA',
    sub: 'Indira Gandhi National Open University',
  },
  {
    icon: Compass,
    label: 'Passions',
    value: 'Coding, Music, Travel',
    sub: 'Guitar, reading & architecture',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Col */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAD8C8] bg-[#FFFCF7] shadow-lg aspect-[4/3] group">
              <CardCornerCrosshairs color="text-[#FFFCF7]/70" />
              <Image
                src="/images/about-workspace.jpg"
                alt="Creative minimalist workspace with design notebooks, architectural drawings, and olive foliage"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29251F]/40 via-transparent to-transparent opacity-40" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#FFFCF7]/95 backdrop-blur-md border border-[#EAD8C8] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F2E4D8] text-[#965239] flex items-center justify-center shrink-0">
                    <Heart size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#29251F]">
                      Artisan Mindset
                    </h4>
                    <p className="text-xs text-[#6E675F]">
                      Writing purposeful, maintainable code with attention to craft.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Col */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow="ABOUT ME"
              title="More than just a developer"
              description="I'm a Full Stack Developer who enjoys building scalable web applications, exploring new technologies, and continuously learning. I enjoy working on challenging projects, collaborating with teams, and turning complex problems into simple, elegant solutions."
            />

            <div className="prose prose-stone text-[#6E675F] text-base leading-relaxed mb-8">
              <p>
                My journey centers around developing responsive, production-ready interfaces and resilient backends.
                Whether optimizing frontend performance to reduce page loads by 30% or designing clean API contracts,
                I focus on delivering real value to users and development teams alike.
              </p>
            </div>

            {/* Structured Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-4 rounded-2xl bg-[#FFFCF7] border border-[#EAD8C8] flex items-start gap-3.5 shadow-xs hover:border-[#B76E4F]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F2E4D8] text-[#965239] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#965239]">
                        {item.label}
                      </span>
                      <p className="text-sm font-semibold text-[#29251F] mt-0.5">
                        {item.value}
                      </p>
                      <p className="text-xs text-[#6E675F] mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
