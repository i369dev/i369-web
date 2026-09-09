import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageId, VentureItem } from '../types';
import { VENTURES } from '../data/agencyData';
import { ArrowUpRight, Play, Pause, Compass, Radio, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

interface VenturesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

const getAccentHex = (accentColor?: string) => {
  if (accentColor === 'teal') return '#00FFFF';
  if (accentColor === 'pink') return '#FF00FF';
  return '#FFFF00';
};

const getGlowColor = (accentColor?: string) => {
  if (accentColor === 'teal') return 'rgba(0, 255, 255, 0.2)';
  if (accentColor === 'pink') return 'rgba(255, 0, 255, 0.2)';
  return 'rgba(255, 255, 0, 0.2)';
};

const getBorderHoverClass = (accentColor?: string) => {
  if (accentColor === 'teal') return 'hover:border-[#00FFFF]/60 hover:shadow-[0_12px_40px_rgba(0,255,255,0.15)]';
  if (accentColor === 'pink') return 'hover:border-[#FF00FF]/60 hover:shadow-[0_12px_40px_rgba(255,0,255,0.15)]';
  return 'hover:border-[#FFFF00]/60 hover:shadow-[0_12px_40px_rgba(255,255,0,0.15)]';
};

export const VenturesPage: React.FC<VenturesPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="w-full bg-white text-[#141414] selection:bg-[#FFFF00] selection:text-black pt-16 sm:pt-20">
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

          <h1 className="gothic-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-black tracking-tight leading-[0.88] break-words">
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
      <section
        id="built-in-house-showcase"
        className="relative text-white py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black overflow-hidden bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=85')`,
        }}
      >
        {/* Modern Multi-Layer Gradient Overlays for Cinematic Depth & Pristine Legibility (bg-black/75 to bg-black/85) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85 backdrop-blur-[2px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {VENTURES.map((venture, idx) => {
            const isAudioVenture = venture.id === 'inhale-exhale';
            const accentHex = getAccentHex(venture.accentColor);
            const glowColor = getGlowColor(venture.accentColor);
            const borderHover = getBorderHoverClass(venture.accentColor);

            return (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard
                  id={`venture-${venture.id}`}
                  isDark={true}
                  maxTilt={4}
                  scale={1.015}
                  glowColor={glowColor}
                  className={`group relative rounded-none cursor-default overflow-hidden bg-black/60 sm:bg-black/50 backdrop-blur-xl border border-white/10 ${borderHover} shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500`}
                >
                  {/* Top Subtle CMYK Accent Indicator */}
                  <div
                    className="h-1 w-full transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                    style={{ backgroundColor: accentHex }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Column: Image & Media Controls (Sequential Reveal Beat 1) */}
                    <div className="lg:col-span-6 relative h-72 sm:h-84 lg:h-auto min-h-[300px] lg:min-h-[440px] overflow-hidden bg-zinc-950 border-b lg:border-b-0 lg:border-r border-white/10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                      >
                        <img
                          src={venture.image}
                          alt={venture.name}
                          className="w-full h-full object-cover grayscale contrast-115 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>

                      {/* Cinematic Multi-Layer Gradient Overlays for Legibility & Atmosphere */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none" />

                      {/* Top Interactive Badges (Sequential Reveal Beat 2) */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between z-20 gap-2"
                      >
                        <span className="font-mono-code text-[10px] sm:text-xs uppercase font-bold tracking-wider px-3 py-1 bg-black/85 backdrop-blur-md text-zinc-300 border border-white/20">
                          {venture.status}
                        </span>

                        {isAudioVenture && (
                          <button
                            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                            className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 bg-[#FF00FF]/90 hover:bg-[#FF00FF] text-white font-mono-code text-[10px] sm:text-xs uppercase font-bold tracking-wider rounded-none cursor-pointer transition-all duration-200 shadow-md backdrop-blur-sm"
                          >
                            {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                            <span>{isPlayingAudio ? 'Pause Live Stream' : 'Audition Soundscape'}</span>
                          </button>
                        )}
                      </motion.div>

                      {/* Bottom Title & Tagline (Sequential Reveal Beat 3) */}
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5" style={{ backgroundColor: accentHex }} />
                          <span
                            className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest font-bold"
                            style={{ color: accentHex }}
                          >
                            Proprietary Venture // 0{idx + 1}
                          </span>
                        </div>
                        <h3 className="gothic-display text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
                          {venture.name}
                        </h3>
                        <p className="font-mono-code text-[11px] sm:text-xs text-zinc-300 uppercase tracking-widest pt-0.5 font-bold">
                          {venture.tagline}
                        </p>
                      </motion.div>
                    </div>

                    {/* Right Column: Specs, Technical Highlights & Features (Sequential Details Reveal) */}
                    <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between space-y-6 sm:space-y-8 bg-black/40 sm:bg-transparent">
                      <div className="space-y-4 sm:space-y-6">
                        {/* Narrative Description (Sequential Reveal Beat 4) */}
                        <motion.p
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="text-sm sm:text-base md:text-lg text-zinc-200 font-normal leading-relaxed"
                        >
                          {venture.description}
                        </motion.p>

                        {/* Engineered Capabilities Block (Sequential Reveal Beat 5) */}
                        <div className="space-y-3 pt-2">
                          <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.45, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5" style={{ backgroundColor: accentHex }}></span>
                            <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-400 font-bold">
                              Engineered Capabilities
                            </span>
                          </motion.div>

                          {/* Staggered Capabilities Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {venture.features.map((feat, fIdx) => (
                              <motion.div
                                key={fIdx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{
                                  duration: 0.4,
                                  delay: 0.42 + fIdx * 0.07,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="p-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 text-xs font-mono-code text-zinc-300 flex items-start gap-2.5 transition-all duration-200"
                              >
                                <div
                                  className="w-1.5 h-1.5 mt-1.5 shrink-0"
                                  style={{ backgroundColor: accentHex }}
                                />
                                <span className="leading-relaxed">{feat}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack & Status bar footer (Sequential Reveal Beat 6) */}
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.45, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
                        className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {venture.techStack.map((tech, tIdx) => (
                            <motion.span
                              key={tIdx}
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, margin: "-40px" }}
                              transition={{ duration: 0.35, delay: 0.62 + tIdx * 0.04 }}
                              className="font-mono-code text-[10px] sm:text-xs text-zinc-300 bg-white/[0.04] border border-white/15 px-2.5 py-1 rounded-none hover:border-[#FFFF00]/60 hover:text-white transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="hidden lg:flex space-x-1 w-16">
                            <div className="h-1 flex-1 accent-teal"></div>
                            <div className="h-1 flex-1 accent-pink"></div>
                            <div className="h-1 flex-1 accent-orange"></div>
                          </div>
                          <MagneticButton
                            variant="glass"
                            onClick={onOpenInquiry}
                            className="w-full sm:w-auto px-5 py-2.5 justify-center text-xs sm:text-sm font-mono-code uppercase tracking-wider text-white border-white/20 hover:border-[#FFFF00] hover:text-[#FFFF00]"
                          >
                            <span>Collaborate</span>
                            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                          </MagneticButton>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          VENTURE LAB DOCTRINE
         ========================================================================= */}
      <section className="bg-[#111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-black">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono-code text-[#00FFFF] uppercase tracking-widest">
            The Living Lab
          </div>

          <h2 className="gothic-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
            Why We Build Our Own.
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base md:text-xl font-normal leading-relaxed">
            "When we pitch Flutter offline architecture or AI prompts to clients, it’s not theory. We already tested it across 1,400 meters of elevation in the jungle on our own ventures."
          </p>

          <div className="pt-2 sm:pt-4">
            <MagneticButton
              variant="glass"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-black bg-white hover:bg-[#FFFF00] justify-center"
            >
              Invest or Partner with Imaginative 369
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
