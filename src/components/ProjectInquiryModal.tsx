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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        id="inquiry-modal-card"
        className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-black/30 text-[#141414] shadow-[0_25px_60px_rgba(0,0,0,0.3)] rounded-none p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-black hover:bg-[#FFA500] border border-black/30 p-1.5 transition-colors cursor-pointer rounded-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 mx-auto bg-white border-2 border-black flex items-center justify-center text-[#008080] shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="gothic-display text-3xl uppercase text-black">
                Brief Transmitted
              </h3>
              <p className="text-zinc-600 text-sm max-w-md mx-auto">
                Thank you, <span className="text-black font-bold">{formData.name}</span>. The Imaginative 369 strategy directorate in Badulla will review your brief within 24 hours.
              </p>
            </div>

            <div className="p-4 bg-[#F5F5F5] border border-black/20 max-w-sm mx-auto text-left text-xs font-mono-code space-y-1">
              <p className="text-[#008080] font-bold">PROJECT: {formData.projectType}</p>
              <p className="text-zinc-600">ORGANIZATION: {formData.company || 'Direct'}</p>
              <p className="text-zinc-600">TARGET BUDGET: {formData.budgetRange}</p>
            </div>

            <MagneticButton
              variant="primary"
              onClick={handleReset}
              className="px-6 py-2.5"
            >
              Close Window
            </MagneticButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-3.5 accent-teal"></div>
                  <div className="w-1.5 h-3.5 accent-pink"></div>
                  <div className="w-1.5 h-3.5 accent-orange"></div>
                </div>
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-zinc-600 font-bold">
                  Direct Strategy Portal
                </span>
              </div>
              <h2 className="gothic-display text-3xl sm:text-4xl uppercase tracking-tight text-black">
                Start Your Project
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                Tell us what you are building — a brand, booking engine, campaign, or venture — and we will map the route.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono-code uppercase text-zinc-700 font-bold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ruwan Silva"
                  className="w-full px-3.5 py-2.5 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-code uppercase text-zinc-700 font-bold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono-code uppercase text-zinc-700 font-bold mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Ceylon Eco Retreats"
                  className="w-full px-3.5 py-2.5 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-code uppercase text-zinc-700 font-bold mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black cursor-pointer font-sans"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono-code uppercase text-zinc-700 font-bold mb-2">
                Estimated Scope / Budget Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setFormData({ ...formData, budgetRange: opt })}
                    className={`px-2.5 py-2 text-xs font-mono-code border text-left transition-colors cursor-pointer rounded-none ${
                      formData.budgetRange === opt
                        ? 'border-black bg-black text-white font-bold'
                        : 'border-black/30 bg-white/80 text-black hover:bg-[#FFA500]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono-code uppercase text-zinc-700 font-bold mb-1">
                Project Overview & Objectives
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe what you need to achieve, your timeline, or current bottlenecks..."
                className="w-full px-3.5 py-2.5 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black/20">
              <span className="text-[11px] font-mono-code text-zinc-500 font-bold">
                Ground Zero Team · Badulla HQ
              </span>

              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
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
