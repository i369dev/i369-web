import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { PageId, CaseStudy } from '../types';
import { GothicLogo } from '../components/GothicLogo';
import { GothicHeading } from '../components/GothicHeading';
import { SERVICE_PILLARS, CASE_STUDIES, TRUSTED_CLIENTS, GROUND_ZERO_ADVANTAGES, PARTNER_MARQUEE_ITEMS } from '../data/agencyData';
import { ArrowRight, ArrowUpRight, Compass, ShieldCheck, Sparkles, Terminal, Video, MapPin, Zap, Volume2, VolumeX } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';
import { StickyStackingCards } from '../components/StickyStackingCards';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div className="w-full bg-white text-[#141414] selection:bg-[#FFFF00] selection:text-black pt-24 sm:pt-28 md:pt-24">
      {/* =========================================================================
          HERO SECTION: Architectural Grid with Glass Accents
         ========================================================================= */}
      <section id="hero-section" className="relative w-full border-b border-black flex flex-col overflow-hidden">
        <div className="flex-1 w-full min-h-[calc(100vh-6rem)] flex flex-col">
          
          {/* Architectural Grid Section */}
          <div className="w-full flex flex-col relative thin-grid bg-white text-[#141414] justify-between flex-grow">
            <div className="p-4 sm:p-8 md:p-12 lg:p-16 flex-grow flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Headline & Editorial Content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-4 accent-teal"></div>
                      <div className="w-2 h-4 accent-pink"></div>
                      <div className="w-2 h-4 accent-orange"></div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.4em] text-gray-500 font-mono-code">
                      Strategy to Screen
                    </span>
                  </div>

                  {/* Main Artistic Flair Gothic Display Headline */}
                  <h1 className="gothic-display text-4xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[104px] text-black mb-6 sm:mb-8 leading-[0.88] tracking-tighter break-words">
                    Imaginative<br />
                    369
                  </h1>

                  {/* Stately Editorial Pull-Description with subtle frosted highlight */}
                  <div className="max-w-xl p-4 sm:p-6 glass-panel-light border-l-4 border-l-black mb-6 sm:mb-10">
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium text-[#141414]">
                      The creative media, digital marketing, and software engineering powerhouse of Sri Lanka’s Hill Country. Turning bold ideas into cinematic stories, high-performing software, and brands that win.
                    </p>
                  </div>

                  {/* Action Buttons with Magnetic physics */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <MagneticButton
                      id="hero-primary-cta"
                      variant="primary"
                      onClick={onOpenInquiry}
                      className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 justify-center"
                    >
                      <span>Start Your Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </MagneticButton>

                    <MagneticButton
                      id="hero-secondary-cta"
                      variant="secondary"
                      onClick={() => onNavigate('work')}
                      className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 justify-center"
                    >
                      <span>See Our Work</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Column: Cinematic Video Showcase Container with Glassmorphism */}
                <div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
                  <div className="relative w-full max-w-lg lg:max-w-none group">
                    {/* Ambient Glow / Diffused Aura for Seamless Edge Blending */}
                    <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-[#00FFFF]/20 via-[#FF00FF]/10 to-[#FFFF00]/25 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

                    {/* Outer Polished Glass Frame with Frosted Backdrop Blur */}
                    <div className="relative p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/70 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
                      
                      {/* Inner Video Container */}
                      <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-[inset_0_2px_15px_rgba(0,0,0,0.6)]">
                        {/* HTML5 Cinematic Background Video */}
                        <video
                          ref={videoRef}
                          autoPlay
                          loop
                          muted={isMuted}
                          playsInline
                          poster="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
                          className="w-full h-64 sm:h-80 md:h-96 lg:h-[460px] object-cover filter contrast-[1.08] saturate-[1.12] brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                        >
                          <source
                            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-fog-over-a-green-mountain-forest-41480-large.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>

                        {/* Cinematic Vignette & Edge Shadow Overlay for Soft Blending */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/15 pointer-events-none" />
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-xl sm:rounded-2xl pointer-events-none" />

                        {/* Top Floating Glass Badge with Live Reel Indicator */}
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10 pointer-events-none">
                          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/55 backdrop-blur-xl border border-white/20 text-white font-mono-code text-[9px] sm:text-[10px] uppercase tracking-widest rounded-full shadow-md">
                            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00FFFF] animate-pulse"></span>
                            <span>Cinematic Reel // 4K</span>
                          </div>
                          
                          <div className="flex space-x-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                            <div className="w-1.5 h-2.5 sm:h-3 accent-teal"></div>
                            <div className="w-1.5 h-2.5 sm:h-3 accent-pink"></div>
                            <div className="w-1.5 h-2.5 sm:h-3 accent-orange"></div>
                          </div>
                        </div>

                        {/* Bottom Overlay: Telemetry & Interactive Glass Sound Toggle */}
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-between z-20 text-white gap-2">
                          <div className="pointer-events-none">
                            <p className="font-mono-code text-[9px] sm:text-[11px] uppercase tracking-wider text-[#FFFF00] font-bold">
                              Central Highlands
                            </p>
                            <p className="font-display text-xs sm:text-base font-semibold text-white/95">
                              Badulla // 06°59′N 81°03′E
                            </p>
                          </div>

                          {/* Sound Toggle Button */}
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              id="hero-video-audio-toggle"
                              onClick={toggleSound}
                              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                              title={isMuted ? 'Unmute video sound' : 'Mute video sound'}
                              className="group/sound flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-black/60 hover:bg-black/85 backdrop-blur-xl border border-white/30 hover:border-white/60 text-white rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
                            >
                              {isMuted ? (
                                <>
                                  <VolumeX className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-zinc-300 group-hover/sound:text-white transition-colors" />
                                  <span className="font-mono-code text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-300 group-hover/sound:text-white hidden sm:inline-block">
                                    Sound Off
                                  </span>
                                </>
                              ) : (
                                <>
                                  <Volume2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#00FFFF] animate-bounce transition-colors" />
                                  <span className="font-mono-code text-[9px] sm:text-[10px] uppercase tracking-wider text-[#00FFFF] font-bold hidden sm:inline-block">
                                    Sound On
                                  </span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trusted Partners Infinite Logo Marquee Strip with Matching Header Glassmorphism */}
            <div className="relative border-t border-black/12 border-b border-black/12 bg-white/88 backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex items-center h-16 sm:h-20 select-none">
              {/* Full-width scrolling logo marquee layer (z-0: passes continuously underneath the fixed left glass pane) */}
              <div className="absolute inset-0 w-full h-full z-0 flex items-center overflow-hidden pointer-events-auto">
                <div className="animate-marquee-infinite flex items-center">
                  {/* Track 1 */}
                  <div className="flex items-center gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16 shrink-0">
                    {PARTNER_MARQUEE_ITEMS.map((partner, pIdx) => {
                      const matchedCaseStudy = partner.caseStudyId
                        ? CASE_STUDIES.find((cs) => cs.id === partner.caseStudyId)
                        : null;

                      return (
                        <div
                          key={`track1-${partner.id}-${pIdx}`}
                          onClick={() => {
                            if (matchedCaseStudy) {
                              onSelectCaseStudy(matchedCaseStudy);
                            } else {
                              onNavigate('work');
                            }
                          }}
                          title={matchedCaseStudy ? `View ${partner.name} Case Study` : `View ${partner.name} Details`}
                          className="group relative flex items-center justify-center shrink-0 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 py-1 select-none"
                        >
                          {/* Raw Logo Image floating directly on grid with natural aspect ratio */}
                          <img
                            src={partner.image}
                            alt={partner.name}
                            className="h-7 sm:h-9 w-auto max-w-[95px] sm:max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Track 2 (Exact duplicate for seamless infinite 0% -> -50% loop) */}
                  <div className="flex items-center gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16 shrink-0" aria-hidden="true">
                    {PARTNER_MARQUEE_ITEMS.map((partner, pIdx) => {
                      const matchedCaseStudy = partner.caseStudyId
                        ? CASE_STUDIES.find((cs) => cs.id === partner.caseStudyId)
                        : null;

                      return (
                        <div
                          key={`track2-${partner.id}-${pIdx}`}
                          onClick={() => {
                            if (matchedCaseStudy) {
                              onSelectCaseStudy(matchedCaseStudy);
                            } else {
                              onNavigate('work');
                            }
                          }}
                          title={matchedCaseStudy ? `View ${partner.name} Case Study` : `View ${partner.name} Details`}
                          className="group relative flex items-center justify-center shrink-0 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 py-1 select-none"
                        >
                          {/* Raw Logo Image floating directly on grid with natural aspect ratio */}
                          <img
                            src={partner.image}
                            alt={partner.name}
                            className="h-7 sm:h-9 w-auto max-w-[95px] sm:max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Fixed Left Heading with True Frosted Glassmorphism Pane (z-20) */}
              <div className="relative z-20 shrink-0 h-full flex items-center pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-5 sm:pr-8 glass-marquee-fixed pointer-events-none">
                <div className="flex items-center gap-2.5 sm:gap-3 pointer-events-auto">
                  {/* Decorative 3-color lines: hidden on mobile, visible on desktop/tablet */}
                  <div className="hidden sm:flex space-x-1 shrink-0">
                    <div className="w-1.5 h-3.5 accent-teal"></div>
                    <div className="w-1.5 h-3.5 accent-pink"></div>
                    <div className="w-1.5 h-3.5 accent-orange"></div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="font-mono-code font-black text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.24em] text-black leading-tight drop-shadow-sm flex flex-col sm:inline">
                      <span>Trusted</span>
                      <span className="sm:ml-1.5">Partners</span>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-mono-code text-zinc-600 uppercase tracking-widest hidden md:inline font-bold mt-0.5">
                      Client & Venture Network
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Exit/Entry Subtle Fade Gradient (z-10) */}
              <div className="absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white/90 via-white/40 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTRO STRIP: Strategy to Screen
         ========================================================================= */}
      <section id="intro-strip" className="bg-[#111] text-white border-b border-black py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-4 accent-teal"></div>
                  <div className="w-1.5 h-4 accent-pink"></div>
                  <div className="w-1.5 h-4 accent-orange"></div>
                </div>
                <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#FFFF00] font-bold">
                  Core Mandate
                </span>
              </div>
              <h2 className="gothic-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
                Strategy to Screen.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-base sm:text-xl lg:text-2xl text-zinc-300 font-light leading-relaxed">
                From the first strategy session to the final frame — or the final line of code — we build the full journey. Cinematic media, performance marketing, and full-stack software engineering, all under one roof, all rooted in <span className="text-white font-medium underline decoration-[#00FFFF] underline-offset-4">Badulla, Uva Province</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT WE DO: Cinematic Sticky Scroll Stacking Cards with Camera Dial Easing
         ========================================================================= */}
      <StickyStackingCards onNavigate={onNavigate} />

      {/* =========================================================================
          WHY IMAGINATIVE369: Ground Zero Advantage (Cinematic Parallax Background with Frosted Glass Cards)
         ========================================================================= */}
      <section
        id="ground-zero-advantage"
        className="relative text-white py-14 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=2400&q=85')`,
        }}
      >
        {/* Modern Multi-Layer Gradient Overlays for Cinematic Depth & Pristine Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 backdrop-blur-[2px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00FFFF]/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-10 sm:mb-14 md:mb-16"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 accent-orange shrink-0"></div>
              <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-widest text-[#FFFF00] font-bold">
                The Ground Zero Advantage
              </span>
            </div>
            <h2 className="gothic-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              We didn’t set up in Colombo.
              <br />
              <span className="text-zinc-300">We set up on the ground.</span>
            </h2>
            <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-200 font-light leading-relaxed max-w-2xl">
              Headquartered in Badulla instead of the capital, Imaginative369 operates with a structural edge no city agency can replicate:
            </p>
          </motion.div>

          {/* 3 Structural Edge Cards with 3D Tilt & Intense Frosted Glass */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {GROUND_ZERO_ADVANTAGES.map((adv, index) => {
              const borderTopColor =
                adv.accentColor === 'teal'
                  ? 'border-t-[#00FFFF]'
                  : adv.accentColor === 'pink'
                  ? 'border-t-[#FF00FF]'
                  : 'border-t-[#FFFF00]';

              const metricTextColor =
                adv.accentColor === 'teal'
                  ? 'text-[#00FFFF]'
                  : adv.accentColor === 'pink'
                  ? 'text-[#FF00FF]'
                  : 'text-[#FFFF00]';

              return (
                <motion.div
                  key={adv.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <TiltCard
                    isDark={true}
                    maxTilt={7}
                    scale={1.02}
                    className={`h-full p-5 sm:p-7 md:p-8 bg-black/60 backdrop-blur-2xl border border-white/20 border-t-4 ${borderTopColor} space-y-4 sm:space-y-6 rounded-xl sm:rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)]`}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono-code text-xs text-zinc-400 font-bold">
                        EDGE {adv.number}
                      </span>
                      <span className={`gothic-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${metricTextColor}`}>
                        {adv.metric}
                      </span>
                    </div>

                    <div>
                      <h3 className="gothic-display text-xl sm:text-2xl text-white tracking-tight leading-snug">
                        {adv.title}
                      </h3>
                      <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {adv.description}
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-white/15">
                      <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 font-bold">
                        {adv.metricLabel}
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Statement Box with Premium Frosted Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-12 p-5 sm:p-7 md:p-8 bg-black/70 backdrop-blur-2xl rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 border border-white/25 text-center sm:text-left shadow-2xl"
          >
            <p className="text-sm sm:text-base md:text-lg text-zinc-200 font-medium leading-relaxed">
              "We call it the <span className="text-white font-bold underline decoration-[#00FFFF] underline-offset-4">Ground Zero Advantage</span>. Our clients call it results."
            </p>

            <MagneticButton
              variant="glass"
              onClick={() => onNavigate('about')}
              className="shrink-0 w-full sm:w-auto px-6 py-3 justify-center"
            >
              Read Our Full Story →
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          PROOF, NOT PROMISES: Portfolio & Trusted Partners Showcase (hugeinc.com style image reveal & 3D tilt)
         ========================================================================= */}
      <section id="proof-not-promises" className="bg-white text-zinc-950 py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black thin-grid">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-black gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 accent-pink"></div>
                <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-500 font-bold">
                  Verified Outcomes
                </span>
              </div>
              <h2 className="gothic-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight leading-none">
                Proof, Not Promises.
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-zinc-700 max-w-2xl font-normal leading-relaxed">
                Trusted by regional tourism bodies, corporate hospitality brands, and renewable energy leaders — including Aitken Spence, Hilton Yala, Coco Organic by Sena Mills, Balinese Spas, Life Balance Wellness, and the official digital partnership with The Pekoe Trail Organization.
              </p>
            </div>

            <MagneticButton
              variant="primary"
              onClick={() => onNavigate('work')}
              className="mt-4 md:mt-0 w-full sm:w-auto px-6 py-3.5 justify-center"
            >
              <span>View All Studies</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>

          {/* Featured Case Studies Grid (HugeInc style 3D tilt, zoom reveal, and glassmorphic stats) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {CASE_STUDIES.slice(0, 2).map((cs) => (
              <TiltCard
                key={cs.id}
                isDark={true}
                maxTilt={6}
                scale={1.02}
                onClick={() => onSelectCaseStudy(cs)}
                className="cursor-pointer rounded-none"
              >
                <div className="h-56 sm:h-72 md:h-80 w-full overflow-hidden relative">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover grayscale brightness-90 contrast-125 card-media-zoom"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 glass-pill text-[10px] font-mono-code uppercase tracking-widest text-[#00FFFF]">
                      {cs.category} · {cs.client}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 relative z-10">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="gothic-display text-2xl sm:text-3xl md:text-4xl text-white tracking-tight group-hover:text-[#FFFF00] transition-colors">
                      {cs.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
                    {cs.summary}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code text-zinc-400">
                    <span>Impact: {cs.stats[0]?.label} → <strong className="text-white font-bold">{cs.stats[0]?.value}</strong></span>
                    <span className="text-[#FFFF00] underline uppercase text-[11px] font-bold">Deep Dive →</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING CTA BAND: Ready to move from strategy to screen?
         ========================================================================= */}
      <section id="closing-cta-band" className="bg-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20">
            <div className="w-2 h-2 accent-orange"></div>
            <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-[#FFFF00] font-bold">
              Ground Zero Briefing
            </span>
          </div>

          <h2 className="gothic-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] break-words">
            Ready to move from
            <br />
            <span className="text-white">Strategy to Screen?</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Tell us what you're building — a brand, a booking engine, a campaign, a movement — and let’s map it out.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <MagneticButton
              id="cta-band-get-in-touch-btn"
              variant="glass"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-black bg-white hover:bg-[#FFFF00] justify-center"
            >
              Start Your Project
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 text-white border border-white hover:bg-white/10 justify-center"
            >
              See Our Work
            </MagneticButton>
          </div>
        </div>

        {/* Ambient Watermark */}
        <div className="absolute -bottom-16 sm:-bottom-24 left-1/2 -translate-x-1/2 text-zinc-900/40 gothic-display text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[18rem] font-black select-none pointer-events-none whitespace-nowrap">
          369
        </div>
      </section>
    </div>
  );
};

