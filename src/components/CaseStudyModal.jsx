import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Database, Workflow, Shield, Layout, Server, Cpu, Users, Zap, Key } from "lucide-react";

const CaseStudyModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal Content */}
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
                  <div className="px-2 py-0.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-[8px] font-mono text-indigo-300 uppercase tracking-widest">Enterprise Secured</div>
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
              
              {/* Architecture Section - Multi-Module Ecosystem */}
              <section className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                      <Cpu size={24} className="text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-light">Integrated Enterprise Ecosystem</h3>
                  </div>
                  <p className="text-zinc-400 font-light leading-relaxed text-lg">
                    The platform is architected as a centralized ERP designed to integrate fragmented operational modules into a unified ecosystem. The "Hub & Spoke" model ensures that shared services like HRIS and Finance feed into specialized vertical modules like MusicOps.
                  </p>
                  <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] space-y-4">
                     <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Architecture Model</span>
                     <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                           <div className="w-10 h-10 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400">Core</div>
                        </div>
                        <div className="w-12 h-px bg-zinc-800"></div>
                        <div className="flex gap-3">
                           {['HRIS', 'MusicOps', 'Inventory', 'Finance'].map(mod => (
                             <div key={mod} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/5 text-[9px] font-mono text-zinc-400 uppercase">{mod}</div>
                           ))}
                        </div>
                     </div>
                  </div>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-12 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent)]"></div>
                   <Workflow size={48} className="text-indigo-400/20 mb-6 group-hover:scale-110 transition-transform duration-700" />
                   <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center max-w-xs">Dynamic Module Synchronization Flow</span>
                </div>
              </section>

              {/* RBAC Section - 20+ Roles */}
              <section className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="lg:order-2 space-y-8">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(52,211,153,0.1)]">
                      <Key size={24} className="text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-light">Advanced Hierarchical RBAC</h3>
                  </div>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Managed 20+ specialized roles (Producers, Editors, HR, etc.) using a granular permission matrix. Security is enforced via highly optimized middleware layers and dynamic frontend navigation rendering.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 border border-white/5 rounded-2xl bg-white/[0.02]">
                       <Users size={16} className="text-emerald-400 mb-3" />
                       <span className="text-white text-xl font-light">20+ Roles</span>
                       <span className="text-[9px] font-mono text-zinc-600 uppercase block mt-1">Granular Control</span>
                    </div>
                    <div className="p-5 border border-white/5 rounded-2xl bg-white/[0.02]">
                       <Zap size={16} className="text-emerald-400 mb-3" />
                       <span className="text-white text-xl font-light">75% Faster</span>
                       <span className="text-[9px] font-mono text-zinc-600 uppercase block mt-1">Auth Latency</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 bg-zinc-900/50 border border-white/5 rounded-3xl aspect-square md:aspect-video flex items-center justify-center relative group overflow-hidden">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.03),transparent)]"></div>
                   <div className="grid grid-cols-4 gap-2 opacity-20 group-hover:opacity-40 transition-opacity duration-700 p-8">
                      {Array.from({length: 12}).map((_, i) => (
                        <div key={i} className="w-full h-8 rounded bg-zinc-800"></div>
                      ))}
                   </div>
                   <span className="absolute text-[10px] font-mono text-zinc-500 uppercase tracking-widest">RBAC Permission Matrix (Censored)</span>
                </div>
              </section>

              {/* Core Features Integration */}
              <section className="space-y-12">
                 <div className="space-y-4">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                        <Zap size={24} className="text-amber-400" />
                      </div>
                      <h3 className="text-2xl font-light">Critical Feature Integration</h3>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Zoom API Sync",
                        desc: "Automated presence validation for morning devotionals, synchronized directly into core HR database.",
                        icon: <Server className="w-5 h-5 text-amber-400" />
                      },
                      {
                        title: "Digital Compliance",
                        desc: "Digital Signature (TTD) system for leave requests, replacing manual paper workflows with verified digital paths.",
                        icon: <Shield className="w-5 h-5 text-amber-400" />
                      },
                      {
                        title: "Real-time Hub",
                        desc: "Production status broadcasting across departments, ensuring multi-phase consistency in MusicOps.",
                        icon: <Layout className="w-5 h-5 text-amber-400" />
                      }
                    ].map((feature, i) => (
                       <div key={i} className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 transition-colors space-y-4">
                          <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                             {feature.icon}
                          </div>
                          <h4 className="text-white font-light text-lg">{feature.title}</h4>
                          <p className="text-zinc-500 text-sm font-light leading-relaxed">{feature.desc}</p>
                       </div>
                    ))}
                 </div>
              </section>

            </div>

            {/* Footer */}
            <div className="p-8 md:p-12 border-t border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest italic">System Integrity Verified — Natanael Detamor // 2026</span>
               </div>
               <div className="px-6 py-3 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                  Enterprise Grade Architecture
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
