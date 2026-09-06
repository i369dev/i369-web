import React from 'react';
import { X, Check, ArrowUpRight, ExternalLink } from 'lucide-react';
import { CaseStudy } from '../types';
import { MagneticButton } from './MagneticButton';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenInquiry,
}) => {
  if (!caseStudy) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        id="case-study-modal-content"
        className="relative w-full max-w-4xl bg-white/95 backdrop-blur-2xl border border-black/30 text-[#141414] shadow-[0_25px_60px_rgba(0,0,0,0.35)] rounded-none max-h-[92vh] overflow-y-auto"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-black/15 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex space-x-1">
              <div className="w-1.5 h-3.5 accent-teal"></div>
              <div className="w-1.5 h-3.5 accent-pink"></div>
              <div className="w-1.5 h-3.5 accent-orange"></div>
            </div>
            <span className="font-mono-code text-xs text-black font-bold">
              {caseStudy.number}
            </span>
            <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-600 font-bold">
              {caseStudy.category} · {caseStudy.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-black hover:bg-[#FFA500] border border-black/30 transition-colors cursor-pointer rounded-none"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image & Headline */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black border-b border-black/20">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover grayscale brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="gothic-display text-4xl sm:text-5xl uppercase text-white tracking-tight leading-none">
              {caseStudy.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Summary */}
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-500 font-bold block mb-2">
              The Mission & Executive Summary
            </span>
            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed font-normal">
              {caseStudy.summary}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-white/80 border border-black/20 shadow-sm">
            {caseStudy.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="gothic-display text-3xl sm:text-4xl font-bold text-black tracking-tight">
                  {stat.value}
                </span>
                <p className="font-mono-code text-xs text-zinc-600 uppercase tracking-wider font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Deliverables */}
          <div className="space-y-4">
            <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-800 font-bold block">
              Architectural Deliverables
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-white border border-black/15 text-sm shadow-xs"
                >
                  <div className="w-1.5 h-1.5 accent-teal mt-1.5 shrink-0"></div>
                  <span className="text-zinc-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Impact */}
          <div className="p-5 border-l-4 border-black bg-zinc-50">
            <span className="font-mono-code text-xs uppercase tracking-widest text-black font-bold block mb-1">
              Provincial & Commercial Impact
            </span>
            <p className="text-zinc-700 text-sm leading-relaxed">
              {caseStudy.impact}
            </p>
          </div>

          {/* Quote if present */}
          {caseStudy.quote && (
            <div className="p-6 bg-black text-white border border-white/20 space-y-3 shadow-lg">
              <p className="font-display italic text-zinc-200 text-base sm:text-lg leading-relaxed">
                "{caseStudy.quote.text}"
              </p>
              <div className="flex items-center gap-2 font-mono-code text-xs">
                <span className="text-white font-bold">{caseStudy.quote.author}</span>
                <span className="text-zinc-500">/</span>
                <span className="text-zinc-400">{caseStudy.quote.role}</span>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/20">
            <span className="text-xs font-mono-code text-zinc-500 font-bold">
              Imaginative 369 Case Study Archives · Ground Zero Portfolio
            </span>

            <MagneticButton
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="px-6 py-3"
            >
              <span>Commission Similar Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};
