import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { GothicLogo } from '../components/GothicLogo';
import { GothicHeading } from '../components/GothicHeading';
import { Compass, CheckCircle2, ArrowRight, Zap, Target, Eye, Layers, Sparkles, Terminal, Video, TrendingUp } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';
import { TEAM_MEMBERS } from '../data/agencyData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="w-full bg-white text-[#141414] selection:bg-[#FFFF00] selection:text-black pt-16 sm:pt-20">
      {/* =========================================================================
          PAGE HEADER: Artistic Flair Grid, Gothic H1, Triple Accent Bars
         ========================================================================= */}
      <section className="border-b border-black py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white thin-grid relative">
        <div className="max-w-7xl mx-auto">
          {/* Tag & Triple Accent Bar */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <div className="flex space-x-1.5">
              <div className="w-2 h-4 accent-teal"></div>
              <div className="w-2 h-4 accent-pink"></div>
              <div className="w-2 h-4 accent-orange"></div>
            </div>
            <span className="font-mono-code text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 font-bold">
              02 // Corporate Origin & Doctrine
            </span>
          </div>

          {/* Main Gothic Display H1 */}
          <h1 className="gothic-display text-4xl sm:text-6xl md:text-7xl lg:text-8.5xl font-black tracking-tight text-black leading-[0.88] break-words">
            About Imaginative369.
          </h1>

          {/* Subheading / Purpose Statement */}
          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 border-t border-black pt-6">
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-800 font-medium max-w-3xl leading-relaxed border-l-2 border-black pl-4 sm:pl-6">
              The digital powerhouse and venture studio of Sri Lanka's Hill Country.
            </p>
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest">
              <span>BADULLA</span>
              <span className="text-[#00FFFF]">•</span>
              <span>UVA PROVINCE</span>
              <span className="text-[#FF00FF]">•</span>
              <span>SRI LANKA</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR STORY: Founded by Mithila Bhashitha Navarathna Bandara (Cinematic Full Backdrop)
         ========================================================================= */}
      <section
        id="our-story"
        className="relative text-white py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85')`,
        }}
      >
        {/* Modern Multi-Layer Gradient Overlays for Cinematic Depth & Pristine Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85 backdrop-blur-[2px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF00FF]/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Left Col: Label & Visual Marker with 3D Tilt */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-4 sm:space-y-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 accent-pink"></div>
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF00FF] font-bold">
                  The Genesis
                </span>
              </div>
              <h2 className="gothic-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                Our Story.
              </h2>
              <TiltCard
                maxTilt={8}
                scale={1.02}
                isDark={true}
                glowColor="rgba(255, 0, 255, 0.25)"
                className="p-6 sm:p-7 space-y-3.5 rounded-none bg-black/60 sm:bg-black/50 backdrop-blur-xl border border-white/20 hover:border-[#FF00FF]/60 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono-code text-[10px] sm:text-[11px] text-[#00FFFF] uppercase tracking-wider font-bold">
                    Founder & Managing Director
                  </p>
                  <span className="w-1.5 h-1.5 bg-[#FF00FF]"></span>
                </div>
                <p className="font-display text-lg sm:text-xl text-white font-bold leading-tight">
                  Mithila Bhashitha Navarathna Bandara
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                  Pioneering regional technology infrastructure, creative direction, and sustainable venture building in Sri Lanka's central highlands.
                </p>
              </TiltCard>
            </motion.div>

            {/* Right Col: High Contrast Body Text with subtle frosted treatment */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg text-zinc-200 font-normal leading-relaxed"
            >
              <div className="p-6 sm:p-8 bg-black/60 sm:bg-black/50 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] space-y-5 sm:space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                  <strong className="text-[#FFFF00] font-bold">Imaginative369</strong> was founded on a simple observation:{' '}
                  <span className="text-white underline decoration-[#00FFFF] underline-offset-8 font-semibold">
                    Sri Lanka's regional businesses had incredible stories to tell and no one telling them properly.
                  </span>
                </p>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                  Founded by Mithila Bhashitha Navarathna Bandara, the company grew from a creative studio into a hybrid agency, software house, and venture studio — built to bridge the gap between raw regional infrastructure and modern digital expectations.
                </p>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                  Today, our leadership team spans strategy, engineering, and creative direction, delivering everything from cinematic destination campaigns to full-stack software platforms — without ever losing the on-the-ground perspective that got us here.
                </p>

                {/* Graphic Accents */}
                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/15">
                  <div className="flex space-x-1.5 w-full sm:w-48">
                    <div className="h-1 flex-1 accent-teal"></div>
                    <div className="h-1 flex-1 accent-pink"></div>
                    <div className="h-1 flex-1 accent-orange"></div>
                  </div>
                  <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-300 font-bold">
                    Established in Uva Province
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LEADERSHIP & COUNCIL: Clean Minimalist Editorial Showcase (Huge Inc Style)
         ========================================================================= */}
      <section id="leadership-section" className="bg-black text-white py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black relative overflow-hidden">
        {/* Subtle Ambient CMYK Glow Mesh */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF00FF]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Block: Minimalist Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pb-12 sm:pb-16 border-b border-white/15"
          >
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <div className="flex space-x-1.5">
                  <span className="w-2 h-2 rounded-none bg-[#00FFFF]"></span>
                  <span className="w-2 h-2 rounded-none bg-[#FF00FF]"></span>
                  <span className="w-2 h-2 rounded-none bg-[#FFFF00]"></span>
                </div>
                <span className="font-mono-code text-xs sm:text-xs uppercase tracking-[0.25em] text-[#00FFFF] font-bold">
                  Leadership & Principals
                </span>
              </div>
              <h2 className="gothic-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[0.95]">
                The Minds Behind the Studio.
              </h2>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-md leading-relaxed">
              We are practitioners first — engineers deploying to mountain ridgelines, directors shooting at dawn, and strategists transforming regional economies.
            </p>
          </motion.div>

          {/* Team Showcase Grid: 4-Column Minimalist Clean Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 sm:pt-14">
            {TEAM_MEMBERS.map((member, index) => {
              const accentColor = member.accentColor === 'teal' ? '#00FFFF' : member.accentColor === 'pink' ? '#FF00FF' : '#FFFF00';
              const borderHoverClass = member.accentColor === 'teal' 
                ? 'group-hover:border-[#00FFFF]/50 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]' 
                : member.accentColor === 'pink' 
                ? 'group-hover:border-[#FF00FF]/50 group-hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]' 
                : 'group-hover:border-[#FFFF00]/50 group-hover:shadow-[0_0_30px_rgba(255,255,0,0.15)]';
              
              const textAccentClass = member.accentColor === 'teal' ? 'text-[#00FFFF]' : member.accentColor === 'pink' ? 'text-[#FF00FF]' : 'text-[#FFFF00]';

              return (
                <motion.div
                  key={member.id}
                  id={`team-member-${member.id}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`group relative flex flex-col bg-[#111111] border border-white/15 transition-all duration-500 rounded-none ${borderHoverClass}`}
                >
                  {/* Top Subtle CMYK Accent Indicator */}
                  <div 
                    className="h-1 w-full transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                    style={{ backgroundColor: accentColor }}
                  />

                  {/* High-Contrast Editorial Portrait Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Gradient Overlay for seamless depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Department Tag Overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="font-mono-code text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-black/80 backdrop-blur-md text-zinc-300 border border-white/20">
                        {member.department.split('&')[0]}
                      </span>
                      <span className={`font-mono-code text-xs font-bold ${textAccentClass}`}>
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Member Details Stack */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-[#111111]">
                    <div className="space-y-2">
                      <span className={`font-mono-code text-[11px] uppercase tracking-wider font-bold block ${textAccentClass}`}>
                        {member.role}
                      </span>
                      <h3 className="gothic-display text-xl sm:text-2xl text-white tracking-tight leading-snug group-hover:text-[#FFFF00] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed pt-1">
                        {member.bio}
                      </p>
                    </div>

                    {/* Domain Focus Badges */}
                    <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                      {member.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="font-mono-code text-[10px] text-zinc-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR PHILOSOPHY: Strategy to Screen
         ========================================================================= */}
      <section className="bg-white text-zinc-950 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black thin-grid">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 accent-orange"></div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#FFFF00] font-bold">
                Operating Axiom
              </span>
            </div>

            <h2 className="gothic-display text-3xl sm:text-5xl md:text-6xl text-black tracking-tight leading-none mb-4 sm:mb-6">
              Our Philosophy: "Strategy to Screen."
            </h2>

            <div className="glass-panel-light p-4 sm:p-6 border-l-4 border-l-black">
              <p className="text-base sm:text-xl md:text-2xl text-zinc-800 font-medium leading-relaxed">
                Every project starts with a plan and ends with something real — a launched app, a finished film, a campaign that converts. <span className="font-bold text-black">We don't hand off decks; we deliver outcomes.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE'RE BUILT: The Dual-Engine Model with 3D Tilt Cards
         ========================================================================= */}
      <section className="bg-[#111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono-code text-[#00FFFF] uppercase tracking-widest">
              Organizational Architecture
            </div>
            <h2 className="gothic-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
              The Dual-Engine Model.
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base md:text-lg">
              Imaginative369 runs on two engines working in sync:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* ENGINE 1 */}
            <TiltCard
              isDark={true}
              maxTilt={6}
              scale={1.02}
              className="p-6 sm:p-8 md:p-10 border-t-4 border-t-[#00FFFF] space-y-4 sm:space-y-6 rounded-none"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#00FFFF] font-bold">
                  Engine 01
                </span>
                <span className="font-mono-code text-xs text-zinc-400 font-bold">
                  Client Mandates
                </span>
              </div>

              <div>
                <h3 className="gothic-display text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                  Agency Services
                </h3>
                <p className="font-mono-code text-xs text-zinc-400 mt-1 font-bold">
                  (What you hire us for)
                </p>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                Performance marketing, software engineering, destination branding, and cinematic production delivered through retainers and project-based contracts.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFFF] shrink-0" />
                  <span>Custom Retainers & SLA Guarantees</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFFF] shrink-0" />
                  <span>Regional Tourism & Corporate Enterprise</span>
                </div>
              </div>
            </TiltCard>

            {/* ENGINE 2 */}
            <TiltCard
              isDark={true}
              maxTilt={6}
              scale={1.02}
              className="p-6 sm:p-8 md:p-10 border-t-4 border-t-[#FF00FF] space-y-4 sm:space-y-6 rounded-none"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF00FF] font-bold">
                  Engine 02
                </span>
                <span className="font-mono-code text-xs text-zinc-400 font-bold">
                  Proprietary IP
                </span>
              </div>

              <div>
                <h3 className="gothic-display text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                  Venture Studio
                </h3>
                <p className="font-mono-code text-xs text-zinc-400 mt-1 font-bold">
                  (What we build ourselves)
                </p>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                The revenue from our agency work funds our own proprietary products — software, apps, and media ventures — so we're constantly testing the same technology and creative techniques we bring to our clients.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF00FF] shrink-0" />
                  <span>Active Ventures: LankaQuests, IntotheWILDlk, Inhale Exhale</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF00FF] shrink-0" />
                  <span>Real-world stress tested architectures</span>
                </div>
              </div>
            </TiltCard>
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 glass-panel-dark text-center border border-white/20">
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-medium">
              <span className="text-[#FFFF00] font-bold">The result:</span> an agency that doesn't just advise on digital transformation — <span className="text-white font-bold underline decoration-[#FF00FF] underline-offset-4">it lives it</span>.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VISION & MISSION: Monochromatic Split with 3D Tilt Cards
         ========================================================================= */}
      <section className="bg-white text-zinc-950 py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black thin-grid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* VISION */}
          <TiltCard
            maxTilt={6}
            scale={1.02}
            className="space-y-4 p-6 sm:p-8 rounded-none cursor-default"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 accent-teal"></div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#00FFFF] font-bold">
                Global Horizons
              </span>
            </div>
            <h3 className="gothic-display text-2xl sm:text-3xl md:text-4xl text-black tracking-tight">
              Our Vision
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              To become a globally recognized technology and creative studio delivering world-class digital solutions that transform industries, empower local communities, and elevate destination tourism through innovation and sustainable digital technology.
            </p>
          </TiltCard>

          {/* MISSION */}
          <TiltCard
            maxTilt={6}
            scale={1.02}
            className="space-y-4 p-6 sm:p-8 rounded-none cursor-default"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 accent-orange"></div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#FFFF00] font-bold">
                Daily Execution
              </span>
            </div>
            <h3 className="gothic-display text-2xl sm:text-3xl md:text-4xl text-black tracking-tight">
              Our Mission
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              To engineer reliable, scalable, user-centric software alongside high-impact visual media that improves business performance, creates memorable experiences, and builds long-term value for our clients, partners, and communities.
            </p>
          </TiltCard>
        </div>
      </section>

      {/* =========================================================================
          WHERE WE WORK: Badulla, Uva Province
         ========================================================================= */}
      <section className="bg-[#111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FF00FF]" />
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF00FF] font-bold">
                  Geographic Anchor
                </span>
              </div>

              <h2 className="gothic-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                Where We Work.
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                Headquartered in <strong className="text-white font-medium">Badulla, Uva Province, Sri Lanka</strong> — the heart of the Hill Country, and the reason we can move faster and shoot better than agencies twice our size.
              </p>

              <div className="p-4 glass-panel-dark font-mono-code text-xs text-zinc-400 space-y-1.5 border border-white/20">
                <p><span className="text-zinc-400 font-bold">STUDIO ADDRESS:</span> 03 River Side Road, Badulla</p>
                <p><span className="text-zinc-400 font-bold">PROVINCIAL ZONE:</span> Uva Highlands</p>
                <p><span className="text-zinc-400 font-bold">RESPONSE LATENCY:</span> 15 Minutes to Nine Arches, Ella Gap & Pekoe Trail Stages</p>
              </div>

              <div className="pt-2">
                <MagneticButton
                  variant="glass"
                  onClick={onOpenInquiry}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-black bg-white hover:bg-[#FFFF00] justify-center"
                >
                  <span>Engage Badulla Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <TiltCard
                isDark={true}
                maxTilt={6}
                scale={1.02}
                className="overflow-hidden rounded-none cursor-default"
              >
                <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
                    alt="Sri Lanka Hill Country Badulla"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-125 card-media-zoom"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between font-mono-code text-[10px] sm:text-xs z-20 gap-2">
                    <span className="text-[#00FFFF] font-bold">06°59′N 81°03′E · Central Highlands</span>
                    <span className="text-zinc-400 font-bold">Badulla Headquarters</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

