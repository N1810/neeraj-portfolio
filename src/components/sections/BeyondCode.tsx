import React from 'react';
import Image from 'next/image';
import { Music, Compass, Sparkles, Guitar, BookOpen } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const interests = [
  {
    icon: Guitar,
    title: 'Playing Guitar',
    desc: 'Acoustic fingerpicking, melodies, and chords after deep coding sessions.',
  },
  {
    icon: Music,
    title: 'Discovering Music',
    desc: 'Exploring diverse genres, independent records, and ambient soundscapes.',
  },
  {
    icon: Compass,
    title: 'Exploring New Places',
    desc: 'Traveling, architectural walks, and experiencing different cultures.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Staying curious about systems design, compilers, and emerging software paradigms.',
  },
  {
    icon: Sparkles,
    title: 'Building Side Projects',
    desc: 'Tinkering with developer tools, micro-apps, and creative experiments.',
  },
];

export const BeyondCode: React.FC = () => {
  return (
    <section id="interests" className="py-20 md:py-32 relative bg-[#F8F1E8]/70 border-t border-[#EAD8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text & Interests list */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="LIFE &amp; INSPIRATION"
              title="Beyond Code"
              description="&ldquo;Good code, good music, good places, good life.&rdquo;"
            />

            <p className="text-sm sm:text-base text-[#6E675F] leading-relaxed mb-8">
              Great software is shaped by curiosity and balanced perspective. Outside of the terminal,
              I spend time with instruments, travel, and quiet craftsmanship—elements that continually
              inform my patience and design discipline.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-xs hover:border-[#B76E4F]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#F2E4D8] text-[#965239] flex items-center justify-center shrink-0">
                        <Icon size={16} />
                      </div>
                      <h4 className="text-sm font-serif font-bold text-[#29251F]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#6E675F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual col */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAD8C8] bg-[#FFFCF7] shadow-xl aspect-[4/3] group">
              <Image
                src="/images/beyond-code.jpg"
                alt="Acoustic guitar and vinyl records bathed in warm natural light against terracotta wall"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29251F]/50 via-transparent to-transparent opacity-50" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#FFFCF7]/95 backdrop-blur-md border border-[#EAD8C8] shadow-sm">
                <p className="font-serif italic text-sm text-[#29251F]">
                  Harmony in life, harmony in code.
                </p>
                <p className="text-[11px] text-[#6E675F] mt-0.5">
                  Acoustic guitar &bull; Vinyl &bull; Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
