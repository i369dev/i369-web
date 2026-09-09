import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'motion/react';
import { PageId, CaseStudy } from '../types';
import { CASE_STUDIES, TRUSTED_CLIENTS } from '../data/agencyData';
import { ArrowUpRight, X, Layers, Sparkles, Check, Compass, TrendingUp, ChevronRight, Eye } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

interface WorkPageProps {
  onNavigate: (page: PageId) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenInquiry: (serviceType?: string) => void;
}

interface ArcCardProps {
  caseStudy: CaseStudy;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  onSelect: (cs: CaseStudy) => void;
}

const ArcCard: React.FC<ArcCardProps> = ({
  caseStudy,
  index,
  total,
  scrollYProgress,
  onSelect,
}) => {
  // Arc-path transforms mapped across vertical scroll progress:
  // Card 0 starts at center (0.00)
  // Card 1 centers at 0.20
  // Card 2 centers at 0.39
  // Card 3 centers at 0.58
  // Card 4 centers at 0.78 and stays 100% locked & stationary through 1.00 before unpinning
  //
  // Coordinates use large values so cards completely clear any screen viewport (beyond -100vw / 100vh)
  // without piling or clumping in the bottom-left.
  const ENTRY_X = 2200;
  const ENTRY_Y = 900;
  const MID_ENTRY_X = 450;
  const MID_ENTRY_Y = 140;

  const MID_EXIT_X = -450;
  const MID_EXIT_Y = 140;
  const EXIT_X = -2200;
  const EXIT_Y = 900;
  const FAR_EXIT_X = -2500;
  const FAR_EXIT_Y = 1050;

  let xTransform: MotionValue<number>;
  let yTransform: MotionValue<number>;
  let rotateTransform: MotionValue<number>;
  let scaleTransform: MotionValue<number>;
  let opacityTransform: MotionValue<number>;

  if (index === 0) {
    xTransform = useTransform(scrollYProgress, [0, 0.10, 0.20, 1.0], [0, MID_EXIT_X, EXIT_X, FAR_EXIT_X]);
    yTransform = useTransform(scrollYProgress, [0, 0.10, 0.20, 1.0], [0, MID_EXIT_Y, EXIT_Y, FAR_EXIT_Y]);
    rotateTransform = useTransform(scrollYProgress, [0, 0.10, 0.20, 1.0], [0, -12, -24, -24]);
    scaleTransform = useTransform(scrollYProgress, [0, 0.10, 0.20, 1.0], [1, 0.88, 0.65, 0.65]);
    opacityTransform = useTransform(scrollYProgress, [0, 0.08, 0.18, 1.0], [1, 0.85, 0, 0]);
  } else if (index === 1) {
    xTransform = useTransform(scrollYProgress, [0, 0.10, 0.20, 0.30, 0.39, 1.0], [ENTRY_X, MID_ENTRY_X, 0, MID_EXIT_X, EXIT_X, FAR_EXIT_X]);
    yTransform = useTransform(scrollYProgress, [0, 0.10, 0.20, 0.30, 0.39, 1.0], [ENTRY_Y, MID_ENTRY_Y, 0, MID_EXIT_Y, EXIT_Y, FAR_EXIT_Y]);
    rotateTransform = useTransform(scrollYProgress, [0, 0.10, 0.20, 0.30, 0.39, 1.0], [24, 12, 0, -12, -24, -24]);
    scaleTransform = useTransform(scrollYProgress, [0, 0.10, 0.20, 0.30, 0.39, 1.0], [0.65, 0.88, 1, 0.88, 0.65, 0.65]);
    opacityTransform = useTransform(scrollYProgress, [0, 0.08, 0.20, 0.30, 0.38, 1.0], [0, 0.85, 1, 0.85, 0, 0]);
  } else if (index === 2) {
    xTransform = useTransform(scrollYProgress, [0, 0.19, 0.29, 0.39, 0.49, 0.58, 1.0], [ENTRY_X, ENTRY_X, MID_ENTRY_X, 0, MID_EXIT_X, EXIT_X, FAR_EXIT_X]);
    yTransform = useTransform(scrollYProgress, [0, 0.19, 0.29, 0.39, 0.49, 0.58, 1.0], [ENTRY_Y, ENTRY_Y, MID_ENTRY_Y, 0, MID_EXIT_Y, EXIT_Y, FAR_EXIT_Y]);
    rotateTransform = useTransform(scrollYProgress, [0, 0.19, 0.29, 0.39, 0.49, 0.58, 1.0], [24, 24, 12, 0, -12, -24, -24]);
    scaleTransform = useTransform(scrollYProgress, [0, 0.19, 0.29, 0.39, 0.49, 0.58, 1.0], [0.65, 0.65, 0.88, 1, 0.88, 0.65, 0.65]);
    opacityTransform = useTransform(scrollYProgress, [0, 0.19, 0.27, 0.39, 0.49, 0.57, 1.0], [0, 0, 0.85, 1, 0.85, 0, 0]);
  } else if (index === 3) {
    xTransform = useTransform(scrollYProgress, [0, 0.38, 0.48, 0.58, 0.68, 0.78, 1.0], [ENTRY_X, ENTRY_X, MID_ENTRY_X, 0, MID_EXIT_X, EXIT_X, FAR_EXIT_X]);
    yTransform = useTransform(scrollYProgress, [0, 0.38, 0.48, 0.58, 0.68, 0.78, 1.0], [ENTRY_Y, ENTRY_Y, MID_ENTRY_Y, 0, MID_EXIT_Y, EXIT_Y, FAR_EXIT_Y]);
    rotateTransform = useTransform(scrollYProgress, [0, 0.38, 0.48, 0.58, 0.68, 0.78, 1.0], [24, 24, 12, 0, -12, -24, -24]);
    scaleTransform = useTransform(scrollYProgress, [0, 0.38, 0.48, 0.58, 0.68, 0.78, 1.0], [0.65, 0.65, 0.88, 1, 0.88, 0.65, 0.65]);
    opacityTransform = useTransform(scrollYProgress, [0, 0.38, 0.46, 0.58, 0.68, 0.77, 1.0], [0, 0, 0.85, 1, 0.85, 0, 0]);
  } else {
    // index === 4 (FINAL CARD: locks in center from 0.78 to 1.00)
    xTransform = useTransform(scrollYProgress, [0, 0.58, 0.68, 0.78, 1.0], [ENTRY_X, ENTRY_X, MID_ENTRY_X, 0, 0]);
    yTransform = useTransform(scrollYProgress, [0, 0.58, 0.68, 0.78, 1.0], [ENTRY_Y, ENTRY_Y, MID_ENTRY_Y, 0, 0]);
    rotateTransform = useTransform(scrollYProgress, [0, 0.58, 0.68, 0.78, 1.0], [24, 24, 12, 0, 0]);
    scaleTransform = useTransform(scrollYProgress, [0, 0.58, 0.68, 0.78, 1.0], [0.65, 0.65, 0.88, 1, 1]);
    opacityTransform = useTransform(scrollYProgress, [0, 0.58, 0.66, 0.78, 1.0], [0, 0, 0.85, 1, 1]);
  }

  const pointerEvents = useTransform(opacityTransform, (val) => (val > 0.05 ? 'auto' : 'none'));

  const accentBarColor =
    caseStudy.accentColor === 'teal'
      ? '#00FFFF'
      : caseStudy.accentColor === 'pink'
      ? '#FF00FF'
      : '#FFFF00';

  return (
    <motion.div
      style={{
        x: xTransform,
        y: yTransform,
        rotate: rotateTransform,
        scale: scaleTransform,
        opacity: opacityTransform,
        pointerEvents,
        zIndex: index === 4 ? 30 : index + 10,
      }}
      className="absolute inset-0 flex items-center justify-center p-2 sm:p-4"
    >
      <div
        id={`work-card-${caseStudy.id}`}
        onClick={() => onSelect(caseStudy)}
        className="w-[280px] sm:w-[320px] md:w-[350px] bg-zinc-950/95 border border-white/20 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:border-white/40 hover:shadow-[0_30px_70px_rgba(0,255,255,0.25)] flex flex-col justify-between"
      >
        {/* Top CMYK Accent Bar */}
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: accentBarColor }}
        />

        {/* Compact Card Media */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900 border-b border-white/10">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          {/* Top Floating Badge */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="px-2.5 py-1 text-[9px] font-mono-code font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#00FFFF] border border-white/10 rounded-full">
              {caseStudy.category}
            </span>
            <span className="px-2 py-0.5 text-[10px] font-mono-code font-bold text-zinc-300 bg-black/60 rounded-md border border-white/10">
              {caseStudy.number} // 05
            </span>
          </div>

          {/* Quick Hover Prompt */}
          <div className="absolute bottom-2.5 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFF00] text-black text-[10px] font-mono-code font-bold uppercase tracking-wider shadow-lg">
            <span>View Dossier</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>

        {/* Compact Card Content: Just 1-2 core details */}
        <div className="p-4 sm:p-5 space-y-2.5">
          <div>
            <h3 className="gothic-display text-lg sm:text-xl md:text-2xl text-white tracking-tight leading-snug group-hover:text-[#FFFF00] transition-colors">
              {caseStudy.title}
            </h3>
            <p className="font-mono-code text-[11px] sm:text-xs text-zinc-400 mt-1 truncate">
              {caseStudy.client}
            </p>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-zinc-400">
            <span className="text-zinc-500 uppercase tracking-wider">Tap for full case</span>
            <div className="flex items-center gap-1 text-[#00FFFF] font-bold">
              <span>EXPLORE</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const WorkPage: React.FC<WorkPageProps> = ({
  onNavigate,
  onSelectCaseStudy,
  onOpenInquiry,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCaseStudy(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
              04 // Ground-Zero Case Archive
            </span>
          </div>

          <h1 className="gothic-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-black tracking-tight leading-[0.88] break-words">
            Our Work.
          </h1>

          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-t border-black pt-6">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-zinc-800 font-medium max-w-xl border-l-2 border-black pl-4 sm:pl-6">
              Real clients. Real ground. Real results.
            </p>
            <p className="font-mono-code text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest">
              Scroll through the arc deck · Click any card for the full dossier
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY ARC-SCROLL SECTION (Curved Trajectory Flow Carousel)
         ========================================================================= */}
      <section
        ref={containerRef}
        id="work-arc-scroll-section"
        className="relative h-[380vh] bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        {/* Deep Gradient & Cinematic Frosted Mesh Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95 backdrop-blur-[3px]" />
        <div className="absolute inset-0 dot-mesh opacity-20 pointer-events-none" />

        {/* Ambient Radial Color Accents */}
        <div className="absolute top-1/3 left-8 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-8 w-96 h-96 bg-[#FF00FF]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Sticky Pinned Viewport Container */}
        <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 overflow-hidden z-10">
          {/* Top HUD / Arc Deck Indicator */}
          <div className="w-full max-w-4xl flex items-center justify-between pb-3 sm:pb-4 text-xs font-mono-code text-zinc-400 border-b border-white/10 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#00FFFF]" />
              <span className="uppercase tracking-widest text-[11px] font-bold text-white">
                Arc Case Flow
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400 text-[10px] hidden sm:inline">
                SEMI-CIRCULAR TRAJECTORY DECK
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400">Scroll to Navigate</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] animate-pulse" />
            </div>
          </div>

          {/* Curved Arc Stage */}
          <div className="relative w-full max-w-4xl min-h-[460px] sm:min-h-[480px] flex items-center justify-center">
            {CASE_STUDIES.map((cs, idx) => (
              <ArcCard
                key={cs.id}
                caseStudy={cs}
                index={idx}
                total={CASE_STUDIES.length}
                scrollYProgress={scrollYProgress}
                onSelect={(caseStudy) => setSelectedCaseStudy(caseStudy)}
              />
            ))}
          </div>

          {/* Bottom Prompt Bar */}
          <div className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-zinc-400 font-mono-code text-[10px] sm:text-[11px] uppercase tracking-wider">
            <Eye className="w-3 h-3 text-[#FFFF00]" />
            <span>Click any card to inspect full metrics & deliverables</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDY DETAILS MODAL POPUP (Glassmorphism Modal)
         ========================================================================= */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-zinc-950/95 border border-white/20 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] text-white p-6 sm:p-8 md:p-10 z-10 custom-scrollbar"
            >
              {/* Top Accent Ribbon */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{
                  backgroundColor:
                    selectedCaseStudy.accentColor === 'teal'
                      ? '#00FFFF'
                      : selectedCaseStudy.accentColor === 'pink'
                      ? '#FF00FF'
                      : '#FFFF00',
                }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
                aria-label="Close Case Study Details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="font-mono-code text-xs font-bold text-zinc-300 px-2.5 py-1 bg-white/10 border border-white/15 rounded-lg">
                    {selectedCaseStudy.number} // 05
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-mono-code uppercase tracking-wider border border-white/15 bg-white/5 text-[#00FFFF] rounded-full font-bold">
                    {selectedCaseStudy.category}
                  </span>
                  <span className="text-zinc-400 font-mono-code text-xs">
                    Client: <strong className="text-white">{selectedCaseStudy.client}</strong>
                  </span>
                </div>

                <h2 className="gothic-display text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                  {selectedCaseStudy.title}
                </h2>
              </div>

              {/* Cover Image Banner */}
              <div className="relative mt-5 h-56 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden border border-white/15 bg-zinc-900">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>

              {/* Summary Narrative */}
              <div className="mt-6 space-y-2">
                <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-[#00FFFF] font-bold block">
                  Executive Brief & Objective
                </span>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  {selectedCaseStudy.summary}
                </p>
              </div>

              {/* Key Performance Metrics */}
              {selectedCaseStudy.stats && selectedCaseStudy.stats.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/10">
                  <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-400 font-bold block mb-3">
                    Key Performance Metrics
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {selectedCaseStudy.stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between"
                      >
                        <span className="font-mono-code text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                          {stat.label}
                        </span>
                        <span className="gothic-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables List */}
              {selectedCaseStudy.deliverables && selectedCaseStudy.deliverables.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/10">
                  <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-400 font-bold block mb-3">
                    Technical Scope & Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedCaseStudy.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-zinc-200"
                      >
                        <Check className="w-4 h-4 text-[#FFFF00] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact / Quote */}
              {selectedCaseStudy.impact && (
                <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-mono-code text-[10px] uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                    Direct Regional Impact
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                    {selectedCaseStudy.impact}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <MagneticButton
                  variant="primary"
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    onOpenInquiry(selectedCaseStudy.category);
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#FFFF00] text-black hover:bg-white text-xs font-mono-code font-bold uppercase tracking-wider rounded-xl justify-center gap-2"
                >
                  <span>Inquire About Similar Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>

                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="w-full sm:w-auto px-5 py-3 text-xs font-mono-code text-zinc-400 hover:text-white rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          TRUSTED BY SECTION
         ========================================================================= */}
      <section className="bg-[#111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
            <span className="font-mono-code text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#00FFFF] font-bold">
              Industry Credentials
            </span>
            <h2 className="gothic-display text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
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
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-black bg-white hover:bg-[#FFFF00] justify-center"
            >
              Commission A New Case Study
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

