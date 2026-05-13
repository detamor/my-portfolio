import React, { useState, useEffect } from "react";
import { Download, ArrowRight, Github, Linkedin, Mail, MousePointer2 } from "lucide-react";
import AnalogClock from "./AnalogClock";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#020617]"></div>

      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Subtle mouse-follow light */}
      <div
        className="absolute inset-0 opacity-[0.1] transition-all duration-[2000ms]"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99,102,241,0.08), transparent 70%)`
        }}
      ></div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      ></div>

      {/* Desktop Analog Clock (lg+ only) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center pointer-events-none z-0">
        <div className="relative transform translate-x-12">
          <div className="absolute inset-0 -m-32 rounded-full bg-indigo-500/5 blur-3xl"></div>
          <AnalogClock />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 pt-28">
        <div className="max-w-2xl">

          {/* Status */}
          <div
            className="flex items-center gap-3 mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <div className="relative">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
            </div>
            <span className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase">Available for work</span>
          </div>

          {/* Name */}
          <div
            className="mb-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
            }}
          >
            <span className="text-indigo-400/60 font-mono text-sm tracking-[0.2em] uppercase block mb-2">Hello, I'm</span>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
              Natanael<br />Detamor
            </h1>
          </div>

          {/* Role */}
          <div
            className="mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
            }}
          >
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-light text-indigo-200/40">Web Engineer</h2>
              <div className="h-px w-12 bg-indigo-900/30"></div>
            </div>
          </div>

          {/* Bio */}
          <p
            className="text-zinc-400 text-lg md:text-xl font-light max-w-lg mb-12 leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
            }}
          >
            I build scalable web applications from <span className="text-indigo-300/80">frontend</span> to <span className="text-violet-300/80">backend</span>, turning complex problems into clean, elegant solutions.
          </p>

          {/* Actions */}
          <div
            className="flex flex-wrap items-center gap-6 mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s'
            }}
          >
            <a
              href="#contact"
              className="px-10 py-5 bg-indigo-600 text-white text-[11px] font-mono tracking-[0.2em] uppercase hover:bg-indigo-500 transition-all duration-500 shadow-lg shadow-indigo-600/20"
            >
              Let's Talk
            </a>
            <a
              href="/cv.pdf"
              className="flex items-center gap-3 text-zinc-400 hover:text-indigo-400 transition-colors duration-300 text-[11px] font-mono tracking-[0.2em] uppercase group"
            >
              <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.95s'
            }}
          >
            {[
              { number: "2+", label: "Years Coding" },
              { number: "13+", label: "Projects" },
              { number: "3", label: "Specializations" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-light text-white">{stat.number}</div>
                <div className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile Analog Clock (Visible on mobile/tablet only) */}
          <div className="mt-16 lg:hidden flex justify-center">
            <div className="relative transform scale-90">
              <div className="absolute inset-0 -m-12 rounded-full bg-white/[0.01] blur-2xl"></div>
              <AnalogClock />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-zinc-700 tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-zinc-700 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;