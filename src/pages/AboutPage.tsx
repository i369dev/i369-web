import React from 'react';
import { PageId } from '../types';
import { GothicLogo } from '../components/GothicLogo';
import { GothicHeading } from '../components/GothicHeading';
import { Compass, CheckCircle2, ArrowRight, Zap, Target, Eye, Layers } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="w-full bg-white text-[#141414] selection:bg-[#FFA500] selection:text-black pt-16 sm:pt-20">
      {/* =========================================================================
          PAGE HEADER: Artistic Flair Grid, Gothic H1, Triple Accent Bars
         ========================================================================= */}
      <section className="border-b border-black py-16 sm:py-24 px-6 sm:px-12 lg:px-16 bg-white thin-grid relative">
        <div className="max-w-7xl mx-auto">
          {/* Tag & Triple Accent Bar */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex space-x-1.5">
              <div className="w-2 h-4 accent-teal"></div>
              <div className="w-2 h-4 accent-pink"></div>
              <div className="w-2 h-4 accent-orange"></div>
            </div>
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              02 // Corporate Origin & Doctrine
            </span>
          </div>

          {/* Main Gothic Display H1 */}
          <h1 className="gothic-display text-5xl sm:text-7xl md:text-8.5xl font-black uppercase tracking-tight text-black leading-[0.88]">
            About Imaginative369.
          </h1>

          {/* Subheading / Purpose Statement */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-black pt-6">
            <p className="text-xl sm:text-2xl text-zinc-800 font-medium max-w-3xl leading-relaxed border-l-2 border-black pl-6">
              The digital powerhouse and venture studio of Sri Lanka's Hill Country.
            </p>
            <div className="flex items-center gap-2 font-mono-code text-xs text-zinc-500 uppercase tracking-widest">
              <span>BADULLA</span>
              <span className="text-[#008080]">•</span>
              <span>UVA PROVINCE</span>
              <span className="text-[#FF69B4]">•</span>
              <span>SRI LANKA</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR STORY: Founded by Mithila Bhashitha Navarathna Bandara
         ========================================================================= */}
      <section className="bg-white py-20 px-6 sm:px-12 lg:px-16 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Label & Visual Marker with 3D Tilt */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 accent-pink"></div>
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF69B4] font-bold">
                  The Genesis
                </span>
              </div>
              <h2 className="gothic-display text-4xl sm:text-5xl uppercase text-black tracking-tight leading-none">
                Our Story.
              </h2>
              <TiltCard
                maxTilt={8}
                scale={1.03}
                className="p-6 space-y-3 rounded-none"
              >
                <p className="font-mono-code text-[11px] text-zinc-500 uppercase tracking-wider font-bold">
                  Founder & Managing Director
                </p>
                <p className="font-display text-lg text-black font-bold">
                  Mithila Bhashitha Navarathna Bandara
                </p>
                <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                  Pioneering regional technology infrastructure, creative direction, and sustainable venture building in Sri Lanka's central highlands.
                </p>
              </TiltCard>
            </div>

            {/* Right Col: High Contrast Body Text with subtle frosted treatment */}
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-zinc-800 font-normal leading-relaxed">
              <p>
                <strong className="text-black font-bold">Imaginative369</strong> was founded on a simple observation: <span className="text-black underline decoration-[#008080] underline-offset-4 font-semibold">Sri Lanka's regional businesses had incredible stories to tell and no one telling them properly.</span>
              </p>
              <p className="text-zinc-600">
                Founded by Mithila Bhashitha Navarathna Bandara, the company grew from a creative studio into a hybrid agency, software house, and venture studio — built to bridge the gap between raw regional infrastructure and modern digital expectations.
              </p>
              <p className="text-zinc-600">
                Today, our leadership team spans strategy, engineering, and creative direction, delivering everything from cinematic destination campaigns to full-stack software platforms — without ever losing the on-the-ground perspective that got us here.
              </p>

              {/* Graphic Accents */}
              <div className="pt-4 flex items-center gap-3">
                <div className="flex space-x-1.5 flex-1">
                  <div className="h-1 flex-1 accent-teal"></div>
                  <div className="h-1 flex-1 accent-pink"></div>
                  <div className="h-1 flex-1 accent-orange"></div>
                </div>
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-zinc-500 font-bold">
                  Established in Uva
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR PHILOSOPHY: Strategy to Screen
         ========================================================================= */}
      <section className="bg-white text-zinc-950 py-20 px-6 sm:px-12 lg:px-16 border-b border-black thin-grid">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 accent-orange"></div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#FFA500] font-bold">
                Operating Axiom
              </span>
            </div>

            <h2 className="gothic-display text-4xl sm:text-6xl uppercase text-black tracking-tight leading-none mb-6">
              Our Philosophy: "Strategy to Screen."
            </h2>

            <div className="glass-panel-light p-6 border-l-4 border-l-black">
              <p className="text-xl sm:text-2xl text-zinc-800 font-medium leading-relaxed">
                Every project starts with a plan and ends with something real — a launched app, a finished film, a campaign that converts. <span className="font-bold text-black">We don't hand off decks; we deliver outcomes.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE'RE BUILT: The Dual-Engine Model with 3D Tilt Cards
         ========================================================================= */}
      <section className="bg-[#111] text-white py-24 px-6 sm:px-12 lg:px-16 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono-code text-[#00DFD8] uppercase tracking-widest">
              Organizational Architecture
            </div>
            <h2 className="gothic-display text-4xl sm:text-6xl uppercase text-white tracking-tight leading-none">
              The Dual-Engine Model.
            </h2>
            <p className="text-zinc-400 font-light text-base sm:text-lg">
              Imaginative369 runs on two engines working in sync:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ENGINE 1 */}
            <TiltCard
              isDark={true}
              maxTilt={6}
              scale={1.02}
              className="p-8 sm:p-10 border-t-4 border-t-[#008080] space-y-6 rounded-none"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#00DFD8] font-bold">
                  Engine 01
                </span>
                <span className="font-mono-code text-xs text-zinc-400 font-bold">
                  Client Mandates
                </span>
              </div>

              <div>
                <h3 className="gothic-display text-3xl sm:text-4xl uppercase text-white tracking-tight">
                  Agency Services
                </h3>
                <p className="font-mono-code text-xs text-zinc-400 mt-1 font-bold">
                  (What you hire us for)
                </p>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed font-light">
                Performance marketing, software engineering, destination branding, and cinematic production delivered through retainers and project-based contracts.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00DFD8]" />
                  <span>Custom Retainers & SLA Guarantees</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00DFD8]" />
                  <span>Regional Tourism & Corporate Enterprise</span>
                </div>
              </div>
            </TiltCard>

            {/* ENGINE 2 */}
            <TiltCard
              isDark={true}
              maxTilt={6}
              scale={1.02}
              className="p-8 sm:p-10 border-t-4 border-t-[#FF69B4] space-y-6 rounded-none"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF69B4] font-bold">
                  Engine 02
                </span>
                <span className="font-mono-code text-xs text-zinc-400 font-bold">
                  Proprietary IP
                </span>
              </div>

              <div>
                <h3 className="gothic-display text-3xl sm:text-4xl uppercase text-white tracking-tight">
                  Venture Studio
                </h3>
                <p className="font-mono-code text-xs text-zinc-400 mt-1 font-bold">
                  (What we build ourselves)
                </p>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed font-light">
                The revenue from our agency work funds our own proprietary products — software, apps, and media ventures — so we're constantly testing the same technology and creative techniques we bring to our clients.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF69B4]" />
                  <span>Active Ventures: LankaQuests, IntotheWILDlk, Inhale Exhale</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF69B4]" />
                  <span>Real-world stress tested architectures</span>
                </div>
              </div>
            </TiltCard>
          </div>

          <div className="mt-8 p-6 glass-panel-dark text-center border border-white/20">
            <p className="text-base sm:text-lg text-zinc-300 font-medium">
              <span className="text-[#FFA500] font-bold">The result:</span> an agency that doesn't just advise on digital transformation — <span className="text-white font-bold underline decoration-[#FF69B4] underline-offset-4">it lives it</span>.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VISION & MISSION: Monochromatic Split with 3D Tilt Cards
         ========================================================================= */}
      <section className="bg-white text-zinc-950 py-24 px-6 sm:px-12 lg:px-16 border-b border-black thin-grid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISION */}
          <TiltCard
            maxTilt={6}
            scale={1.02}
            className="space-y-4 p-8 rounded-none cursor-default"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 accent-teal"></div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#008080] font-bold">
                Global Horizons
              </span>
            </div>
            <h3 className="gothic-display text-3xl sm:text-4xl uppercase text-black tracking-tight">
              Our Vision
            </h3>
            <p className="text-zinc-600 text-base leading-relaxed font-normal">
              To become a globally recognized technology and creative studio delivering world-class digital solutions that transform industries, empower local communities, and elevate destination tourism through innovation and sustainable digital technology.
            </p>
          </TiltCard>

          {/* MISSION */}
          <TiltCard
            maxTilt={6}
            scale={1.02}
            className="space-y-4 p-8 rounded-none cursor-default"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 accent-orange"></div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#FFA500] font-bold">
                Daily Execution
              </span>
            </div>
            <h3 className="gothic-display text-3xl sm:text-4xl uppercase text-black tracking-tight">
              Our Mission
            </h3>
            <p className="text-zinc-600 text-base leading-relaxed font-normal">
              To engineer reliable, scalable, user-centric software alongside high-impact visual media that improves business performance, creates memorable experiences, and builds long-term value for our clients, partners, and communities.
            </p>
          </TiltCard>
        </div>
      </section>

      {/* =========================================================================
          WHERE WE WORK: Badulla, Uva Province
         ========================================================================= */}
      <section className="bg-[#111] text-white py-24 px-6 sm:px-12 lg:px-16 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FF69B4]" />
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF69B4] font-bold">
                  Geographic Anchor
                </span>
              </div>

              <h2 className="gothic-display text-4xl sm:text-6xl uppercase text-white tracking-tight leading-none">
                Where We Work.
              </h2>

              <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed">
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
                  className="px-8 py-4 text-black bg-white hover:bg-[#FFA500]"
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
                <div className="h-96 w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
                    alt="Sri Lanka Hill Country Badulla"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-125 card-media-zoom"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono-code text-xs z-20">
                    <span className="text-[#00DFD8] font-bold">06°59′N 81°03′E · Central Highlands</span>
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

