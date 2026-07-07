import React from "react";
import { Mail, Github, Linkedin, Phone, Instagram } from "lucide-react";
import waLogo from "../assets/images/wa.webp";

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-[#0a0c14] overflow-hidden pt-32 pb-24">
      {/* Massive Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[12vw] font-black text-indigo-500/[0.01] select-none pointer-events-none tracking-tighter transition-all duration-700 leading-none uppercase">
        DETAMOR
      </div>

      {/* Mesh Gradient Background */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-0"></div>

      <div className="container mx-auto max-w-7xl px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-20">

          {/* Brand Section */}
          <div className="space-y-6 max-w-md">
            <div className="h-px w-20 bg-indigo-500/20"></div>
            <div>
              <h2 className="text-2xl font-light text-white tracking-tighter mb-2">
                Natanael <span className="text-zinc-500 italic">Detamor</span>
              </h2>
              <p className="text-zinc-600 font-mono text-[10px] tracking-[0.3em] uppercase">
                Software Engineer
              </p>
            </div>
            <p className="text-zinc-500 font-light text-sm leading-relaxed italic">
              "Building digital experiences that combine technical precision with elegant design. Available for worldwide collaborations."
            </p>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col items-start lg:items-end gap-8">
            <a
              href="mailto:natanaeldetamorkarokaro@gmail.com"
              className="group relative inline-flex items-center gap-4 text-white hover:text-indigo-400 transition-colors duration-500"
            >
              <span className="text-3xl md:text-5xl font-light tracking-tighter">Get in touch</span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <Mail className="w-4 h-4" />
              </div>
            </a>

            {/* Social Links */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              {[
                { icon: <Linkedin className="w-4 h-4" />, link: "https://www.linkedin.com/in/natanael-detamor-karo-karo-567b86318/", name: "LinkedIn" },
                { icon: <Github className="w-4 h-4" />, link: "https://github.com/detamor", name: "GitHub" },
                { icon: <img src={waLogo} alt="WA" className="w-4 h-4 object-contain" />, link: "https://wa.me/6281376485766/", name: "WhatsApp" },
                { icon: <Instagram className="w-4 h-4" />, link: "https://instagram.com/nael_detamor/", name: "Instagram" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 group/social"
                >
                  <span className="opacity-60 group-hover/social:opacity-100 transition-opacity">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <span className="text-zinc-400 text-[10px] font-mono tracking-widest uppercase">
              © 2026 Natanael Detamor
            </span>
            <div className="flex gap-8">
              <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase italic">Jakarta, INA</span>
              <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                Available for work
              </span>
            </div>
          </div>

          <div className="text-zinc-600 text-[9px] font-mono tracking-[0.2em] uppercase text-center md:text-right">
            Handcrafted with <span className="text-indigo-400 font-bold">React</span> + <span className="text-indigo-400 font-bold">Vite</span> + <span className="text-indigo-400 font-bold">Tailwind CSS</span> + <span className="text-indigo-400 font-bold">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;