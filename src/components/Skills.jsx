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
import SqlLogo from '../assets/images/Sql.png';

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
        { name: "React.js", level: "Advanced", image: ReactLogo },
        { name: "Vue.js", level: "Intermediate", image: VueLogo },
        { name: "Laravel", level: "Advanced", image: LaravelLogo },
        { name: "Tailwind CSS", level: "Advanced", image: TailwindcssLogo },
        { name: "JavaScript", level: "Advanced", image: JSLogo },
        { name: "PHP", level: "Intermediate", image: PHPLogo },
        { name: "MySQL", level: "Advanced", image: MySqlLogo }
      ],
    },
    {
      id: "backend",
      name: "Backend & Systems",
      icon: <Cpu className="w-5 h-5" />,
      description: "Server-side logic, Scalable API, and Database Architecture",
      techs: [
        { name: "Python", level: "Intermediate", image: VscodeLogo },
        { name: "PHP / Laravel", level: "Advanced", image: LaravelLogo },
        { name: "MySQL / Postgre", level: "Advanced", image: MySqlLogo },
        { name: "SQL", level: "Advanced", image: SqlLogo }
      ],
    },
    {
      id: "tools",
      name: "Workflow & AI",
      icon: <Brain className="w-5 h-5" />,
      description: "Development with AI-driven workflows and modern tooling",
      techs: [
        { name: "Cursor AI", level: "Advanced", image: VscodeLogo },
        { name: "Git / GitHub", level: "Advanced", image: GithubLogo },
        { name: "Claude / LLMs", level: "Advanced", image: ClaudeLogo },
        { name: "VS Code", level: "Advanced", image: VscodeLogo },
        { name: "Framer Motion", level: "Advanced", image: ReactLogo }
      ],
    },
  ];

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#020617]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Editorial Background Element */}
      <div className="absolute top-20 right-20 text-[15rem] font-bold text-indigo-500/[0.01] select-none pointer-events-none hidden lg:block leading-none uppercase tracking-tighter">
        STACK
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-indigo-400/40 font-mono text-[10px] tracking-[0.3em] uppercase block mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-light text-white tracking-tighter leading-[0.85] mb-8"
          >
            Technical <br />
            <span className="text-indigo-400/80 italic font-light">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-xl"
          >
            Comprehensive proficiency in modern web technologies and system architecture, optimized for performance and scalability.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-20">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-8 py-3 rounded-full border transition-all duration-500 text-[11px] font-mono tracking-widest uppercase
                ${activeTab === category.id
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                  : "bg-indigo-950/20 border-indigo-500/10 text-indigo-300/40 hover:text-indigo-200"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activeCategory.techs.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative"
              >
                <div className={`relative h-full bg-indigo-950/10 border border-indigo-500/5 rounded-2xl p-8 transition-all duration-700 hover:border-indigo-500/30 hover:bg-indigo-500/[0.03] overflow-hidden`}>
                  {/* Decorative Glow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/5 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all duration-700"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-16 h-16 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-white font-medium text-lg tracking-tight mb-2 group-hover:text-indigo-100 transition-colors">
                      {tech.name}
                    </h3>

                    <span className="text-[9px] font-mono text-indigo-400/40 tracking-[0.3em] uppercase mb-6">
                      {tech.level}
                    </span>

                    <div className="w-8 h-0.5 bg-indigo-900/30 rounded-full group-hover:w-full group-hover:bg-indigo-500/20 transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-indigo-950/20">
          {[
            { value: "10+", label: "Technologies" },
            { value: "2+", label: "Years Coding" },
            { value: "13+", label: "Projects" },
            { value: "02", label: "Specializations" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-light text-white tracking-tighter mb-2 italic">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-indigo-400/30 tracking-[0.3em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;