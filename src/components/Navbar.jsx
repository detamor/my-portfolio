import React, { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About", num: "01" },
    { id: "projects", label: "Projects", num: "02" },
    { id: "certificates", label: "Certificates", num: "03" },
    { id: "skills", label: "Skills", num: "04" },
    { id: "contact", label: "Contact", num: "05" }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3E%3Crect width='512' height='512' fill='%23000'/%3E%3Ctext x='256' y='340' text-anchor='middle' fill='white' font-size='300' font-family='Arial, sans-serif' font-weight='bold'%3END%3C/text%3E%3C/svg%3E"
                      alt="ND Logo" 
                      className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                  <h1 className="text-xl font-light tracking-wide text-white">
                    Natanael <span className="font-medium">Detamor</span>
                  </h1>
                  <div className="h-px bg-gradient-to-r from-white/60 to-transparent w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer group relative"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors duration-300">
                      {item.num}
                    </span>
                    <span className={`text-sm font-light tracking-wider transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-white' 
                        : 'text-white/70 group-hover:text-white'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-0 right-0 h-px overflow-hidden">
                    <div className={`h-full bg-white transition-all duration-500 ${
                      activeSection === item.id 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </div>
              <div className="absolute inset-0 rounded-full border border-white/20" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="p-8 border-b border-white/5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-light text-white tracking-wider">Navigation</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          {/* Menu Items */}
          <div className="py-8">
            {navItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group px-8 py-4 cursor-pointer transition-all duration-300 ${
                  activeSection === item.id ? 'bg-white/5' : 'hover:bg-white/5'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `all 0.4s ease-out ${index * 0.05}s`
                }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-mono text-white/40 w-6">
                    {item.num}
                  </span>
                  <span className={`text-base font-light tracking-wide transition-colors ${
                    activeSection === item.id ? 'text-white' : 'text-white/80 group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                </div>
                {activeSection === item.id && (
                  <div className="mt-2 ml-10 h-px bg-gradient-to-r from-white/60 to-transparent w-12" />
                )}
              </div>
            ))}
          </div>
          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-white/5">
            <div className="text-center">
              <p className="text-xs font-mono text-white/40 tracking-widest mb-2">PORTFOLIO</p>
              <p className="text-sm text-white/60 font-light">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
