import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'motion/react';
import { SERVICE_PILLARS } from '../data/agencyData';
import { PageId } from '../types';
import { ArrowUpRight, Camera, Disc, Layers } from 'lucide-react';

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

  // Track scroll progress through the tall container
  // Offset: start start (triggers exactly as section top reaches top of viewport)
  // to end end (completes as bottom of container reaches bottom of viewport)
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
  // SCROLL-BOUND FLUID MARQUEE GLIDE LOGIC:
  // - Layout: pl-[10vw] centers Card 01 (width 80vw) at trackX = 0vw.
  // - Gap between cards = 4vw. Pitch = 84vw per card.
  // - Total distance to reveal all 4 cards = 3 * 84vw = 252vw.
  //
  // 1. [0.00]: As the section pins to the top of viewport, Card 01 is IMMEDIATELY
  //    and perfectly centered at 0vw without any lag, empty gap, or initial delay.
  // 2. [0.00 -> 0.95]: Smooth, steady, linear scroll-bound glide from 0vw to -252vw.
  //    Subsequent cards sweep in fluidly from right to left like a marquee.
  // 3. [0.95 -> 1.00]: Buffer zone at the final card before smooth unpinning.
  // =========================================================================
  const trackX = useTransform(smoothProgress, (v: number) => {
    if (v <= 0) {
      return '0vw';
    }
    if (v >= 0.95) {
      return '-252vw';
    }
    // Linear continuous glide from 0vw to -252vw over progress 0.00 -> 0.95
    const t = v / 0.95;
    return `${-252 * t}vw`;
  });

  // Active step tracking for camera dial HUD and progress bars
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    // 4 stages across 0.0 to 0.95: ~0.24 intervals
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
    // Step targets evenly distributed from 0 to 0.95
    const stepFractions = [0.02, 0.32, 0.63, 0.94];
    const targetScroll = containerTop + containerHeight * stepFractions[index];

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={containerRef}
      id="what-we-do"
      className="relative w-full bg-[#0a0a0a] text-white min-h-[350vh] border-b border-black select-none overflow-clip"
    >
      {/* Sticky Viewport Stage: Locks immediately at top */}
      <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full flex flex-col justify-between overflow-hidden py-3 sm:py-5">
        
        {/* =========================================================================
            TOP HEADER & CAMERA DIAL HUD: Pure Left-Aligned Layout
           ========================================================================= */}
        <div className="relative z-50 w-full px-4 sm:px-8 md:px-12 lg:px-16 pb-2.5 sm:pb-3.5 border-b border-white/15 shrink-0 bg-[#0a0a0a]/90 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            {/* Left Header Title & Eyebrow */}
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-1 sm:mb-1.5">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-3.5 accent-teal"></div>
                  <div className="w-1.5 h-3.5 accent-pink"></div>
                  <div className="w-1.5 h-3.5 accent-orange"></div>
                </div>
                <span className="font-mono-code text-[10px] sm:text-xs uppercase tracking-[0.26em] text-[#FFA500] font-bold">
                  Service Pillars // Full-Stack Capability
                </span>
              </div>
              <h2 className="gothic-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none">
                What We Do.
              </h2>
            </div>

            {/* Left/Adjacent Mechanical Camera Dial Control HUD */}
            <div className="flex items-center gap-2.5 sm:gap-4 self-start md:self-auto bg-black/80 border border-white/30 px-3 sm:px-4 py-1.5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] rounded-xl">
              {/* Dial Step Selectors */}
              <div className="flex items-center gap-1 sm:gap-1.5">
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
                      className={`relative px-2 sm:px-2.5 py-1 font-mono-code text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-md ${
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
                className="inline-flex items-center gap-1.5 font-mono-code text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-[#FFA500] transition-colors group cursor-pointer border-l border-white/25 pl-3"
              >
                <span>Explore All</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FFA500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            HORIZONTAL TRAIN CARRIAGE TRACK (Scroll-Driven Marquee with Fluid vw Units)
           ========================================================================= */}
        <div className="relative flex-1 w-full my-auto flex items-center overflow-hidden py-2 sm:py-4">
          
          {/* Subtle Left & Right Edge Vignette Shading */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />

          {/* Fluid Horizontal Track: pl-[10vw] perfectly centers Card 01 at trackX = 0vw */}
          <motion.div
            style={{ x: trackX }}
            className="flex items-center gap-[4vw] pl-[10vw] shrink-0 pointer-events-auto"
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
                  className={`relative shrink-0 w-[80vw] h-[48vh] sm:h-[50vh] md:h-[52vh] max-h-[520px] min-h-[290px] rounded-2xl sm:rounded-3xl border border-white/25 shadow-[0_28px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between bg-zinc-950 border-t-4 ${accentBorderClass} cursor-pointer group transition-all duration-300`}
                >
                  {/* Cinematic Background Image with Rich Film Grade Overlay */}
                  <div className="absolute inset-0 z-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <img
                      src={pillar.bgImage}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.25] scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Multi-layer Cinematic Film Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
                    {/* Subtle Matrix Grain Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
                  </div>

                  {/* Top Minimalist Index Pill */}
                  <div className="relative z-10 p-4 sm:p-6 md:p-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-code text-[11px] sm:text-xs font-black px-3 py-1 bg-black/85 border border-white/35 text-white tracking-widest rounded-lg shadow-md">
                        {pillar.number} // 04
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-black/85 border border-white/25 px-3 py-1 backdrop-blur-xl font-mono-code text-[10px] sm:text-xs text-zinc-300 rounded-lg shadow-md">
                      <Disc className="w-3.5 h-3.5 text-[#FFA500] animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="font-bold text-white uppercase tracking-wider hidden sm:inline">{pillar.badge}</span>
                      <span className="font-bold text-white uppercase tracking-wider sm:hidden">Pillar {pillar.number}</span>
                    </div>
                  </div>

                  {/* Minimized Content: Intense Glassmorphism Floating Box */}
                  <div className="relative z-10 p-4 sm:p-6 md:p-8 flex items-end">
                    <div className="w-full max-w-3xl bg-[#080808]/85 backdrop-blur-[36px] border-2 border-white/40 p-5 sm:p-7 md:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.9),0_0_24px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.5)] rounded-xl sm:rounded-2xl relative overflow-hidden group/box transition-all duration-300">
                      {/* Corner Specular Glass Glare */}
                      <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-white/25 via-white/10 to-transparent pointer-events-none" />
                      
                      {/* Small Subtitle / Tagline right above main title */}
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <span className={`font-mono-code text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 border rounded-md shadow-sm ${accentBadgeClass}`}>
                          {pillar.tagline}
                        </span>
                      </div>

                      {/* Main Service Title */}
                      <h3 className="gothic-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-none group-hover/box:text-[#FFA500] transition-colors">
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

        {/* =========================================================================
            BOTTOM STATUS BAR & PROGRESS
           ========================================================================= */}
        <div className="relative z-50 w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-2 sm:pt-3 border-t border-white/15 text-zinc-400 font-mono-code text-[9px] sm:text-[10px] uppercase tracking-widest shrink-0 bg-[#0a0a0a]/90 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-white font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#FFA500]" />
                Scroll-Driven Train Flow
              </span>
              <span className="hidden md:inline text-zinc-500">|</span>
              <span className="hidden md:inline text-zinc-400">
                Pillar {activeStep + 1} of 4
              </span>
            </div>

            {/* Stepped Progress Bar */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-zinc-500">Train Velocity</span>
              <div className="w-20 sm:w-32 h-1.5 bg-white/15 overflow-hidden flex rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-[#008080] via-[#FF1493] to-[#FFA500] transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                />
              </div>
              <span className="font-bold text-white">{((activeStep + 1) / 4) * 100}%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
