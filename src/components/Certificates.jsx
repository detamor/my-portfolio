import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink, Calendar, Check, ArrowRight, Brain, Cloud, FileCode2, Terminal } from "lucide-react";

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = [
    {
      certificateName: "Belajar Dasar AI",
      issuer: "Dicoding",
      dateIssued: "2023",
      fileLink: "/certificates/sertifikat%20belajar%20dasar%20ai.pdf",
      description: "Fundamentals of Artificial Intelligence and Machine Learning",
      icon: <Brain className="w-5 h-5" />,
      color: "indigo"
    },
    {
      certificateName: "Belajar Dasar AWS Cloud",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20Belajar%20dasar%20aws%20cloud.pdf",
      description: "Cloud Computing Fundamentals with Amazon Web Services",
      icon: <Cloud className="w-5 h-5" />,
      color: "amber"
    },
    {
      certificateName: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20belajar%20dasar%20pemrograman%20javascript.pdf",
      description: "JavaScript Programming Fundamentals and Best Practices",
      icon: <FileCode2 className="w-5 h-5" />,
      color: "yellow"
    },
    {
      certificateName: "Belajar Back-End Pemula dengan Javascript",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20Belajar%20Back-End%20Pemula%20dengan%20JavaScript.pdf",
      description: "Backend Development with Node.js and JavaScript",
      icon: <Terminal className="w-5 h-5" />,
      color: "emerald"
    },
  ];

  const nextCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const colorMap = {
    indigo: "group-hover:text-indigo-400 group-hover:border-indigo-500/50 shadow-indigo-500/10",
    amber: "group-hover:text-amber-400 group-hover:border-amber-500/50 shadow-amber-500/10",
    yellow: "group-hover:text-yellow-400 group-hover:border-yellow-500/50 shadow-yellow-500/10",
    emerald: "group-hover:text-emerald-400 group-hover:border-emerald-500/50 shadow-emerald-500/10"
  };

  const iconBgMap = {
    indigo: "group-hover:bg-indigo-500/10",
    amber: "group-hover:bg-amber-500/10",
    yellow: "group-hover:bg-yellow-500/10",
    emerald: "group-hover:bg-emerald-500/10"
  };

  return (
    <section id="certificates" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-zinc-950">
      {/* Editorial Background Element */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.01] select-none pointer-events-none leading-none hidden lg:block uppercase tracking-tighter">
        CERTIFICATIONS
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-zinc-900 pb-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-zinc-600 font-mono text-[10px] tracking-[0.3em] uppercase block mb-4"
            >
              Professional Growth
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter">
              Technical <span className="text-zinc-500 italic">Expertise</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs font-light text-sm italic leading-relaxed">
            Continuous development through industry-recognized certifications across cloud, AI, and development.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-10">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className={`relative h-full bg-zinc-900/10 border border-zinc-900 rounded-2xl p-8 transition-all duration-700 hover:bg-zinc-900/40 hover:-translate-y-1 ${colorMap[cert.color].split(' ').slice(1).join(' ')}`}>
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-500 ${iconBgMap[cert.color]}`}>
                      <div className={`text-zinc-600 transition-colors duration-500 ${colorMap[cert.color].split(' ')[0]}`}>
                        {cert.icon}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">{cert.dateIssued}</span>
                      <a
                        href={cert.fileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 hover:border-white pb-0.5 tracking-widest uppercase"
                      >
                        Verifikasi
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white tracking-tight group-hover:text-inherit transition-colors duration-500">{cert.certificateName}</h3>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-sm">{cert.description}</p>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-zinc-800/50 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-current transition-colors"></div>
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{cert.issuer}</span>
                    </div>
                    <div className="text-[4rem] font-black text-white/[0.02] absolute bottom-4 right-8 pointer-events-none group-hover:text-white/[0.05] transition-all duration-700">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet & Mobile Grid (Simpler layout) */}
        <div className="lg:hidden">
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="relative bg-zinc-900/30 border border-zinc-900 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-zinc-500`}>{cert.icon}</div>
                  <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">{cert.dateIssued}</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{cert.certificateName}</h3>
                <p className="text-zinc-500 text-xs mb-6 font-light">{cert.description}</p>
                <a
                  href={cert.fileLink}
                  className="flex items-center gap-2 text-white text-[10px] font-mono tracking-widest uppercase group/link"
                >
                  Verifikasi Link <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats/Motto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 pt-20 border-t border-zinc-900 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full mb-8">
            <Sparkles className="w-3 h-3 text-zinc-400" />
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Never stop learning</span>
          </div>
          <p className="text-zinc-400 max-w-lg font-light text-lg mb-12 italic leading-relaxed">
            "Learning is a lifelong journey, and every certification is a milestone towards mastering my craft as a Web Engineer."
          </p>
          <a
            href="#contact"
            className="group flex items-center gap-4 bg-white text-black px-10 py-5 text-[11px] font-mono tracking-[0.3em] uppercase hover:bg-zinc-200 transition-all duration-300"
          >
            Discuss Qualifications <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ArrowUpRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const Sparkles = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export default Certificates;