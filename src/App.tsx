/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, CaseStudy } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { VenturesPage } from './pages/VenturesPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryServiceType, setInquiryServiceType] = useState<string>('Tourism Marketing');

  // Handle URL hash navigation if user uses browser history / direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'services', 'work', 'ventures', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (serviceType?: string) => {
    if (serviceType) {
      setInquiryServiceType(serviceType);
    }
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-body selection:bg-[#00DFD8] selection:text-black">
      {/* Global Interactive Mouse Cursor & Ambient Glow */}
      <CustomCursor />

      {/* Persistent Navigation Header with Gothic Logo */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Page View Area */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
            onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenInquiry={(serviceType) => handleOpenInquiry(serviceType)}
          />
        )}

        {currentPage === 'work' && (
          <WorkPage
            onNavigate={handleNavigate}
            onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'ventures' && (
          <VenturesPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Persistent Cohesive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenInquiry={() => {
          setSelectedCaseStudy(null);
          handleOpenInquiry();
        }}
      />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        preselectedType={inquiryServiceType}
      />
    </div>
  );
}
