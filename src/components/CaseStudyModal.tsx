import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (caseStudy) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [caseStudy, onClose]);

  return (
    <AnimatePresence>
      {caseStudy && (
        <motion.div
          id="case-study-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
        >
          <motion.div
            id="case-study-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white/95 backdrop-blur-2xl border border-black/30 text-[#141414] shadow-[0_25px_60px_rgba(0,0,0,0.35)] rounded-none max-h-[92vh] overflow-y-auto"
          >
            {/* Header Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-black/15 px-6 py-4 flex items-center justify-between"
            >
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
                className="p-1.5 text-black hover:bg-[#FFFF00] border border-black/30 transition-colors cursor-pointer rounded-none"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Hero Image & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-64 sm:h-80 w-full overflow-hidden bg-black border-b border-black/20"
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover grayscale brightness-90 contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-6 left-6 right-6"
              >
                <h2 className="gothic-display text-4xl sm:text-5xl text-white tracking-tight leading-none">
                  {caseStudy.title}
                </h2>
              </motion.div>
            </motion.div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.20, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-500 font-bold block mb-2">
                  The Mission & Executive Summary
                </span>
                <p className="text-zinc-800 text-base sm:text-lg leading-relaxed font-normal">
                  {caseStudy.summary}
                </p>
              </motion.div>

              {/* Key Metrics Strip */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-white/80 border border-black/20 shadow-sm"
              >
                {caseStudy.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.30 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-1"
                  >
                    <span className="gothic-display text-3xl sm:text-4xl font-bold text-black tracking-tight">
                      {stat.value}
                    </span>
                    <p className="font-mono-code text-xs text-zinc-600 uppercase tracking-wider font-bold">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-800 font-bold block">
                  Architectural Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.deliverables.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.38 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3 p-3.5 bg-white border border-black/15 text-sm shadow-xs"
                    >
                      <div className="w-1.5 h-1.5 accent-teal mt-1.5 shrink-0"></div>
                      <span className="text-zinc-800 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Regional Impact */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 border-l-4 border-black bg-zinc-50"
              >
                <span className="font-mono-code text-xs uppercase tracking-widest text-black font-bold block mb-1">
                  Provincial & Commercial Impact
                </span>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  {caseStudy.impact}
                </p>
              </motion.div>

              {/* Quote if present */}
              {caseStudy.quote && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 bg-black text-white border border-white/20 space-y-3 shadow-lg"
                >
                  <p className="font-display italic text-zinc-200 text-base sm:text-lg leading-relaxed">
                    "{caseStudy.quote.text}"
                  </p>
                  <div className="flex items-center gap-2 font-mono-code text-xs">
                    <span className="text-white font-bold">{caseStudy.quote.author}</span>
                    <span className="text-zinc-500">/</span>
                    <span className="text-zinc-400">{caseStudy.quote.role}</span>
                  </div>
                </motion.div>
              )}

              {/* Action Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.50, ease: [0.16, 1, 0.3, 1] }}
                className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/20"
              >
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
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
