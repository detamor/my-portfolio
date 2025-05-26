import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-slate-950 via-gray-950 to-black overflow-hidden">
      {/* Dynamic background */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)`
        }}
      />

      {/* Elegant top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left: Name & Title */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light text-white mb-2 tracking-tight">
              Natanael Detamor
            </h3>
            <p className="text-gray-400 font-light tracking-wide">
              Fullstack Developer & Data Analyst
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-blue-400/60 to-transparent mt-4 mx-auto md:mx-0"></div>
          </div>

          {/* Center: Contact */}
          <div className="text-center">
            <a 
              href="mailto:natanaeldetamorkarokaro@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 text-white font-medium"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Get in Touch
            </a>
          </div>

          {/* Right: Social & Copyright */}
          <div className="text-center md:text-right space-y-4">
            <div className="flex justify-center md:justify-end gap-3">
                         
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/natanael-detamor-karo-karo-567b86318/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-blue-400"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com/detamor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-white"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/+6282162054193" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-green-400"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>


              {/* Instagram */}
              <a 
                href="https://instagram.com/nael_detamor/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-pink-400"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-xs text-gray-500 font-light tracking-wide">
              © 2025 Natanael Detamor
            </p>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:30px_30px]"></div>
      </div>
    </footer>
  );
};

export default Footer;