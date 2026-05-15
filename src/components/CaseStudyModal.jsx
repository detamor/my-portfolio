import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Database, Workflow, Shield, Layout, Server, Cpu, Users, Zap, Key, Activity, Code2, Share2, Calendar, HardDrive, CheckCircle2, Lock, Fingerprint, FileCheck, BarChart3, TrendingUp, Search, Link2, AlertCircle } from "lucide-react";

const EnterpriseCaseStudy = () => (
  <>
    {/* Architecture Section - Decoupled Enterprise Maturity */}
    <section className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <Code2 size={24} className="text-indigo-400" />
          </div>
          <h3 className="text-2xl font-light">Architecture Maturity</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-lg">
          The ecosystem is built on a <span className="text-indigo-300">Decoupled Architecture</span> to ensure high concurrency and maintainability.
        </p>
        <div className="space-y-4">
           <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
              <Server className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Backend (Laravel)</span>
                <p className="text-sm text-zinc-400 font-light">Implementation of <span className="text-indigo-300/80 italic">Service Layer Pattern</span> to isolate complex business logic from controllers.</p>
              </div>
           </div>
           <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
              <Layout className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Frontend (Vue.js 3)</span>
                <p className="text-sm text-zinc-400 font-light">Utilizing <span className="text-indigo-300/80 italic">Composition API</span> for modular state management and reactive dashboards.</p>
              </div>
           </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent)]"></div>
         <div className="flex items-center gap-6">
            <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 font-mono text-xs">JWT Auth</div>
            <div className="w-12 h-px bg-zinc-800 relative">
               <div className="absolute inset-0 bg-indigo-500/50 blur-sm"></div>
            </div>
            <div className="p-4 rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-400 font-mono text-xs">Axios Interceptor</div>
         </div>
         <span className="mt-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">Automated Silent Token Refresh Flow</span>
      </div>
    </section>

    {/* KPI Discovery Engine Section - Automated Audit */}
    <section className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <BarChart3 size={24} className="text-amber-400" />
          </div>
          <h3 className="text-2xl font-light">KPI Discovery Engine</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-lg">
          An <span className="text-amber-300">Automated Audit System</span> that mines digital footprints from the production workflow to generate objective performance analytics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-2">
                 <Search size={14} className="text-amber-400" />
                 <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Footprint Mining</span>
              </div>
              <p className="text-[12px] text-zinc-500 font-light">Scanning activity logs (Arrangement, QC, Upload Proof) for validated work footprints.</p>
           </div>
           <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-2">
                 <TrendingUp size={14} className="text-amber-400" />
                 <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Scoring Algorithm</span>
              </div>
              <p className="text-[12px] text-zinc-500 font-light">Balanced Speed (Carbon-based diff) & Quality scores with automated penalty logic.</p>
           </div>
        </div>
        <div className="p-6 rounded-2xl border border-amber-500/10 bg-amber-500/5 space-y-4">
           <div className="font-mono text-[11px] text-amber-200/80 italic text-center">
              Formula: Performance = ( (Base_Points + Bonus_Points) / Target_Points ) * Attendance_Multiplier
           </div>
           <p className="text-[10px] font-mono text-amber-500/60 text-center uppercase tracking-wider">
              KPI points are automatically recalculated upon QC Approval to ensure data integrity.
           </p>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03),transparent)]"></div>
         <div className="w-full max-w-xs space-y-3">
            <div className="h-1.5 bg-zinc-800 rounded-full w-full overflow-hidden">
               <div className="h-full bg-amber-500 w-2/3"></div>
            </div>
            <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
               <span>Performance Scorecard</span>
               <span>92.4%</span>
            </div>
         </div>
         <span className="mt-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-8">Real-time KPI Analytics Discovery (Vue.js)</span>
      </div>
    </section>

    {/* Legacy to Cloud Data Flow */}
    <section className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="lg:order-2 space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <Fingerprint size={24} className="text-emerald-400" />
          </div>
          <h3 className="text-2xl font-light">Legacy to Cloud Integration</h3>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-px bg-emerald-500/20 relative my-1">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              <span className="text-white block font-normal mb-1">Hardware Data Parsing</span>
              Custom parsers for raw .txt files from Solution Fingerprint hardware, mapped dynamically to employee IDs.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-px bg-emerald-500/20 relative my-1">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              <span className="text-white block font-normal mb-1">Digital Compliance</span>
              End-to-End Leave Lifecycle with Digital Signature rendering and automated PDF generation.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:order-1 bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
         <FileCheck className="text-emerald-400/20 w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-700" />
         <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Automated PDF Workflow (Verified)</span>
      </div>
    </section>

    {/* Intelligent RBAC Strategy */}
    <section className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Shield size={24} className="text-blue-400" />
          </div>
          <h3 className="text-2xl font-light">Intelligent RBAC Strategy</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed">
          Managing 20+ specialized roles required an <span className="text-blue-300">Intelligent Authorization Layer</span> beyond simple role-matching.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-2">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">Role Mapping Layer</span>
              <p className="text-[12px] text-zinc-500">Normalization of variant role strings to ensure frontend access consistency.</p>
           </div>
           <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-2 text-blue-300/80 italic font-light p-4 border-blue-500/20 bg-blue-500/5">
              "Implemented a Dynamic Bypass Flag (has_any_music_assignment) for cross-departmental collaboration."
           </div>
           <div className="md:col-span-2 p-6 rounded-2xl border border-indigo-500/10 bg-indigo-500/5 space-y-3">
              <div className="flex items-center gap-3">
                <Workflow size={14} className="text-indigo-400" />
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block">Dynamic Workflow Engine (State Machine)</span>
              </div>
              <p className="text-[12px] text-zinc-400 font-light leading-relaxed">
                Implementation of <span className="text-white italic">WorkflowStateMachine</span> to manage production lifecycles. This ensures valid state transitions and prevents illegal data manipulation.
              </p>
           </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-12">
          <Users className="text-blue-400/20 w-16 h-16 mb-4" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-8">Cross-Departmental Session Integrity Sync</span>
      </div>
    </section>
  </>
);

const MusicOpsCaseStudy = () => (
  <>
    {/* Scheduling Section - 53-Week Logic */}
    <section className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            <Calendar size={24} className="text-violet-400" />
          </div>
          <h3 className="text-2xl font-light">53-Week Strategic Logic</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-lg">
          Engineered a <span className="text-violet-300">Dynamic Episode Generator</span> that handles the complexity of 53-week production years and leap years. The system automates the inheritance of relative deadlines (T-7, T-9) for each specialized role.
        </p>
        <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-4">
           <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Leap Year Support</span>
              <span className="text-emerald-400 text-[10px] font-mono uppercase">Verified</span>
           </div>
           <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Automated Inheritance</span>
              <span className="text-emerald-400 text-[10px] font-mono uppercase">Active</span>
           </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent)]"></div>
         <div className="w-full max-w-xs space-y-4">
            <div className="h-1 bg-zinc-800 rounded-full w-full relative overflow-hidden">
               <div className="absolute inset-y-0 left-0 w-3/4 bg-violet-500"></div>
            </div>
            <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
               <span>Week 01</span>
               <span>Week 53</span>
            </div>
         </div>
         <span className="mt-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">Production Timeline Generator Logic</span>
      </div>
    </section>

    {/* Closed-Loop KPI Integration */}
    <section className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="lg:order-2 space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(52,211,153,0.1)]">
            <Zap size={24} className="text-emerald-400" />
          </div>
          <h3 className="text-2xl font-light">Closed-Loop KPI Integration</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed">
          Bridging operational tasks to performance metrics through a <span className="text-emerald-300">Workflow-Triggered KPI Engine</span>. Points are never static; they are discovered through valid digital footprints.
        </p>
        <div className="space-y-4">
           <div className="p-5 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Quality Gate (QC) Lock</span>
                <p className="text-[12px] text-zinc-500 font-light">KPI points are "triggered" only after Production and QC validation. No points are granted for pending or unverified tasks.</p>
              </div>
           </div>
           <div className="p-5 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
              <Link2 className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Evidence-Based Gate</span>
                <p className="text-[12px] text-zinc-500 font-light">Sharing Works points require mandatory <span className="text-emerald-300/80">Proof of Work</span> (Links or Screenshots) before points are unlocked.</p>
              </div>
           </div>
           <div className="p-5 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Deadline Awareness</span>
                <p className="text-[12px] text-zinc-500 font-light">Automated grading based on $T-7/T-9$ logic: On-time (3pts), Late (1pt), or Penalty (-5pts).</p>
              </div>
           </div>
        </div>
      </div>
      <div className="lg:order-1 bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-12">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.03),transparent)]"></div>
         <Workflow size={48} className="text-emerald-400/20 mb-6 group-hover:rotate-180 transition-transform duration-[2s]" />
         <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-8">Production Cycle to KPI Discovery Sync</span>
      </div>
    </section>

    {/* Hybrid Storage Section */}
    <section className="grid lg:grid-cols-2 gap-16 items-start">
       <div className="space-y-8">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
              <HardDrive size={24} className="text-amber-400" />
            </div>
            <h3 className="text-2xl font-light">Hybrid Storage Strategy</h3>
          </div>
          <p className="text-zinc-400 font-light leading-relaxed">
            Overcame <span className="text-amber-300">20GB hosting constraints</span> by architecting a hybrid metadata-storage system. Heavy assets are stored on internal servers while the database maintains lightweight metadata.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-5 border border-white/5 rounded-2xl bg-white/[0.02]">
                <span className="text-white text-xl font-light">&lt; 1s</span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase block mt-1">Query Latency</span>
             </div>
             <div className="p-5 border border-white/5 rounded-2xl bg-white/[0.02]">
                <span className="text-white text-xl font-light">∞ Scalability</span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase block mt-1">Asset Strategy</span>
             </div>
          </div>
       </div>
       <div className="bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-12">
          <Database className="text-amber-400/20 w-16 h-16 mb-4" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-8">Decoupling Storage from Relational DB</span>
       </div>
    </section>
  </>
);

const AICaseStudy = () => (
  <>
    {/* Architecture Section - Decoupled Hybrid AI */}
    <section className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <Cpu size={24} className="text-blue-400" />
          </div>
          <h3 className="text-2xl font-light">The Hybrid AI Approach</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-lg">
          Designed to overcome processing limitations in complex inference engines. I implemented a <span className="text-blue-300">decoupled architecture</span> to isolate business logic from AI computational tasks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-2">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">AI Engine (FastAPI)</span>
              <p className="text-[12px] text-zinc-500 leading-snug">Mathematical Certainty Factor processing & future ML scalability.</p>
           </div>
           <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">System Core (Laravel)</span>
              <p className="text-[12px] text-zinc-500 leading-snug">User management, diagnostic history, and Knowledge Base CRUD.</p>
           </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)]"></div>
         <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl border border-blue-500/30 flex items-center justify-center bg-blue-500/5">
               <span className="text-blue-400 font-mono text-xs">FastAPI</span>
            </div>
            <Share2 className="text-zinc-600" />
            <div className="w-16 h-16 rounded-2xl border border-zinc-700 flex items-center justify-center bg-zinc-800">
               <span className="text-zinc-400 font-mono text-xs">Laravel</span>
            </div>
         </div>
         <span className="mt-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">Interservice RESTful API Sync</span>
      </div>
    </section>

    {/* Logic Section - Certainty Factor */}
    <section className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="lg:order-2 space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <Activity size={24} className="text-emerald-400" />
          </div>
          <h3 className="text-2xl font-light">Certainty Factor Implementation</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed">
          The system moves beyond binary "Yes/No" answers, calculating probability through expert-defined <span className="text-emerald-300">Measure of Belief (MB)</span> and <span className="text-emerald-300">Measure of Disbelief (MD)</span> inputs.
        </p>
        <div className="p-6 border border-emerald-500/20 rounded-2xl bg-emerald-500/5 font-mono text-[12px] text-emerald-300 leading-relaxed italic">
           CF[h,e] = MB[h,e] - MD[h,e]
           <br />
           <span className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2 block not-italic">Inference Logic Formula</span>
        </div>
      </div>
      <div className="lg:order-1 bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-12">
         <div className="w-full space-y-3 opacity-40 group-hover:opacity-60 transition-opacity">
            <div className="h-2 w-3/4 bg-emerald-500/20 rounded"></div>
            <div className="h-2 w-1/2 bg-emerald-500/40 rounded"></div>
            <div className="h-2 w-2/3 bg-emerald-500/20 rounded"></div>
         </div>
         <span className="mt-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-8">Diagnostic Inference Flowchart (Censored)</span>
      </div>
    </section>

    {/* Technical Highlights */}
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {[
         {
           title: "Dynamic Knowledge Base",
           desc: "Database schema designed to support on-the-fly rule additions without code modification.",
           icon: <Database className="w-5 h-5 text-blue-400" />
         },
         {
           title: "Asynchronous Compute",
           desc: "Calculation offloaded to Python Main Thread to ensure 100% UI responsiveness.",
           icon: <Zap className="w-5 h-5 text-blue-400" />
         },
         {
           title: "High-Fidelity UI",
           desc: "Vue.js reactive diagnostic interface for real-time inference feedback.",
           icon: <Layout className="w-5 h-5 text-blue-400" />
         }
       ].map((highlight, i) => (
          <div key={i} className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/50 space-y-4">
             <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                {highlight.icon}
             </div>
             <h4 className="text-white font-light text-lg">{highlight.title}</h4>
             <p className="text-zinc-500 text-sm font-light leading-relaxed">{highlight.desc}</p>
          </div>
       ))}
    </section>
  </>
);

const CaseStudyModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const renderContent = () => {
    switch(project.id) {
      case 2: return <AICaseStudy />;
      case 3: return <MusicOpsCaseStudy />;
      default: return <EnterpriseCaseStudy />;
    }
  };

  const getStatusColor = () => {
    switch(project.id) {
      case 2: return 'border-blue-500/30 bg-blue-500/5 text-blue-300';
      case 3: return 'border-violet-500/30 bg-violet-500/5 text-violet-300';
      default: return 'border-indigo-500/30 bg-indigo-500/5 text-indigo-300';
    }
  };

  const getIndicatorColor = () => {
    switch(project.id) {
      case 2: return 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]';
      case 3: return 'bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]';
      default: return 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-12 lg:inset-x-24 bg-[#0a0c14] border border-white/5 rounded-[2.5rem] z-[101] overflow-hidden flex flex-col shadow-2xl shadow-black"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 md:p-12 border-b border-white/5 bg-white/[0.01]">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-indigo-400 uppercase">Technical Case Study</span>
                  <div className={`px-2 py-0.5 rounded-full border ${getStatusColor()} text-[8px] font-mono uppercase tracking-widest`}>
                    {project.status || 'Enterprise Secured'}
                  </div>
                </div>
                <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">{project.title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-4 rounded-full border border-white/5 hover:bg-white/10 transition-colors group"
              >
                <X size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-24 custom-scrollbar">
              {renderContent()}
            </div>

            {/* Footer */}
            <div className="p-8 md:p-12 border-t border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${getIndicatorColor()} animate-pulse`}></div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest italic">
                    {project.id === 2 ? 'Academic Validity Confirmed // 2026' : 'System Integrity Verified // 2026'}
                  </span>
               </div>
               <div className="px-6 py-3 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                  {project.id === 2 ? 'Decoupled AI Architecture' : 'Production Logic Optimized'}
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
