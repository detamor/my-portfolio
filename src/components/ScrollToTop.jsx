import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Progress Ring */}
      <div className="relative">
        <svg 
          className="w-16 h-16 transform -rotate-90 transition-all duration-300 group-hover:scale-110" 
          viewBox="0 0 64 64"
        >
          {/* Background Circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          {/* Progress Circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={175.9}
            strokeDashoffset={175.9 - (175.9 * scrollProgress) / 100}
            className="transition-all duration-300 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Button */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 m-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center group-hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp 
            className="w-6 h-6 text-white transition-all duration-300 group-hover:translate-y-[-2px]" 
          />
        </button>
      </div>

    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;