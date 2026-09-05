import React, { useState } from 'react';
import { PageId, VentureItem } from '../types';
import { VENTURES } from '../data/agencyData';
import { ArrowUpRight, Play, Pause, Compass, Radio, MapPin, Sparkles, ExternalLink } from 'lucide-react';

interface VenturesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export const VenturesPage: React.FC<VenturesPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="w-full bg-white text-[#141414] selection:bg-[#FFA500] selection:text-black pt-16 sm:pt-20">
      {/* =========================================================================
          PAGE HEADER: Artistic Flair Minimalist Grid & Gothic Title
         ========================================================================= */}
      <section className="border-b border-black py-16 sm:py-24 px-6 sm:px-12 lg:px-16 bg-white thin-grid relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex space-x-1.5">
              <div className="w-2 h-4 accent-teal"></div>
              <div className="w-2 h-4 accent-pink"></div>
              <div className="w-2 h-4 accent-orange"></div>
            </div>
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              05 // Proprietary Intellectual Property
            </span>
          </div>

          <h1 className="gothic-display text-6xl sm:text-8xl md:text-9xl uppercase text-black tracking-tight leading-[0.88]">
            Built In-House.
          </h1>

          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-black pt-6">
            <p className="font-display text-xl sm:text-2xl text-zinc-800 font-medium max-w-xl border-l-2 border-black pl-6">
              We don’t just build for clients — we build our own.
            </p>
            <p className="font-mono-code text-xs text-zinc-500 uppercase tracking-widest">
              Highland AdventureTech · Eco Hospitality · Audio Label
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VENTURE SHOWCASE CARDS (LankaQuests, IntotheWILDlk, Inhale Exhale)
         ========================================================================= */}
      <section className="py-20 px-6 sm:px-12 lg:px-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto space-y-16">
          {VENTURES.map((venture, idx) => {
            const isAudioVenture = venture.id === 'inhale-exhale';
            const isGpsVenture = venture.id === 'lankaquests';
            const isDarkCard = idx % 2 === 1;

            return (
              <div
                key={venture.id}
                id={`venture-${venture.id}`}
                className={`border border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-200 ${
                  isDarkCard ? 'bg-[#111] text-white' : 'bg-white text-black'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: Image & Media Controls */}
                  <div className="lg:col-span-6 relative h-80 lg:h-auto min-h-[350px] overflow-hidden bg-black border-b lg:border-b-0 lg:border-r border-black">
                    <img
                      src={venture.image}
                      alt={venture.name}
                      className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Interactive Overlay Badges */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                      <span className="px-3 py-1 bg-black text-white border border-white/20 font-mono-code text-[11px] uppercase tracking-wider rounded-none">
                        {venture.status}
                      </span>

                      {isAudioVenture && (
                        <button
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[#FF69B4] hover:bg-[#FF85C2] text-white font-mono-code text-xs uppercase font-bold tracking-wider rounded-none cursor-pointer transition-colors"
                        >
                          {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          <span>{isPlayingAudio ? 'Pause Live Stream' : 'Audition Soundscape'}</span>
                        </button>
                      )}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="gothic-display text-4xl sm:text-5xl uppercase text-white tracking-tight leading-none">
                        {venture.name}
                      </h3>
                      <p className="font-mono-code text-xs text-[#FFA500] uppercase tracking-widest mt-2 font-bold">
                        {venture.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Specs, Technical Highlights & Features */}
                  <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                    <div className="space-y-6">
                      <p className={`text-base sm:text-lg leading-relaxed ${isDarkCard ? 'text-zinc-300 font-light' : 'text-zinc-700 font-normal'}`}>
                        {venture.description}
                      </p>

                      <div className="space-y-3">
                        <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-500 block font-bold">
                          Engineered Capabilities
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {venture.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className={`p-3 border text-xs font-mono-code flex items-start gap-2 ${
                                isDarkCard
                                  ? 'bg-black border-white/10 text-zinc-300'
                                  : 'bg-[#F5F5F5] border-black text-black'
                              }`}
                            >
                              <div className="w-1.5 h-1.5 accent-teal mt-1 shrink-0"></div>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack & Status bar */}
                    <div className={`pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isDarkCard ? 'border-white/10' : 'border-black'
                    }`}>
                      <div className="flex flex-wrap gap-2">
                        {venture.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className={`px-2.5 py-1 text-[10px] font-mono-code uppercase tracking-wider border rounded-none ${
                              isDarkCard
                                ? 'bg-black border-white/20 text-zinc-400'
                                : 'bg-white border-black text-black'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={onOpenInquiry}
                        className={`inline-flex items-center gap-1.5 text-xs font-mono-code font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                          isDarkCard ? 'text-[#FFA500] hover:text-white' : 'text-black hover:text-[#FFA500]'
                        }`}
                      >
                        <span>Collaborate on Venture</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          VENTURE LAB DOCTRINE
         ========================================================================= */}
      <section className="bg-[#111] text-white py-24 px-6 sm:px-12 lg:px-16 border-t border-black">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-white/20 text-[11px] font-mono-code text-[#00DFD8] uppercase tracking-widest">
            The Living Lab
          </div>

          <h2 className="gothic-display text-4xl sm:text-6xl uppercase text-white tracking-tight leading-none">
            Why We Build Our Own.
          </h2>

          <p className="text-zinc-300 text-base sm:text-xl font-normal leading-relaxed">
            "When we pitch Flutter offline architecture or AI prompts to clients, it’s not theory. We already tested it across 1,400 meters of elevation in the jungle on our own ventures."
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-white text-black hover:bg-[#FFA500] font-mono-code text-xs uppercase font-bold tracking-widest transition-colors rounded-none cursor-pointer"
            >
              Invest or Partner with Imaginative 369
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
