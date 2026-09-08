import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { PageId, ServicePillar } from '../types';
import { SERVICE_PILLARS } from '../data/agencyData';
import { ArrowRight, ArrowUpRight, Check, Sparkles, Code2, Film, TrendingUp, Mountain, Layers, MousePointer } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: string) => void;
}

interface StackedCardProps {
  pillar: ServicePillar;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  onOpenInquiry: (serviceType?: string) => void;
}

const ROTATIONS = [-1.5, 2.5, -2, 3];

const StackedCard: React.FC<StackedCardProps> = ({
  pillar,
  index,
  total,
  scrollYProgress,
  onOpenInquiry,
}) => {
  const targetRotation = ROTATIONS[index % ROTATIONS.length];

  // Dynamic transforms based on card position in stack
  let yTransform: MotionValue<number>;
  let rotateTransform: MotionValue<number>;
  let scaleTransform: MotionValue<number>;
  let opacityTransform: MotionValue<number>;

  if (index === 0) {
    yTransform = useTransform(scrollYProgress, [0, 1], [0, 0]);
    rotateTransform = useTransform(scrollYProgress, [0, 1], [targetRotation, targetRotation]);
    scaleTransform = useTransform(scrollYProgress, [0.15, 0.85], [1, 0.95]);
    opacityTransform = useTransform(scrollYProgress, [0, 0.05, 0.9], [1, 1, 0.85]);
  } else if (index === 1) {
    yTransform = useTransform(scrollYProgress, [0.12, 0.35], [550, 0]);
    rotateTransform = useTransform(scrollYProgress, [0.12, 0.35], [0, targetRotation]);
    scaleTransform = useTransform(scrollYProgress, [0.12, 0.35, 0.85], [1.05, 1, 0.97]);
    opacityTransform = useTransform(scrollYProgress, [0.12, 0.22, 0.9], [0, 1, 0.9]);
  } else if (index === 2) {
    yTransform = useTransform(scrollYProgress, [0.38, 0.62], [550, 0]);
    rotateTransform = useTransform(scrollYProgress, [0.38, 0.62], [0, targetRotation]);
    scaleTransform = useTransform(scrollYProgress, [0.38, 0.62, 0.85], [1.05, 1, 0.98]);
    opacityTransform = useTransform(scrollYProgress, [0.38, 0.48, 0.95], [0, 1, 0.95]);
  } else {
    // index === 3
    yTransform = useTransform(scrollYProgress, [0.65, 0.88], [550, 0]);
    rotateTransform = useTransform(scrollYProgress, [0.65, 0.88], [0, targetRotation]);
    scaleTransform = useTransform(scrollYProgress, [0.65, 0.88], [1.05, 1]);
    opacityTransform = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  }

  const accentColor =
    pillar.accentColor === 'teal'
      ? '#0891b2'
      : pillar.accentColor === 'pink'
      ? '#db2777'
      : '#d97706';

  const accentTextClass =
    pillar.accentColor === 'teal'
      ? 'text-cyan-800'
      : pillar.accentColor === 'pink'
      ? 'text-pink-700'
      : 'text-amber-700';

  const barColor =
    pillar.accentColor === 'teal'
      ? '#00FFFF'
      : pillar.accentColor === 'pink'
      ? '#FF00FF'
      : '#FFFF00';

  return (
    <motion.div
      style={{
        y: yTransform,
        rotate: rotateTransform,
        scale: scaleTransform,
        opacity: opacityTransform,
        zIndex: index + 10,
      }}
      className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 pointer-events-auto"
    >
      <div
        id={`service-card-${pillar.id}`}
        className="w-full max-w-4xl bg-white border border-black/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] rounded-3xl sm:rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
      >
        {/* Top CMYK Accent Bar */}
        <div
          className="h-2 w-full"
          style={{ backgroundColor: barColor }}
        />

        <div className="p-6 sm:p-8 md:p-10">
          {/* Top Row: Identifier, Icon, Title, Tags */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 border-b border-black/10">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
              <span className="font-mono-code text-xs sm:text-sm font-bold text-zinc-700 px-2.5 py-1 bg-zinc-100 border border-black/10 rounded-lg">
                {pillar.number} // 04
              </span>
              <span className="text-2xl sm:text-3xl">{pillar.icon}</span>
              <h2 className="gothic-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-950 tracking-tight leading-snug">
                {pillar.title}
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {pillar.tags.slice(0, 3).map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-[10px] font-mono-code uppercase tracking-wider border border-black/10 bg-zinc-100 text-zinc-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Body Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-5 sm:pt-6 items-start">
            {/* Left Column: Tagline, Narrative, Featured Client, Action */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <p className={`font-display text-base sm:text-lg md:text-xl font-bold leading-snug ${accentTextClass}`}>
                "{pillar.tagline}"
              </p>

              <p className="text-xs sm:text-sm md:text-[15px] text-zinc-700 font-normal leading-relaxed">
                {pillar.description}
              </p>

              {/* Featured Client or Build Badge */}
              {(pillar.featuredClient || pillar.featuredProject) && (
                <div className="p-3 sm:p-3.5 rounded-xl border border-black/10 bg-zinc-50">
                  <span className="font-mono-code text-[9px] uppercase tracking-widest text-zinc-500 font-bold block mb-0.5">
                    {pillar.featuredClient ? 'Featured Client Engagement' : 'Featured Build & Innovation'}
                  </span>
                  <span className="font-display font-bold text-xs sm:text-sm text-zinc-950">
                    {pillar.featuredClient || pillar.featuredProject}
                  </span>
                </div>
              )}

              <div className="pt-1">
                <MagneticButton
                  variant="primary"
                  onClick={() => onOpenInquiry(pillar.title)}
                  className="w-full sm:w-auto px-6 py-3 text-black bg-[#FFFF00] hover:bg-zinc-950 hover:text-white border border-black/20 text-xs font-mono-code font-bold uppercase tracking-wider rounded-xl justify-center gap-2 transition-colors"
                >
                  <span>Commission This Discipline</span>
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>

            {/* Right Column: Deliverables List */}
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
              <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-500 block mb-1 font-bold">
                Deliverables & Technical Scope
              </span>

              <div className="space-y-2 sm:space-y-2.5">
                {pillar.points.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-2.5 sm:p-3 rounded-xl border border-black/10 bg-zinc-50/80 hover:bg-zinc-100 flex items-start gap-3 transition-colors duration-200"
                  >
                    <span 
                      className="w-2 h-2 mt-1.5 shrink-0 rounded-sm"
                      style={{ backgroundColor: barColor }}
                    />
                    <span className="text-xs sm:text-[13px] text-zinc-800 font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="w-full bg-white text-[#141414] selection:bg-[#FFFF00] selection:text-black pt-16 sm:pt-20">
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
              03 // Full-Stack Capability Matrix
            </span>
          </div>

          <h1 className="gothic-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-black tracking-tight leading-[0.88] break-words">
            Services.
          </h1>

          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-t border-black pt-6">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-zinc-800 font-medium max-w-xl border-l-2 border-black pl-4 sm:pl-6">
              Four disciplines. One integrated team.
            </p>
            <p className="font-mono-code text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest">
              Destination Strategy · Software · Cinema · Performance
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY SCATTERED STACKING ANIMATION SECTION (Moody Dark Glassmorphism)
         ========================================================================= */}
      <section
        ref={containerRef}
        id="services-stack-section"
        className="relative h-[340vh] bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        {/* Deep Gradient & Cinematic Frosted Mesh Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95 backdrop-blur-[3px]" />
        <div className="absolute inset-0 dot-mesh opacity-20 pointer-events-none" />
        
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FF00FF]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Sticky Pinned Viewport Container */}
        <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 overflow-hidden z-10">
          {/* Top HUD / Deck Indicator */}
          <div className="w-full max-w-4xl flex items-center justify-between pb-3 sm:pb-4 text-xs font-mono-code text-zinc-400 border-b border-white/10 mb-2">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#00FFFF]" />
              <span className="uppercase tracking-widest text-[11px] font-bold text-white">
                Discipline Deck
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400 text-[10px] hidden sm:inline">
                SCATTERED STACKING SEQUENCE
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400">Scroll to Stack</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFFF00] animate-pulse" />
            </div>
          </div>

          {/* Cards Stack Stage */}
          <div className="relative w-full max-w-4xl min-h-[560px] sm:min-h-[520px] md:min-h-[480px] flex items-center justify-center">
            {SERVICE_PILLARS.map((pillar, idx) => (
              <StackedCard
                key={pillar.id}
                pillar={pillar}
                index={idx}
                total={SERVICE_PILLARS.length}
                scrollYProgress={scrollYProgress}
                onOpenInquiry={onOpenInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING SECTION: Ready to build something? Let's talk.
         ========================================================================= */}
      <section className="bg-[#111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-black relative z-20">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono-code text-[#00FFFF] uppercase tracking-widest">
            Direct Studio Line
          </div>

          <h2 className="gothic-display text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-none break-words">
            Ready to build something?
            <br />
            <span className="text-[#FFFF00]">Let's talk.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Whether you require end-to-end destination storytelling, high-speed Flutter apps, or 24/7 community management from Badulla.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <MagneticButton
              variant="glass"
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-black bg-white hover:bg-[#FFFF00] justify-center"
            >
              Start Your Project
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 text-white border border-white/20 hover:bg-white/10 justify-center"
            >
              Examine Our Case Studies
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

