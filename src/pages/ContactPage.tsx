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
    mobile: '',
    company: '',
    email: '',
    projectType: 'Tourism Marketing',
    budgetRange: '$5,000 - $15,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Tourism Marketing',
    'Software Development',
    'AdventureTech',
    'Media Production',
    'Performance Marketing',
    'Venture Incubation',
    'Other',
  ];

  const budgetOptions = [
    '< $5,000',
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000+',
    'Retainer / Equity Partnership',
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
                <div className="relative flex-1 min-h-[260px] sm:min-h-[520px] md:min-h-[580px] h-[18rem] sm:h-[34rem] w-full flex items-center justify-center p-4 sm:p-8 md:p-10 bg-gradient-to-b from-white/[0.04] via-black/20 to-black/40 border-b border-white/10 overflow-hidden group">
                  {/* Atmospheric radial ambient light */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08)_0%,rgba(255,0,255,0.03)_45%,transparent_75%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-40" />

                  {/* Centered Vertical Logo Image */}
                  <img
                    id="contact-studio-logo-image"
                    src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
                    alt="Imaginative 369 Logo"
                    className="w-full h-full max-h-[16rem] sm:max-h-[30rem] md:max-h-[32rem] object-contain filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)] group-hover:scale-105 group-hover:drop-shadow-[0_16px_36px_rgba(0,255,255,0.25)] transition-all duration-700 ease-out"
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

            {/* Right: The Official Contact Form (Ultra-Modern White Glassmorphic Card matching Start Your Project) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative bg-white/[0.88] sm:bg-white/[0.85] backdrop-blur-2xl p-5 sm:p-8 md:p-10 lg:p-12 border border-white/60 hover:border-white/80 shadow-[0_25px_60px_rgba(0,0,0,0.4),0_0_35px_rgba(255,255,255,0.15)] rounded-none text-zinc-900 transition-all duration-300 space-y-6"
            >
              {/* Top CMYK accent bar matching Start Your Project */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 pointer-events-none opacity-80" />

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
                      Inquiry <span className="text-fuchsia-600">Recorded</span>.
                    </h3>
                    <p className="text-zinc-700 max-w-md mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
                      Thank you, <strong className="text-black font-bold">{formData.name}</strong>. The Imaginative 369 strategy directorate in Badulla will review your brief and respond within <span className="text-amber-600 font-semibold font-mono-code">24 hours</span>.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white/60 border border-black/15 shadow-sm max-w-md mx-auto text-left text-xs font-mono-code space-y-1.5">
                    <p className="text-cyan-700 font-bold">PROJECT: <span className="text-black font-medium">{formData.projectType}</span></p>
                    <p className="text-zinc-700 font-bold">MOBILE: <span className="text-black font-medium">{formData.mobile || '—'}</span></p>
                    <p className="text-zinc-700 font-bold">EMAIL: <span className="text-black font-medium">{formData.email}</span></p>
                    <p className="text-zinc-700 font-bold">ORGANIZATION: <span className="text-black font-medium">{formData.company || 'Direct Client'}</span></p>
                    <p className="text-zinc-700 font-bold">TARGET BUDGET: <span className="text-black font-medium">{formData.budgetRange}</span></p>
                  </div>

                  <MagneticButton
                    variant="primary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        mobile: '',
                        company: '',
                        email: '',
                        projectType: 'Tourism Marketing',
                        budgetRange: '$5,000 - $15,000',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-8 py-3.5 justify-center text-white bg-black hover:bg-[#FFFF00] hover:text-black transition-colors"
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

                  {/* 1. Name & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                        Your Full Name <span className="text-fuchsia-600 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ruwan Silva"
                        className="w-full px-4 py-3 bg-white/70 hover:bg-white/90 focus:bg-white border border-black/20 focus:border-black text-black placeholder:text-zinc-500 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                        Mobile Number <span className="text-cyan-600 font-bold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="e.g. +94 77 123 4567"
                        className="w-full px-4 py-3 bg-white/70 hover:bg-white/90 focus:bg-white border border-black/20 focus:border-black text-black placeholder:text-zinc-500 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* 2. Email & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                        Email Address <span className="text-fuchsia-600 font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 bg-white/70 hover:bg-white/90 focus:bg-white border border-black/20 focus:border-black text-black placeholder:text-zinc-500 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Ceylon Eco Retreats"
                        className="w-full px-4 py-3 bg-white/70 hover:bg-white/90 focus:bg-white border border-black/20 focus:border-black text-black placeholder:text-zinc-500 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* 3. Project Type */}
                  <div>
                    <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                      Project Type
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

                  {/* 4. Estimated Scope / Budget Tier */}
                  <div>
                    <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                      Estimated Scope / Budget Tier
                    </label>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, budgetRange: opt })}
                          className={`px-3 py-2.5 text-[11px] sm:text-xs font-mono-code border text-left transition-all cursor-pointer rounded-none break-words min-h-[42px] flex items-center ${
                            formData.budgetRange === opt
                              ? 'border-black bg-black text-white font-bold shadow-sm'
                              : 'border-black/20 bg-white/70 text-zinc-900 hover:bg-[#FFFF00] hover:text-black hover:border-black font-medium'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 5. Project Overview & Objectives */}
                  <div>
                    <label className="block text-xs font-mono-code uppercase text-zinc-800 font-bold mb-2 tracking-wider">
                      Project Overview & Objectives <span className="text-fuchsia-600 font-bold">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you need to achieve, your timeline, or current bottlenecks..."
                      className="w-full px-4 py-3 bg-white/70 hover:bg-white/90 focus:bg-white border border-black/20 focus:border-black text-black placeholder:text-zinc-500 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans leading-relaxed resize-none"
                    />
                  </div>

                  {/* Submit Action Strip */}
                  <div className="pt-3 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-mono-code text-[11px] text-zinc-600 font-medium">
                      <span className="text-cyan-600 font-bold">*</span> Ground Zero Team · Badulla HQ
                    </span>

                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 justify-center text-white bg-black hover:bg-[#FFFF00] hover:text-black transition-colors"
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
