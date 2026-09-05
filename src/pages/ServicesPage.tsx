import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICE_PILLARS } from '../data/agencyData';
import { ArrowRight, ArrowUpRight, Check, Sparkles, Code2, Film, TrendingUp, Mountain } from 'lucide-react';

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
      <section className="bg-white border-b border-black py-16 sm:py-24 px-6 sm:px-12 lg:px-16 thin-grid relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex space-x-1.5">
              <div className="w-2 h-4 accent-teal"></div>
              <div className="w-2 h-4 accent-pink"></div>
              <div className="w-2 h-4 accent-orange"></div>
            </div>
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              03 // Full-Stack Capability Matrix
            </span>
          </div>

          <h1 className="gothic-display text-6xl sm:text-8xl md:text-9xl uppercase text-black tracking-tight leading-[0.88]">
            Services.
          </h1>

          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-black pt-6">
            <p className="font-display text-xl sm:text-2xl text-zinc-800 font-medium max-w-xl border-l-2 border-black pl-6">
              Four disciplines. One integrated team.
            </p>
            <p className="font-mono-code text-xs text-zinc-500 uppercase tracking-widest">
              Destination Strategy · Software · Cinema · Performance
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED PILLAR SECTIONS (Clean Grid Rhythm & Deep Breakdowns)
         ========================================================================= */}
      <section className="py-20 px-6 sm:px-12 lg:px-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto space-y-16">
          {SERVICE_PILLARS.map((pillar, idx) => {
            const styles = getAccentClass(pillar.accentColor);
            const isDarkBackground = idx % 2 === 1; // 30% black alternate strip rhythm

            return (
              <div
                key={pillar.id}
                id={`service-${pillar.id}`}
                className={`border border-black transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  isDarkBackground
                    ? 'bg-[#111] text-white'
                    : 'bg-white text-black'
                }`}
              >
                <div className="p-8 sm:p-12 lg:p-14">
                  {/* Top Identifier */}
                  <div className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 border-b ${isDarkBackground ? 'border-white/10' : 'border-black'}`}>
                    <div className="flex items-center gap-4">
                      <span className="font-mono-code text-base font-bold text-gray-400">
                        {pillar.number}
                      </span>
                      <span className="text-3xl">{pillar.icon}</span>
                      <h2 className="gothic-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight">
                        {pillar.title}
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {pillar.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-3 py-1 text-[10px] font-mono-code uppercase tracking-wider border rounded-none ${
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
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 items-start">
                    {/* Left: Tagline & Core description */}
                    <div className="lg:col-span-5 space-y-6">
                      <p className={`font-display text-xl sm:text-2xl font-bold leading-snug ${styles.text}`}>
                        "{pillar.tagline}"
                      </p>

                      <p className={`text-base leading-relaxed ${isDarkBackground ? 'text-zinc-300 font-light' : 'text-zinc-700 font-normal'}`}>
                        {pillar.description}
                      </p>

                      {/* Featured Client or Build Badge */}
                      {(pillar.featuredClient || pillar.featuredProject) && (
                        <div className={`p-4 border ${isDarkBackground ? 'bg-black border-white/20' : 'bg-zinc-50 border-black'}`}>
                          <span className="font-mono-code text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                            {pillar.featuredClient ? 'Featured Client Engagement' : 'Featured Build & Innovation'}
                          </span>
                          <span className="font-display font-bold text-sm">
                            {pillar.featuredClient || pillar.featuredProject}
                          </span>
                        </div>
                      )}

                      <button
                        onClick={() => onOpenInquiry(pillar.title)}
                        className={`inline-flex items-center gap-2 px-6 py-3 font-mono-code text-xs uppercase font-bold tracking-widest transition-colors rounded-none cursor-pointer ${
                          isDarkBackground
                            ? 'bg-white text-black hover:bg-[#FFA500]'
                            : 'bg-black text-white hover:bg-[#FFA500] hover:text-black'
                        }`}
                      >
                        <span>Commission This Discipline</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Right: Deliverables List */}
                    <div className="lg:col-span-7 space-y-4">
                      <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-400 block mb-2 font-bold">
                        Deliverables & Technical Scope
                      </span>

                      <div className="space-y-3">
                        {pillar.points.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className={`p-4 border flex items-start gap-4 ${
                              isDarkBackground
                                ? 'bg-black border-white/10 text-zinc-200'
                                : 'bg-white border-black text-zinc-800'
                            }`}
                          >
                            <span className={`w-2 h-2 mt-1.5 shrink-0 ${styles.bg}`} />
                            <span className="text-sm font-medium leading-relaxed">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          CLOSING SECTION: Ready to build something? Let's talk.
         ========================================================================= */}
      <section className="bg-[#111] text-white py-24 px-6 sm:px-12 lg:px-16 border-t border-black">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-white/20 text-[11px] font-mono-code text-[#00DFD8] uppercase tracking-widest">
            Direct Studio Line
          </div>

          <h2 className="gothic-display text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
            Ready to build something?
            <br />
            <span className="text-[#FFA500]">Let's talk.</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Whether you require end-to-end destination storytelling, high-speed Flutter apps, or 24/7 community management from Badulla.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry()}
              className="px-10 py-5 bg-white text-black hover:bg-[#FFA500] font-mono-code text-xs uppercase font-bold tracking-widest transition-colors rounded-none cursor-pointer"
            >
              Start Your Project
            </button>

            <button
              onClick={() => onNavigate('work')}
              className="px-8 py-5 bg-black hover:bg-[#FFA500] hover:text-black text-white border border-white/20 font-mono-code text-xs uppercase font-bold tracking-widest transition-colors rounded-none cursor-pointer"
            >
              Examine Our Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
