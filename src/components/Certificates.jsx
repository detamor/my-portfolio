import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink, Calendar, Check } from "lucide-react";

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = [
    {
      certificateName: "Belajar Dasar AI",
      issuer: "Dicoding",
      dateIssued: "2023",
      fileLink: "/certificates/sertifikat%20belajar%20dasar%20ai.pdf",
      color: "blue",
      description: "Fundamentals of Artificial Intelligence and Machine Learning"
    },
    {
      certificateName: "Belajar Dasar AWS Cloud",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20Belajar%20dasar%20aws%20cloud.pdf",
      color: "orange",
      description: "Cloud Computing Fundamentals with Amazon Web Services"
    },
    {
      certificateName: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20belajar%20dasar%20pemrograman%20javascript.pdf",
      color: "emerald",
      description: "JavaScript Programming Fundamentals and Best Practices"
    },
    {
      certificateName: "Belajar Back-End Pemula dengan Javascript",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20Belajar%20Back-End%20Pemula%20dengan%20JavaScript.pdf",
      color: "purple",  
      description: "Backend Development with Node.js and JavaScript"
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        accent: "from-blue-400/20 to-blue-600/20",
        border: "border-blue-400/30",
        text: "text-blue-300",
        glow: "shadow-blue-500/10"
      },
      orange: {
        accent: "from-orange-400/20 to-orange-600/20", 
        border: "border-orange-400/30",
        text: "text-orange-300",
        glow: "shadow-orange-500/10"
      },
      emerald: {
        accent: "from-emerald-400/20 to-emerald-600/20",
        border: "border-emerald-400/30", 
        text: "text-emerald-300",
        glow: "shadow-emerald-500/10"
      },
      purple: {
        accent: "from-purple-400/20 to-purple-600/20",
        border: "border-purple-400/30",
        text: "text-purple-300", 
        glow: "shadow-purple-500/10"
      }
    };
    
    return colorMap[color];
  };

  const nextCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="py-24 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-black">
      {/* Subtle background effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/3 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400 font-medium mb-6"
          >
            Professional Growth
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Certifications</span>
          </h2>
          
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-4"></div>
          
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Continuous learning through recognized industry certifications and professional development
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert, index) => {
              const colorClasses = getColorClasses(cert.color);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="relative">
                    {/* Subtle glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.accent} rounded-2xl blur-xl group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
                    
                    {/* Card */}
                    <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-500 ${colorClasses.glow} group-hover:shadow-2xl group-hover:-translate-y-1`}>
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses.accent} border ${colorClasses.border}`}>
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        
                        <motion.a
                          href={cert.fileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 text-white text-sm font-medium group/btn"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                          View
                        </motion.a>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-medium text-white mb-2 leading-tight">
                            {cert.certificateName}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {cert.description}
                          </p>
                        </div>
                        
                        {/* Meta info */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span className="text-gray-300 font-medium text-sm">{cert.issuer}</span>
                          </div>
                          
                          <div className={`flex items-center gap-2 ${colorClasses.text}`}>
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{cert.dateIssued}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button 
              onClick={prevCertificate}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 z-20 bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <button 
              onClick={nextCertificate}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 z-20 bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            
            {/* Certificate cards slider */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {certificates.map((cert, index) => {
                  const colorClasses = getColorClasses(cert.color);
                  
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="relative">
                        {/* Subtle glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.accent} rounded-2xl blur-xl transition-all duration-500`}></div>
                        
                        {/* Card */}
                        <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ${colorClasses.glow} shadow-xl`}>
                          
                          {/* Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses.accent} border ${colorClasses.border}`}>
                              <Award className="w-6 h-6 text-white" />
                            </div>
                            
                            <a
                              href={cert.fileLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 text-white text-sm font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View
                            </a>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-medium text-white mb-2 leading-tight">
                                {cert.certificateName}
                              </h3>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {cert.description}
                              </p>
                            </div>
                            
                            {/* Meta info */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                              <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-400" />
                                <span className="text-gray-300 font-medium text-sm">{cert.issuer}</span>
                              </div>
                              
                              <div className={`flex items-center gap-2 ${colorClasses.text}`}>
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-medium">{cert.dateIssued}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-white w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Committed to continuous professional development and staying current with industry standards
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 text-white font-medium group"
          >
            Let's Discuss My Qualifications
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;