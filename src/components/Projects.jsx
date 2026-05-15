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
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center"
    >
      {/* Project Info - Left Side */}
      <div className={`space-y-10 ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-700 uppercase">{project.year}</span>
          <div className="w-10 h-px bg-zinc-900"></div>
          <span className="text-[10px] font-mono tracking-[0.4em] text-indigo-400/40 uppercase">{project.category}</span>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            {project.title}
          </h3>

          <div className="space-y-10 max-w-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-600">The Context</span>
              </div>
              <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed italic">
                "{project.hook}"
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-indigo-400/40">The Engineering</span>
              </div>
              <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed border-l border-white/10 pl-6">
                {project.solution}
              </p>

              {project.stats && (
                <div className="flex items-center gap-3 px-5 py-2 rounded-xl bg-indigo-500/5 border border-indigo-500/10 w-fit">
                  <Zap size={10} className="text-indigo-400" />
                  <span className="text-[9px] font-mono text-indigo-300 uppercase tracking-widest">{project.stats}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 pt-4">
          {project.techLogos.map((logo, i) => (
            <div key={i} className="p-4 border border-white/5 rounded-2xl bg-white/[0.01] hover:border-white/10 transition-all">
              <img src={logo} alt="tech" className="w-6 h-6 object-contain" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-10 pt-10">
          {/* Case Study Toggle */}
          {(project.isPrivate || project.id === 2) && (
            <button
              onClick={() => project.onOpenCaseStudy(project)}
              className="group/link flex items-center gap-3 text-white text-[10px] font-mono tracking-[0.4em] uppercase border-b border-white/10 pb-3 hover:border-white transition-all"
            >
              Dive into the Lab
              <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </button>
          )}

          {/* Live Link Toggle */}
          {project.demoUrl && project.demoUrl !== "#" && (
            <button
              onClick={() => window.open(project.demoUrl, '_blank')}
              className={`group/link flex items-center gap-3 text-[10px] font-mono tracking-[0.4em] uppercase border-b border-white/10 pb-3 hover:border-white transition-all ${project.isPrivate ? 'text-indigo-400/80 hover:text-indigo-400' : 'text-white'}`}
            >
              {project.isPrivate ? 'Live Website' : 'Explore Live'}
              <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
            </button>
          )}

          {/* Source Code Toggle */}
          {!project.isPrivate && project.codeUrls && project.codeUrls.length > 0 && (
            <div className="flex flex-wrap gap-6">
              {project.codeUrls.map((repo, i) => (
                <a
                  key={i}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-zinc-500 hover:text-white text-[9px] font-mono tracking-[0.3em] uppercase border-b border-white/10 pb-1 hover:border-white transition-all"
                >
                  {repo.label}
                  <Github size={12} className="group-hover/link:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          )}

          {project.isPrivate && (
            <div className="flex items-center gap-3 opacity-30 grayscale">
              <Lock size={12} className="text-zinc-500" />
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Confidential Protocol</span>
            </div>
          )}
        </div>
      </div>

      {/* Project Visual */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative group perspective-1000 ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <div className="relative aspect-[16/10] bg-zinc-950 rounded-[3rem] p-2 md:p-3 border border-white/5 overflow-hidden group-hover:border-white/10 transition-all duration-1000 shadow-2xl">
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-top object-cover transition-all duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hopemedia.id — Enterprise System",
      year: "2025 - Present",
      category: "Enterprise ERP",
      hook: "I took on the challenge of securing 20+ specialized roles in a system that never sleeps, ensuring that every session is locked tight while maintaining legacy hardware compatibility.",
      solution: "Architected using Laravel Service Layers and Vue.js. Implemented an automated Silent Token Refresh system that handles credential renewals without interrupting the user's flow.",
      techLogos: [LaravelLogo, VueLogo, MySqlLogo],
      demoUrl: "https://hopemedia.id",
      codeUrl: null,
      stats: "Advanced JWT Integrity & Silent Refresh",
      image: hopemediaDashboard,
      isPrivate: true
    },
    {
      id: 2,
      title: "PlantAI — Diagnostic Expert System",
      year: "2025 - 2026",
      category: "Hybrid AI Architecture",
      hook: "I wanted to see how far I could push real-time AI diagnostics. I decided to decouple the mathematical inference engine from the core system to achieve sub-second response times.",
      solution: "Built a FastAPI-based Inference Engine for Certainty Factor (CF) calculations, isolated from the Laravel core to ensure mathematical heavy-lifting doesn't block the UI.",
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
      title: "MusicOps — Strategic Production",
      year: "2025",
      category: "Production Automation",
      hook: "Production cycles are messy. I built this to turn a chaotic 53-week schedule into a predictable, automated workflow where leap years and deadlines are no longer a headache.",
      solution: "Engineered a Dynamic Episode Generator with T-7 deadline inheritance and a multi-tier QC system to ensure every episode meets professional broadcasting standards.",
      techLogos: [LaravelLogo, VueLogo, MySqlLogo],
      demoUrl: "https://hopemedia.id",
      codeUrl: null,
      stats: "Automated 53-Week Strategic Timeline",
      image: hopemediaMusic,
      isPrivate: true
    },
    {
      id: 4,
      title: "Portfolio — Engineering Lab",
      year: "2026",
      category: "Frontend Architecture",
      hook: "I built this space to experiment with modular architecture and micro-interactions, proving that even a personal portfolio can benefit from enterprise-grade component design.",
      solution: "Developed using React + Vite with a focus on orchestration and scalable hooks. Features a custom Case Study system for deep technical transparency.",
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
    <section id="projects" className="py-40 px-6 md:px-12 lg:px-24 bg-[#0a0c14] relative overflow-hidden">
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mb-40">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-zinc-600 font-mono text-[10px] tracking-[0.4em] uppercase block mb-6"
          >
            Engineering Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-light text-white tracking-tighter leading-none mb-10"
          >
            Turning Complexity into <br />
            <span className="text-zinc-500 italic">Elegance</span>
          </motion.h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            A documentation of my journey in building scalable, resilient systems that solve real-world operational puzzles.
          </p>
        </div>

        <div className="space-y-48">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={{ ...project, onOpenCaseStudy: handleOpenCaseStudy }}
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
