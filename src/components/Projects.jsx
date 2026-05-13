import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Eye, ArrowUpRight, Calendar, ArrowRight, ExternalLink, Lock, ShieldCheck, Terminal } from "lucide-react";
import LaravelLogo from "../assets/images/Laravel.jpg";
import ReactLogo from "../assets/images/React.png";
import VueLogo from "../assets/images/Vue.png";
import MySqlLogo from "../assets/images/MySql.jpg";
import PythonLogo from "../assets/images/Pythonicon.png";
import NodeJsLogo from "../assets/images/NodeJs.png";
import spakarImage from "../assets/images/S_pakar.webp";
import hopemediaDashboard from "../assets/images/hopemedia_dashboard.webp";
import hopemediaMusic from "../assets/images/hopemedia_music.webp";

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

        <div className="flex items-center gap-12 pt-10">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-3 text-white text-[10px] font-mono tracking-[0.4em] uppercase border-b border-white/5 pb-2 hover:border-white transition-all"
          >
            {project.isPrivate ? "Analyze Architecture" : "Live Simulation"} 
            <ArrowUpRight size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </a>
          {project.isPrivate && (
             <div className="flex items-center gap-3 opacity-60">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse"></div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Secured System</span>
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
        <div className="relative aspect-[16/10] bg-zinc-900 rounded-[2rem] overflow-hidden transition-all duration-1000 group-hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.7)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-1000 scale-[1.05] group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
          
          {/* Subtle Frame */}
          <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none group-hover:border-white/10 transition-colors"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ERP Core — Hopemedia.id",
      year: "2025 - Present",
      category: "Enterprise System",
      challenge: "Legacy production workflows were fragmented across 20+ specialized roles, causing 5-second processing delays and communication overhead.",
      solution: "Developed a centralized ERP system with role-based access control (RBAC), automated KPI tracking, and optimized database queries, reducing system-wide latency by 75%.",
      techLogos: [LaravelLogo, VueLogo, MySqlLogo],
      demoUrl: "https://hopemedia.id",
      codeUrl: "#",
      image: hopemediaDashboard,
      isPrivate: true
    },
    {
      id: 2,
      title: "Plant Disease AI Diagnostic",
      year: "2025 - 2026",
      category: "AI & Microservices",
      challenge: "Identifying plant diseases manually is slow and error-prone, requiring a system that can process complex diagnostic rules in real-time.",
      solution: "Built an AI-driven diagnostic engine using Python Experta and FastAPI, integrated with a Laravel backend. Implemented secure OTP authentication and automated PDF reporting.",
      techLogos: [PythonLogo, LaravelLogo, VueLogo, NodeJsLogo],
      demoUrl: "#",
      codeUrl: "#",
      image: spakarImage,
      isPrivate: false
    },
    {
      id: 3,
      title: "Workflow Hub — MusicOps",
      year: "2025",
      category: "Workflow Automation",
      challenge: "Asynchronous music production cycles lacked a unified tracking layer, leading to significant delays and manual status updates.",
      solution: "Architected a real-time workflow hub that propagates production status across teams, streamlining visibility and ensuring multi-phase episode deliveries.",
      techLogos: [LaravelLogo, VueLogo, MySqlLogo],
      demoUrl: "#",
      codeUrl: "#",
      image: hopemediaMusic,
      isPrivate: true
    }
  ];

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
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
