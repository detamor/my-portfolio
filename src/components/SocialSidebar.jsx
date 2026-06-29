import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: <Github size={16} />,
      url: "https://github.com/detamor",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={16} />,
      url: "https://linkedin.com/in/natanael-detamor-karo-karo",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={16} />,
      url: "mailto:natanaeldetamorkarokaro@gmail.com",
      label: "Email"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="hidden lg:flex fixed left-8 bottom-0 z-40 flex-col items-center gap-8 pb-12"
    >
      {/* Social Links */}
      <div className="flex flex-col gap-6">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-zinc-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Vertical Divider line */}
      <div className="w-px h-16 bg-zinc-800"></div>

      {/* Rotated Status Container */}
      <div className="flex items-center gap-4 py-8 select-none">
        {/* Pulsing Status Dot */}
        <div className="relative w-1.5 h-1.5 flex items-center justify-center -rotate-90">
          <div className="absolute w-2.5 h-2.5 bg-emerald-500/30 rounded-full animate-ping"></div>
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
        </div>

        {/* Text rotated 90 degrees counter-clockwise */}
        <span className="text-[8px] font-mono font-bold tracking-[0.3em] text-zinc-500 uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
          Available for new projects
        </span>
      </div>

      {/* Bottom connecting line */}
      <div className="w-px h-12 bg-gradient-to-b from-zinc-800 to-transparent"></div>
    </motion.div>
  );
};

export default SocialSidebar;
