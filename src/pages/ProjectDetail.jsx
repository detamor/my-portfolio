import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Shield, Zap, BarChart3, Database, Workflow, Code2, ExternalLink, Lock, CheckCircle2, Sparkles, Terminal, Layout, FileCode, GitBranch, Layers } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Project Data
const projectData = {
  "hopemedia": {
    title: "Hopemedia.id — Enterprise System",
    subtitle: "Scaling workforce management for 20+ specialized roles.",
    stats: "Laravel, Vue.js, MySQL | Role: Full-Stack Architect",
    background: "Before this system existed, Hopemedia's operations relied on manual spreadsheets prone to manipulation. Data leakage between departments often occurred due to unclear authorization. I built this ecosystem to eliminate manual reporting for 52-53 episodes per year and replace it with absolute system validation.",
    engineering: [
      {
        title: "Decoupled Authentication",
        desc: "I implemented a Silent Token Refresh system using Axios Interceptors. The system rotates tokens in the background without user awareness. The result is a highly secure session with zero user interruption."
      },
      {
        title: "The KPI Discovery Engine",
        desc: "To ensure objective performance reviews, I built a Service Layer that scans digital footprints across the workflow. Validated proof is mandatory for point accrual, featuring custom logic for multi-role support."
      },
      {
        title: "RBAC Logic",
        desc: "I managed 20+ specialized roles using a Role Mapping Layer. This ensures strict data isolation while allowing dynamic access for cross-departmental collaboration when specific assignment flags are active."
      }
    ],
    architecture: [
      { path: "app/Services/Kpi/DiscoveryEngine.php", label: "Logic Engine" },
      { path: "app/Http/Middleware/SecureProtocol.php", label: "Security Layer" },
      { path: "app/Services/Auth/SilentRefreshService.php", label: "Session Manager" }
    ],
    results: [
      { label: "Manual Reporting", value: "100% Automated" },
      { label: "Session Security", value: "JWT Integrity" },
      { label: "Scalability", value: "20+ Roles" }
    ],
    kpiFlow: [
      { step: "Trigger", desc: "Submission detected via Event Listener." },
      { step: "Verify", desc: "Manual & Automated QC Gate." },
      { step: "Discovery", desc: "Service scanning for digital footprints & metadata." },
      { step: "Reward", desc: "Automated ledger entry & real-time dashboard update." }
    ]
  },
  "musicops": {
    title: "MusicOps — Strategic Production",
    subtitle: "Automating production cycles for high-output media teams.",
    stats: "Laravel, Vue.js, MySQL | Role: Backend Architect",
    background: "Production cycles are messy. I built this to turn a chaotic 53-week schedule into a predictable, automated workflow where leap years and deadlines are no longer a headache. This system ensures every episode follows a disciplined production cycle without coordination delays.",
    engineering: [
      {
        title: "Dynamic Episode Generator",
        desc: "I designed an episode generator that handles the complexity of 53-week production years. The system automatically inherits T-7 and T-9 deadlines based on the primary broadcast date."
      },
      {
        title: "Multi-Tier QC System",
        desc: "I implemented logic gates where assets must pass through sequential validation before the next production phase is unlocked. This guarantees zero-error output for professional broadcasting."
      }
    ],
    architecture: [
      { path: "app/Services/Production/TimelineGenerator.php", label: "Schedule Logic" },
      { path: "app/Models/Episode.php", label: "Data Schema" }
    ],
    results: [
      { label: "Timeline", value: "53-Week Logic" },
      { label: "Deadlines", value: "T-7 Automated" },
      { label: "Errors", value: "Zero Schedule Drift" }
    ]
  },
  "plantai": {
    title: "PlantAI — Diagnostic Expert System",
    subtitle: "Decoupling mathematical inference from the core application layer.",
    stats: "FastAPI, Laravel, Vue.js | Role: AI Systems Engineer",
    background: "Plant disease diagnostics are often inaccurate due to limited expert availability. I built this system to decouple the mathematical inference engine from the core application to achieve sub-second response times and high precision.",
    engineering: [
      {
        title: "FastAPI Inference Engine",
        desc: "I built a FastAPI-based inference engine for Certainty Factor (CF) calculations. This engine is isolated from the Laravel core to ensure that heavy mathematical processing does not impact UI responsiveness."
      },
      {
        title: "Certainty Factor Algorithm",
        desc: "I implemented the CF algorithm to calculate diagnostic probabilities based on user symptom inputs, providing more nuanced results than binary true/false diagnostics."
      }
    ],
    architecture: [
      { path: "engine/Inference/CertaintyFactor.py", label: "AI Logic" },
      { path: "app/Services/Ai/DiagnosticBridge.php", label: "API Bridge" }
    ],
    results: [
      { label: "Response Time", value: "< 1s" },
      { label: "Accuracy", value: "94% CF Rate" },
      { label: "Architecture", value: "Decoupled AI" }
    ]
  },
  "portfolio": {
    title: "Portfolio — Engineering Lab",
    subtitle: "Architecting a high-fidelity gallery with modular React components.",
    stats: "React, Vite, Framer Motion | Role: Frontend Architect",
    background: "I built this space as an experimental lab for modular architecture and micro-interactions, proving that even a personal portfolio deserves enterprise-grade design standards.",
    engineering: [
      {
        title: "Modular React Architecture",
        desc: "I engineered this system with a focus on component orchestration and scalable custom hooks. Every element is designed to be reusable and context-aware."
      },
      {
        title: "Deep Navigation Strategy",
        desc: "I utilized React Router to create seamless transitions between high-level overview perspectives and technical deep-dives into each project's engineering laboratory."
      }
    ],
    architecture: [
      { path: "src/pages/ProjectDetail.jsx", label: "Dynamic Router" },
      { path: "src/components/Projects.jsx", label: "Component Orchestrator" }
    ],
    results: [
      { label: "Performance", value: "98% Lighthouse" },
      { label: "Interactions", value: "Framer Motion" },
      { label: "Structure", value: "Modular Design" }
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId] || projectData["hopemedia"]; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 font-jakarta">
      <Navbar />

      <main className="pt-40">
        {/* Header Section - Negative Space focus */}
        <section className="px-6 md:px-12 lg:px-24 mb-40 md:mb-60">
          <div className="container mx-auto max-w-7xl">
            <Link 
              to="/" 
              className="group inline-flex items-center gap-4 text-zinc-600 hover:text-white transition-all mb-16 md:mb-20 text-[10px] font-mono tracking-widest uppercase"
            >
              <div className="w-8 h-px bg-zinc-800 group-hover:w-12 transition-all"></div>
              Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-7xl font-light tracking-tighter leading-none mb-10 md:mb-12">
                {project.title.split('—')[0]} <br />
                <span className="text-zinc-600 italic">{project.title.split('—')[1]}</span>
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 mt-12 md:mt-20">
                <p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl leading-relaxed">
                  {project.subtitle}
                </p>
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] border-l border-zinc-800 pl-8">
                  {project.stats}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Bar - Borderless transition */}
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#050505]">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-32">
              {project.results.map((res, i) => (
                <div key={i} className="space-y-3 md:space-y-4">
                  <div className="text-zinc-700 font-mono text-[9px] uppercase tracking-[0.4em]">{res.label}</div>
                  <div className="text-2xl md:text-4xl font-light text-white tracking-tight">{res.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Background - The Pain Point */}
        <section className="px-6 md:px-12 lg:px-24 py-40 md:py-60 bg-black">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 md:gap-20 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-40">
                <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.5em] block mb-6 md:mb-8">The Context</span>
                <h2 className="text-3xl md:text-4xl font-light text-white tracking-tighter leading-tight">The <span className="italic text-zinc-500">Pain Point</span></h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic border-l border-indigo-500/10 pl-8 md:pl-20">
                  "{project.background}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Architecture Section - Abstracted Evidence */}
        <section className="px-6 md:px-12 lg:px-24 py-40 md:py-60 bg-[#050505]">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 md:gap-20 items-start">
              <div className="lg:col-span-4">
                 <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.5em] block mb-6 md:mb-8">Evidence</span>
                 <h2 className="text-3xl md:text-4xl font-light text-white tracking-tighter leading-tight">The Code <br /><span className="italic text-zinc-500">Architecture</span></h2>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.architecture.map((file, i) => (
                  <div key={i} className="p-6 md:p-8 rounded-3xl bg-black/50 border border-white/[0.03] hover:border-indigo-500/20 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <FileCode size={16} className="text-zinc-700 group-hover:text-indigo-500 transition-colors" />
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{file.label}</span>
                    </div>
                    <div className="text-xs font-mono text-zinc-400 tracking-tight">{file.path}</div>
                  </div>
                ))}
                <div className="md:col-span-2 p-6 md:p-8 rounded-3xl border border-dashed border-white/5 flex items-center gap-6">
                   <Layers className="text-zinc-800" size={24} />
                   <p className="text-sm text-zinc-600 font-light italic">Adhering to SOLID principles and Service Layer pattern for absolute maintainability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Section - Peter Shaan Borderless Style */}
        <section className="px-6 md:px-12 lg:px-24 py-40 md:py-60 bg-black">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-24 md:mb-40">
              <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.5em] block mb-6 md:mb-8">Technical Execution</span>
              <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter">The Engineering</h2>
            </div>

            <div className="space-y-40 md:space-y-60">
              {project.engineering.map((item, idx) => (
                <div key={idx} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
                  <div className="absolute -left-12 md:-left-32 top-0 text-7xl md:text-[12rem] font-light text-white/[0.02] font-mono select-none pointer-events-none">
                    0{idx + 1}
                  </div>
                  <div className="lg:col-span-5 relative z-10 pt-16 md:pt-24">
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-6 md:mb-8 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                  <div className="lg:col-span-7 bg-[#050505] rounded-[2.5rem] md:rounded-[3rem] p-12 md:p-24 aspect-video flex items-center justify-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent)]"></div>
                     <Terminal size={60} className="text-zinc-900 group-hover:text-indigo-500/10 transition-all duration-1000" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Logic - Refined terminology */}
        {project.kpiFlow && (
          <section className="px-6 md:px-12 lg:px-24 py-40 md:py-60 bg-[#050505]">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-24 md:mb-40 text-center">
                <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.5em] block mb-6 md:mb-8">System Integrity</span>
                <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter">KPI Discovery Cycle</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                {project.kpiFlow.map((step, idx) => (
                  <div key={idx} className="relative p-8 md:p-12 bg-black border border-white/[0.03] rounded-[2rem] md:rounded-[2.5rem] hover:border-indigo-500/10 transition-all duration-700">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-2 h-2 rounded-full bg-indigo-500/30"></div>
                       <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{step.step}</span>
                    </div>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                    {idx < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-zinc-900 z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Action Button Bottom */}
        <section className="px-6 md:px-12 lg:px-24 py-60 md:py-80 bg-black border-t border-white/[0.03]">
          <div className="container mx-auto max-w-7xl text-center">
             <Link 
              to="/" 
              className="group relative inline-flex flex-col items-center gap-8 md:gap-12"
            >
              <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em] group-hover:text-zinc-400 transition-colors">Return to Architecture</span>
              <h3 className="text-4xl md:text-8xl font-light text-zinc-800 group-hover:text-white transition-all tracking-tighter duration-1000">
                Back to Lab <span className="italic text-zinc-900 group-hover:text-zinc-600 transition-all duration-1000">.</span>
              </h3>
              <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-zinc-800 to-transparent group-hover:via-white transition-all duration-1000"></div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 md:px-12 lg:px-24 bg-black border-t border-white/[0.03]">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.4em]">
            Natanael Detamor © 2026
          </div>
          <div className="flex gap-12">
            {["GitHub", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-[10px] font-mono text-zinc-800 hover:text-white uppercase tracking-widest transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
