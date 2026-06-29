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
        { name: "Go (Golang)", image: PHPLogo, focus: true },
        { name: "Laravel", image: LaravelLogo },
        { name: "Tailwind CSS", image: TailwindcssLogo },
        { name: "PostgreSQL / MySQL", image: MySqlLogo }
      ],
    },
    {
      id: "backend",
      name: "Backend & Systems",
      icon: <Cpu className="w-5 h-5" />,
      description: "Server-side logic, Scalable API, and Database Architecture",
      techs: [
        { name: "Go (Gin)", image: PHPLogo, focus: true },
        { name: "Laravel (PHP)", image: LaravelLogo, focus: true },
        { name: "FastAPI (Python)", image: PythonLogo },
        { name: "PostgreSQL / Redis", image: MySqlLogo },
        { name: "RabbitMQ / REST API", image: JSLogo }
      ],
    },
    {
      id: "tools",
      name: "DevOps & Practices",
      icon: <Brain className="w-5 h-5" />,
      description: "Development with modern tooling and workflow integrations",
      techs: [
        { name: "Docker / Compose", image: GitLogo, focus: true },
        { name: "GitHub Actions (CI/CD)", image: GithubLogo, focus: true },
        { name: "Nginx", image: GitLogo },
        { name: "JWT / Unit Testing", image: JSLogo }
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
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-10 h-10 object-contain opacity-100 transition-all duration-500 group-hover:scale-110"
                      />
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