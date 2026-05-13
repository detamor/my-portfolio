import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Check, ArrowRight, Brain, Cloud, FileCode2, Terminal, Award, ShieldCheck } from "lucide-react";
import DicodingLogo from "../assets/images/dicoding.webp";
import CertiportLogo from "../assets/images/certiport.webp";

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = [
    {
      certificateName: "IT Specialist: Databases",
      issuer: "Certiport",
      dateIssued: "Mar 2025",
      fileLink: "#",
      description: "Professional certification in database design, manipulation, and management using SQL.",
      icon: <img src={CertiportLogo} alt="Certiport" className="w-full h-full object-cover" />,
      color: "indigo"
    },
    {
      certificateName: "Basic JavaScript Programming",
      issuer: "Dicoding",
      dateIssued: "Jan 2025",
      fileLink: "/certificates/sertifikat belajar dasar pemrograman javascript.pdf",
      description: "Fundamentals of JavaScript including DOM manipulation, ES6 features, and asynchronous programming.",
      icon: <img src={DicodingLogo} alt="Dicoding" className="w-full h-full object-cover" />,
      color: "yellow"
    },
    {
      certificateName: "Basic Back-End with JavaScript",
      issuer: "Dicoding",
      dateIssued: "Jan 2025",
      fileLink: "/certificates/sertifikat Belajar Back-End Pemula dengan JavaScript.pdf",
      description: "Building scalable server-side applications using Node.js and Hapi framework.",
      icon: <img src={DicodingLogo} alt="Dicoding" className="w-full h-full object-cover" />,
      color: "emerald"
    },
    {
      certificateName: "Structured Query Language (SQL)",
      issuer: "Dicoding",
      dateIssued: "Apr 2025",
      fileLink: "#",
      description: "Advanced data querying, optimization, and relational database management systems.",
      icon: <img src={DicodingLogo} alt="Dicoding" className="w-full h-full object-cover" />,
      color: "amber"
    }
  ];

  return (
    <section id="certificates" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0c14] relative overflow-hidden">
      {/* Background Depth */}
      <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/[0.01] blur-[120px] rounded-full pointer-events-none"></div>

      {/* Editorial Background Element */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-indigo-500/[0.02] select-none pointer-events-none leading-none hidden lg:block uppercase tracking-tighter">
        CERTIFICATIONS
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-zinc-700 font-mono text-[9px] tracking-[0.4em] uppercase block mb-4"
          >
            Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-light text-white tracking-tighter leading-none mb-6"
          >
            Technical <br />
            <span className="text-zinc-500 italic">Certifications</span>
          </motion.h2>
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-xl">
             Professional validations of technical expertise across system architecture, full-stack engineering, and AI integration.
          </p>
        </div>

        {/* Certificates Grid - High Density Horizontal Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-8 h-full bg-white/[0.01] border border-white/5 rounded-2xl transition-all duration-500 hover:bg-white/[0.02] hover:border-white/10 flex flex-col justify-between">
                
                <div className="space-y-6">
                   <div className="flex justify-between items-start">
                      <div className="w-10 h-10 p-2 bg-white rounded-lg border border-white/10 overflow-hidden transition-all">
                          {cert.icon}
                      </div>
                      <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">{cert.dateIssued}</span>
                   </div>

                   <div className="space-y-2">
                      <span className="text-[8px] font-mono text-indigo-400/40 uppercase tracking-[0.3em]">{cert.issuer}</span>
                      <h3 className="text-lg font-light text-white tracking-tight leading-tight group-hover:text-indigo-100 transition-colors">
                        {cert.certificateName}
                      </h3>
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href={cert.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[9px] font-mono text-zinc-600 hover:text-white transition-all uppercase tracking-[0.2em]"
                  >
                    Verify <ExternalLink size={10} className="text-indigo-400/40" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;