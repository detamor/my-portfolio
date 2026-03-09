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
          className="w-14 h-14 transform -rotate-90 transition-all duration-300 group-hover:scale-110"
          viewBox="0 0 64 64"
        >
          {/* Background Circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1.5"
          />
          {/* Progress Circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={175.9}
            strokeDashoffset={175.9 - (175.9 * scrollProgress) / 100}
            className="transition-all duration-300 ease-out"
          />
        </svg>

        {/* Button */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 m-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 flex items-center justify-center group/btn"
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={18}
            className="text-indigo-400 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;