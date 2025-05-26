import React, { useState, useEffect } from "react";
import { Download, ArrowRight, Sparkles, Code, Database } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("Data Analyst");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const texts = [
    "Data Analyst",
    "Full Stack Developer"
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto rotate text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setDisplayText(texts[(currentTextIndex + 1) % texts.length]);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [currentTextIndex, texts]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5
  }));

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      style={{ 
        minHeight: 'calc(var(--vh, 1vh) * 100)'
      }}
    >
      {/* Dynamic background with mouse interaction */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900"></div>
      
      {/* Interactive gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 25%, transparent 70%)`
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Geometric decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-white/5 rounded-full"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 border border-purple-400/10 rounded-lg rotate-45"></div>
      <div className="absolute top-1/3 right-20 w-2 h-20 bg-gradient-to-b from-blue-400/20 to-transparent"></div>

      {/* Main content - centered and slightly below */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-16">
        
 

        {/* Main heading with unique typography */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extralight tracking-tighter mb-6 leading-none">
            <span className="text-white/60 block mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent font-light">
              Natanael Detamor
            </span>
          </h1>
        </div>

        {/* Animated role with icons */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <div className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            {displayText === "Data Analyst" ? (
              <Database className="w-6 h-6 text-blue-400" />
            ) : (
              <Code className="w-6 h-6 text-purple-400" />
            )}
            <span 
              key={displayText}
              className="text-2xl md:text-3xl font-light text-white/90 animate-pulse"
            >
              {displayText}
            </span>
          </div>
        </div>

        {/* Refined description with better spacing */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Crafting digital experiences with precision and creativity.<br />
          <span className="text-gray-500">Specialized in building scalable applications that bridge functionality with beautiful design.</span>
        </p>

        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative px-10 py-4 bg-white text-black rounded-full font-medium overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <a
            href="/certificates/CV-Natanael Detamor .pdf" 
            download="CV-Natanael Detamor .pdf"
            className="group px-10 py-4 flex items-center gap-3 bg-transparent border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-white font-medium backdrop-blur-xl"
          >
            <Download size={18} className="group-hover:animate-bounce" /> 
            Download CV
          </a>
        </div>

        {/* Sophisticated stats with glassmorphism */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { number: "2+", label: "Years Experience", icon: "⏱️" },
            { number: "10+", label: "Projects Completed", icon: "🚀" },
            { number: "100%", label: "Satisfactory results guaranteed", icon: "⭐" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-light text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;