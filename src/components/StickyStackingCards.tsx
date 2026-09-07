import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'motion/react';
import { SERVICE_PILLARS } from '../data/agencyData';
import { PageId } from '../types';
import { ArrowUpRight, Camera, Disc } from 'lucide-react';

interface StickyStackingCardsProps {
  onNavigate: (page: PageId) => void;
}

// Curated cinematic photography with camera telemetry
const PILLAR_CINEMATIC_DATA = [
  {
    ...SERVICE_PILLARS[0],
    bgImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    iso: 'ISO 100',
    shutter: '1/1000s',
    focal: '24mm F1.4',
    badge: 'Tourism & Destination Marketing',
  },
  {
    ...SERVICE_PILLARS[1],
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    iso: 'ISO 400',
    shutter: '1/2500s',
    focal: '35mm F1.8',
    badge: 'Software Engineering & AdventureTech',
  },
  {
    ...SERVICE_PILLARS[2],
    bgImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1600&auto=format&fit=crop',
    iso: 'ISO 800',
    shutter: '1/5000s',
    focal: '50mm F1.2 Cinema',
    badge: 'Cinematic Media & Visual Identity',
  },
  {
    ...SERVICE_PILLARS[3],
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    iso: 'ISO 200',
    shutter: '1/4000s',
    focal: '85mm F1.4 Master',
    badge: 'Digital Operations & Performance',
  },
];

export const StickyStackingCards: React.FC<StickyStackingCardsProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  // Track scroll progress through the tall container for desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Snappy yet ultra-fluid spring physics for smooth, responsive momentum bound to scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
    restDelta: 0.0001,
  });

  // =========================================================================
  // SCROLL-BOUND FLUID MARQUEE GLIDE LOGIC (Desktop):
  // - Layout: pl-[12vw] centers Card 01 (width 76vw) at trackX = 0vw.
  // - Gap between cards = 4vw. Pitch = 80vw per card.
  // - Total distance to reveal all 4 cards = 3 * 80vw = 240vw.
  // =========================================================================
  const trackX = useTransform(smoothProgress, (v: number) => {
    if (v <= 0) {
      return '0vw';
    }
    if (v >= 0.95) {
      return '-240vw';
    }
    // Linear continuous glide from 0vw to -240vw over progress 0.00 -> 0.95
    const t = v / 0.95;
    return `${-240 * t}vw`;
  });

  // Active step tracking for camera dial HUD
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (latest < 0.24) {
      setActiveStep(0);
    } else if (latest < 0.48) {
      setActiveStep(1);
    } else if (latest < 0.72) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  // Helper to jump directly to a specific card step
  const jumpToStep = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const stepFractions = [0.02, 0.32, 0.63, 0.94];
    const targetScroll = containerTop + containerHeight * stepFractions[index];

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section id="what-we-do" className="relative w-full bg-[#0a0a0a] text-white select-none">
      {/* =========================================================================
          MOBILE VIEW (< md): Native Smooth Vertical Stacking (Zero Touch Bugs)
         ========================================================================= */}
      <div className="block md:hidden w-full py-12 px-4 sm:px-6 border-b border-black">
        {/* Mobile Header */}
        <div className="mb-8 flex flex-col items-start text-left border-b border-white/15 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-500 mr-2 shrink-0"></div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-400 font-bold">
              Service Pillars Overview
            </span>
          </div>
          <h2 className="gothic-display text-3xl sm:text-4xl text-white tracking-tight leading-none mb-3">
            What We Do.
          </h2>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 font-mono-code text-xs font-bold uppercase tracking-widest text-[#FFA500] hover:underline"
          >
            <span>Explore All Capabilities</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Vertical Cards Stack */}
        <div className="flex flex-col gap-6">
          {PILLAR_CINEMATIC_DATA.map((pillar) => {
            const accentColor =
              pillar.accentColor === 'teal'
                ? '#008080'
                : pillar.accentColor === 'pink'
                ? '#FF1493'
                : '#FFA500';

            const accentBorderClass =
              pillar.accentColor === 'teal'
                ? 'border-t-[#008080]'
                : pillar.accentColor === 'pink'
                ? 'border-t-[#FF1493]'
                : 'border-t-[#FFA500]';

            const accentBadgeClass =
              pillar.accentColor === 'teal'
                ? 'bg-[#008080]/35 text-teal-200 border-[#008080]/80'
                : pillar.accentColor === 'pink'
                ? 'bg-[#FF1493]/35 text-pink-200 border-[#FF1493]/80'
                : 'bg-[#FFA500]/35 text-orange-200 border-[#FFA500]/80';

            return (
              <div
                key={`mobile-${pillar.id}`}
                onClick={() => onNavigate('services')}
                className={`relative w-full h-[320px] rounded-2xl border border-white/20 shadow-xl overflow-hidden flex flex-col justify-between bg-zinc-950 border-t-4 ${accentBorderClass} cursor-pointer active:scale-[0.99] transition-transform`}
              >
                {/* Background Image with Cinematic Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={pillar.bgImage}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.2]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
                </div>

                {/* Top Badge Info */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <span className="font-mono-code text-[11px] font-black px-2.5 py-1 bg-black/85 border border-white/35 text-white tracking-widest rounded-lg">
                    {pillar.number} // 04
                  </span>
                  <div className="flex items-center gap-1.5 bg-black/85 border border-white/25 px-2.5 py-1 backdrop-blur-md font-mono-code text-[10px] text-zinc-300 rounded-lg">
                    <Disc className="w-3 h-3 text-[#FFA500]" />
                    <span className="font-bold text-white uppercase tracking-wider">{pillar.badge}</span>
                  </div>
                </div>

                {/* Bottom Glassmorphic Content Box */}
                <div className="relative z-10 p-4">
                  <div className="w-full bg-[#080808]/85 backdrop-blur-[24px] border border-white/35 p-4 rounded-xl shadow-lg">
                    <div className="mb-1.5">
                      <span className={`font-mono-code text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 border rounded ${accentBadgeClass}`}>
                        {pillar.tagline}
                      </span>
                    </div>
                    <h3 className="gothic-display text-2xl text-white tracking-tight leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="relative z-10 w-full h-1" style={{ backgroundColor: accentColor }} />
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          DESKTOP VIEW (>= md): Horizontal Scroll-Bound Train Flow (Zero Cropping)
         ========================================================================= */}
      <div
        ref={containerRef}
        className="hidden md:block relative w-full min-h-[320vh] border-b border-black overflow-clip"
      >
        {/* Sticky Viewport Stage: Sized comfortably within viewport */}
        <div className="sticky top-16 lg:top-20 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] w-full flex flex-col justify-between overflow-hidden py-3 lg:py-4">
          
          {/* Top Header & Camera Dial Controls */}
          <div className="relative z-50 w-full px-6 lg:px-12 xl:px-16 pb-3 border-b border-white/15 shrink-0 bg-[#0a0a0a]/90 backdrop-blur-xl">
            <div className="flex items-end justify-between gap-4">
              {/* Left Header Title & Subtitle */}
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center mb-1.5">
                  <div className="w-2 h-2 bg-blue-500 mr-2 shrink-0"></div>
                  <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-400 font-bold">
                    Service Pillars Overview
                  </span>
                </div>
                <h2 className="gothic-display text-3xl lg:text-4xl xl:text-5xl text-white tracking-tight leading-none">
                  What We Do.
                </h2>
              </div>

              {/* Camera Dial Control HUD */}
              <div className="flex items-center gap-3 lg:gap-4 bg-black/80 border border-white/30 px-3.5 py-1.5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] rounded-xl">
                {/* Dial Step Selectors */}
                <div className="flex items-center gap-1.5">
                  {PILLAR_CINEMATIC_DATA.map((p, idx) => {
                    const isActive = activeStep === idx;
                    const accentClass =
                      p.accentColor === 'teal'
                        ? 'accent-teal text-black font-black'
                        : p.accentColor === 'pink'
                        ? 'accent-pink text-white font-black'
                        : 'accent-orange text-black font-black';

                    return (
                      <button
                        key={`dial-${p.id}`}
                        onClick={() => jumpToStep(idx)}
                        title={`Dial Step ${p.number}: ${p.title}`}
                        className={`relative px-2.5 py-1 font-mono-code text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-md ${
                          isActive
                            ? `${accentClass} shadow-[0_0_16px_rgba(255,255,255,0.5)] scale-105`
                            : 'bg-white/10 text-zinc-400 hover:text-white hover:bg-white/20'
                        }`}
                      >
                        <span>{p.number}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Shutter / Lens Parameters Telemetry */}
                <div className="hidden lg:flex items-center gap-3 border-l border-white/25 pl-3 font-mono-code text-[10px] text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Camera className="w-3 h-3 text-[#FFA500]" />
                    <span className="text-white font-bold">{PILLAR_CINEMATIC_DATA[activeStep]?.focal}</span>
                  </div>
                  <span className="text-zinc-600">|</span>
                  <span className="text-zinc-300">{PILLAR_CINEMATIC_DATA[activeStep]?.shutter}</span>
                  <span className="text-zinc-600">|</span>
                  <span className="text-[#008080] font-semibold">{PILLAR_CINEMATIC_DATA[activeStep]?.iso}</span>
                </div>

                {/* Explore All CTA */}
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 font-mono-code text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-[#FFA500] transition-colors group cursor-pointer border-l border-white/25 pl-3"
                >
                  <span>Explore All</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFA500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Track Container: Fluidly scaled to avoid any vertical cropping */}
          <div className="relative flex-1 w-full my-auto flex items-center overflow-hidden py-2 lg:py-3">
            
            {/* Edge Vignette Shading */}
            <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />

            {/* Fluid Horizontal Carriage Track */}
            <motion.div
              style={{ x: trackX }}
              className="flex items-center gap-[4vw] pl-[12vw] shrink-0 pointer-events-auto"
            >
              {PILLAR_CINEMATIC_DATA.map((pillar) => {
                const accentColor =
                  pillar.accentColor === 'teal'
                    ? '#008080'
                    : pillar.accentColor === 'pink'
                    ? '#FF1493'
                    : '#FFA500';

                const accentBorderClass =
                  pillar.accentColor === 'teal'
                    ? 'border-t-[#008080]'
                    : pillar.accentColor === 'pink'
                    ? 'border-t-[#FF1493]'
                    : 'border-t-[#FFA500]';

                const accentBadgeClass =
                  pillar.accentColor === 'teal'
                    ? 'bg-[#008080]/35 text-teal-200 border-[#008080]/80'
                    : pillar.accentColor === 'pink'
                    ? 'bg-[#FF1493]/35 text-pink-200 border-[#FF1493]/80'
                    : 'bg-[#FFA500]/35 text-orange-200 border-[#FFA500]/80';

                return (
                  <div
                    key={pillar.id}
                    onClick={() => onNavigate('services')}
                    className={`relative shrink-0 w-[76vw] lg:w-[72vw] xl:w-[68vw] h-[48vh] max-h-[440px] min-h-[260px] rounded-2xl lg:rounded-3xl border border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between bg-zinc-950 border-t-4 ${accentBorderClass} cursor-pointer group transition-all duration-300`}
                  >
                    {/* Cinematic Background Image */}
                    <div className="absolute inset-0 z-0 rounded-2xl lg:rounded-3xl overflow-hidden">
                      <img
                        src={pillar.bgImage}
                        alt={pillar.title}
                        className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.25] scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
                    </div>

                    {/* Top Minimalist Index Pill */}
                    <div className="relative z-10 p-4 lg:p-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-code text-xs font-black px-3 py-1 bg-black/85 border border-white/35 text-white tracking-widest rounded-lg shadow-md">
                          {pillar.number} // 04
                        </span>
                      </div>

                      <div className="flex items-center gap-2 bg-black/85 border border-white/25 px-3 py-1 backdrop-blur-xl font-mono-code text-xs text-zinc-300 rounded-lg shadow-md">
                        <Disc className="w-3.5 h-3.5 text-[#FFA500] animate-spin" style={{ animationDuration: '6s' }} />
                        <span className="font-bold text-white uppercase tracking-wider">{pillar.badge}</span>
                      </div>
                    </div>

                    {/* Frosted Glassmorphism Floating Box */}
                    <div className="relative z-10 p-4 lg:p-6 flex items-end">
                      <div className="w-full max-w-2xl bg-[#080808]/85 backdrop-blur-[36px] border-2 border-white/40 p-4 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.5)] rounded-xl lg:rounded-2xl relative overflow-hidden group/box transition-all duration-300">
                        {/* Corner Specular Glass Glare */}
                        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-white/25 via-white/10 to-transparent pointer-events-none" />
                        
                        {/* Tagline Badge */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`font-mono-code text-[11px] font-bold uppercase tracking-widest px-3 py-0.5 border rounded-md shadow-sm ${accentBadgeClass}`}>
                            {pillar.tagline}
                          </span>
                        </div>

                        {/* Main Service Title */}
                        <h3 className="gothic-display text-2xl lg:text-3xl xl:text-4xl text-white tracking-tight leading-tight group-hover/box:text-[#FFA500] transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Bottom Architectural Accent Line */}
                    <div className="relative z-10 w-full h-1.5" style={{ backgroundColor: accentColor }} />
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
