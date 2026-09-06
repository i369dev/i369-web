import React from 'react';
import { PageId, CaseStudy } from '../types';
import { GothicLogo } from '../components/GothicLogo';
import { GothicHeading } from '../components/GothicHeading';
import { SERVICE_PILLARS, CASE_STUDIES, TRUSTED_CLIENTS, GROUND_ZERO_ADVANTAGES } from '../data/agencyData';
import { ArrowRight, ArrowUpRight, Compass, ShieldCheck, Sparkles, Terminal, Video, MapPin, Zap } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

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
          HERO SECTION: Architectural Grid with Glass Accents
         ========================================================================= */}
      <section id="hero-section" className="relative w-full border-b border-black flex flex-col">
        <div className="flex-1 w-full min-h-[calc(100vh-5rem)] flex flex-col">
          
          {/* Architectural Grid Section */}
          <div className="w-full flex flex-col relative thin-grid bg-white text-[#141414] justify-between flex-grow">
            <div className="p-8 sm:p-12 lg:p-16 flex-grow flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Headline & Editorial Content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
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
                  <h1 className="gothic-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[108px] text-black mb-8 leading-[0.85] tracking-tighter">
                    IMAGINATIVE<br />
                    369
                  </h1>

                  {/* Stately Editorial Pull-Description with subtle frosted highlight */}
                  <div className="max-w-xl p-6 glass-panel-light border-l-4 border-l-black mb-10">
                    <p className="text-lg sm:text-xl leading-snug font-medium text-[#141414]">
                      The creative media, digital marketing, and software engineering powerhouse of Sri Lanka’s Hill Country. Turning bold ideas into cinematic stories, high-performing software, and brands that win.
                    </p>
                  </div>

                  {/* Action Buttons with Magnetic physics */}
                  <div className="flex flex-wrap items-center gap-4">
                    <MagneticButton
                      id="hero-primary-cta"
                      variant="primary"
                      onClick={onOpenInquiry}
                      className="px-8 py-4"
                    >
                      <span>Start Your Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </MagneticButton>

                    <MagneticButton
                      id="hero-secondary-cta"
                      variant="secondary"
                      onClick={() => onNavigate('work')}
                      className="px-8 py-4"
                    >
                      <span>See Our Work</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Column: Cinematic Video Showcase Container */}
                <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden border border-black/20 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
                    {/* HTML5 Background Video */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
                      className="w-full h-72 sm:h-96 lg:h-[460px] object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    >
                      <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-fog-over-a-green-mountain-forest-41480-large.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Top Floating Glass Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono-code text-[10px] uppercase tracking-widest rounded-full">
                        <span className="w-2 h-2 rounded-full bg-[#00DFD8] animate-pulse"></span>
                        <span>Cinematic Reel // 4K</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-3 accent-teal"></div>
                        <div className="w-1.5 h-3 accent-pink"></div>
                        <div className="w-1.5 h-3 accent-orange"></div>
                      </div>
                    </div>

                    {/* Bottom Metadata Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10 pointer-events-none text-white">
                      <div>
                        <p className="font-mono-code text-[11px] uppercase tracking-wider text-[#FFA500] font-bold">
                          Central Highlands
                        </p>
                        <p className="font-display text-base font-semibold text-white/90">
                          Badulla // 06°59′N 81°03′E
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono-code uppercase tracking-widest text-white/60 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded border border-white/15">
                          680m Above Sea
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trusted Partners Ticker Strip */}
            <div className="border-t border-black/15 flex flex-wrap items-center px-6 sm:px-12 py-6 gap-6 sm:gap-10 bg-white/70 backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 w-28 shrink-0 font-mono-code">
                Trusted Partners
              </span>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 grayscale opacity-75">
                <span className="text-xs sm:text-sm font-black tracking-tight hover:grayscale-0 transition-all cursor-default">AITKEN SPENCE</span>
                <span className="text-xs sm:text-sm font-black tracking-tight hover:grayscale-0 transition-all cursor-default">HILTON YALA</span>
                <span className="text-xs sm:text-sm font-black tracking-tight hover:grayscale-0 transition-all cursor-default">THE PEKOE TRAIL</span>
                <span className="text-xs sm:text-sm font-black tracking-tight hover:grayscale-0 transition-all cursor-default">COCO ORGANIC</span>
                <span className="text-xs sm:text-sm font-black tracking-tight hidden md:inline hover:grayscale-0 transition-all cursor-default">BALINESE SPAS</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTRO STRIP: Strategy to Screen
         ========================================================================= */}
      <section id="intro-strip" className="bg-[#111] text-white border-b border-black py-16 sm:py-20 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
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
          WHAT WE DO (Service Pillars Overview): 3D Tilt Glass Cards
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

          {/* Pillars 4-Card Grid with 3D Tilt and Glassmorphic aesthetics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_PILLARS.map((pillar) => {
              const accentBar =
                pillar.accentColor === 'teal'
                  ? 'accent-teal'
                  : pillar.accentColor === 'pink'
                  ? 'accent-pink'
                  : 'accent-orange';

              return (
                <TiltCard
                  key={pillar.id}
                  onClick={() => onNavigate('services')}
                  maxTilt={8}
                  scale={1.03}
                  className="p-8 flex flex-col justify-between cursor-pointer rounded-none"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${accentBar}`} />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono-code text-xs font-bold text-zinc-400">
                        {pillar.number}
                      </span>
                      <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{pillar.icon}</span>
                    </div>

                    <h3 className="gothic-display text-2xl uppercase text-black tracking-tight group-hover:text-[#FFA500] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between">
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-none ${accentBar}`} />
                      Inspect Pillar
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY IMAGINATIVE369: Ground Zero Advantage (30% Black Structure with Glass Cards)
         ========================================================================= */}
      <section id="ground-zero-advantage" className="bg-[#111] text-white py-24 px-6 sm:px-12 lg:px-16 border-b border-black relative">
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

          {/* 3 Structural Edge Cards with 3D Tilt */}
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
                <TiltCard
                  key={adv.id}
                  isDark={true}
                  maxTilt={7}
                  scale={1.03}
                  className={`p-8 border-t-4 ${borderTopColor} space-y-6 rounded-none`}
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

                  <div className="pt-4 border-t border-white/10">
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-400 font-bold">
                      {adv.metricLabel}
                    </span>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          {/* Bottom Statement Box with Glassmorphism */}
          <div className="mt-12 p-6 sm:p-8 glass-panel-dark flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/20">
            <p className="text-lg sm:text-xl text-zinc-200 font-medium">
              "We call it the <span className="text-white font-bold underline decoration-[#008080] underline-offset-4">Ground Zero Advantage</span>. Our clients call it results."
            </p>

            <MagneticButton
              variant="glass"
              onClick={() => onNavigate('about')}
              className="shrink-0 px-6 py-3"
            >
              Read Our Full Story →
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROOF, NOT PROMISES: Portfolio & Trusted Partners Showcase (hugeinc.com style image reveal & 3D tilt)
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

            <MagneticButton
              variant="primary"
              onClick={() => onNavigate('work')}
              className="mt-6 md:mt-0 px-6 py-3.5"
            >
              <span>View All Studies</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>

          {/* Featured Case Studies Grid (HugeInc style 3D tilt, zoom reveal, and glassmorphic stats) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {CASE_STUDIES.slice(0, 2).map((cs) => (
              <TiltCard
                key={cs.id}
                isDark={true}
                maxTilt={6}
                scale={1.02}
                onClick={() => onSelectCaseStudy(cs)}
                className="cursor-pointer rounded-none"
              >
                <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover grayscale brightness-90 contrast-125 card-media-zoom"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 glass-pill text-[10px] font-mono-code uppercase tracking-widest text-[#00DFD8]">
                      {cs.category} · {cs.client}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4 relative z-10">
                  <div className="flex items-baseline justify-between">
                    <h3 className="gothic-display text-3xl sm:text-4xl uppercase text-white tracking-tight group-hover:text-[#FFA500] transition-colors">
                      {cs.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed font-light">
                    {cs.summary}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-zinc-400">
                    <span>Impact: {cs.stats[0]?.label} → <strong className="text-white font-bold">{cs.stats[0]?.value}</strong></span>
                    <span className="text-[#FFA500] underline uppercase text-[11px] font-bold">Deep Dive →</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Trusted Clients Logo Wall with glassmorphic cards */}
          <div className="pt-12 border-t border-black">
            <p className="font-mono-code text-xs uppercase tracking-[0.2em] text-zinc-500 text-center mb-8 font-bold">
              Trusted By Provincial & National Industry Pioneers
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {TRUSTED_CLIENTS.map((client, idx) => (
                <TiltCard
                  key={idx}
                  maxTilt={10}
                  scale={1.04}
                  className="p-4 text-center flex flex-col justify-center items-center h-24 rounded-none cursor-default"
                >
                  <span className="font-display font-bold text-sm text-black">
                    {client.name}
                  </span>
                  <span className="font-mono-code text-[9px] text-zinc-500 mt-1 uppercase font-bold">
                    {client.role}
                  </span>
                </TiltCard>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20">
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
            <MagneticButton
              id="cta-band-get-in-touch-btn"
              variant="glass"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-10 py-5 text-black bg-white hover:bg-[#FFA500]"
            >
              Start Your Project
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto px-8 py-5 text-white border border-white hover:bg-white/10"
            >
              See Our Work
            </MagneticButton>
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

