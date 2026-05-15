import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Database, Workflow, Shield, Layout, Server, Cpu } from "lucide-react";

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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-12 lg:inset-x-24 bg-[#0a0c14] border border-white/5 rounded-[2rem] z-[101] overflow-hidden flex flex-col shadow-2xl shadow-black"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 md:p-12 border-b border-white/5 bg-white/[0.01]">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.4em] text-indigo-400 uppercase">Technical Case Study</span>
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
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-20 custom-scrollbar">
              
              {/* Architecture Section */}
              <section className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Cpu size={20} className="text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-light">System Architecture</h3>
                  </div>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Built on a highly modular architecture designed for high throughput and horizontal scalability. 
                    The system utilizes a decoupled backend for complex business logic processing and a reactive frontend for real-time state management.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                      <span className="text-zinc-500 text-sm font-light leading-relaxed">
                        <strong className="text-zinc-300 block mb-1">State Synchrony:</strong> 
                        Implemented real-time event broadcasting to ensure data consistency across multiple concurrent user sessions.
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                      <span className="text-zinc-500 text-sm font-light leading-relaxed">
                        <strong className="text-zinc-300 block mb-1">Latency Optimization:</strong> 
                        Refactored legacy query patterns into optimized eager-loading relationships, resulting in a significant reduction in TTFB.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 aspect-video flex items-center justify-center relative overflow-hidden group">
                   {/* Placeholder for Diagram */}
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
                   <div className="text-center space-y-4 relative z-10">
                      <Workflow size={48} className="mx-auto text-zinc-700 group-hover:text-indigo-400/40 transition-colors duration-700" />
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block">Architecture Flow Diagram</span>
                   </div>
                </div>
              </section>

              {/* Database Section */}
              <section className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="lg:order-2 space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <Database size={20} className="text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-light">Data Engineering</h3>
                  </div>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    The database schema follows strict normalization standards (3NF) to maintain data integrity while utilizing JSON columns for flexible metadata storage in non-relational contexts.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-white/5 rounded-xl bg-white/[0.01]">
                       <span className="text-[10px] font-mono text-zinc-600 uppercase block mb-1">Entities</span>
                       <span className="text-white text-lg font-light">45+ Tables</span>
                    </div>
                    <div className="p-4 border border-white/5 rounded-xl bg-white/[0.01]">
                       <span className="text-[10px] font-mono text-zinc-600 uppercase block mb-1">Integrity</span>
                       <span className="text-white text-lg font-light">ACID Compliant</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 bg-zinc-900/50 border border-white/5 rounded-2xl p-8 aspect-square md:aspect-video flex items-center justify-center relative group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.03),transparent)]"></div>
                   <div className="text-center space-y-4 relative z-10">
                      <Database size={48} className="mx-auto text-zinc-700 group-hover:text-emerald-400/40 transition-colors duration-700" />
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block">ERD Schematic (Censored)</span>
                   </div>
                </div>
              </section>

              {/* UI & Privacy Section */}
              <section className="space-y-12">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                       <div className="flex items-center gap-4 text-white">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                            <Shield size={20} className="text-amber-400" />
                          </div>
                          <h3 className="text-xl font-light">Visual Identity & Privacy</h3>
                       </div>
                       <p className="text-zinc-500 text-sm font-light">As this is a confidential enterprise project, UI elements are presented with sensitive data obfuscated.</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((i) => (
                       <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/5 aspect-video bg-zinc-900">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="absolute inset-0 flex items-center justify-center grayscale opacity-20 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110">
                             <Layout size={64} className="text-zinc-600" />
                          </div>
                          <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                             <span className="text-[10px] font-mono text-white uppercase tracking-widest">Dashboard Interface — Module {i}</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </section>

            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Collaborator Access Verified</span>
               </div>
               <div className="flex items-center gap-8">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Natanael Detamor // Engineering Portfolio</span>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
