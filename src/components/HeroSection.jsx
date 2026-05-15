import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import LaravelLogo from "../assets/images/Laravel.jpg";
import ReactLogo from "../assets/images/React.png";
import VueLogo from "../assets/images/Vue.png";
import JSLogo from "../assets/images/JS.png";
import GithubLogo from "../assets/images/Github.png";
import TailwindLogo from "../assets/images/Tailwindcss.png";

const HeroSection = () => {
  const cvFile = "/certificates/CV-Natanael Detamor.pdf";
  const particles = Array.from({ length: 15 });
  const techStack = [
    { name: "Laravel", logo: LaravelLogo },
    { name: "React", logo: ReactLogo },
    { name: "Vue", logo: VueLogo },
    { name: "JavaScript", logo: JSLogo },
    { name: "GitHub", logo: GithubLogo },
    { name: "Tailwind", logo: TailwindLogo },
  ];

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-[#0a0c14]">
      {/* Precision Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.01)_1px,transparent_0)] bg-[length:32px_32px]"></div>
        <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-indigo-600/[0.02] blur-[150px] rounded-full"></div>
      </div>

      {/* Digital Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-10"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%"
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-24 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="mb-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 font-mono text-[9px] tracking-[0.4em] uppercase block mb-4"
            >
              Junior Software Engineer // 2026
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1] text-white mb-6">
              Natanael <br />
              <span className="text-zinc-700 italic">Detamor</span>
            </h1>
          </div>

          <p className="text-zinc-500 text-sm md:text-base font-light max-w-sm mb-12 leading-relaxed border-l border-white/5 pl-8">
            Building <span className="text-zinc-300">scalable web systems</span> with a focus on clean business logic and performance. Practical experience in ERP development and AI-driven applications.
          </p>

          <div className="flex flex-wrap items-center gap-10">
            <a
              href="#projects"
              className="group relative px-10 py-5 bg-white text-black text-[10px] font-mono tracking-[0.3em] uppercase overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-4">
                Analyze Systems <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a
              href={cvFile}
              download
              className="text-zinc-600 hover:text-white transition-all text-[10px] font-mono tracking-[0.3em] uppercase flex items-center gap-4 group"
            >
              <Download size={14} className="group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Side: Visual System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="flex lg:justify-end relative mt-12 lg:mt-0"
        >
          <div className="relative w-full lg:w-auto">
            {/* Structural Frame */}
            <div className="absolute inset-0 border border-white/[0.02] rounded-[2rem] rotate-3 scale-110 pointer-events-none"></div>

            {/* Tech Nodes Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 relative z-10 max-w-xl">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5 + idx,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full p-4 bg-white/[0.01] border border-white/5 rounded-xl backdrop-blur-3xl flex items-center gap-4 group hover:border-white/10 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center overflow-hidden shrink-0">
                    <img src={tech.logo} alt={tech.name} className="w-6 h-6 object-contain opacity-100 transition-all duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-300 tracking-widest uppercase">{tech.name}</span>
                    <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">System Node</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Connection Line */}
            <div className="absolute top-1/2 -left-20 w-20 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Background Branding */}
      <div className="absolute bottom-10 right-10 text-white/[0.01] font-mono text-[8vw] select-none pointer-events-none leading-none tracking-tighter uppercase">
        Detamor
      </div>
    </section>
  );
};

export default HeroSection;