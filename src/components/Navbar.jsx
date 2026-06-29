import React, { useState, useEffect } from "react";
import { X, Menu, Github, Linkedin, ShieldCheck } from "lucide-react";
import waLogo from "../assets/images/wa.webp";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "01. Profile" },
    { id: "projects", label: "02. Projects" },
    { id: "skills", label: "03. Stack" },
    { id: "certificates", label: "04. Certificates" }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${scrolled ? 'py-4' : 'py-8'}`}>
        {/* Glass Bar */}
        <div className={`absolute inset-x-8 top-0 h-full transition-all duration-700 ${scrolled
          ? 'bg-[#020617]/40 backdrop-blur-3xl border-b border-white/[0.05] opacity-100'
          : 'bg-transparent opacity-0'
          }`}></div>

        <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <div className="flex justify-between items-center">

            {/* Logo: Technical & Minimal */}
            <div
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer group flex items-center gap-4"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-indigo-500/50 transition-all duration-500 rotate-45 group-hover:rotate-90"></div>
                <span className="relative text-[10px] font-mono font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">ND</span>
              </div>
              <div className="hidden sm:block overflow-hidden">
                <div className="text-[11px] font-mono font-bold text-white tracking-[0.3em] uppercase group-hover:translate-y-0 transition-transform">
                  Natanael
                </div>
                <div className="text-[9px] font-mono text-zinc-600 tracking-[0.2em] uppercase">
                  Detamor
                </div>
              </div>
            </div>

            {/* Desktop Navigation: Mono & Spaced */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-2 text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-500 ${activeSection === item.id
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                  )}
                </button>
              ))}

              {/* Social Divider */}
              <div className="h-4 w-px bg-white/5 mx-4"></div>

              {/* Action: Secured Contact */}
              <a
                href="https://wa.me/6281376485766"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-6 py-2.5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
              >
                <img src={waLogo} alt="WA" className="w-4 h-4 object-contain grayscale group-hover:grayscale-0 transition-all" />
                <span className="text-[10px] font-mono text-zinc-300 group-hover:text-white uppercase tracking-[0.2em]">Contact</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={16} className="text-white" /> : <Menu size={16} className="text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu: Full Depth Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-[#0a0c14]/80 backdrop-blur-2xl transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-[#0a0c14] border-l border-white/[0.05] transform transition-transform duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-8 border-b border-white/[0.05]">
            <span className="text-[10px] font-mono text-zinc-600 tracking-[0.4em] uppercase">Navigation Systems</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-xl border border-white/[0.08] flex items-center justify-center hover:bg-white/5"
            >
              <X size={16} className="text-zinc-500" />
            </button>
          </div>

          <div className="p-8 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 ${activeSection === item.id ? 'bg-white/[0.03] text-white border border-white/5' : 'text-zinc-500 hover:text-zinc-300'}`}
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-[0.3em]">{item.label}</span>
                  {activeSection === item.id && <div className="w-1 h-1 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></div>}
                </div>
              </button>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-white/[0.05]">
            <a
              href="https://wa.me/6281376485766"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all duration-500 group"
            >
              <img src={waLogo} alt="WA" className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all" />
              <span className="text-[10px] font-mono text-zinc-300 group-hover:text-white uppercase tracking-[0.3em]">Initialize Secure Chat</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
