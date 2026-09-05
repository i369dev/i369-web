import React from 'react';
import { PageId, CaseStudy } from '../types';
import { GothicLogo } from '../components/GothicLogo';
import { GothicHeading } from '../components/GothicHeading';
import { SERVICE_PILLARS, CASE_STUDIES, TRUSTED_CLIENTS, GROUND_ZERO_ADVANTAGES } from '../data/agencyData';
import { ArrowRight, ArrowUpRight, Compass, ShieldCheck, Sparkles, Terminal, Video, MapPin, Zap } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenInquiry,
  onSelectCaseStudy,
}) => {
  return (
    <div className="w-full bg-white text-[#141414] selection:bg-[#FFA500] selection:text-black pt-16 sm:pt-20">
      {/* =========================================================================
          HERO SECTION: Artistic Flair 70% / 30% Architectural Grid Split
         ========================================================================= */}
      <section id="hero-section" className="relative w-full border-b border-black flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-5rem)]">
          
          {/* LEFT: 70% Architectural Grid Section */}
          <div className="lg:col-span-8 w-full border-r border-black flex flex-col relative thin-grid bg-white text-[#141414] justify-between">
            <div className="p-8 sm:p-12 lg:p-16 flex-grow flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-4 accent-teal"></div>
                  <div className="w-2 h-4 accent-pink"></div>
                  <div className="w-2 h-4 accent-orange"></div>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 font-mono-code">
                  Strategy to Screen // Badulla
                </span>
              </div>

              {/* Main Artistic Flair Gothic Display Headline */}
              <h1 className="gothic-display text-5xl sm:text-7xl md:text-8xl lg:text-[105px] text-black mb-8 leading-[0.85] tracking-tighter">
                IMAGINATIVE<br />
                369
              </h1>

              {/* Stately Editorial Pull-Description */}
              <p className="max-w-xl text-lg sm:text-xl leading-snug font-medium border-l-2 border-black pl-6 mb-10 text-[#141414]">
                The creative media, digital marketing, and software engineering powerhouse of Sri Lanka’s Hill Country. Turning bold ideas into cinematic stories, high-performing software, and brands that win.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="hero-primary-cta"
                  onClick={onOpenInquiry}
                  className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#FFA500] hover:text-black transition-colors rounded-none cursor-pointer flex items-center gap-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('work')}
                  className="border border-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors text-black rounded-none cursor-pointer flex items-center gap-2"
                >
                  <span>See Our Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Trusted Partners Ticker Strip on 70% section */}
            <div className="border-t border-black flex flex-wrap items-center px-6 sm:px-12 py-6 gap-6 sm:gap-10 bg-white">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 w-28 shrink-0 font-mono-code">
                Trusted Partners
              </span>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 grayscale opacity-75">
                <span className="text-xs sm:text-sm font-black tracking-tight">AITKEN SPENCE</span>
                <span className="text-xs sm:text-sm font-black tracking-tight">HILTON YALA</span>
                <span className="text-xs sm:text-sm font-black tracking-tight">THE PEKOE TRAIL</span>
                <span className="text-xs sm:text-sm font-black tracking-tight">COCO ORGANIC</span>
                <span className="text-xs sm:text-sm font-black tracking-tight hidden md:inline">BALINESE SPAS</span>
              </div>
            </div>
          </div>

          {/* RIGHT: 30% Obsidian Column with Triple Accent Bars & Directory */}
          <div className="lg:col-span-4 w-full bg-[#111] text-white flex flex-col justify-between border-t lg:border-t-0 border-black relative">
            {/* Top Half: Services Directory & Triple Bar */}
            <div className="p-8 sm:p-10 flex flex-col justify-end relative">
              {/* Artistic Flair Triple Accent Bars */}
              <div className="absolute top-0 right-0 p-6 flex space-x-2">
                <div className="w-2 h-10 sm:h-12 accent-teal"></div>
                <div className="w-2 h-10 sm:h-12 accent-pink"></div>
                <div className="w-2 h-10 sm:h-12 accent-orange"></div>
              </div>

              <span className="text-[10px] font-mono-code uppercase tracking-[0.3em] text-gray-400 mb-2">
                Discipline Matrix
              </span>
              <h2 className="gothic-display text-4xl sm:text-5xl mb-6 text-white leading-none">
                SERVICES
              </h2>

              <ul className="space-y-4 text-xs tracking-widest uppercase font-mono-code">
                <li
                  onClick={() => onNavigate('services')}
                  className="flex items-center cursor-pointer hover:text-[#008080] transition-colors group"
                >
                  <span className="w-2 h-2 accent-teal mr-3 shrink-0"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Tourism Marketing</span>
                </li>
                <li
                  onClick={() => onNavigate('services')}
                  className="flex items-center cursor-pointer hover:text-[#FF69B4] transition-colors group"
                >
                  <span className="w-2 h-2 accent-pink mr-3 shrink-0"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Software Engineering</span>
                </li>
                <li
                  onClick={() => onNavigate('services')}
                  className="flex items-center cursor-pointer hover:text-[#FFA500] transition-colors group"
                >
                  <span className="w-2 h-2 accent-orange mr-3 shrink-0"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Cinematic Media</span>
                </li>
                <li
                  onClick={() => onNavigate('services')}
                  className="flex items-center cursor-pointer hover:text-gray-300 transition-colors group"
                >
                  <span className="w-2 h-2 bg-white mr-3 shrink-0"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Digital Ops</span>
                </li>
              </ul>
            </div>

            {/* Bottom Half: Headquarters & Build Next Callout */}
            <div className="border-t border-white/20 p-8 sm:p-10 flex flex-col justify-between relative bg-black/40">
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-2 font-mono-code">
                  Headquarters
                </span>
                <p className="text-sm font-bold leading-tight">
                  Badulla, Uva Province<br />
                  <span className="text-[#00DFD8] text-xs font-mono-code font-normal">
                    The Ground Zero Advantage · 680m
                  </span>
                </p>
              </div>

              <div className="mt-auto flex justify-between items-end">
                <div className="vertical-text text-[10px] uppercase tracking-widest opacity-40 font-bold font-mono-code">
                  EST. 2024 // 06°59′N
                </div>
                <div className="text-right">
                  <p className="text-[36px] sm:text-[40px] gothic-display leading-none mb-2 text-white">
                    BUILD<br />NEXT
                  </p>
                  <button
                    onClick={() => onNavigate('ventures')}
                    className="text-[10px] uppercase font-bold tracking-widest border-b border-white pb-1 hover:text-[#FFA500] hover:border-[#FFA500] transition-colors cursor-pointer"
                  >
                    Explore Ventures →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTRO STRIP: Strategy to Screen
         ========================================================================= */}
      <section id="intro-strip" className="bg-[#111] text-white border-b border-black py-16 sm:py-20 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-4 accent-teal"></div>
                  <div className="w-1.5 h-4 accent-pink"></div>
                  <div className="w-1.5 h-4 accent-orange"></div>
                </div>
                <span className="font-mono-code text-xs uppercase tracking-[0.25em] text-[#FFA500] font-bold">
                  Core Mandate
                </span>
              </div>
              <h2 className="gothic-display text-4xl sm:text-5xl uppercase text-white tracking-tight leading-none">
                Strategy to Screen.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-lg sm:text-2xl text-zinc-300 font-light leading-relaxed">
                From the first strategy session to the final frame — or the final line of code — we build the full journey. Cinematic media, performance marketing, and full-stack software engineering, all under one roof, all rooted in <span className="text-white font-medium underline decoration-[#008080] underline-offset-4">Badulla, Uva Province</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT WE DO (Service Pillars Overview): 70% White / 30% Black Rhythm
         ========================================================================= */}
      <section id="what-we-do" className="bg-white text-zinc-950 py-24 px-6 sm:px-12 lg:px-16 border-b border-black thin-grid">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 accent-teal"></div>
                <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-500 font-bold">
                  Service Pillars Overview
                </span>
              </div>
              <h2 className="gothic-display text-5xl sm:text-6xl md:text-7xl uppercase text-black tracking-tight leading-none">
                What We Do.
              </h2>
              <p className="font-mono-code text-base sm:text-lg text-zinc-600 mt-2 font-medium">
                Four disciplines. One team. Zero friction.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-widest text-black hover:text-[#FFA500] transition-colors group cursor-pointer border-b border-black pb-1"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FFA500]" />
            </button>
          </div>

          {/* Pillars 4-Card Grid with crisp border-black styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_PILLARS.map((pillar) => {
              const accentBar =
                pillar.accentColor === 'teal'
                  ? 'accent-teal'
                  : pillar.accentColor === 'pink'
                  ? 'accent-pink'
                  : 'accent-orange';

              return (
                <div
                  key={pillar.id}
                  onClick={() => onNavigate('services')}
                  className="group p-8 bg-white border border-black hover:border-black transition-all duration-200 cursor-pointer flex flex-col justify-between relative hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 ${accentBar}`} />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono-code text-xs font-bold text-zinc-400">
                        {pillar.number}
                      </span>
                      <span className="text-2xl">{pillar.icon}</span>
                    </div>

                    <h3 className="gothic-display text-2xl uppercase text-black tracking-tight group-hover:opacity-75 transition-opacity">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-none ${accentBar}`} />
                      Inspect Pillar
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY IMAGINATIVE369: Ground Zero Advantage (30% Black Structure)
         ========================================================================= */}
      <section id="ground-zero-advantage" className="bg-[#111] text-white py-24 px-6 sm:px-12 lg:px-16 border-b border-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 accent-orange"></div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#FFA500] font-bold">
                The Ground Zero Advantage
              </span>
            </div>
            <h2 className="gothic-display text-5xl sm:text-6xl md:text-7xl uppercase text-white tracking-tight leading-tight">
              We didn’t set up in Colombo.
              <br />
              <span className="text-zinc-400">We set up on the ground.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Headquartered in Badulla instead of the capital, Imaginative369 operates with a structural edge no city agency can replicate:
            </p>
          </div>

          {/* 3 Structural Edge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GROUND_ZERO_ADVANTAGES.map((adv) => {
              const borderTopColor =
                adv.accentColor === 'teal'
                  ? 'border-t-[#008080]'
                  : adv.accentColor === 'pink'
                  ? 'border-t-[#FF69B4]'
                  : 'border-t-[#FFA500]';

              const metricTextColor =
                adv.accentColor === 'teal'
                  ? 'text-[#00DFD8]'
                  : adv.accentColor === 'pink'
                  ? 'text-[#FF69B4]'
                  : 'text-[#FFA500]';

              return (
                <div
                  key={adv.id}
                  className={`p-8 bg-black border border-zinc-800 border-t-4 ${borderTopColor} space-y-6 hover:border-zinc-600 transition-colors`}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono-code text-xs text-zinc-500 font-bold">
                      EDGE {adv.number}
                    </span>
                    <span className={`gothic-display text-4xl font-bold tracking-tight ${metricTextColor}`}>
                      {adv.metric}
                    </span>
                  </div>

                  <div>
                    <h3 className="gothic-display text-2xl uppercase text-white tracking-tight">
                      {adv.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-normal">
                      {adv.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800">
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-500">
                      {adv.metricLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Statement Box */}
          <div className="mt-12 p-6 sm:p-8 bg-black border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-lg sm:text-xl text-zinc-200 font-medium">
              "We call it the <span className="text-white font-bold underline decoration-[#008080] underline-offset-4">Ground Zero Advantage</span>. Our clients call it results."
            </p>

            <button
              onClick={() => onNavigate('about')}
              className="shrink-0 px-6 py-3 bg-white hover:bg-gray-200 text-black font-mono-code text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer rounded-none"
            >
              Read Our Full Story →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROOF, NOT PROMISES: Portfolio & Trusted Partners Showcase
         ========================================================================= */}
      <section id="proof-not-promises" className="bg-white text-zinc-950 py-24 px-6 sm:px-12 lg:px-16 border-b border-black thin-grid">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 accent-pink"></div>
                <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-500 font-bold">
                  Verified Outcomes
                </span>
              </div>
              <h2 className="gothic-display text-5xl sm:text-6xl md:text-7xl uppercase text-black tracking-tight leading-none">
                Proof, Not Promises.
              </h2>
              <p className="mt-3 text-base sm:text-lg text-zinc-700 max-w-2xl font-normal">
                Trusted by regional tourism bodies, corporate hospitality brands, and renewable energy leaders — including Aitken Spence, Hilton Yala, Coco Organic by Sena Mills, Balinese Spas, Life Balance Wellness, and the official digital partnership with The Pekoe Trail Organization.
              </p>
            </div>

            <button
              onClick={() => onNavigate('work')}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3.5 bg-black hover:bg-[#FFA500] hover:text-black text-white font-mono-code text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer rounded-none"
            >
              <span>View All Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Featured Case Studies Grid (Top 2 High-Impact Preview) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {CASE_STUDIES.slice(0, 2).map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy(cs)}
                className="group relative bg-black text-white border border-black overflow-hidden cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black border border-white/20 text-[10px] font-mono-code uppercase tracking-widest text-[#00DFD8]">
                      {cs.category} · {cs.client}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="gothic-display text-3xl sm:text-4xl uppercase text-white tracking-tight group-hover:text-[#FFA500] transition-colors">
                      {cs.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                    {cs.summary}
                  </p>

                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono-code text-zinc-400">
                    <span>Impact: {cs.stats[0]?.label} → <strong className="text-white">{cs.stats[0]?.value}</strong></span>
                    <span className="text-[#FFA500] underline uppercase text-[11px] font-bold">Deep Dive →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trusted Clients Logo Wall */}
          <div className="pt-12 border-t border-black">
            <p className="font-mono-code text-xs uppercase tracking-[0.2em] text-zinc-500 text-center mb-8">
              Trusted By Provincial & National Industry Pioneers
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {TRUSTED_CLIENTS.map((client, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-black text-center flex flex-col justify-center items-center h-24 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display font-bold text-sm text-black">
                    {client.name}
                  </span>
                  <span className="font-mono-code text-[9px] text-zinc-500 mt-1 uppercase">
                    {client.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING CTA BAND: Ready to move from strategy to screen?
         ========================================================================= */}
      <section id="closing-cta-band" className="bg-black text-white py-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111] border border-white/20">
            <div className="w-2 h-2 accent-orange"></div>
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#FFA500] font-bold">
              Ground Zero Briefing
            </span>
          </div>

          <h2 className="gothic-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight leading-[0.9]">
            Ready to move from
            <br />
            <span className="text-white">Strategy to Screen?</span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Tell us what you're building — a brand, a booking engine, a campaign, a movement — and let’s map it out.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-band-get-in-touch-btn"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black hover:bg-[#FFA500] font-mono-code text-xs uppercase font-bold tracking-widest transition-colors rounded-none cursor-pointer"
            >
              Start Your Project
            </button>

            <button
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto px-8 py-5 bg-transparent hover:bg-zinc-900 text-white border border-white font-mono-code text-xs uppercase font-bold tracking-widest transition-colors rounded-none cursor-pointer"
            >
              See Our Work
            </button>
          </div>
        </div>

        {/* Ambient Watermark */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-zinc-900/40 gothic-display text-[18rem] font-black uppercase select-none pointer-events-none whitespace-nowrap">
          369
        </div>
      </section>
    </div>
  );
};
