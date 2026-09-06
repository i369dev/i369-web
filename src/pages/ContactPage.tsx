import React, { useState } from 'react';
import { PageId } from '../types';
import { GothicLogo } from '../components/GothicLogo';
import { Send, CheckCircle2, MapPin, Mail, Clock, Phone, Compass, ArrowRight } from 'lucide-react';
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
    <div className="w-full bg-white text-[#141414] selection:bg-[#FFA500] selection:text-black pt-16 sm:pt-20">
      {/* =========================================================================
          PAGE HEADER: Artistic Flair Minimalist Editorial
         ========================================================================= */}
      <section className="bg-white border-b border-black py-16 sm:py-24 px-6 sm:px-12 lg:px-16 thin-grid relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex space-x-1.5">
              <div className="w-2 h-4 accent-teal"></div>
              <div className="w-2 h-4 accent-pink"></div>
              <div className="w-2 h-4 accent-orange"></div>
            </div>
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              06 // Ground-Zero Transmission
            </span>
          </div>

          <h1 className="gothic-display text-6xl sm:text-8xl md:text-9xl uppercase text-black tracking-tight leading-[0.88]">
            Let’s Build Something.
          </h1>

          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-black pt-6">
            <p className="font-display text-xl sm:text-2xl text-zinc-800 font-medium max-w-2xl border-l-2 border-black pl-6">
              Whether it's a destination campaign, a mobile app, or a full brand relaunch — tell us where you want to go.
            </p>
            <p className="font-mono-code text-xs text-zinc-500 uppercase tracking-widest font-bold">
              Strategy to Screen · Badulla, Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FORM & STUDIO COORDINATES SPLIT (Hugeinc Style Grid)
         ========================================================================= */}
      <section className="py-20 px-6 sm:px-12 lg:px-16 bg-[#FAFAFA] border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Studio Details & Ground Zero Info (Dark Glass 3D Tilt Card) */}
            <div className="lg:col-span-5">
              <TiltCard
                isDark={true}
                maxTilt={6}
                scale={1.02}
                className="p-8 sm:p-12 space-y-8 rounded-none cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white text-black font-mono-code font-black text-xs flex items-center justify-center shrink-0">
                    i369
                  </div>
                  <div>
                    <h3 className="gothic-display text-2xl uppercase text-white">
                      Imaginative 369
                    </h3>
                    <p className="font-mono-code text-xs text-zinc-400 uppercase tracking-widest mt-0.5 font-bold">
                      Studio & Venture Directorate
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-[#FF69B4] shrink-0 mt-1" />
                    <div>
                      <span className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider block font-bold">
                        Studio Address
                      </span>
                      <p className="text-zinc-200 font-normal mt-1 leading-relaxed">
                        03 River Side Road,<br />
                        Badulla, Uva Province,<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-[#00DFD8] shrink-0 mt-1" />
                    <div>
                      <span className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider block font-bold">
                        Direct Email
                      </span>
                      <p className="text-zinc-200 font-mono-code mt-1 text-xs">
                        i369.developer@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-4 h-4 text-[#FFA500] shrink-0 mt-1" />
                    <div>
                      <span className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider block font-bold">
                        Highland Operating Hours
                      </span>
                      <p className="text-zinc-200 mt-1 text-xs leading-relaxed">
                        Monday — Saturday: 08:30 — 18:30 IST<br />
                        <span className="text-zinc-400">24/7 Priority Response for Retainers</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/20 space-y-2">
                  <span className="font-mono-code text-[11px] uppercase text-[#00DFD8] tracking-widest block font-bold">
                    Ground Zero Telemetry
                  </span>
                  <p className="font-mono-code text-xs text-zinc-300 leading-relaxed">
                    Coordinates: 06°59′N 81°03′E<br />
                    Average Elevation: 680m Above Sea<br />
                    Central Highlands Corridor
                  </p>
                </div>
              </TiltCard>
            </div>

            {/* Right: The Official Contact Form (Light Glass Panel) */}
            <div className="lg:col-span-7 bg-white/90 backdrop-blur-xl p-8 sm:p-12 border border-black/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-none">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-black flex items-center justify-center text-[#008080] shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="gothic-display text-4xl uppercase text-black">
                    Inquiry Received.
                  </h3>
                  <p className="text-zinc-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
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
                    className="px-6 py-3"
                  >
                    Submit Another Brief
                  </MagneticButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="gothic-display text-3xl uppercase text-black tracking-tight">
                      Project Specification Brief
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                      Direct submission to the leadership and strategy directorate.
                    </p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-700 font-bold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-700 font-bold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization or brand"
                        className="w-full px-4 py-3 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-700 font-bold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full px-4 py-3 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code uppercase text-zinc-700 font-bold mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors cursor-pointer font-sans"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono-code uppercase text-zinc-700 font-bold mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your objectives, timeline, or current challenge..."
                      className="w-full px-4 py-3 bg-white/80 border border-black/30 text-black text-sm rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-mono-code text-xs text-zinc-500 font-bold">
                      * Required fields
                    </span>

                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
