import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { ProjectInquiry } from '../types';
import { MagneticButton } from './MagneticButton';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedType?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedType = 'Tourism Marketing',
}) => {
  const [formData, setFormData] = useState<ProjectInquiry>({
    name: '',
    mobile: '',
    company: '',
    email: '',
    projectType: preselectedType,
    budgetRange: '$5,000 - $15,000',
    timeline: '1 - 3 Months',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="inquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        id="inquiry-modal-card"
        className="relative w-full max-w-2xl bg-white/[0.88] sm:bg-white/[0.85] backdrop-blur-2xl border border-white/60 hover:border-white/80 shadow-[0_25px_60px_rgba(0,0,0,0.4),0_0_35px_rgba(255,255,255,0.15)] text-zinc-900 rounded-none p-6 sm:p-8 md:p-10 max-h-[90vh] overflow-y-auto transition-all duration-300 space-y-6"
      >
        {/* Subtle Ambient Refraction Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 pointer-events-none opacity-80" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-black hover:bg-[#FFFF00] border border-black/20 hover:border-black p-2 transition-colors cursor-pointer rounded-none bg-white/70 hover:text-black z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 sm:py-12 space-y-5 sm:space-y-6">
            {/* CMYK Accentuated Glass Icon */}
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 rounded-full blur-md opacity-40 animate-pulse" />
              <div className="relative w-16 h-16 rounded-full bg-white/95 border border-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="modalCmykRing" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E5FF" />
                      <stop offset="50%" stopColor="#FF00FF" />
                      <stop offset="100%" stopColor="#FFD600" />
                    </linearGradient>
                    <linearGradient id="modalCmykCheck" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00C4DF" />
                      <stop offset="100%" stopColor="#D946EF" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="21" stroke="url(#modalCmykRing)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                  <circle cx="24" cy="24" r="17" fill="url(#modalCmykRing)" fillOpacity="0.12" stroke="url(#modalCmykRing)" strokeWidth="1.5" />
                  <path d="M15 24.5L21.5 31L33 18.5" stroke="url(#modalCmykCheck)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono-code text-xs uppercase tracking-widest text-cyan-600 font-bold inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Brief Transmitted
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
              </span>
              <h3 className="gothic-display text-3xl sm:text-4xl text-black">
                Inquiry <span className="text-fuchsia-600">Recorded</span>.
              </h3>
              <p className="text-zinc-700 text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed">
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
              onClick={handleReset}
              className="w-full sm:w-auto px-8 py-3.5 justify-center text-white bg-black hover:bg-[#FFFF00] hover:text-black transition-colors"
            >
              <span className="font-bold">Close Window</span>
            </MagneticButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="space-y-2 pb-4 border-b border-black/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                  <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-widest text-cyan-600 font-bold">
                    Direct Strategy Portal
                  </span>
                </div>
                <span className="font-mono-code text-[10px] text-fuchsia-600 uppercase tracking-widest font-bold">
                  Ground Zero Brief
                </span>
              </div>
              <h2 className="gothic-display text-3xl sm:text-4xl tracking-tight text-black">
                Start Your <span className="text-fuchsia-600">Project</span>
              </h2>
              <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-normal">
                Tell us what you are building — a brand, booking engine, campaign, or venture — and we will map the route.
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setFormData({ ...formData, budgetRange: opt })}
                    className={`px-3 py-2.5 text-xs font-mono-code border text-left transition-all cursor-pointer rounded-none ${
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
      </div>
    </div>
  );
};
