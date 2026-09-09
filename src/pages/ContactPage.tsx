import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { Send, Mail, Clock } from 'lucide-react';
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
            {/* Left: Studio Logo & Direct Communications (Dark Glass 3D Tilt Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 h-full flex flex-col"
            >
              <TiltCard
                id="contact-studio-details-card"
                isDark={true}
                maxTilt={5}
                scale={1.01}
                glowColor="rgba(0, 255, 255, 0.25)"
                className="rounded-none bg-black/60 sm:bg-black/50 backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden cursor-default h-full flex flex-col justify-between"
              >
                {/* Top Subtle CMYK Accent Indicator */}
                <div className="h-1 w-full flex shrink-0">
                  <div className="h-full flex-1 bg-[#00FFFF]" />
                  <div className="h-full flex-1 bg-[#FF00FF]" />
                  <div className="h-full flex-1 bg-[#FFFF00]" />
                </div>

                {/* Supersized Tall Centered Logo Showcase Container */}
                <div className="relative flex-1 min-h-[460px] sm:min-h-[520px] md:min-h-[580px] h-[30rem] sm:h-[34rem] w-full flex items-center justify-center p-6 sm:p-8 md:p-10 bg-gradient-to-b from-white/[0.04] via-black/20 to-black/40 border-b border-white/10 overflow-hidden group">
                  {/* Atmospheric radial ambient light */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08)_0%,rgba(255,0,255,0.03)_45%,transparent_75%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-40" />

                  {/* Centered Vertical Logo Image */}
                  <img
                    id="contact-studio-logo-image"
                    src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
                    alt="Imaginative 369 Logo"
                    className="w-full h-full max-h-[26rem] sm:max-h-[30rem] md:max-h-[32rem] object-contain filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)] group-hover:scale-105 group-hover:drop-shadow-[0_16px_36px_rgba(0,255,255,0.25)] transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Simplified Content Block: Email & Operating Hours Only */}
                <div className="p-6 sm:p-8 space-y-5 shrink-0 bg-black/20">
                  {/* Direct Transmission Email */}
                  <div className="flex items-start gap-4 group/item">
                    <div className="p-2.5 bg-white/[0.04] border border-white/10 shrink-0 mt-0.5 group-hover/item:border-[#00FFFF]/50 transition-colors">
                      <Mail className="w-5 h-5 text-[#00FFFF]" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="font-mono-code text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider block font-bold">
                        Direct Transmission Email
                      </span>
                      <a
                        href="mailto:i369.developer@gmail.com"
                        className="text-white font-mono-code text-xs sm:text-sm md:text-base break-all font-semibold hover:text-[#00FFFF] transition-colors block"
                      >
                        i369.developer@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Refined Divider */}
                  <div className="h-px w-full bg-white/10" />

                  {/* Highland Operating Hours */}
                  <div className="flex items-start gap-4 group/item">
                    <div className="p-2.5 bg-white/[0.04] border border-white/10 shrink-0 mt-0.5 group-hover/item:border-[#FFFF00]/50 transition-colors">
                      <Clock className="w-5 h-5 text-[#FFFF00]" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono-code text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider block font-bold">
                        Highland Operating Hours
                      </span>
                      <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed">
                        Monday — Saturday: 08:30 — 18:30 IST<br />
                        <span className="text-zinc-400 font-mono-code text-[11px]">24/7 Priority Response for Retainers</span>
                      </p>
                    </div>
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
                  {/* Vibrantly Colored CMYK Icon Container */}
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                    {/* Ambient CMYK Gradient Aura */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 rounded-full blur-md opacity-40 animate-pulse" />
                    {/* Elevated Glass Container */}
                    <div className="relative w-16 h-16 rounded-full bg-white/95 border border-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex items-center justify-center">
                      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="cmykConfirmRing" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00E5FF" />
                            <stop offset="50%" stopColor="#FF00FF" />
                            <stop offset="100%" stopColor="#FFD600" />
                          </linearGradient>
                          <linearGradient id="cmykCheckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00C4DF" />
                            <stop offset="100%" stopColor="#D946EF" />
                          </linearGradient>
                        </defs>
                        {/* Outer CMYK Orbit Ring */}
                        <circle cx="24" cy="24" r="21" stroke="url(#cmykConfirmRing)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                        {/* Inner Tint Circle */}
                        <circle cx="24" cy="24" r="17" fill="url(#cmykConfirmRing)" fillOpacity="0.12" stroke="url(#cmykConfirmRing)" strokeWidth="1.5" />
                        {/* Checkmark */}
                        <path d="M15 24.5L21.5 31L33 18.5" stroke="url(#cmykCheckGrad)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono-code text-xs uppercase tracking-widest text-cyan-600 font-bold inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      Transmission Confirmed
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                    </span>
                    <h3 className="gothic-display text-3xl sm:text-4xl text-black">
                      Inquiry <span className="text-fuchsia-600">Received</span>.
                    </h3>
                  </div>
                  <p className="text-zinc-700 max-w-md mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
                    Thank you, <strong className="text-black font-bold">{formData.name}</strong>. Your project brief has been recorded by our <span className="text-cyan-600 font-semibold">Badulla studio team</span>. We will review your requirements and respond within <span className="text-amber-600 font-semibold font-mono-code">24 hours</span>.
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
                    <span className="font-bold">
                      Submit Another <span className="text-yellow-400 group-hover:text-black transition-colors">Brief</span>
                    </span>
                  </MagneticButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Form Header with High Contrast and CMYK Text Accents */}
                  <div className="space-y-2 pb-4 border-b border-black/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                        <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-cyan-600 font-bold">
                          Client Inquiry Brief
                        </span>
                      </div>
                      <span className="font-mono-code text-[10px] text-fuchsia-600 uppercase tracking-widest font-bold">
                        Ground Zero Transmit
                      </span>
                    </div>
                    <h3 className="gothic-display text-2xl sm:text-3xl text-black tracking-tight">
                      Project <span className="text-fuchsia-600">Specification</span> Brief
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      Direct submission to the <span className="text-cyan-600 font-medium">executive strategy</span> and <span className="text-amber-600 font-medium">software engineering</span> council.
                    </p>
                  </div>

                  {/* Name & Company Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                        Name <span className="text-fuchsia-600 font-bold">*</span>
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
                        Company / Brand <span className="text-cyan-600 font-mono-code text-[10px] lowercase font-normal ml-1">(optional)</span>
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
                        Email Address <span className="text-cyan-600 font-bold">*</span>
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
                      Project Objectives & Message <span className="text-fuchsia-600 font-bold">*</span>
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
                      <span className="text-cyan-600 font-bold">*</span> All submissions are transmitted directly to studio directors.
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
                          <span className="font-bold">
                            Send <span className="text-yellow-400 group-hover:text-black transition-colors">Inquiry</span>
                          </span>
                          <Send className="w-4 h-4 ml-1.5 text-cyan-400 group-hover:text-black transition-colors" />
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
