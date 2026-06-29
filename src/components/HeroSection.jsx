import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import LaravelLogo from "../assets/images/Laravel.jpg";
import ReactLogo from "../assets/images/React.png";
import VueLogo from "../assets/images/Vue.png";
import JSLogo from "../assets/images/JS.png";
import GithubLogo from "../assets/images/Github.png";
import TailwindLogo from "../assets/images/Tailwindcss.png";
import PythonLogo from "../assets/images/Pythonicon.png";

const HeroSection = () => {
  const cvFile = "/certificates/CV_Natanael_Detamor_FullStack_Developer.pdf";
  const particles = Array.from({ length: 15 });
  const techStack = [
    { name: "Laravel", logo: LaravelLogo, desc: "Hopemedia.id ERP" },
    { name: "Vue.js", logo: VueLogo, desc: "Hopemedia.id ERP" },
    { name: "FastAPI", logo: PythonLogo, desc: "PlantAI AI Engine" },
    { name: "React.js", logo: ReactLogo, desc: "Portfolio System" }
  ];

  const stats = [
    { value: "6 Services", label: "Go Microservices", sublabel: "E-Commerce Backend" },
    { value: "32+ Staff", label: "Workforce Served", sublabel: "via Hopemedia.id ERP" },
    { value: "18 Phases", label: "Workflow Automated", sublabel: "via Hopemedia.id ERP" },
    { value: "Jakarta", label: "Based In", sublabel: "Indonesia" }
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

      <div className="container mx-auto px-8 md:px-12 lg:px-24 relative z-10 grid lg:grid-cols-12 gap-20 items-center">
        {/* Left Column (Content) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 font-mono text-[9px] tracking-[0.4em] uppercase block mb-2"
            >
              Software Engineer // 2026
            </motion.span>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
                Natanael Detamor <span className="text-zinc-500 font-normal">Karo Karo</span>
              </h1>
              <p className="text-sm md:text-lg text-zinc-400 font-light tracking-[0.2em] uppercase">
                Full-Stack Developer (React.js & Golang)
              </p>
            </div>
          </div>

          <p className="text-zinc-500 text-sm md:text-lg max-w-xl font-light leading-relaxed">
            Full-Stack Developer with 1 year of production experience building ERP, HRIS, and AI-driven systems using Vue.js, Laravel, and MySQL, now extending the stack with React.js, Go, and the MERN stack.
          </p>

          {/* Contextual Tech Stack Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-4 p-4 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center overflow-hidden shrink-0">
                  <img src={tech.logo} alt={tech.name} className="w-6 h-6 object-contain opacity-100 transition-all duration-500 group-hover:scale-115" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-mono text-zinc-300 tracking-wider font-bold uppercase truncate">{tech.name}</span>
                  <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest leading-none truncate">{tech.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-10 pt-4">
            <a
              href="#projects"
              className="group relative px-10 py-5 bg-white text-black text-[10px] font-mono tracking-[0.3em] uppercase overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-4">
                See my work <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
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

        {/* Right Column (Impact Stats) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="lg:col-span-5 flex lg:justify-end relative w-full mt-12 lg:mt-0"
        >
          <div className="space-y-4 w-full max-w-sm">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative p-6 bg-white/[0.01] border border-white/5 rounded-2xl backdrop-blur-3xl flex items-center justify-between hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500"
              >
                <div className="space-y-1">
                  <div className="text-3xl font-light text-white tracking-tighter group-hover:text-indigo-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
                <div className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest text-right">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
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