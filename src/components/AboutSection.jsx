import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/images/me.webp";
import { ArrowRight, MapPin, GraduationCap, Code2, Cpu, Layout, Sparkles, Database, Globe } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "10+", label: "Technologies" },
    { value: "01+", label: "Year Exp" },
    { value: "08+", label: "Projects" },
    { value: "3.61", label: "GPA (Informatics)" }
  ];

  const expertise = [
    {
      title: "System Architecture",
      desc: "High-concurrency & scalable micro-architectures",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Full-Stack Precision",
      desc: "Enterprise Laravel & Modern Vue/React ecosystems",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "AI Integrations",
      desc: "Implementing intelligent agents and LLM workflows",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Technical Consulting",
      desc: "Optimizing system latency and engineering workflows",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#0a0c14]">
      {/* Background Depth */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/[0.01] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Stats Bar - High Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-10 border-b border-white/5"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-xl md:text-3xl font-light text-white tracking-tighter italic mb-1">{stat.value}</div>
              <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.3em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">

          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 grayscale">
                <img
                  src={myPhoto}
                  alt="Natanael Detamor"
                  className="w-full h-auto opacity-30 group-hover:opacity-60 transition-all duration-1000"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#0a0c14] border border-white/5 p-4 rounded-xl shadow-2xl backdrop-blur-3xl">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Available</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-zinc-700 font-mono text-[9px] uppercase tracking-[0.4em] block mb-4">Personal Profile</span>
                <h2 className="text-3xl md:text-4xl font-light text-white tracking-tighter leading-[1.1] mb-8 max-w-2xl">
                  Solving Complexity with <span className="text-zinc-600 italic">Precision.</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-[500px]"
              >
                <p>
                  I'm Natanael Detamor Karo Karo. I specialize in designing and building end-to-end production systems, having architected the entire <span className="text-white font-normal">Hopemedia.id ERP</span> from scratch to replace fully manual, paper-based workflows.
                </p>
                <p>
                  My experience ranges from creating <span className="text-indigo-400/80 italic">18-phase broadcast pipelines</span> and automated fingerprint/Zoom attendance integrations to developing decoupled FastAPI diagnostic engines. I enjoy <span className="text-white">bridging the gap</span> between complex requirements and clean, performant engineering solutions.
                </p>
              </motion.div>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 border-t border-white/5">
              {[
                {
                  icon: <Layout size={18} />,
                  title: "Frontend Systems",
                  desc: "Building responsive, state-driven interfaces using Vue.js and React with modern design principles."
                },
                {
                  icon: <Database size={18} />,
                  title: "Backend Development",
                  desc: "Engineering secure APIs and complex server-side logic using Laravel, Node.js, and Golang."
                },
                {
                  icon: <Code2 size={18} />,
                  title: "Business Logic",
                  desc: "Transforming fragmented business requirements into high-fidelity technical workflows and database schemas."
                },
                {
                  icon: <Cpu size={18} />,
                  title: "AI & Automation",
                  desc: "Integrating intelligent agents and automated workflows to optimize system processing and user experience."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-white/[0.01] border border-white/5 rounded-xl transition-all duration-500 hover:border-white/10"
                >
                  <div className="text-zinc-700 group-hover:text-white transition-colors mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-medium text-base tracking-tight mb-2">{item.title}</h4>
                  <p className="text-zinc-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Experience & Education Section */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Left Column: Heading */}
            <div className="lg:col-span-4">
              <span className="text-zinc-700 font-mono text-[9px] uppercase tracking-[0.4em] block mb-4">Chronology</span>
              <h3 className="text-3xl font-light text-white tracking-tighter leading-none mb-8">
                Experience & <br />
                <span className="text-zinc-500 italic font-light">Education</span>
              </h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs">
                A chronicle of my academic foundation and professional milestones in production engineering.
              </p>
            </div>

            {/* Right Column: Timeline items */}
            <div className="lg:col-span-8 space-y-12">
              {/* Timeline Item 1: Experience */}
              <div className="relative pl-8 border-l border-white/5 space-y-4">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#0a0c14] shadow-[0_0_10px_#6366f1]"></div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block">Hope Channel Indonesia</span>
                    <h4 className="text-lg font-medium text-white tracking-tight">Full-Stack Developer (Intern & Freelance)</h4>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Jun 2025 – May 2026</span>
                </div>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Designed full system architecture of Hopemedia.id ERP from scratch based on stakeholder requirements, aligning workflows across 3 teams (Program, Broadcasting, HR).
                </p>
                <ul className="space-y-2 text-zinc-500 text-xs font-light list-disc pl-4 leading-relaxed">
                  <li>Built a fingerprint attendance system that auto-parses raw TXT exports from fingerprint machines and maps records to the correct employee.</li>
                  <li>Integrated Zoom API to automatically track Morning Reflection attendance, removing manual HR reporting steps.</li>
                  <li>Architected an 18-phase broadcast production workflow (Song Proposal → Music Arrangement → Vocal/Video Editing → Promo → QC Approval → Broadcasting) with deadline tracking and KPI scoring.</li>
                  <li>Engineered an HRIS with 3 independent approval hierarchies (HR, PM, DM) for leave requests, dynamic quotas, and auto-generated PDF leave letters.</li>
                  <li>Implemented JWT authentication with auto-logout, CSP security headers, and Google Calendar API; resolved N+1 queries.</li>
                </ul>
              </div>

              {/* Timeline Item 2: Education */}
              <div className="relative pl-8 border-l border-white/5 space-y-4">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-700 border-2 border-[#0a0c14]"></div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Universitas Advent Indonesia</span>
                    <h4 className="text-lg font-medium text-white tracking-tight">Bachelor of Informatics Engineering</h4>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Aug 2022 – Expected Jun 2026</span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-light text-zinc-400">
                  <span><strong>GPA:</strong> 3.61/4.00</span>
                  <span className="text-zinc-700">|</span>
                  <span><strong>Focus:</strong> OOP, Data Structures, DBMS, Web Dev, Cloud Computing, Artificial Intelligence, Business Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;