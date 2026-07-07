import React from "react";
import { motion } from "framer-motion";
import { Phone, Instagram, Linkedin, Github } from "lucide-react";

const Social = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <Phone className="w-5 h-5" />,
      url: "https://wa.me/6281376485766",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/nael_detamor/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/natanael-detamor-karo-karo-567b86318/",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/detamor",
    },
  ];

  return (
    <div className="space-y-3 sm:space-y-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-4 p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
        >
          <div className="p-2 bg-white/5 rounded-lg">{link.icon}</div>
          <span className="text-sm sm:text-base">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default Social;