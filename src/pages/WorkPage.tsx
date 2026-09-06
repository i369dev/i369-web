import React, { useState } from 'react';
import { PageId, CaseStudy } from '../types';
import { CASE_STUDIES, TRUSTED_CLIENTS } from '../data/agencyData';
import { ArrowUpRight, Filter, CheckCircle2, Star } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

interface WorkPageProps {
  onNavigate: (page: PageId) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenInquiry: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onNavigate,
  onSelectCaseStudy,
  onOpenInquiry,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Tourism', 'AdventureTech', 'Media', 'Performance'];

  const filteredStudies =
    activeFilter === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === activeFilter);

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
              04 // Ground-Zero Case Archive
            </span>
          </div>

          <h1 className="gothic-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-black tracking-tight leading-[0.88] break-words">
            Our Work.
          </h1>

          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-t border-black pt-6">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-zinc-800 font-medium max-w-xl border-l-2 border-black pl-4 sm:pl-6">
              Real clients. Real ground. Real results.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-mono-code uppercase font-bold tracking-wider sm:tracking-widest transition-all duration-200 rounded-none border border-black cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-black text-white shadow-md'
                      : 'bg-white/80 backdrop-blur-sm text-black hover:bg-[#FFA500]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDIES GRID with HugeInc 3D Tilt & Zoom Parallax
         ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#FAFAFA] border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {filteredStudies.map((cs) => (
              <TiltCard
                key={cs.id}
                maxTilt={7}
                scale={1.02}
                onClick={() => onSelectCaseStudy(cs)}
                className="cursor-pointer rounded-none"
              >
                {/* Image & Category Pill with Zoom effect */}
                <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden bg-black border-b border-black">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-95 card-media-zoom"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                    <span className="px-2.5 sm:px-3 py-1 glass-pill text-white text-[9px] sm:text-[10px] font-mono-code uppercase tracking-widest">
                      {cs.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white font-mono-code text-[11px] sm:text-xs z-20">
                    <span className="text-[#00DFD8] font-bold">{cs.client}</span>
                    <span className="text-zinc-300 font-bold">{cs.number}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-7 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <h3 className="gothic-display text-2xl sm:text-3xl md:text-4xl uppercase text-black tracking-tight group-hover:text-[#FFA500] transition-colors">
                        {cs.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" />
                    </div>

                    <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>

                  {/* Highlights / Stats bar */}
                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-black/15 grid grid-cols-2 gap-3 sm:gap-4">
                    {cs.stats.slice(0, 2).map((stat, sIdx) => (
                      <div key={sIdx}>
                        <span className="font-mono-code text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">
                          {stat.label}
                        </span>
                        <span className="gothic-display text-xl sm:text-2xl font-bold text-black tracking-tight">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRUSTED BY SECTION
         ========================================================================= */}
      <section className="bg-[#111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
            <span className="font-mono-code text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#00DFD8] font-bold">
              Industry Credentials
            </span>
            <h2 className="gothic-display text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-none">
              Trusted By.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-normal">
              Collaborating with leaders in regional tourism, corporate hospitality, and renewable energy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {TRUSTED_CLIENTS.map((client, idx) => (
              <TiltCard
                key={idx}
                isDark={true}
                maxTilt={8}
                scale={1.03}
                className="p-5 sm:p-6 flex items-center justify-between rounded-none cursor-default"
              >
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white">
                    {client.name}
                  </h4>
                  <p className="font-mono-code text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                    {client.role}
                  </p>
                </div>
                <div className="w-2 h-2 accent-teal shrink-0"></div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <MagneticButton
              variant="glass"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-black bg-white hover:bg-[#FFA500] justify-center"
            >
              Commission A New Case Study
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

