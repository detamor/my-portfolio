import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
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
import GithubLogo from "../assets/images/Github.png";
import ecommerceImage from "../assets/images/WebTopUp.jpg";
import yapiMedanImage from "../assets/images/RentalPlaystation.jpg";

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
          <Link
            to={`/projects/${project.slug}`}
            className="group/link flex items-center gap-3 text-white text-[10px] font-mono tracking-[0.4em] uppercase border-b border-white/10 pb-3 hover:border-white transition-all"
          >
            View Project Details
            <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </Link>

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
      slug: "ecommerce",
      title: "Scalable E-Commerce Backend",
      year: "2026",
      category: "Go Microservices",
      hook: "I built a containerized 6-service microservices backend in Go to explore production-grade database migrations, retry dynamics, and fault-tolerance.",
      solution: "Developed custom SQL migrations, exponential backoff retries, stateful circuit breakers, mock unit tests, and GitHub Actions CI/CD pipelines.",
      techLogos: [NodeJsLogo, MySqlLogo, GithubLogo],
      demoUrl: "https://github.com/detamor/Scalable-E-CommercePlatform",
      codeUrls: [{ label: "Repository", url: "https://github.com/detamor/Scalable-E-CommercePlatform" }],
      stats: "6 Go Microservices & Circuit Breaker",
      image: ecommerceImage,
      isPrivate: false
    },
    {
      id: 2,
      slug: "hopemedia",
      title: "Hopemedia.id — Enterprise ERP",
      year: "Jun 2025 - May 2026",
      category: "Enterprise ERP",
      hook: "I designed and built this end-to-end ERP from scratch to replace fully manual, paper-based workflows for 32 employees across 22 roles.",
      solution: "Architected using Laravel Service Layers and Vue.js. Developed an 18-phase broadcast production workflow, fingerprint raw data ingestion automation, Zoom API tracker, and a triple-tier approval HRIS.",
      techLogos: [LaravelLogo, VueLogo, MySqlLogo],
      demoUrl: "https://hopemedia.id",
      codeUrl: null,
      stats: "18-Phase Workflow & Automated HRIS",
      image: hopemediaDashboard,
      isPrivate: true
    },
    {
      id: 3,
      slug: "yapimedan",
      title: "YAPI Medan — Donation Frontend",
      year: "2025 - Present",
      category: "React & TypeScript",
      hook: "Developing a responsive donation and social-platform frontend to manage social programs and multi-method donation gateways.",
      solution: "Built in React 18 and TypeScript, using TanStack Query for caching, Axios for client requests, and React Router for view transitions.",
      techLogos: [ReactLogo, TailwindLogo, JSLogo],
      demoUrl: "https://github.com/detamor/YapiFe",
      codeUrls: [{ label: "Repository", url: "https://github.com/detamor/YapiFe" }],
      stats: "React 18, TypeScript & TanStack Query",
      image: yapiMedanImage,
      isPrivate: false
    },
    {
      id: 4,
      slug: "plantai",
      title: "Plant Disease Diagnosis — Expert System",
      year: "Nov 2025 - Apr 2026",
      category: "Microservice AI Engine",
      hook: "I wanted to build a high-precision diagnostic system. I designed a 3-service decoupled architecture to keep heavy mathematical logic away from the UI.",
      solution: "Built FastAPI diagnostic engine using Forward Chaining + Certainty Factor (50% threshold) symptom questionnaires, integrated with Laravel core, OTP auth, and admin knowledge base.",
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
      id: 5,
      slug: "portfolio",
      title: "Portfolio — Engineering Lab",
      year: "2025 - Present",
      category: "React & Framer Motion",
      hook: "Built a personal performance-focused portfolio with interactive UI details to present project architectures in recruiter-friendly layouts.",
      solution: "Engineered React components using Vite and Framer Motion, utilizing 3D perspective transforms and responsive glassmorphism containers.",
      techLogos: [ReactLogo, TailwindLogo, JSLogo],
      demoUrl: "https://github.com/detamor/my-portfolio",
      codeUrls: [{ label: "Repository", url: "https://github.com/detamor/my-portfolio" }],
      stats: "React 18, Vite & Framer Motion",
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
            Engineering Lab
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-light text-white tracking-tighter leading-none mb-8"
          >
            Featured <span className="text-zinc-500 italic">Projects</span>
          </motion.h2>
          <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed max-w-xl">
            A collection of systems and technical solutions I've built to solve real-world problems.
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
