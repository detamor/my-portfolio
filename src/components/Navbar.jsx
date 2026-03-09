import React, { useState, useEffect } from "react";
import { X, Menu, ArrowUpRight } from "lucide-react";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${scrolled
          ? 'py-3'
          : 'py-5'
        }`}>
        {/* Background bar — only visible on scroll */}
        <div className={`absolute inset-0 transition-all duration-500 ${scrolled
            ? 'bg-zinc-950/70 backdrop-blur-2xl border-b border-zinc-800/50'
            : 'bg-transparent'
          }`}></div>

        <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <div
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer group flex items-center gap-3"
            >
              {/* ND Monogram */}
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 rounded-md bg-white/[0.06] border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300"></div>
                <span className="relative text-xs font-bold tracking-tight text-zinc-400 group-hover:text-zinc-300 transition-colors">ND</span>
              </div>
              {/* Name */}
              <div className="hidden sm:block">
                <span className="text-sm font-medium text-zinc-300 tracking-wide group-hover:text-white transition-colors duration-300">
                  Natanael
                </span>
                <span className="text-sm font-light text-zinc-600 tracking-wide ml-1.5">
                  Detamor
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full text-[13px] tracking-wide transition-all duration-300 ${activeSection === item.id
                      ? 'text-white bg-white/[0.07]'
                      : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"></div>
                  )}
                </button>
              ))}

              {/* CTA button */}
              <div className="ml-4 pl-4 border-l border-zinc-800">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group flex items-center gap-1.5 px-4 py-2 text-[13px] text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-full transition-all duration-300"
                >
                  Hire Me
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-md border border-zinc-800 hover:bg-white/5 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 text-zinc-400" />
              ) : (
                <Menu className="w-4 h-4 text-zinc-400" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'
        }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-zinc-950 border-l border-zinc-800/50 transform transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800/50">
            <span className="text-[11px] font-mono text-zinc-600 tracking-[0.2em] uppercase">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-7 h-7 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <X className="w-3.5 h-3.5 text-zinc-500" />
            </button>
          </div>

          {/* Items */}
          <div className="py-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-6 py-3.5 transition-all duration-300 ${activeSection === item.id
                    ? 'bg-white/[0.04] text-white'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]'
                  }`}
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(16px)',
                  transition: `all 0.4s ease-out ${index * 0.06}s`
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm tracking-wide">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-zinc-800/50">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm text-zinc-400 border border-zinc-800 rounded-lg hover:border-zinc-700 hover:text-zinc-300 transition-all duration-300"
            >
              Let's Work Together
              <ArrowUpRight size={14} />
            </button>
            <p className="text-center text-[10px] font-mono text-zinc-700 tracking-widest mt-4">
              FULL STACK DEVELOPER
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
