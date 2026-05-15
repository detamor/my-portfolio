import React, { useEffect, useState, useLayoutEffect } from "react";

// Import components
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Projects from "./Projects";
import Certificates from "./Certificates";
import EngineeringLogs from "./EngineeringLogs";
import Skills from "./Skills";
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

    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.pageYOffset > scrollThreshold);

      const sections = ["hero", "about", "projects", "certificates", "notes", "skills"];
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
    <div className="min-h-screen bg-[#0a0c14] text-white relative overflow-x-hidden selection:bg-indigo-500/30">
      {/* Subtle background texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <HeroSection />

        <div className="h-px bg-zinc-900 mx-auto max-w-7xl"></div>
        <AboutSection />

        <div className="h-px bg-zinc-900 mx-auto max-w-7xl"></div>
        <Projects />

        <div className="h-px bg-zinc-900 mx-auto max-w-7xl"></div>
        <Certificates />

        <div className="h-px bg-zinc-900 mx-auto max-w-7xl"></div>
        <EngineeringLogs />

        <div className="h-px bg-zinc-900 mx-auto max-w-7xl"></div>
        <Skills />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Portfolio;