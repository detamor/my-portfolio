import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

const Certificates = () => {
  const certifications = [
    {
      title: "IT Specialist: Python",
      issuer: "Certiport - Pearson VUE",
      date: "2024",
      id: "Credential ID: wS6Y-uTeA",
      verifyUrl: "#",
      skills: ["Algorithm", "Data Structures", "Inference Logic"],
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Back-End Developer (Laravel)",
      issuer: "Dicoding Indonesia",
      date: "2024",
      id: "Credential ID: 2VXONL9L0PYV",
      verifyUrl: "https://www.dicoding.com/certificates/2VXONL9L0PYV",
      skills: ["RESTful API", "MVC Architecture", "RDBMS"],
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Google Cloud: Cloud Computing Foundations",
      issuer: "Google Cloud",
      date: "2024",
      id: "Credential ID: GC-CCF-2024",
      verifyUrl: "#",
      skills: ["Cloud Infrastructure", "Scalability", "Networking"],
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-[#030303]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 mb-24"
          >
            <span className="text-zinc-600 font-mono text-[10px] tracking-[0.4em] uppercase block">Academic & Professional Merit</span>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">Verified <span className="text-zinc-700 italic">Competencies</span></h2>
          </motion.div>

          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none`}></div>

                {/* Issuer Logo Placeholder/Wrapper */}
                <div className="relative shrink-0 w-24 h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center p-5 shadow-2xl">
                   <div className="w-full h-full rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center">
                      <Award className="text-zinc-500 group-hover:text-white transition-colors duration-500" size={32} />
                   </div>
                </div>

                <div className="flex-1 space-y-4 relative z-10 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <h3 className="text-xl font-light text-white">{cert.title}</h3>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{cert.issuer}</span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-6 pt-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={12} className="text-indigo-400" />
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{cert.id}</span>
                    </div>
                    <span className="text-zinc-800">|</span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{cert.date}</span>
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 p-5 rounded-full border border-white/5 bg-white/5 text-zinc-500 hover:text-white hover:border-white/20 transition-all group/link"
                >
                  <ExternalLink size={18} className="group-hover/link:rotate-12 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-[2rem] border border-white/5 bg-indigo-500/[0.02] flex items-center gap-6"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
               <CheckCircle2 size={20} className="text-indigo-400" />
            </div>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              All credentials have been issued by recognized global technology leaders and verified through official certification platforms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;