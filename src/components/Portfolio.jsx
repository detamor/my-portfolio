import React, { useEffect, useState, useLayoutEffect } from "react";

// Import components
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set the correct viewport height variable
  useLayoutEffect(() => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateViewportHeight();
    setIsMounted(true);
    
    window.addEventListener('resize', updateViewportHeight);
    document.body.offsetHeight;
    
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle scroll-to-top button visibility with smooth threshold
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.pageYOffset > scrollThreshold);

      // Refined active section detection
      const sections = ["hero", "about", "projects", "certificates", "skills", "contact"];
      const navbarHeight = 64;
      
      let currentSection = "hero";
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset;
          
          if (window.pageYOffset >= elementTop - navbarHeight - 100) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMounted]);

  // Smooth page transitions
  useEffect(() => {
    document.body.style.opacity = '0';
    const timer = setTimeout(() => {
      document.body.style.opacity = '1';
      document.body.style.transition = 'opacity 0.3s ease-out';
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-x-hidden">
      {/* Subtle background texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Navigation */}
      <Navbar activeSection={activeSection} />
      
      {/* Main content sections */}
      <main className="relative z-10">
        <HeroSection />
        
        {/* Section dividers with subtle gradients */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>
        <AboutSection />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>
        <Projects />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>
        <Certificates />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>
        <Skills />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>
        <ContactForm />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to top with refined styling */}
      <ScrollToTop isVisible={isVisible} />

      {/* Enhanced styling */}
      <style jsx global>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.3);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(71, 85, 105, 0.5);
        }

        /* Refined text selection */
        ::selection {
          background: rgba(59, 130, 246, 0.2);
          color: inherit;
        }

        /* Prevent layout shift */
        body {
          font-feature-settings: "kern" 1;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Focus styles for accessibility */
        *:focus-visible {
          outline: 2px solid rgba(59, 130, 246, 0.6);
          outline-offset: 2px;
          border-radius: 4px;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* Enhanced mobile experience */
        @media (max-width: 768px) {
          body {
            -webkit-overflow-scrolling: touch;
          }
        }

        /* Ensure proper stacking context */
        .portfolio-mounted {
          isolation: isolate;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;