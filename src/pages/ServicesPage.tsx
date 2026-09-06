import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICE_PILLARS } from '../data/agencyData';
import { ArrowRight, ArrowUpRight, Check, Sparkles, Code2, Film, TrendingUp, Mountain } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [activePillarId, setActivePillarId] = useState<string>(SERVICE_PILLARS[0].id);

  const getAccentClass = (color: 'teal' | 'pink' | 'orange') => {
    switch (color) {
      case 'teal':
        return { text: 'text-[#008080]', border: 'border-[#008080]', bg: 'bg-[#008080]', badge: 'border-black text-black' };
      case 'pink':
        return { text: 'text-[#FF69B4]', border: 'border-[#FF69B4]', bg: 'bg-[#FF69B4]', badge: 'border-black text-black' };
      case 'orange':
        return { text: 'text-[#FFA500]', border: 'border-[#FFA500]', bg: 'bg-[#FFA500]', badge: 'border-black text-black' };
    }
  };

  return (
    <div className="w-full bg-white text-[#141414] selection:bg-[#FFA500] selection:text-black pt-16 sm:pt-20">
      {/* =========================================================================
          PAGE HEADER: Artistic Flair Minimalist Editorial
         ========================================================================= */}
      <section className="bg-white border-b border-black py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 thin-grid relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <div className="flex space-x-1.5">
              <div className="w-2 h-4 accent-teal"></div>
              <div className="w-2 h-4 accent-pink"></div>
              <div className="w-2 h-4 accent-orange"></div>
            </div>
            <span className="font-mono-code text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 font-bold">
              03 // Full-Stack Capability Matrix
            </span>
          </div>

          <h1 className="gothic-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-black tracking-tight leading-[0.88] break-words">
            Services.
          </h1>

          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-t border-black pt-6">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-zinc-800 font-medium max-w-xl border-l-2 border-black pl-4 sm:pl-6">
              Four disciplines. One integrated team.
            </p>
            <p className="font-mono-code text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest">
              Destination Strategy · Software · Cinema · Performance
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED PILLAR SECTIONS (Clean Grid Rhythm & Deep Breakdowns)
         ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {SERVICE_PILLARS.map((pillar, idx) => {
            const styles = getAccentClass(pillar.accentColor);
            const isDarkBackground = idx % 2 === 1; // 30% black alternate strip rhythm

            return (
              <TiltCard
                key={pillar.id}
                id={`service-${pillar.id}`}
                isDark={isDarkBackground}
                maxTilt={4}
                scale={1.01}
                className="transition-all duration-300 rounded-none cursor-default"
              >
                <div className="p-5 sm:p-8 md:p-12 lg:p-14">
                  {/* Top Identifier */}
                  <div className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 sm:pb-8 border-b ${isDarkBackground ? 'border-white/10' : 'border-black'}`}>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <span className="font-mono-code text-sm sm:text-base font-bold text-gray-400">
                        {pillar.number}
                      </span>
                      <span className="text-2xl sm:text-3xl">{pillar.icon}</span>
                      <h2 className="gothic-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
                        {pillar.title}
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {pillar.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-mono-code uppercase tracking-wider border rounded-none ${
                            isDarkBackground
                              ? 'border-white/20 bg-black text-zinc-300'
                              : 'border-black bg-white text-black'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 pt-6 sm:pt-8 items-start">
                    {/* Left: Tagline & Core description */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                      <p className={`font-display text-lg sm:text-xl md:text-2xl font-bold leading-snug ${styles.text}`}>
                        "{pillar.tagline}"
                      </p>

                      <p className={`text-sm sm:text-base leading-relaxed ${isDarkBackground ? 'text-zinc-300 font-light' : 'text-zinc-700 font-normal'}`}>
                        {pillar.description}
                      </p>

                      {/* Featured Client or Build Badge */}
                      {(pillar.featuredClient || pillar.featuredProject) && (
                        <div className={`p-3.5 sm:p-4 border ${isDarkBackground ? 'glass-panel-dark' : 'glass-panel-light'}`}>
                          <span className="font-mono-code text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                            {pillar.featuredClient ? 'Featured Client Engagement' : 'Featured Build & Innovation'}
                          </span>
                          <span className="font-display font-bold text-xs sm:text-sm">
                            {pillar.featuredClient || pillar.featuredProject}
                          </span>
                        </div>
                      )}

                      <MagneticButton
                        variant={isDarkBackground ? 'glass' : 'primary'}
                        onClick={() => onOpenInquiry(pillar.title)}
                        className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 justify-center"
                      >
                        <span>Commission This Discipline</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </MagneticButton>
                    </div>

                    {/* Right: Deliverables List */}
                    <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                      <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-widest text-zinc-400 block mb-2 font-bold">
                        Deliverables & Technical Scope
                      </span>

                      <div className="space-y-2.5 sm:space-y-3">
                        {pillar.points.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className={`p-3 sm:p-4 border flex items-start gap-3 sm:gap-4 transition-transform hover:translate-x-1 duration-200 ${
                              isDarkBackground
                                ? 'bg-white/5 border-white/10 text-zinc-200'
                                : 'bg-white/90 border-black/15 text-zinc-800'
                            }`}
                          >
                            <span className={`w-2 h-2 mt-1.5 shrink-0 ${styles.bg}`} />
                            <span className="text-xs sm:text-sm font-medium leading-relaxed">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          CLOSING SECTION: Ready to build something? Let's talk.
         ========================================================================= */}
      <section className="bg-[#111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-black">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono-code text-[#00DFD8] uppercase tracking-widest">
            Direct Studio Line
          </div>

          <h2 className="gothic-display text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-none break-words">
            Ready to build something?
            <br />
            <span className="text-[#FFA500]">Let's talk.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Whether you require end-to-end destination storytelling, high-speed Flutter apps, or 24/7 community management from Badulla.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <MagneticButton
              variant="glass"
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-black bg-white hover:bg-[#FFA500] justify-center"
            >
              Start Your Project
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 text-white border border-white/20 hover:bg-white/10 justify-center"
            >
              Examine Our Case Studies
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

