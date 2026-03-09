import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Eye, ArrowUpRight, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import playstationImage from "../assets/images/RentalPlaystation.jpg";
import menubandungImage from "../assets/images/menubandung.jpg";
import WebTopUpImage from "../assets/images/WebTopUp.jpg";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Flower Disease Expert System",
      subtitle: "AI-Powered Diagnostic System",
      description: "A comprehensive expert system designed to detect and diagnose diseases in flowers using a rule-based engine and advanced diagnostic logic.",
      longDescription: "Built with a robust PHP/Vue frontend and a specialized Python-based diagnostic engine. This system helps agricultural experts and enthusiasts identify diseases early to prevent crop loss.",
      tech: ["PHP", "Vue.js", "Python", "MySQL", "Tailwind"],
      demoUrl: "#",
      codeUrl: "https://github.com/detamor/backend_SistemPakar",
      image: playstationImage,
      category: "Full Stack",
      status: "Production",
      year: "2026",
      featured: true
    },
    {
      id: 2,
      title: "HRIS Management System",
      subtitle: "Internal Enterprise Solution",
      description: "A secure, internal Human Resource Information System built to streamline employee data management, leave applications, and HR workflows.",
      longDescription: "Features an automated leave approval process, encrypted employee records, and real-time attendance tracking designed for high-security enterprise environments.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      demoUrl: "#",
      codeUrl: "https://github.com/detamor/frontend_hci_hrd",
      image: menubandungImage,
      category: "Full Stack",
      status: "Internal Live",
      year: "2025",
      featured: true
    },
    {
      id: 3,
      title: "Music Program Workflow",
      subtitle: "Broadcasting Solution",
      description: "Specialized management system for music programs, handling scheduling, content workflows, and team collaboration for broadcasting.",
      longDescription: "Optimized for speed and reliability, this system ensures seamless music programming and coordination between different production units.",
      tech: ["Vue.js", "Laravel", "MySQL", "Vite"],
      demoUrl: "#",
      codeUrl: "https://github.com/detamor/fe_hopechannel",
      image: WebTopUpImage,
      category: "Web App",
      status: "Production Ready",
      year: "2025",
      featured: true
    },
    {
      id: 4,
      title: "PlayStation Rental Hub",
      subtitle: "Gaming Management",
      description: "Platform transforming PlayStation rental experience with booking algorithms and real-time availability tracking.",
      longDescription: "A comprehensive ecosystem featuring advanced user authentication and dynamic pricing models.",
      tech: ["Vue.js", "Node.js", "MySQL", "Laravel"],
      demoUrl: "#",
      codeUrl: "https://github.com/detamor/RentalAppPS",
      image: playstationImage,
      category: "Full Stack",
      status: "Classic",
      year: "2024",
      featured: false
    }
  ];

  const filters = ["All", "Full Stack", "E-commerce", "Web App"];
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-[#020617] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Background Branding */}
      <div className="absolute top-20 right-10 text-[12rem] font-bold text-indigo-500/[0.01] select-none pointer-events-none leading-none hidden lg:block uppercase tracking-tighter">
        PROJECTS
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-indigo-400/40 font-mono text-[10px] tracking-[0.3em] uppercase block mb-4"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8x font-light text-white tracking-tighter leading-none"
            >
              Selected <span className="text-indigo-400/80 italic">Projects</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-wrap gap-2 p-1.5 bg-indigo-950/20 border border-indigo-500/10 rounded-xl backdrop-blur-sm"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg text-[10px] font-mono tracking-widest uppercase transition-all duration-500 ${activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                  : 'text-indigo-300/40 hover:text-indigo-200 hover:bg-white/5'
                  }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-40">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
            >
              {/* Project Info */}
              <div className={`lg:col-span-12 xl:col-span-5 space-y-8 ${idx % 2 !== 0 ? 'lg:order-2 lg:text-right' : 'lg:order-1'}`}>
                <div className={`flex items-center gap-4 text-[10px] font-mono tracking-[0.2em] text-indigo-400/50 uppercase ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                  <span>{project.year}</span>
                  <span className="w-1 h-1 bg-indigo-500/20 rounded-full"></span>
                  <span>{project.category}</span>
                  {project.featured && (
                    <>
                      <span className="w-1 h-1 bg-indigo-500/20 rounded-full"></span>
                      <span className="text-indigo-200/40">Featured</span>
                    </>
                  )}
                </div>

                <div>
                  <h3 className="text-4xl md:text-6xl font-light text-white tracking-tighter mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl ml-0 mr-auto lg:mx-0">
                    {project.description}
                  </p>
                </div>

                <div className={`flex flex-wrap gap-2 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-indigo-950/20 border border-indigo-500/10 rounded-lg text-[10px] font-mono text-indigo-300/60 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center gap-8 pt-4 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-white text-[10px] font-mono tracking-widest uppercase group/link border-b border-indigo-900/50 pb-1 hover:border-white transition-colors"
                  >
                    View Project <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center gap-2 text-indigo-400/50 hover:text-white text-[10px] font-mono tracking-widest uppercase transition-colors"
                  >
                    Source Code <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Project Visual */}
              <div className={`lg:col-span-12 xl:col-span-7 relative group ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute -inset-4 border border-indigo-500/5 rounded-2xl -z-10 group-hover:scale-[1.02] transition-transform duration-1000 bg-indigo-500/[0.01]"></div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-100 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>

                  {/* Project Meta Overlay */}
                  <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-indigo-400/50 uppercase tracking-widest">Status</div>
                      <div className="text-white text-xs font-medium tracking-tight uppercase">{project.status}</div>
                    </div>
                    <div className="text-8xl font-black text-white/[0.03] select-none leading-none">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-40 text-center border-t border-indigo-950/30 pt-32"
        >
          <h4 className="text-3xl md:text-6xl font-light text-white tracking-tighter mb-8 italic">
            Next Level <span className="text-indigo-400/80 not-italic font-normal">Collaboration?</span>
          </h4>
          <p className="text-zinc-500 mb-12 max-w-xl mx-auto font-light text-lg italic">
            "Turning complex tech requirements into beautiful, scalable digital experiences that drive value."
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-6 bg-indigo-600 text-white px-12 py-6 text-[11px] font-mono tracking-[0.3em] uppercase hover:bg-indigo-500 transition-all duration-500 shadow-xl shadow-indigo-600/20"
          >
            Initiate Project <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
