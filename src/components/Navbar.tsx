import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GothicLogo } from './GothicLogo';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
};

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
    { id: 'home', label: 'Home', number: '01', accent: '#00FFFF' },
    { id: 'about', label: 'About', number: '02', accent: '#FF00FF' },
    { id: 'services', label: 'Services', number: '03', accent: '#FFFF00' },
    { id: 'ventures', label: 'Ventures', number: '04', accent: '#00FFFF' },
    { id: 'work', label: 'Our Work', number: '05', accent: '#FF00FF' },
    { id: 'contact', label: 'Contact', number: '06', accent: '#FFFF00' },
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
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-mono-code font-bold text-xs shrink-0 tracking-tight group-hover:bg-[#FFFF00] group-hover:text-black transition-colors shadow-sm">
              i369
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tighter text-lg sm:text-xl text-black group-hover:text-[#FFFF00] transition-colors">
                Imaginative 369
              </span>
              <span className="font-mono-code text-[9px] uppercase tracking-[0.25em] text-gray-500">
                Strategy to Screen · Badulla
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-semibold uppercase tracking-widest font-montserrat" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-xs uppercase font-montserrat font-medium tracking-widest transition-all duration-200 cursor-pointer ${
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

          {/* Right Action: Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
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
              className="px-3.5 py-2 min-h-[44px] flex items-center justify-center bg-black text-white text-[11px] uppercase font-montserrat font-bold tracking-wider hover:bg-[#FFFF00] hover:text-black transition-colors rounded-none touch-manipulation cursor-pointer"
            >
              Contact
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-black hover:opacity-70 focus:outline-none cursor-pointer touch-manipulation transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer with Framer Motion and Dark Theme */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu-overlay"
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden border-t border-white/10 overflow-y-auto max-h-screen overscroll-contain text-white selection:bg-[#FFFF00] selection:text-black"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col space-y-3 sm:space-y-4"
            >
              <motion.div
                variants={itemVariants}
                className="pb-3 border-b border-white/15 flex items-center justify-between"
              >
                <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-bold">
                  Index & Navigation
                </span>
                <div className="flex space-x-1.5">
                  <div className="w-2 h-4 accent-teal"></div>
                  <div className="w-2 h-4 accent-pink"></div>
                  <div className="w-2 h-4 accent-orange"></div>
                </div>
              </motion.div>

              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <motion.button
                    key={link.id}
                    variants={itemVariants}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className="flex items-center justify-between py-3 text-left group border-b border-white/10 min-h-[44px] cursor-pointer touch-manipulation transition-colors"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono-code text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {link.number}
                      </span>
                      <span
                        className={`font-montserrat text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
                          isActive
                            ? 'text-[#FFFF00] underline decoration-2 underline-offset-4'
                            : 'text-zinc-300 group-hover:text-[#FFFF00]'
                        }`}
                      >
                        {link.label}
                      </span>
                    </div>
                    {isActive ? (
                      <span
                        className="w-2.5 h-2.5 shadow-[0_0_8px_rgba(255,255,0,0.6)]"
                        style={{ backgroundColor: link.accent }}
                      />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#FFFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.35, duration: 0.4 }}
              className="pt-6 border-t border-white/15 flex flex-col gap-4 mt-6"
            >
              <div className="text-xs font-mono-code text-zinc-400 space-y-1">
                <p className="text-white font-bold tracking-wide">Imaginative 369 Studio</p>
                <p>03 River Side Road, Badulla, Uva Province</p>
                <p className="text-[#00FFFF] font-bold">i369.developer@gmail.com</p>
              </div>

              <button
                id="mobile-menu-inquiry-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-4 min-h-[48px] bg-white text-black font-montserrat text-xs uppercase font-bold tracking-widest text-center hover:bg-[#FFFF00] hover:text-black transition-colors rounded-none touch-manipulation cursor-pointer active:scale-[0.99] shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
              >
                Start Your Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

