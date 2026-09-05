import React, { useState, useEffect } from 'react';
import { GothicLogo } from './GothicLogo';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string; number: string; accent: string }[] = [
    { id: 'home', label: 'Home', number: '01', accent: '#00DFD8' },
    { id: 'about', label: 'About', number: '02', accent: '#FF2D87' },
    { id: 'services', label: 'Services', number: '03', accent: '#FF9900' },
    { id: 'work', label: 'Our Work', number: '04', accent: '#00DFD8' },
    { id: 'ventures', label: 'Ventures', number: '05', accent: '#FF2D87' },
    { id: 'contact', label: 'Contact', number: '06', accent: '#FF9900' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav-frosted py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
            : 'bg-white/90 backdrop-blur-md border-b border-black/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo & Brand Identity Lockup - Artistic Flair style */}
          <button
            id="nav-logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
            aria-label="Imaginative 369 Home"
          >
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-mono-code font-bold text-xs shrink-0 tracking-tight group-hover:bg-[#FFA500] group-hover:text-black transition-colors shadow-sm">
              i369
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tighter text-lg sm:text-xl uppercase text-black group-hover:text-[#FFA500] transition-colors">
                Imaginative 369
              </span>
              <span className="font-mono-code text-[9px] uppercase tracking-[0.25em] text-gray-500">
                Strategy to Screen · Badulla
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-semibold uppercase tracking-widest" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-xs uppercase font-mono-code tracking-widest transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-black font-bold border-b-2 border-black'
                      : 'text-zinc-600 hover:text-black hover:opacity-75'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-[2px] left-0 right-0 h-[2px]"
                      style={{ backgroundColor: link.accent }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Studio Indicator & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 border border-black/10 bg-black/[0.03] backdrop-blur-sm text-[10px] font-mono-code uppercase tracking-wider text-zinc-700">
              <span className="w-1.5 h-1.5 bg-[#008080]" />
              <span className="w-1.5 h-1.5 bg-[#FF69B4]" />
              <span className="w-1.5 h-1.5 bg-[#FFA500]" />
              <span className="ml-1 font-bold">Uva 680m</span>
            </div>

            <MagneticButton
              id="nav-start-project-btn"
              variant="primary"
              onClick={onOpenInquiry}
              className="px-5 py-2.5"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-inquiry-cta"
              onClick={onOpenInquiry}
              className="px-3 py-1.5 bg-black text-white text-[10px] uppercase font-mono-code font-bold tracking-wider hover:bg-[#FFA500] hover:text-black transition-colors"
            >
              Contact
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black hover:opacity-70 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF69B4]" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden animate-in fade-in duration-200 border-t border-black/20"
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-black flex items-center justify-between">
              <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold">
                Index & Navigation
              </span>
              <div className="flex space-x-1.5">
                <div className="w-2 h-4 accent-teal"></div>
                <div className="w-2 h-4 accent-pink"></div>
                <div className="w-2 h-4 accent-orange"></div>
              </div>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className="flex items-center justify-between py-2.5 text-left group border-b border-gray-200"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-code text-xs text-gray-400">
                    {link.number}
                  </span>
                  <span
                    className={`gothic-display text-3xl font-black uppercase ${
                      currentPage === link.id
                        ? 'text-black underline decoration-2 underline-offset-4'
                        : 'text-zinc-600 group-hover:text-black'
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
                {currentPage === link.id && (
                  <span
                    className="w-2.5 h-2.5"
                    style={{ backgroundColor: link.accent }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-black flex flex-col gap-4">
            <div className="text-xs font-mono-code text-zinc-600 space-y-1">
              <p className="text-black font-bold">Imaginative 369 Studio</p>
              <p>03 River Side Road, Badulla, Uva Province</p>
              <p className="text-[#008080] font-bold">i369.developer@gmail.com</p>
            </div>

            <button
              id="mobile-menu-inquiry-button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-4 bg-black text-white font-mono-code text-xs uppercase font-bold tracking-widest text-center hover:bg-[#FFA500] hover:text-black transition-colors rounded-none"
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </>
  );
};

