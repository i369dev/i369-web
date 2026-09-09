import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { GothicLogo } from '../components/GothicLogo';
import { Send, CheckCircle2, MapPin, Mail, Clock, Compass, ArrowRight } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'Tourism Marketing',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Tourism Marketing',
    'Software Development',
    'Media Production',
    'Performance Marketing',
    'AdventureTech',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

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
              06 // Ground-Zero Transmission
            </span>
          </div>

          <h1 className="gothic-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-black tracking-tight leading-[0.88] break-words">
            Let’s Build Something.
          </h1>

          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-t border-black pt-6">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-zinc-800 font-medium max-w-2xl border-l-2 border-black pl-4 sm:pl-6">
              Whether it's a destination campaign, a mobile app, or a full brand relaunch — tell us where you want to go.
            </p>
            <p className="font-mono-code text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-bold">
              Strategy to Screen · Badulla, Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FORM & STUDIO COORDINATES SPLIT (Matching "Our Story" Aesthetic & Cards)
         ========================================================================= */}
      <section
        id="contact-cards-section"
        className="relative text-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black overflow-hidden bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85')`,
        }}
      >
        {/* Modern Multi-Layer Gradient Overlays for Cinematic Depth & Pristine Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85 backdrop-blur-[2px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00FFFF]/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Left: Studio Details & Ground Zero Info (Dark Glass 3D Tilt Card matching Our Story) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <TiltCard
                id="contact-studio-details-card"
                isDark={true}
                maxTilt={5}
                scale={1.01}
                glowColor="rgba(0, 255, 255, 0.25)"
                className="rounded-none bg-black/60 sm:bg-black/50 backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Top Subtle CMYK Accent Indicator */}
                <div className="h-1 w-full flex">
                  <div className="h-full flex-1 bg-[#00FFFF]" />
                  <div className="h-full flex-1 bg-[#FF00FF]" />
                  <div className="h-full flex-1 bg-[#FFFF00]" />
                </div>

                {/* High-Contrast Editorial Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-950 border-b border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
                    alt="Imaginative 369 Badulla Studio Coordinates"
                    className="w-full h-full object-cover grayscale contrast-115 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-mono-code text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-black/85 backdrop-blur-md text-zinc-300 border border-white/20">
                      HQ · Badulla, Sri Lanka
                    </span>
                  </div>

                  {/* Bottom Image Metadata Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                    <span className="font-mono-code text-[10px] text-[#00FFFF] uppercase tracking-widest font-bold">
                      06°59′N 81°03′E
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#FF00FF]" />
                  </div>
                </div>

                {/* Content Details Block */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Brand Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white text-black font-mono-code font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                        i369
                      </div>
                      <div>
                        <h3 className="gothic-display text-xl sm:text-2xl text-white tracking-tight leading-tight">
                          Imaginative 369
                        </h3>
                        <p className="font-mono-code text-[10px] sm:text-[11px] text-[#00FFFF] uppercase tracking-widest font-bold">
                          Studio & Venture Directorate
                        </p>
                      </div>
                    </div>
                    <span className="w-1.5 h-1.5 bg-[#FFFF00]" />
                  </div>

                  {/* Studio Coordinates & Communication Channels */}
                  <div className="space-y-4 text-sm">
                    {/* Studio Address */}
                    <div className="flex items-start gap-3.5 group/item">
                      <div className="p-2 bg-white/[0.04] border border-white/10 shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-[#FF00FF]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-mono-code text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider block font-bold">
                          Studio Address
                        </span>
                        <p className="text-zinc-200 font-normal text-xs sm:text-sm leading-relaxed">
                          03 River Side Road,<br />
                          Badulla, Uva Province,<br />
                          Sri Lanka
                        </p>
                      </div>
                    </div>

                    {/* Direct Email */}
                    <div className="flex items-start gap-3.5 group/item">
                      <div className="p-2 bg-white/[0.04] border border-white/10 shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-[#00FFFF]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-mono-code text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider block font-bold">
                          Direct Transmission Email
                        </span>
                        <p className="text-white font-mono-code text-xs sm:text-sm break-all font-semibold">
                          i369.developer@gmail.com
                        </p>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="flex items-start gap-3.5 group/item">
                      <div className="p-2 bg-white/[0.04] border border-white/10 shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-[#FFFF00]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-mono-code text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider block font-bold">
                          Highland Operating Hours
                        </span>
                        <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed">
                          Monday — Saturday: 08:30 — 18:30 IST<br />
                          <span className="text-zinc-400 font-mono-code text-[11px]">24/7 Priority Response for Retainers</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ground Zero Telemetry Block */}
                  <div className="p-4 bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-code text-[10px] sm:text-[11px] uppercase text-[#00FFFF] tracking-widest block font-bold">
                        Ground Zero Telemetry
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono-code text-[9px] uppercase tracking-wider text-emerald-400 font-bold">
                          Live
                        </span>
                      </div>
                    </div>
                    <p className="font-mono-code text-[11px] sm:text-xs text-zinc-300 leading-relaxed">
                      Coordinates: 06°59′N 81°03′E<br />
                      Average Elevation: 680m Above Sea Level<br />
                      Central Highlands Innovation Corridor
                    </p>
                  </div>

                  {/* Graphic Accent Bar matching About Page */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex space-x-1.5 w-32">
                      <div className="h-1 flex-1 accent-teal"></div>
                      <div className="h-1 flex-1 accent-pink"></div>
                      <div className="h-1 flex-1 accent-orange"></div>
                    </div>
                    <span className="font-mono-code text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                      Central Highlands
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Right: The Official Contact Form (Ultra-Modern White Glassmorphic Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 bg-white/[0.88] sm:bg-white/[0.82] backdrop-blur-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/60 hover:border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_30px_rgba(255,255,255,0.12)] rounded-none text-zinc-900 transition-all duration-300 space-y-6"
            >
              {isSubmitted ? (
                <div className="py-12 sm:py-16 text-center space-y-5 sm:space-y-6">
                  <div className="w-16 h-16 mx-auto bg-black/5 border border-black/20 flex items-center justify-center text-black shadow-inner">
                    <CheckCircle2 className="w-8 h-8 text-black" />
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-600 font-bold">
                      Transmission Confirmed
                    </span>
                    <h3 className="gothic-display text-3xl sm:text-4xl text-black">
                      Inquiry Received.
                    </h3>
                  </div>
                  <p className="text-zinc-700 max-w-md mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
                    Thank you, <strong className="text-black font-bold">{formData.name}</strong>. Your project brief has been recorded by our Badulla studio team. We will review your requirements and respond within 24 hours.
                  </p>
                  <MagneticButton
                    variant="primary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        projectType: 'Tourism Marketing',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 justify-center text-white bg-black hover:bg-[#FFFF00] hover:text-black transition-colors"
                  >
                    Submit Another Brief
                  </MagneticButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Form Header with High Contrast */}
                  <div className="space-y-2 pb-4 border-b border-black/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-black" />
                        <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-black font-bold">
                          Client Inquiry Brief
                        </span>
                      </div>
                      <span className="font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                        Ground Zero Transmit
                      </span>
                    </div>
                    <h3 className="gothic-display text-2xl sm:text-3xl text-black tracking-tight">
                      Project Specification Brief
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      Direct submission to the executive strategy and software engineering council.
                    </p>
                  </div>

                  {/* Name & Company Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                        Name <span className="text-[#FF00FF]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white/70 hover:bg-white/90 focus:bg-white border border-black/20 focus:border-black text-black placeholder:text-zinc-500 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization or brand"
                        className="w-full px-4 py-3 bg-white/70 hover:bg-white/90 focus:bg-white border border-black/20 focus:border-black text-black placeholder:text-zinc-500 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                        Email Address <span className="text-[#FF00FF]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full px-4 py-3 bg-white/70 hover:bg-white/90 focus:bg-white border border-black/20 focus:border-black text-black placeholder:text-zinc-500 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                        Project Scope / Discipline
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 hover:bg-white border border-black/20 focus:border-black text-black text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all cursor-pointer font-sans"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-white text-black">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                      Project Objectives & Message <span className="text-[#FF00FF]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your objectives, timeline, or current challenges..."
                      className="w-full px-4 py-3 bg-white/70 hover:bg-white/90 focus:bg-white border border-black/20 focus:border-black text-black placeholder:text-zinc-500 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans leading-relaxed resize-none"
                    />
                  </div>

                  {/* Submit Action Strip */}
                  <div className="pt-3 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-mono-code text-[11px] text-zinc-600 font-medium">
                      * All submissions are transmitted directly to studio directors.
                    </span>

                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-4 justify-center text-white bg-black hover:bg-[#FFFF00] hover:text-black transition-colors"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span className="font-bold">Send Inquiry</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
