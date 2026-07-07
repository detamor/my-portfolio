import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Brain, ArrowRight, Cpu, Layout, Terminal } from "lucide-react";
import ReactLogo from '../assets/images/React.png';
import VueLogo from '../assets/images/Vue.png';
import TailwindcssLogo from '../assets/images/Tailwindcss.png';
import JSLogo from '../assets/images/JS.png';
import MySqlLogo from '../assets/images/MySql.jpg';
import PHPLogo from '../assets/images/PHP.png';
import LaravelLogo from '../assets/images/Laravel.jpg';
import GitLogo from '../assets/images/Git.png';
import GithubLogo from '../assets/images/Github.png';
import ClaudeLogo from '../assets/images/Claude.png';
import VscodeLogo from '../assets/images/Vscode.jpg';
import SqlLogo from '../assets/images/MySql.jpg';
import PythonLogo from '../assets/images/Pythonicon.png';
import NodeJsLogo from '../assets/images/NodeJs.png';

const getTechIcon = (tech) => {
  if (tech.image) {
    return (
      <img
        src={tech.image}
        alt={tech.name}
        className="w-10 h-10 object-contain opacity-100 transition-all duration-500 group-hover:scale-110"
      />
    );
  }

  switch (tech.iconName) {
    case "golang":
      return (
        <svg className="w-10 h-10 transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.812 11.238c-.378.077-.732.184-1.042.316-.271.115-.494.271-.628.455a.925.925 0 00-.142.502c0 .484.343.896.953 1.14.549.22 1.272.33 2.052.33.65 0 1.256-.076 1.764-.213.25-.067.433-.277.46-.532a.81.81 0 00-.317-.743 6.94 6.94 0 00-1.782-.916 5.862 5.862 0 00-1.318-.339zm7.042-4.004c-1.84 0-3.272.545-4.148 1.579-.844 1.002-1.25 2.451-1.25 4.316 0 1.745.39 3.125 1.182 4.14.774.996 1.996 1.503 3.654 1.503 1.332 0 2.378-.363 3.167-.998.67-.542 1.047-1.321 1.112-2.31H9.068v-2.36h6.41c.045.362.068.742.068 1.139 0 2.08-.636 3.738-1.908 4.975-1.22 1.186-2.923 1.783-5.11 1.783-2.613 0-4.636-.838-6.07-2.513C.985 16.326.25 14.078.25 11.25c0-2.825.753-5.068 2.257-6.73 1.488-1.644 3.559-2.466 6.213-2.466 1.782 0 3.284.417 4.507 1.25.965.656 1.636 1.542 2.013 2.656.096.28.026.592-.18.802-.24.24-.609.288-.901.127a5.556 5.556 0 00-2.559-.763 6.012 6.012 0 00-2.747.36zm11.272.766c-.33 0-.623.13-.88.39a1.2 1.2 0 00-.387.882c0 .343.13.639.387.89.257.25.55.376.88.376.342 0 .638-.125.889-.376.251-.25.376-.547.376-.89 0-.342-.125-.636-.376-.882a1.216 1.216 0 00-.889-.39zm0 4.195c-.33 0-.623.13-.88.39a1.2 1.2 0 00-.387.882c0 .342.13.638.387.888.257.251.55.377.88.377.342 0 .638-.126.889-.377.251-.25.376-.546.376-.888 0-.342-.125-.636-.376-.882a1.216 1.216 0 00-.889-.39z" fill="#00ADD8"/>
        </svg>
      );
    case "mongodb":
      return (
        <svg className="w-10 h-10 transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.15 10.12c-.78-2.93-2.73-5.29-4.32-7.14-.37-.43-.99-.43-1.36 0-1.59 1.85-3.54 4.21-4.32 7.14-.88 3.32-.23 6.35 1.7 8.35.34.35.79.57 1.28.62v2.24c0 .61.49 1.1 1.1 1.1s1.1-.49 1.1-1.1v-2.24c.49-.05.94-.27 1.28-.62 1.93-2 2.58-5.03 1.7-8.35zm-5.15 7.02c-.93 0-1.69-.76-1.69-1.69s.76-1.69 1.69-1.69 1.69.76 1.69 1.69-.76 1.69-1.69 1.69z" fill="#47A248"/>
        </svg>
      );
    case "docker":
      return (
        <svg className="w-10 h-10 transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.983 8.878h-2.15v2.148h2.15V8.878zm-2.735 0h-2.15v2.148h2.15V8.878zm-2.73 0h-2.15v2.148h2.15V8.878zm-2.73 0h-2.15v2.148h2.15V8.878zm2.73-2.73h-2.15v2.15h2.15v-2.15zm2.73 0h-2.15v2.15h2.15v-2.15zm2.735 0h-2.15v2.15h2.15v-2.15zm2.73 2.73h-2.15v2.148h2.15V8.878zm2.735 0h-2.15v2.148h2.15V8.878zM23.99 12.01c-.115-.02-.455-.078-.962-.078-1.572 0-2.825.962-2.825 2.502h2.825V12.01zM12.983 14.5c0 .324-.035.636-.1.936H2.607a7.7 7.7 0 001.077 3.32c1.233 1.83 3.385 2.744 6.398 2.744 5.922 0 9.873-4.148 9.873-7h-7v.002z" fill="#2496ED"/>
        </svg>
      );
    case "redis":
      return (
        <svg className="w-10 h-10 transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("fullstack");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: "fullstack",
      name: "Full Stack",
      icon: <Code className="w-5 h-5" />,
      description: "Complete web application development from frontend to backend",
      techs: [
        { name: "React.js", image: ReactLogo, focus: true },
        { name: "Vue.js", image: VueLogo, focus: true },
        { name: "Go (Golang)", iconName: "golang", focus: true },
        { name: "Laravel (PHP)", image: LaravelLogo, focus: true },
        { name: "Node.js (Express)", image: NodeJsLogo },
        { name: "MySQL / MariaDB", image: MySqlLogo, focus: true },
        { name: "MongoDB / Postgres", iconName: "mongodb" },
        { name: "Tailwind CSS", image: TailwindcssLogo }
      ],
    },
    {
      id: "backend",
      name: "Backend & Systems",
      icon: <Cpu className="w-5 h-5" />,
      description: "Server-side logic, Scalable API, and Database Architecture",
      techs: [
        { name: "Go (Gin / GORM)", iconName: "golang", focus: true },
        { name: "Node.js (Express)", image: NodeJsLogo, focus: true },
        { name: "Laravel (PHP)", image: LaravelLogo },
        { name: "FastAPI (Python)", image: PythonLogo },
        { name: "MySQL / MariaDB (Primary)", image: MySqlLogo, focus: true },
        { name: "MongoDB / Postgres", iconName: "mongodb" },
        { name: "Redis & RabbitMQ", iconName: "redis" }
      ],
    },
    {
      id: "tools",
      name: "DevOps & Practices",
      icon: <Brain className="w-5 h-5" />,
      description: "Development with modern tooling and workflow integrations",
      techs: [
        { name: "Docker / Compose", iconName: "docker" },
        { name: "GitHub Actions (CI/CD)", image: GithubLogo, focus: true },
        { name: "Git Version Control", image: GitLogo },
        { name: "JWT & Cryptography", image: JSLogo },
        { name: "API Security & Helmet", image: JSLogo },
        { name: "Unit Testing / PHPUnit", image: JSLogo }
      ],
    },
  ];

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#0a0c14]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Editorial Background Element */}
      <div className="absolute top-20 right-20 text-[10rem] font-bold text-indigo-500/[0.01] select-none pointer-events-none hidden lg:block leading-none uppercase tracking-tighter">
        STACK
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-zinc-700 font-mono text-[9px] tracking-[0.3em] uppercase block mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl font-light text-white tracking-tighter leading-[1] mb-8"
          >
            Technical <br />
            <span className="text-zinc-500 italic font-light">Strengths</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-500 text-base md:text-lg font-light leading-relaxed max-w-xl"
          >
            A high-fidelity tech stack optimized for performance, scalability, and clean system architecture.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-16">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2.5 rounded-full border transition-all duration-500 text-[10px] font-mono tracking-widest uppercase
                ${activeTab === category.id
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-white/[0.02] border-white/5 text-zinc-600 hover:text-zinc-300"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {activeCategory.techs.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="group relative"
              >
                <div className={`relative h-full bg-white/[0.01] border border-white/5 rounded-xl p-6 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02] overflow-hidden`}>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-4">
                      {getTechIcon(tech)}
                    </div>

                    <h3 className="text-zinc-300 font-medium text-base tracking-tight mb-3">
                      {tech.name}
                    </h3>

                    {tech.focus && (
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-indigo-500/5 border border-indigo-500/10 rounded-full mb-4">
                        <span className="text-[7px] font-mono text-indigo-400/60 tracking-[0.2em] uppercase">Core Strength</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;