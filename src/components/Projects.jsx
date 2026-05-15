import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Eye, ArrowUpRight, Calendar, ArrowRight, ExternalLink, Lock, ShieldCheck, Terminal, Zap } from "lucide-react";
import LaravelLogo from "../assets/images/Laravel.jpg";
import ReactLogo from "../assets/images/React.png";
import VueLogo from "../assets/images/Vue.png";
import MySqlLogo from "../assets/images/MySql.jpg";
import PythonLogo from "../assets/images/Pythonicon.png";
import NodeJsLogo from "../assets/images/NodeJs.png";
import spakarImage from "../assets/images/S_pakar.webp";
import hopemediaDashboard from "../assets/images/hopemedia_dashboard.webp";
import hopemediaMusic from "../assets/images/hopemedia_music.webp";
import PortoImage from "../assets/images/Porto.png";
import JSLogo from "../assets/images/JS.png";
import TailwindLogo from "../assets/images/Tailwindcss.png";
import CaseStudyModal from "./CaseStudyModal";

const ProjectCard = ({ project, idx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid lg:grid-cols-2 gap-24 items-center"
    >
      {/* Project Info - Left Side */}
      <div className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-700 uppercase">{project.year}</span>
          <div className="w-10 h-px bg-zinc-900"></div>
          <span className="text-[10px] font-mono tracking-[0.4em] text-indigo-400/40 uppercase">{project.category}</span>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-tight group-hover:text-indigo-100 transition-colors">
            {project.title}
          </h3>
          
          <div className="space-y-10 max-w-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-600">The Problem</span>
              </div>
              <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-indigo-400/40">The Solution</span>
              </div>
              <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed border-l border-white/5 pl-6">
                {project.solution}
              </p>

              {project.stats && (
                <div className="flex items-center gap-3 px-5 py-2 rounded-xl bg-white/[0.02] border border-white/5 w-fit">
                  <Zap size={10} className="text-amber-400" />
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{project.stats}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Minimal Tech Stack - Thin Borders Only */}
        <div className="flex flex-wrap gap-3 pt-4">
          {project.techLogos.map((logo, i) => (
            <div key={i} className="p-3 border border-white/5 rounded-xl hover:border-white/10 transition-all group">
              <img src={logo} alt="tech" className="w-5 h-5 object-contain opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-8 pt-10">
          {/* Main Action: Case Study or Live Simulation */}
          {(project.isPrivate || project.id === 2) ? (
            <button
              onClick={() => project.onOpenCaseStudy(project)}
              className="group/link flex items-center gap-3 text-white text-[10px] font-mono tracking-[0.4em] uppercase border-b border-white/5 pb-2 hover:border-white transition-all"
            >
              Technical Case Study
              <ArrowUpRight size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </button>
          ) : project.demoUrl && project.demoUrl !== "#" && (
            <button
              onClick={() => window.open(project.demoUrl, '_blank')}
              className="group/link flex items-center gap-3 text-white text-[10px] font-mono tracking-[0.4em] uppercase border-b border-white/5 pb-2 hover:border-white transition-all"
            >
              Live Simulation 
              <ArrowUpRight size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </button>
          )}

          {/* Secondary Action: Live Website for Private Projects */}
          {project.isPrivate && project.demoUrl && project.demoUrl !== "#" && (
            <button
              onClick={() => window.open(project.demoUrl, '_blank')}
              className="group/link flex items-center gap-3 text-indigo-400/80 hover:text-indigo-400 text-[10px] font-mono tracking-[0.4em] uppercase border-b border-white/5 pb-2 hover:border-white transition-all"
            >
              Live Website
              <ExternalLink size={12} className="group-hover/link:scale-110 transition-transform" />
            </button>
          )}

          {/* Source Code Links */}
          {!project.isPrivate && project.codeUrls && project.codeUrls.length > 0 && (
            <div className="flex flex-wrap gap-6">
              {project.codeUrls.map((repo, i) => (
                <a
                  key={i}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-zinc-500 hover:text-white text-[9px] font-mono tracking-[0.3em] uppercase border-b border-white/5 pb-1 hover:border-white transition-all"
                >
                  {repo.label}
                  <Github size={10} className="group-hover/link:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          )}

          {!project.isPrivate && !project.codeUrls && project.codeUrl && project.codeUrl !== "#" && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3 text-zinc-500 hover:text-white text-[10px] font-mono tracking-[0.4em] uppercase border-b border-white/5 pb-2 hover:border-white transition-all"
            >
              Source Code
              <Github size={12} className="group-hover/link:scale-110 transition-transform" />
            </a>
          )}

          {project.isPrivate && (
            <div className="flex items-center gap-3 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all">
              <Lock size={10} className="text-zinc-500" />
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Private Repository</span>
            </div>
          )}
        </div>
      </div>

      {/* Project Visual - Right Side */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative group perspective-1000 ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
      >
        {/* External Frame - Slim Bezel for Maximum Image Size */}
        <div className="relative aspect-[16/10] bg-zinc-900 rounded-[2rem] p-1.5 md:p-2 border border-white/5 overflow-hidden transition-all duration-1000 group-hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.7)] group-hover:border-white/10">
          
          {/* Inner Image Container - Large and immersive */}
          <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-zinc-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-top object-cover transition-all duration-1000 scale-[1.02] group-hover:scale-100"
            />
          </div>

          {/* Subtle Frame Highlight */}
          <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hopemedia.id — Enterprise Ecosystem",
      year: "2025 - Present",
      category: "ERP & Management",
      challenge: "Securing 20+ specialized roles across multiple departments while ensuring zero-downtime session management and legacy hardware integration.",
      solution: "Architected a decoupled system with Laravel (Service Layer Pattern) and Vue.js. Implemented JWT Auth with automated Silent Token Refresh via Axios Interceptors and a Role Mapping Layer for granular access.",
      techLogos: [LaravelLogo, VueLogo, MySqlLogo],
      demoUrl: "https://hopemedia.id",
      codeUrl: null,
      status: "Production Ready",
      stats: "Security: JWT Auth & Automated Silent Token Refresh Management",
      image: hopemediaDashboard,
      isPrivate: true
    },
    {
      id: 2,
      title: "PlantAI — Diagnostic Expert System",
      year: "2025 - 2026",
      category: "AI & Decoupled Architecture",
      challenge: "Processing complex diagnostic rules in real-time without compromising the performance of the core business logic or user experience.",
      solution: "Engineered a Hybrid AI approach using a FastAPI-based Inference Engine (Python) for Certainty Factor (CF) calculations, decoupled from a Laravel core.",
      techLogos: [PythonLogo, LaravelLogo, VueLogo, NodeJsLogo],
      demoUrl: null,
      status: "Research Validated",
      codeUrls: [
        { label: "Backend", url: "https://github.com/detamor/backend_SistemPakar" },
        { label: "Frontend", url: "https://github.com/detamor/frontend_SistemPakar" },
        { label: "Engine", url: "https://github.com/detamor/engine_SistemPakar" }
      ],
      image: spakarImage,
      isPrivate: false
    },
    {
      id: 3,
      title: "MusicOps — Strategic Production ERP",
      year: "2025",
      category: "Production ERP & Logic",
      challenge: "Managing a 53-week production cycle for 20+ specialized roles without manual scheduling errors or communication overhead.",
      solution: "Engineered a Dynamic Episode Generator with Leap Year handling and relative deadline inheritance (T-7 logic), coupled with a Multi-Tier QC verification architecture.",
      techLogos: [LaravelLogo, VueLogo, MySqlLogo],
      demoUrl: "https://hopemedia.id",
      codeUrl: null,
      status: "Production Ready",
      stats: "Automated 53-Week Production Cycle & Leap Year Handling",
      image: hopemediaMusic,
      isPrivate: true
    },
    {
      id: 4,
      title: "Portfolio — Engineering Lab",
      year: "2026",
      category: "Frontend Architecture",
      challenge: "Building a portfolio that doesn't just list skills, but proves engineering depth through modular architecture and advanced micro-interactions.",
      solution: "Architected using React + Vite with a focus on performance (Framer Motion orchestration) and scalable component design. Implemented a custom Case Study system for confidential project transparency.",
      techLogos: [ReactLogo, TailwindLogo, JSLogo],
      demoUrl: "https://github.com/detamor/my-portfolio",
      codeUrl: "https://github.com/detamor/my-portfolio",
      image: PortoImage,
      isPrivate: false
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0c14] relative overflow-hidden">
      {/* Editorial Background */}
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-zinc-600 font-mono text-[9px] tracking-[0.4em] uppercase block mb-4"
          >
            Engineering Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-light text-white tracking-tighter leading-none mb-6"
          >
            High-Impact <br />
            <span className="text-zinc-500 italic">Solutions</span>
          </motion.h2>
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-xl">
             A collection of engineered systems designed for stability, performance, and professional scalability.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={{...project, onOpenCaseStudy: handleOpenCaseStudy}} 
              idx={idx} 
            />
          ))}
        </div>
        
        <CaseStudyModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          project={selectedProject} 
        />
      </div>
    </section>
  );
};

export default Projects;
