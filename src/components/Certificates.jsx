import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

// Certificate CSS Mockup component that renders like a real paper certificate
const CertificateMockup = ({ title, issuer, date }) => {
  const isDicoding = issuer.toLowerCase().includes("dicoding");
  const isCertiport = issuer.toLowerCase().includes("certiport");
  
  return (
    <div className="relative aspect-[1.414/1] w-full bg-[#fdfdfc] border-[6px] border-[#0c0f17] rounded-lg p-5 flex flex-col justify-between shadow-lg text-[#0a0d14] font-sans overflow-hidden select-none">
      {/* Top and Bottom Decorative Ribbons */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-[#4f46e5]/40"></div>
      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-[#4f46e5]/40"></div>
      
      {/* Background Seal Watermark */}
      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
        <svg className="w-40 h-40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
        </svg>
      </div>

      {/* Certificate Frame Borders */}
      <div className="absolute inset-2.5 border border-zinc-200 pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-start border-b border-[#e2e8f0] pb-2 relative z-10">
        <div>
          {isDicoding && (
            <span className="text-[11px] font-black tracking-tighter text-[#1e293b]">dicoding</span>
          )}
          {isCertiport && (
            <span className="text-[9px] font-bold tracking-widest text-[#0f172a] uppercase">certiport</span>
          )}
          {!isDicoding && !isCertiport && (
            <span className="text-[9px] font-bold tracking-widest text-[#0f172a] uppercase">{issuer}</span>
          )}
        </div>
        <div className="text-right">
          <span className="text-[7px] uppercase tracking-widest text-zinc-400 block leading-none">Certificate of</span>
          <span className="text-[8px] font-bold uppercase tracking-wider text-[#1e293b] leading-tight">Completion</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="flex-1 flex flex-col items-center justify-center my-3 space-y-1.5 text-center relative z-10">
        <span className="text-[6px] uppercase tracking-[0.2em] text-zinc-400">This is to certify that</span>
        <span className="text-sm font-serif font-semibold text-[#0a0d14] border-b border-[#cbd5e1] pb-0.5 px-6 italic">
          Natanael Detamor Karo Karo
        </span>
        <span className="text-[6px] uppercase tracking-[0.15em] text-zinc-400">has successfully completed the course</span>
        <span className="text-[9px] font-bold text-indigo-900 leading-tight max-w-[240px]">{title}</span>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-end border-t border-[#e2e8f0] pt-2 text-[6px] text-zinc-500 relative z-10">
        <div>
          <span className="block leading-relaxed">Issued on: {date}</span>
          <span className="block text-[5px] text-zinc-400 uppercase tracking-wider">Dicoding Authorized</span>
        </div>
        
        {/* Signatures & Seal */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center text-[5px]">
            <span className="font-serif italic text-zinc-700 leading-none">N. Wicaksono</span>
            <div className="w-8 h-px bg-zinc-300 my-0.5"></div>
            <span className="text-[4px] text-zinc-400 uppercase leading-none">CEO, Dicoding</span>
          </div>
          {/* QR Code */}
          <div className="w-8 h-8 border border-zinc-200 p-0.5 bg-white flex items-center justify-center shrink-0">
            <svg className="w-full h-full text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="2" width="6" height="6" />
              <rect x="16" y="2" width="6" height="6" />
              <rect x="2" y="16" width="6" height="6" />
              <rect x="9" y="9" width="6" height="6" />
              <path d="M16 16h2v2h-2zm4 4h2v2h-2zm-2 2h2v-2h-2zm4-4v-2h-2v2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  const certifications = [
    {
      title: "IT Specialist: Databases",
      issuer: "Certiport",
      date: "Mar 2025",
      id: "Credential ID: wS6Y-uTeA",
      verifyUrl: "/certificates/IT Specialist Database .pdf",
      skills: ["RDBMS", "SQL", "Data Modeling", "DB Administration"]
    },
    {
      title: "Structured Query Language (SQL)",
      issuer: "Dicoding",
      date: "Apr 2025",
      id: "Credential ID: SQL-DC-2025",
      verifyUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/872026d91301cd8f7eadc913ecbe455bc63b4631/view",
      skills: ["Structured Query Language", "Data Manipulation", "DCL & DDL"]
    },
    {
      title: "Basic Back-End with JavaScript",
      issuer: "Dicoding",
      date: "Jan 2025",
      id: "Credential ID: BE-JS-2025",
      verifyUrl: "/certificates/sertifikat Belajar Back-End Pemula dengan JavaScript.pdf",
      skills: ["Node.js", "RESTful API", "Server Management"]
    },
    {
      title: "Basic JavaScript Programming",
      issuer: "Dicoding",
      date: "Jan 2025",
      id: "Credential ID: JS-PRG-2025",
      verifyUrl: "/certificates/sertifikat belajar dasar pemrograman javascript.pdf",
      skills: ["Core JS", "Logic Flow", "Functions"]
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "AWS x Dicoding",
      date: "2024",
      id: "Credential ID: AWS-CLD-FOUND",
      verifyUrl: "/certificates/sertifikast Belajar dasar aws cloud.pdf",
      skills: ["Cloud Concepts", "Security", "AWS Infrastructure"]
    },
    {
      title: "AI Fundamentals",
      issuer: "Dicoding Indonesia",
      date: "2024",
      id: "Credential ID: AI-FND-2024",
      verifyUrl: "/certificates/sertifikat belajar dasar ai.pdf",
      skills: ["Machine Learning", "Neural Networks", "AI Ethics"]
    }
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="certificates" className="py-40 relative overflow-hidden bg-[#030303]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-zinc-600 font-mono text-[10px] tracking-[0.4em] uppercase block">Academic & Professional Merit</span>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">Verified <span className="text-zinc-700 italic">Competencies</span></h2>
          </motion.div>
          
          {/* Slider Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/[0.02] active:scale-95 transition-all"
              aria-label="Scroll Left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/[0.02] active:scale-95 transition-all"
              aria-label="Scroll Right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="snap-start shrink-0 w-[290px] sm:w-[350px] md:w-[380px] group flex flex-col gap-6"
            >
              {/* Certificate Image Mockup */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[1.414/1] w-full rounded-2xl border border-white/5 bg-zinc-950 p-2 md:p-3 overflow-hidden group-hover:border-white/10 transition-all duration-700 shadow-2xl block isolation-isolate"
              >
                <div className="w-full h-full rounded-xl overflow-hidden isolation-isolate">
                  <CertificateMockup title={cert.title} issuer={cert.issuer} date={cert.date} />
                </div>
              </a>

              {/* Certificate Details */}
              <div className="space-y-3">
                <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-indigo-400/60 uppercase block">
                  {cert.issuer}
                </span>
                <h3 className="text-lg md:text-xl font-light text-white tracking-tight leading-snug group-hover:text-indigo-400 transition-colors duration-300 min-h-[56px] flex items-start">
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="line-clamp-2">
                    {cert.title}
                  </a>
                </h3>
                <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>{cert.date}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <ShieldCheck size={12} className="text-indigo-500/50" />
                    <span>{cert.id.replace("Credential ID: ", "")}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Verification Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-10 rounded-[2.5rem] border border-white/5 bg-indigo-500/[0.02] flex items-center gap-8"
        >
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
            <CheckCircle2 size={24} className="text-indigo-400" />
          </div>
          <p className="text-zinc-500 text-base font-light leading-relaxed">
            All credentials have been verified and are linked to official certification platforms or local verification files.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;