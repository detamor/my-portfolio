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
      url: "https://www.linkedin.com/in/natanael-detamor-karo-karo-567b86318/",
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
      className="hidden lg:flex fixed left-8 bottom-0 z-40 flex-col items-center gap-6"
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

      {/* Vertical connecting line to the bottom of the screen */}
      <div className="w-px h-32 bg-gradient-to-b from-zinc-800 to-transparent"></div>
    </motion.div>
  );
};

export default SocialSidebar;
