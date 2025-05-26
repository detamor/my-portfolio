import React from "react";
import { motion } from "framer-motion";
import hoodie from "../assets/images/hoodie.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-slate-900">
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
            Get to know me
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            About <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Natanael</span>
          </h2>
          
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6 leading-relaxed">
                Hello, I'm <span className="font-medium bg-gradient-to-r from-blue-200 to-emerald-200 bg-clip-text text-transparent">Nael</span>
              </h3>
              
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p className="text-lg font-light">
                  A 6th semester Informatics Engineering student at Universitas Advent Indonesia. 
                  Originally from Medan, currently based in Bandung, where I'm pursuing my passion 
                  for technology and software development.
                </p>
                
                <p>
                  I find joy in transforming complex problems into elegant solutions through 
                  clean, efficient code. My approach focuses on creating digital experiences 
                  that seamlessly blend functionality with thoughtful design.
                </p>
                
                <p>
                  With a deep fascination for modern web technologies, particularly JavaScript 
                  frameworks and Java, I'm constantly evolving as a FullStack Developer 
                  professional, always eager to explore new possibilities.
                </p>
              </div>
            </div>

            {/* Skills highlights */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-lg font-medium text-white mb-4">What I bring to the table</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-white font-medium">Problem Solving</div>
                  <div className="text-gray-500 text-sm">Complex challenges, elegant solutions</div>
                </div>
                <div className="space-y-2">
                  <div className="text-white font-medium">Clean Code</div>
                  <div className="text-gray-500 text-sm">Maintainable, scalable architecture</div>
                </div>
                <div className="space-y-2">
                  <div className="text-white font-medium">User Focus</div>
                  <div className="text-gray-500 text-sm">Meaningful digital experiences</div>
                </div>
                <div className="space-y-2">
                  <div className="text-white font-medium">Continuous Learning</div>
                  <div className="text-gray-500 text-sm">Always exploring new technologies</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <motion.a
                href="#footer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 text-white font-medium group"
              >
                Let's Connect
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              {/* Elegant glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-3 group-hover:border-white/20 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={hoodie} 
                    alt="Natanael Detamor" 
                    className="w-full max-w-sm h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3"
              >
                <div className="text-white font-medium text-sm">Based in</div>
                <div className="text-gray-300 text-xs">Bandung, Indonesia</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;