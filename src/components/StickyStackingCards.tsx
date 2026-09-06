import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'motion/react';
import { SERVICE_PILLARS } from '../data/agencyData';
import { PageId } from '../types';
import { ArrowUpRight, Camera, Disc, Layers } from 'lucide-react';

interface StickyStackingCardsProps {
  onNavigate: (page: PageId) => void;
}

// Cinematic background images curated for each discipline
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Snappy spring physics for mechanical camera dial feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 190,
    damping: 26,
    restDelta: 0.001,
  });

  // Track active step for the mechanical HUD dial indicator
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.22) {
      setActiveStep(0);
    } else if (latest < 0.52) {
      setActiveStep(1);
    } else if (latest < 0.82) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  // ==========================================
  // MECHANICAL CAMERA DIAL STEPPED TRANSFORMS
  // ==========================================

  // Card 1 (Base): Starts full size, scales down subtly as upper cards stack
  const card1Scale = useTransform(smoothProgress, [0, 0.22, 0.32, 0.85], [1, 1, 0.95, 0.93]);
  const card1Dim = useTransform(smoothProgress, [0.18, 0.32], [1, 0.45]);

  // Card 2: Snappy slide-in from right [0.18 -> 0.32], then holds pinned [0.32 -> 0.52]
  const card2X = useTransform(
    smoothProgress,
    [0, 0.16, 0.30, 1],
    ['105%', '105%', '0%', '0%']
  );
  const card2Scale = useTransform(smoothProgress, [0.16, 0.30, 0.52, 0.62], [1.02, 1, 1, 0.96]);
  const card2Dim = useTransform(smoothProgress, [0.48, 0.62], [1, 0.5]);

  // Card 3: Snappy slide-in from right [0.48 -> 0.62], then holds pinned [0.62 -> 0.82]
  const card3X = useTransform(
    smoothProgress,
    [0, 0.46, 0.60, 1],
    ['105%', '105%', '0%', '0%']
  );
  const card3Scale = useTransform(smoothProgress, [0.46, 0.60, 0.82, 0.90], [1.02, 1, 1, 0.97]);
  const card3Dim = useTransform(smoothProgress, [0.78, 0.90], [1, 0.6]);

  // Card 4: Snappy slide-in from right [0.76 -> 0.90], then holds pinned
  const card4X = useTransform(
    smoothProgress,
    [0, 0.76, 0.90, 1],
    ['105%', '105%', '0%', '0%']
  );
  const card4Scale = useTransform(smoothProgress, [0.76, 0.90, 1], [1.02, 1, 1]);

  // Transform arrays mapped to index
  const xTransforms = [
    useTransform(smoothProgress, () => '0%'),
    card2X,
    card3X,
    card4X,
  ];

  const scaleTransforms = [
    card1Scale,
    card2Scale,
    card3Scale,
    card4Scale,
  ];

  const dimTransforms = [
    card1Dim,
    card2Dim,
    card3Dim,
    useTransform(smoothProgress, () => 1),
  ];

  // Helper to jump to a specific dial step when clicking mechanical dial HUD
  const jumpToStep = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollPositions = [0.05, 0.35, 0.65, 0.92];
    const targetScroll = containerTop + containerHeight * scrollPositions[index] - 80;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={containerRef}
      id="what-we-do"
      className="relative w-full bg-[#0d0d0d] text-white min-h-[380vh] border-b border-black select-none"
    >
      {/* Sticky Viewport Stage Centered in Screen */}
      <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full flex flex-col justify-between overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 max-w-7xl mx-auto">
        
        {/* Top Header & Camera Dial Navigation Strip */}
        <div className="relative z-50 flex flex-col md:flex-row md:items-end justify-between pb-3 sm:pb-4 border-b border-white/15 gap-3 shrink-0 bg-[#0d0d0d]/85 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <div className="flex space-x-1">
                <div className="w-1.5 h-3.5 accent-teal"></div>
                <div className="w-1.5 h-3.5 accent-pink"></div>
                <div className="w-1.5 h-3.5 accent-orange"></div>
              </div>
              <span className="font-mono-code text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#FFA500] font-bold">
                Service Pillars // Full-Stack Capability
              </span>
            </div>
            <h2 className="gothic-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white tracking-tight leading-none">
              What We Do.
            </h2>
          </div>

          {/* Mechanical Camera Dial Control HUD */}
          <div className="flex items-center gap-2.5 sm:gap-5 self-start md:self-auto bg-black/70 border border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)] rounded-lg">
            {/* Dial Step Rings */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {PILLAR_CINEMATIC_DATA.map((p, idx) => {
                const isActive = activeStep === idx;
                const accentClass =
                  p.accentColor === 'teal'
                    ? 'accent-teal text-black'
                    : p.accentColor === 'pink'
                    ? 'accent-pink text-white'
                    : 'accent-orange text-black';

                return (
                  <button
                    key={`dial-${p.id}`}
                    onClick={() => jumpToStep(idx)}
                    title={`Dial Step ${p.number}: ${p.title}`}
                    className={`relative px-2 sm:px-2.5 py-1 font-mono-code text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-sm ${
                      isActive
                        ? `${accentClass} shadow-[0_0_12px_rgba(255,255,255,0.4)] scale-105`
                        : 'bg-white/10 text-zinc-400 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    <span>{p.number}</span>
                  </button>
                );
              })}
            </div>

            {/* Shutter / Lens Parameters */}
            <div className="hidden lg:flex items-center gap-3 border-l border-white/20 pl-3 font-mono-code text-[10px] text-zinc-400">
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
              className="inline-flex items-center gap-1.5 font-mono-code text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-[#FFA500] transition-colors group cursor-pointer border-l border-white/20 pl-3"
            >
              <span>Explore All</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFA500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stacking Card Stage (Center) - Widescreen Dimensions with Smooth Rounded Corners */}
        <div className="relative flex-1 w-full my-auto flex items-center justify-center overflow-hidden py-2 sm:py-4">
          <div className="relative w-full max-w-5xl xl:max-w-6xl h-[280px] sm:h-[340px] md:h-[420px] lg:h-[460px] flex items-center justify-center">
            {PILLAR_CINEMATIC_DATA.map((pillar, idx) => {
              const zIndex = (idx + 1) * 10;
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
                  ? 'bg-[#008080]/30 text-teal-300 border-[#008080]/60'
                  : pillar.accentColor === 'pink'
                  ? 'bg-[#FF1493]/30 text-pink-300 border-[#FF1493]/60'
                  : 'bg-[#FFA500]/30 text-orange-300 border-[#FFA500]/60';

              return (
                <motion.div
                  key={pillar.id}
                  onClick={() => onNavigate('services')}
                  style={{
                    x: xTransforms[idx],
                    scale: scaleTransforms[idx],
                    opacity: dimTransforms[idx],
                    zIndex: zIndex,
                  }}
                  className={`absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between bg-zinc-900 border-t-4 ${accentBorderClass} cursor-pointer group`}
                >
                  {/* Cinematic Background Image with Rich Dark Gradient Overlay */}
                  <div className="absolute inset-0 z-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <img
                      src={pillar.bgImage}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.15] scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Multi-layer Cinematic Film Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
                    {/* Subtle Grain Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
                  </div>

                  {/* Top Minimalist Index Pill */}
                  <div className="relative z-10 p-4 sm:p-6 md:p-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-code text-[11px] sm:text-xs font-black px-2.5 py-1 bg-black/80 border border-white/30 text-white tracking-widest rounded-md">
                        {pillar.number} // 04
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-black/80 border border-white/20 px-3 py-1 backdrop-blur-md font-mono-code text-[10px] sm:text-xs text-zinc-300 rounded-md">
                      <Disc className="w-3.5 h-3.5 text-[#FFA500] animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="font-bold text-white uppercase tracking-wider hidden sm:inline">{pillar.badge}</span>
                      <span className="font-bold text-white uppercase tracking-wider sm:hidden">Pillar {pillar.number}</span>
                    </div>
                  </div>

                  {/* Minimized Content: Only Subtitle Tagline + Main Service Title inside Floating Glassmorphism Container */}
                  <div className="relative z-10 p-4 sm:p-6 md:p-8 flex items-end">
                    <div className="w-full max-w-2xl bg-black/60 backdrop-blur-2xl border border-white/25 p-4 sm:p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.65)] rounded-xl sm:rounded-2xl relative overflow-hidden group/box">
                      {/* Corner Specular Glass Glare */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/15 to-transparent pointer-events-none" />
                      
                      {/* Small Subtitle / Tagline right above main title */}
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <span className={`font-mono-code text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 border rounded ${accentBadgeClass}`}>
                          {pillar.tagline}
                        </span>
                      </div>

                      {/* Main Service Title */}
                      <h3 className="gothic-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white tracking-tight leading-none group-hover/box:text-[#FFA500] transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Architectural Accent Line */}
                  <div className="relative z-10 w-full h-1" style={{ backgroundColor: accentColor }} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Status Bar & Progress */}
        <div className="relative z-50 flex items-center justify-between pt-2 sm:pt-3 border-t border-white/15 text-zinc-400 font-mono-code text-[9px] sm:text-[10px] uppercase tracking-widest shrink-0 bg-[#0d0d0d]/85 backdrop-blur-md">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-white font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#FFA500]" />
              Sticky Scroll Stacking
            </span>
            <span className="hidden md:inline text-zinc-500">|</span>
            <span className="hidden md:inline text-zinc-400">
              Stacking Step {activeStep + 1} of 4
            </span>
          </div>

          {/* Stepped Progress Bar */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-zinc-500">Dial Easing</span>
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
  );
};
