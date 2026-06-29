import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Database, Workflow, Shield, Layout, Server, Cpu, Users, Zap, Key, Activity, Code2, Share2, Calendar, HardDrive, CheckCircle2, Lock, Fingerprint, FileCheck, BarChart3, TrendingUp, Search, Link2, AlertCircle } from "lucide-react";

const EnterpriseCaseStudy = () => (
  <>
    {/* Architecture Section - Decoupled Enterprise Maturity */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <Code2 size={20} className="lg:text-indigo-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">Architecture Maturity</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-base lg:text-lg">
          The ecosystem is built on a <span className="text-indigo-300">Decoupled Architecture</span> to ensure high concurrency and maintainability.
        </p>
        <div className="space-y-4">
          <div className="p-4 lg:p-6 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
            <Server className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
            <div>
              <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Backend (Laravel)</span>
              <p className="text-xs lg:text-sm text-zinc-400 font-light leading-relaxed">Implementation of <span className="text-indigo-300/80 italic">Service Layer Pattern</span> to isolate complex business logic.</p>
            </div>
          </div>
          <div className="p-4 lg:p-6 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
            <Layout className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
            <div>
              <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Frontend (Vue.js 3)</span>
              <p className="text-xs lg:text-sm text-zinc-400 font-light leading-relaxed">Utilizing <span className="text-indigo-300/80 italic">Composition API</span> for reactive dashboards.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 lg:p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent)]"></div>
        <div className="flex items-center gap-3 lg:gap-6">
          <div className="p-2 lg:p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 font-mono text-[10px] lg:text-xs">JWT Auth</div>
          <div className="w-8 lg:w-12 h-px bg-zinc-800 relative">
            <div className="absolute inset-0 bg-indigo-500/50 blur-sm"></div>
          </div>
          <div className="p-2 lg:p-4 rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-400 font-mono text-[10px] lg:text-xs text-center">Axios Interceptor</div>
        </div>
        <span className="mt-6 lg:mt-8 text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">Silent Token Refresh Flow</span>
      </div>
    </section>

    {/* KPI Discovery Engine Section - Automated Audit */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <BarChart3 size={20} className="lg:text-amber-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">KPI Discovery Engine</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-base lg:text-lg">
          An <span className="text-amber-300">Automated Audit System</span> that mines digital footprints from the production workflow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 lg:p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-3">
            <div className="flex items-center gap-2">
              <Search size={14} className="text-amber-400" />
              <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Footprint Mining</span>
            </div>
            <p className="text-[11px] lg:text-[12px] text-zinc-500 font-light leading-relaxed">Scanning activity logs for validated work footprints.</p>
          </div>
          <div className="p-4 lg:p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-amber-400" />
              <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Scoring Algorithm</span>
            </div>
            <p className="text-[11px] lg:text-[12px] text-zinc-500 font-light leading-relaxed">Balanced Speed & Quality scores with penalty logic.</p>
          </div>
        </div>
        <div className="p-4 lg:p-6 rounded-2xl border border-amber-500/10 bg-amber-500/5 space-y-3">
          <div className="font-mono text-[9px] lg:text-[11px] text-amber-200/80 italic text-center leading-relaxed">
            Performance = ( (Base_Points + Bonus_Points) / Target_Points ) * Attendance_Multiplier
          </div>
          <p className="text-[8px] lg:text-[10px] font-mono text-amber-500/60 text-center uppercase tracking-wider">
            KPI points are automatically recalculated upon QC Approval.
          </p>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 lg:p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03),transparent)]"></div>
        <div className="w-full max-w-[200px] lg:max-w-xs space-y-3">
          <div className="h-1.5 bg-zinc-800 rounded-full w-full overflow-hidden">
            <div className="h-full bg-amber-500 w-2/3"></div>
          </div>
          <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>Performance</span>
            <span>92.4%</span>
          </div>
        </div>
        <span className="mt-6 lg:mt-8 text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-4">Real-time KPI Analytics Discovery</span>
      </div>
    </section>

    {/* Legacy to Cloud Data Flow */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="lg:order-2 space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <Fingerprint size={20} className="lg:text-emerald-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">Legacy to Cloud Integration</h3>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-px bg-emerald-500/20 relative my-1 shrink-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-zinc-400 text-sm lg:text-base font-light leading-relaxed">
              <span className="text-white block font-normal mb-1">Hardware Data Parsing</span>
              Custom parsers for Solution Fingerprint .txt files, mapped dynamically to employee IDs.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-px bg-emerald-500/20 relative my-1 shrink-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-zinc-400 text-sm lg:text-base font-light leading-relaxed">
              <span className="text-white block font-normal mb-1">Digital Compliance</span>
              Leave Lifecycle with Digital Signature rendering and automated PDF generation.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:order-1 bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-6 lg:p-12">
        <FileCheck className="text-emerald-400/20 w-12 h-12 lg:w-16 lg:h-16 mb-4 group-hover:scale-110 transition-transform duration-700" />
        <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Automated PDF Workflow</span>
      </div>
    </section>

    {/* Intelligent RBAC Strategy */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Shield size={20} className="lg:text-blue-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">Intelligent RBAC Strategy</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-sm lg:text-base">
          Managing 20+ specialized roles required an <span className="text-blue-300">Intelligent Authorization Layer</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 lg:p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-2">
            <span className="text-[9px] lg:text-[10px] font-mono text-blue-400 uppercase tracking-widest block">Role Mapping Layer</span>
            <p className="text-[11px] lg:text-[12px] text-zinc-500 leading-relaxed">Normalization of variant role strings to ensure frontend access consistency.</p>
          </div>
          <div className="p-4 lg:p-6 rounded-2xl border border-blue-500/10 bg-blue-500/5 text-blue-300/80 italic font-light text-[11px] lg:text-[12px] leading-relaxed">
            "Implemented a Dynamic Bypass Flag for cross-departmental collaboration."
          </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-6 lg:p-12">
        <Users className="text-blue-400/20 w-12 h-12 lg:w-16 lg:h-16 mb-4" />
        <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-4">Session Integrity Sync</span>
      </div>
    </section>

    {/* Results & Impact */}
    <section className="py-12 border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
          <CheckCircle2 size={18} className="text-emerald-400" />
        </div>
        <h3 className="text-xl font-light text-white">Results & Impact</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">100%</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Manual Rekap Automated</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">20+</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Specialized Roles Handled</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">Zero</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Session Vulnerabilities</div>
        </div>
      </div>
    </section>
  </>
);

const MusicOpsCaseStudy = () => (
  <>
    {/* Scheduling Section - 53-Week Logic */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            <Calendar size={20} className="lg:text-violet-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">53-Week Strategic Logic</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-base lg:text-lg">
          Engineered a <span className="text-violet-300">Dynamic Episode Generator</span> that handles the complexity of 53-week production years.
        </p>
        <div className="p-4 lg:p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase">Leap Year Support</span>
            <span className="text-emerald-400 text-[9px] lg:text-[10px] font-mono uppercase">Verified</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase">Automated Inheritance</span>
            <span className="text-emerald-400 text-[9px] lg:text-[10px] font-mono uppercase">Active</span>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 lg:p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent)]"></div>
        <div className="w-full max-w-[200px] lg:max-w-xs space-y-4">
          <div className="h-1 bg-zinc-800 rounded-full w-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-3/4 bg-violet-500"></div>
          </div>
          <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>Week 01</span>
            <span>Week 53</span>
          </div>
        </div>
        <span className="mt-6 lg:mt-8 text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-4">Timeline Generator Logic</span>
      </div>
    </section>

    {/* Closed-Loop KPI Integration */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="lg:order-2 space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(52,211,153,0.1)]">
            <Zap size={20} className="lg:text-emerald-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">Closed-Loop KPI Integration</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-sm lg:text-base">
          Bridging operational tasks to performance metrics through a <span className="text-emerald-300">Workflow-Triggered KPI Engine</span>.
        </p>
        <div className="space-y-4">
          <div className="p-4 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
            <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 mt-1 shrink-0" />
            <div>
              <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Quality Gate Lock</span>
              <p className="text-[11px] lg:text-[12px] text-zinc-500 font-light leading-relaxed">KPI points are triggered only after QC validation. No points for unverified tasks.</p>
            </div>
          </div>
          <div className="p-4 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
            <Link2 className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 mt-1 shrink-0" />
            <div>
              <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Evidence-Based Gate</span>
              <p className="text-[11px] lg:text-[12px] text-zinc-500 font-light leading-relaxed">Sharing points require mandatory <span className="text-emerald-300/80">Proof of Work</span> upload.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:order-1 bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-6 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.03),transparent)]"></div>
        <Workflow size={32} className="lg:size-[48px] text-emerald-400/20 mb-6 group-hover:rotate-180 transition-transform duration-[2s]" />
        <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-4">Cycle to KPI Sync</span>
      </div>
    </section>

    {/* Hybrid Storage Section */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <HardDrive size={20} className="lg:text-amber-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">Hybrid Storage Strategy</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-sm lg:text-base">
          Overcame <span className="text-amber-300">20GB hosting constraints</span> by architecting a hybrid metadata-storage system.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 lg:p-5 border border-white/5 rounded-2xl bg-white/[0.02]">
            <span className="text-white text-lg lg:text-xl font-light">&lt; 1s</span>
            <span className="text-[8px] lg:text-[9px] font-mono text-zinc-600 uppercase block mt-1">Latency</span>
          </div>
          <div className="p-4 lg:p-5 border border-white/5 rounded-2xl bg-white/[0.02]">
            <span className="text-white text-lg lg:text-xl font-light">Scale</span>
            <span className="text-[8px] lg:text-[9px] font-mono text-zinc-600 uppercase block mt-1">Assets</span>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-6 lg:p-12">
        <Database className="text-amber-400/20 w-12 h-12 lg:w-16 lg:h-16 mb-4" />
        <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-4">Metadata Optimization</span>
      </div>
    </section>

    {/* Results & Impact */}
    <section className="py-12 border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20">
          <CheckCircle2 size={18} className="text-violet-400" />
        </div>
        <h3 className="text-xl font-light text-white">Results & Impact</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">53 Weeks</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Fully Automated Timeline</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">0%</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Leap Year Schedule Drift</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">T-7</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Automated Deadline Drift</div>
        </div>
      </div>
    </section>
  </>
);

const AICaseStudy = () => (
  <>
    {/* Architecture Section - Decoupled Hybrid AI */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <Cpu size={20} className="lg:text-blue-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">The Hybrid AI Approach</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-base lg:text-lg">
          Designed to overcome processing limitations in complex inference engines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 lg:p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-2">
            <span className="text-[9px] lg:text-[10px] font-mono text-blue-400 uppercase tracking-widest block">AI Engine (FastAPI)</span>
            <p className="text-[11px] lg:text-[12px] text-zinc-500 leading-snug">Certainty Factor processing & scalability.</p>
          </div>
          <div className="p-4 lg:p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-2">
            <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">System Core (Laravel)</span>
            <p className="text-[11px] lg:text-[12px] text-zinc-500 leading-snug">User management & Knowledge Base CRUD.</p>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 lg:p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)]"></div>
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="p-2 lg:p-4 rounded-xl border border-blue-500/30 flex items-center justify-center bg-blue-500/5">
            <span className="text-blue-400 font-mono text-[10px] lg:text-xs">FastAPI</span>
          </div>
          <Share2 className="text-zinc-600" size={16} />
          <div className="p-2 lg:p-4 rounded-xl border border-zinc-700 flex items-center justify-center bg-zinc-800">
            <span className="text-zinc-400 font-mono text-[10px] lg:text-xs">Laravel</span>
          </div>
        </div>
        <span className="mt-6 lg:mt-8 text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-4">RESTful API Sync</span>
      </div>
    </section>

    {/* Logic Section - Certainty Factor */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="lg:order-2 space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <Activity size={20} className="lg:text-emerald-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">Certainty Factor Implementation</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-sm lg:text-base">
          The system moves beyond binary answers, calculating probability through expert inputs.
        </p>
        <div className="p-4 lg:p-6 border border-emerald-500/20 rounded-2xl bg-emerald-500/5 font-mono text-[11px] lg:text-[12px] text-emerald-300 leading-relaxed italic text-center">
          CF[h,e] = MB[h,e] - MD[h,e]
        </div>
      </div>
      <div className="lg:order-1 bg-zinc-900/50 border border-white/5 rounded-3xl aspect-video flex flex-col items-center justify-center relative overflow-hidden group p-6 lg:p-12">
        <div className="w-full space-y-3 opacity-40 group-hover:opacity-60 transition-opacity">
          <div className="h-1 lg:h-2 w-3/4 bg-emerald-500/20 rounded"></div>
          <div className="h-1 lg:h-2 w-1/2 bg-emerald-500/40 rounded"></div>
        </div>
        <span className="mt-6 lg:mt-8 text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-4">Inference Flowchart</span>
      </div>
    </section>

    {/* Results & Impact */}
    <section className="py-12 border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
          <CheckCircle2 size={18} className="text-blue-400" />
        </div>
        <h3 className="text-xl font-light text-white">Results & Impact</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">&lt; 1s</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Inference Response Time</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">94%</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Diagnosis Accuracy Rate</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">Decoupled</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Inference Engine Isolation</div>
        </div>
      </div>
    </section>
  </>
);

const PortfolioCaseStudy = () => (
  <>
    {/* Architecture Section - Modular React */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <Layout size={20} className="lg:text-indigo-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-light text-white">Modular Architecture</h3>
        </div>
        <p className="text-zinc-400 font-light leading-relaxed text-base lg:text-lg">
          Built as a <span className="text-indigo-300">Modular Engineering Lab</span> rather than a static portfolio.
        </p>
        <div className="space-y-4">
          <div className="p-4 lg:p-6 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
            <Code2 className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
            <div>
              <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">State Management</span>
              <p className="text-xs lg:text-sm text-zinc-400 font-light leading-relaxed">Centralized modal orchestration using React hooks.</p>
            </div>
          </div>
          <div className="p-4 lg:p-6 border border-white/5 rounded-2xl bg-white/[0.02] flex items-start gap-4">
            <Sparkles className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
            <div>
              <span className="text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Micro-Interactions</span>
              <p className="text-xs lg:text-sm text-zinc-400 font-light leading-relaxed">Framer Motion driven orchestrations for premium feel.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 lg:p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent)]"></div>
        <Terminal size={40} className="text-zinc-800" />
        <span className="mt-6 lg:mt-8 text-[9px] lg:text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center px-4">Component Orchestration</span>
      </div>
    </section>

    {/* Results & Impact */}
    <section className="py-12 border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
          <CheckCircle2 size={18} className="text-white" />
        </div>
        <h3 className="text-xl font-light text-white">Results & Impact</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">98%</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Lighthouse Performance Score</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">0ms</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">LCP Delay</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="text-3xl font-light text-white mb-2">Zero</div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Accessibility Errors</div>
        </div>
      </div>
    </section>
  </>
);

const CaseStudyModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const renderContent = () => {
    switch (project.id) {
      case 2: return <AICaseStudy />;
      case 3: return <MusicOpsCaseStudy />;
      case 4: return <PortfolioCaseStudy />;
      default: return <EnterpriseCaseStudy />;
    }
  };

  const getStatusColor = () => {
    switch (project.id) {
      case 2: return 'border-blue-500/30 bg-blue-500/5 text-blue-300';
      case 3: return 'border-violet-500/30 bg-violet-500/5 text-violet-300';
      default: return 'border-indigo-500/30 bg-indigo-500/5 text-indigo-300';
    }
  };

  const getIndicatorColor = () => {
    switch (project.id) {
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
            className="fixed inset-x-2 top-[2%] bottom-[2%] md:inset-x-12 lg:inset-x-24 md:top-[5%] md:bottom-[5%] bg-[#0a0c14] border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] z-[101] overflow-hidden flex flex-col shadow-2xl shadow-black"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-12 border-b border-white/5 bg-white/[0.01]">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.4em] text-indigo-400 uppercase">Case Study</span>
                  <div className={`px-2 py-0.5 rounded-full border ${getStatusColor()} text-[7px] md:text-[8px] font-mono uppercase tracking-widest`}>
                    {project.status || 'Enterprise'}
                  </div>
                </div>
                <h2 className="text-lg md:text-4xl font-light text-white tracking-tight leading-tight">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-3 md:p-4 rounded-full border border-white/5 hover:bg-white/10 transition-colors group"
              >
                <X size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-16 md:space-y-24 custom-scrollbar overflow-x-hidden">
              {renderContent()}
            </div>

            {/* Footer */}
            <div className="p-6 md:p-12 border-t border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${getIndicatorColor()} animate-pulse`}></div>
                <span className="text-[8px] md:text-[10px] font-mono text-zinc-500 uppercase tracking-widest italic">
                  {project.id === 2 ? 'Academic Validity // 2026' : 'System Integrity // 2026'}
                </span>
              </div>
              <div className="px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/5 bg-white/5 text-[8px] md:text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                {project.id === 2 ? 'AI Architecture' : 'Optimized Logic'}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
