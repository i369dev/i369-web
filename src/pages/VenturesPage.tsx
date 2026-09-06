import React, { useState } from 'react';
import { PageId, VentureItem } from '../types';
import { VENTURES } from '../data/agencyData';
import { ArrowUpRight, Play, Pause, Compass, Radio, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

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
      <section className="border-b border-black py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white thin-grid relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <div className="flex space-x-1.5">
              <div className="w-2 h-4 accent-teal"></div>
              <div className="w-2 h-4 accent-pink"></div>
              <div className="w-2 h-4 accent-orange"></div>
            </div>
            <span className="font-mono-code text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 font-bold">
              05 // Proprietary Intellectual Property
            </span>
          </div>

          <h1 className="gothic-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-black tracking-tight leading-[0.88] break-words">
            Built In-House.
          </h1>

          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-t border-black pt-6">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-zinc-800 font-medium max-w-xl border-l-2 border-black pl-4 sm:pl-6">
              We don’t just build for clients — we build our own.
            </p>
            <p className="font-mono-code text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-bold">
              Highland AdventureTech · Eco Hospitality · Audio Label
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VENTURE SHOWCASE CARDS (LankaQuests, IntotheWILDlk, Inhale Exhale)
         ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {VENTURES.map((venture, idx) => {
            const isAudioVenture = venture.id === 'inhale-exhale';
            const isDarkCard = idx % 2 === 1;

            return (
              <TiltCard
                key={venture.id}
                id={`venture-${venture.id}`}
                isDark={isDarkCard}
                maxTilt={4}
                scale={1.01}
                className="rounded-none cursor-default overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: Image & Media Controls */}
                  <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto min-h-[260px] sm:min-h-[350px] overflow-hidden bg-black border-b lg:border-b-0 lg:border-r border-black/20">
                    <img
                      src={venture.image}
                      alt={venture.name}
                      className="w-full h-full object-cover grayscale contrast-125 brightness-90 card-media-zoom"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Interactive Overlay Badges */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between z-20 gap-2">
                      <span className="px-2.5 sm:px-3 py-1 glass-pill text-white font-mono-code text-[10px] sm:text-[11px] uppercase tracking-wider rounded-none">
                        {venture.status}
                      </span>

                      {isAudioVenture && (
                        <button
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#FF69B4] hover:bg-[#FF85C2] text-white font-mono-code text-[10px] sm:text-xs uppercase font-bold tracking-wider rounded-none cursor-pointer transition-colors shadow-sm"
                        >
                          {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          <span>{isPlayingAudio ? 'Pause Live Stream' : 'Audition Soundscape'}</span>
                        </button>
                      )}
                    </div>

                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                      <h3 className="gothic-display text-2xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight leading-none">
                        {venture.name}
                      </h3>
                      <p className="font-mono-code text-[11px] sm:text-xs text-[#FFA500] uppercase tracking-widest mt-1.5 sm:mt-2 font-bold">
                        {venture.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Specs, Technical Highlights & Features */}
                  <div className="lg:col-span-6 p-5 sm:p-8 md:p-12 flex flex-col justify-between space-y-6 sm:space-y-8">
                    <div className="space-y-4 sm:space-y-6">
                      <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${isDarkCard ? 'text-zinc-300 font-light' : 'text-zinc-700 font-normal'}`}>
                        {venture.description}
                      </p>

                      <div className="space-y-2.5 sm:space-y-3">
                        <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-widest text-zinc-500 block font-bold">
                          Engineered Capabilities
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                          {venture.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className={`p-2.5 sm:p-3 border text-[11px] sm:text-xs font-mono-code flex items-start gap-2 ${
                                isDarkCard
                                  ? 'bg-white/5 border-white/10 text-zinc-300'
                                  : 'bg-white/90 border-black/15 text-black'
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
                    <div className={`pt-4 sm:pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isDarkCard ? 'border-white/10' : 'border-black/15'
                    }`}>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {venture.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-mono-code uppercase tracking-wider border rounded-none ${
                              isDarkCard
                                ? 'bg-white/5 border-white/20 text-zinc-300'
                                : 'bg-black/5 border-black/20 text-black font-bold'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <MagneticButton
                        variant={isDarkCard ? 'glass' : 'primary'}
                        onClick={onOpenInquiry}
                        className="w-full sm:w-auto px-4 py-2 sm:py-2.5 justify-center text-xs sm:text-sm"
                      >
                        <span>Collaborate</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          VENTURE LAB DOCTRINE
         ========================================================================= */}
      <section className="bg-[#111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-black">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono-code text-[#00DFD8] uppercase tracking-widest">
            The Living Lab
          </div>

          <h2 className="gothic-display text-3xl sm:text-5xl md:text-6xl uppercase text-white tracking-tight leading-none">
            Why We Build Our Own.
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base md:text-xl font-normal leading-relaxed">
            "When we pitch Flutter offline architecture or AI prompts to clients, it’s not theory. We already tested it across 1,400 meters of elevation in the jungle on our own ventures."
          </p>

          <div className="pt-2 sm:pt-4">
            <MagneticButton
              variant="glass"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-black bg-white hover:bg-[#FFA500] justify-center"
            >
              Invest or Partner with Imaginative 369
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
