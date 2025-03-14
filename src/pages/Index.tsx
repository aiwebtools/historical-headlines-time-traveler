
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LegalDisclaimer from '../components/LegalDisclaimer';
import Footer from '../components/Footer';
import DisclaimerModal from '../components/DisclaimerModal';

const Index = () => {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenHistoricalHeadlinesDisclaimer');
    
    if (!hasSeenDisclaimer) {
      // Show disclaimer after a short delay
      const timer = setTimeout(() => {
        setIsDisclaimerOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseDisclaimer = () => {
    setIsDisclaimerOpen(false);
    // Set flag in localStorage so we don't show the disclaimer again
    localStorage.setItem('hasSeenHistoricalHeadlinesDisclaimer', 'true');
  };

  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <LegalDisclaimer />
      </main>
      
      <Footer />
      
      <DisclaimerModal 
        isOpen={isDisclaimerOpen}
        onClose={handleCloseDisclaimer}
      />
    </div>
  );
};

export default Index;
