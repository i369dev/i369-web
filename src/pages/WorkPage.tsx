import React, { useState } from 'react';
import { PageId, CaseStudy } from '../types';
import { CASE_STUDIES, TRUSTED_CLIENTS } from '../data/agencyData';
import { ArrowUpRight, Filter, CheckCircle2, Star } from 'lucide-react';

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
      <section className="bg-white border-b border-black py-16 sm:py-24 px-6 sm:px-12 lg:px-16 thin-grid relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex space-x-1.5">
              <div className="w-2 h-4 accent-teal"></div>
              <div className="w-2 h-4 accent-pink"></div>
              <div className="w-2 h-4 accent-orange"></div>
            </div>
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              04 // Ground-Zero Case Archive
            </span>
          </div>

          <h1 className="gothic-display text-6xl sm:text-8xl md:text-9xl uppercase text-black tracking-tight leading-[0.88]">
            Our Work.
          </h1>

          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-black pt-6">
            <p className="font-display text-xl sm:text-2xl text-zinc-800 font-medium max-w-xl border-l-2 border-black pl-6">
              Real clients. Real ground. Real results.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs font-mono-code uppercase font-bold tracking-widest transition-colors rounded-none border border-black cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-[#FFA500]'
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
          CASE STUDIES GRID
         ========================================================================= */}
      <section className="py-20 px-6 sm:px-12 lg:px-16 bg-[#FAFAFA] border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredStudies.map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy(cs)}
                className="group bg-white border border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Image & Category Pill */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black border-b border-black">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black text-white text-[10px] font-mono-code uppercase tracking-widest border border-white/30 rounded-none">
                      {cs.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono-code text-xs">
                    <span className="text-[#00DFD8] font-bold">{cs.client}</span>
                    <span className="text-zinc-300 font-bold">{cs.number}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="gothic-display text-3xl sm:text-4xl uppercase text-black tracking-tight group-hover:text-zinc-700 transition-colors">
                        {cs.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>

                    <p className="mt-3 text-sm text-zinc-600 font-normal leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>

                  {/* Highlights / Stats bar */}
                  <div className="mt-6 pt-4 border-t border-black grid grid-cols-2 gap-4">
                    {cs.stats.slice(0, 2).map((stat, sIdx) => (
                      <div key={sIdx}>
                        <span className="font-mono-code text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">
                          {stat.label}
                        </span>
                        <span className="gothic-display text-2xl font-bold text-black tracking-tight">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRUSTED BY SECTION
         ========================================================================= */}
      <section className="bg-[#111] text-white py-24 px-6 sm:px-12 lg:px-16 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#00DFD8] font-bold">
              Industry Credentials
            </span>
            <h2 className="gothic-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              Trusted By.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Collaborating with leaders in regional tourism, corporate hospitality, and renewable energy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUSTED_CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="p-6 bg-black border border-white/20 flex items-center justify-between hover:border-white/40 transition-colors rounded-none"
              >
                <div>
                  <h4 className="font-display font-bold text-lg text-white">
                    {client.name}
                  </h4>
                  <p className="font-mono-code text-xs text-zinc-400 mt-0.5">
                    {client.role}
                  </p>
                </div>
                <div className="w-2 h-2 accent-teal"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-white text-black hover:bg-[#FFA500] font-mono-code text-xs uppercase font-bold tracking-widest transition-colors rounded-none cursor-pointer"
            >
              Commission A New Case Study
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
