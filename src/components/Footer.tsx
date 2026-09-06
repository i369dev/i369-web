import React from 'react';
import { GothicLogo } from './GothicLogo';
import { PageId } from '../types';
import { ArrowUp, Mail, MapPin, Compass, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#111] text-white border-t border-black">
      {/* Upper Grid - Large Statement & Quick Links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 pb-12">
        {/* Artistic Flair Accent Bar */}
        <div className="flex space-x-2 mb-10">
          <div className="w-2 h-8 accent-teal"></div>
          <div className="w-2 h-8 accent-pink"></div>
          <div className="w-2 h-8 accent-orange"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-white text-black font-mono-code font-black text-xs flex items-center justify-center shrink-0 tracking-tight shadow-sm">
                i369
              </div>
              <div>
                <h3 className="gothic-display text-3xl sm:text-4xl tracking-tight text-white leading-none">
                  Imaginative 369
                </h3>
                <p className="font-mono-code text-xs text-gray-400 uppercase tracking-widest mt-1 font-bold">
                  Digital Agency & Venture Studio
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-normal border-l-2 border-white/30 pl-4">
              The creative media, digital marketing, and software engineering powerhouse of Sri Lanka’s Hill Country. Turning bold ideas into cinematic stories, high-performing software, and brands that win.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 glass-pill text-[10px] font-mono-code text-[#00DFD8]">
                <Compass className="w-3 h-3" />
                06°59′N 81°03′E
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 glass-pill text-[10px] font-mono-code text-[#FF69B4]">
                Dual-Engine Model
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 glass-pill text-[10px] font-mono-code text-[#FFA500]">
                Badulla, Sri Lanka
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-mono-code text-xs uppercase tracking-widest text-zinc-500 mb-4 font-bold">
                Directory
              </h4>
              <ul className="space-y-2.5 text-xs font-mono-code uppercase tracking-wider">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="text-zinc-300 hover:text-[#FFA500] transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-zinc-300 hover:text-[#FFA500] transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-zinc-300 hover:text-[#FFA500] transition-colors cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('work')}
                    className="text-zinc-300 hover:text-[#FFA500] transition-colors cursor-pointer"
                  >
                    Our Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('ventures')}
                    className="text-zinc-300 hover:text-[#FFA500] transition-colors cursor-pointer"
                  >
                    Ventures
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-zinc-300 hover:text-[#FFA500] transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono-code text-xs uppercase tracking-widest text-zinc-500 mb-4 font-bold">
                Disciplines
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-400 font-mono-code uppercase tracking-wider">
                <li>Destination Marketing</li>
                <li>AdventureTech</li>
                <li>Flutter & React Apps</li>
                <li>Cinematic 4K Media</li>
                <li>Drone Surveying</li>
                <li>Performance Media</li>
              </ul>
            </div>
          </div>

          {/* Col 3: Studio Coordinates & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="p-6 border border-white/20 glass-panel-dark">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF69B4] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-mono-code text-xs uppercase text-white font-bold tracking-wider">
                    Studio Headquarters
                  </h5>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                    03 River Side Road, Badulla,<br />
                    Uva Province, Sri Lanka
                  </p>
                  <p className="text-[#00DFD8] text-xs font-mono-code mt-2 font-bold">
                    i369.developer@gmail.com
                  </p>
                </div>
              </div>

              <MagneticButton
                id="footer-start-project-btn"
                variant="glass"
                onClick={onOpenInquiry}
                className="w-full mt-5 py-3 px-4 text-black bg-white hover:bg-[#FFA500]"
              >
                <span>Initiate Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            <button
              onClick={scrollToTop}
              className="self-start inline-flex items-center gap-2 text-xs font-mono-code text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#008080]" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Lower Strip: Tagline & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-500">
          <div className="text-center sm:text-left">
            <span className="text-zinc-300 font-bold uppercase tracking-wider">
              Think. Create. Inspire.
            </span>
            <span className="mx-2 text-zinc-700">|</span>
            <span className="text-zinc-400 uppercase tracking-widest font-bold">Strategy to Screen</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500">
              © {new Date().getFullYear()} Imaginative 369.
            </span>
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 accent-teal"></div>
              <div className="w-1.5 h-1.5 accent-pink"></div>
              <div className="w-1.5 h-1.5 accent-orange"></div>
            </div>
            <span className="text-zinc-400">Badulla · Uva Province</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
