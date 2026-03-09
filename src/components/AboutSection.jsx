import React from "react";
import { motion } from "framer-motion";
import hoodie from "../assets/images/hoodie.jpg";
import { ArrowRight, MapPin, GraduationCap, Code2, Cpu, Layout, Sparkles } from "lucide-react";

const AboutSection = () => {
  const expertise = [
    {
      title: "Full Stack Engineering",
      desc: "Frontend to Backend expertise",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "Complex Systems",
      desc: "HRIS, Expert Systems, CMS",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Clean Architecture",
      desc: "Maintainable, scalable code",
      icon: <Layout className="w-5 h-5" />
    },
    {
      title: "AI-Augmented Workflow",
      desc: "Leveraging Cursor & AI for speed",
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#020617]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Editorial Background Element */}
      <div className="absolute top-10 left-10 text-[15rem] font-bold text-indigo-500/[0.02] select-none pointer-events-none hidden lg:block leading-none">
        01
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-400/50 font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">
                Get to know me
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-tight">
                About <span className="text-indigo-400/80 italic">Natanael</span>
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Side Meta - Column 1 */}
          <motion.div
            className="lg:col-span-3 space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-indigo-400/40">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-300/60">Education</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                6th Semester Informatics Engineering<br />
                <span className="text-indigo-200/40">Universitas Advent Indonesia</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-indigo-400/40">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-300/60">Position</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Based in Bandung, Indonesia<br />
                <span className="text-indigo-200/40">Open for global work</span>
              </p>
            </div>
          </motion.div>

          {/* Main Bio - Column 2 */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed"
            >
              <p className="text-white text-xl md:text-2xl leading-snug">
                Hello, I'm <span className="text-indigo-400/60 italic">Nael</span>.
                Originally from Medan, currently based in Bandung, pursuing my passion for building impactful software.
              </p>
              <p>
                I find joy in transforming complex problems into elegant solutions through <span className="text-indigo-300/80">clean, efficient code</span>. My approach focuses on creating digital experiences that seamlessly blend functionality with thoughtful design.
              </p>
              <p>
                As a Full Stack Developer, I thrive on building complex systems—from <span className="text-indigo-200/60 border-b border-indigo-900/30 pb-0.5">Expert Systems</span> for disease detection to <span className="text-indigo-200/60 border-b border-indigo-900/30 pb-0.5">HRIS</span> and <span className="text-indigo-200/60 border-b border-indigo-900/30 pb-0.5">Architecture Management</span>.
              </p>
              <p className="text-sm font-mono text-zinc-500 pt-4 leading-loose">
                                // CURRENT FOCUS:
                <br /><span className="text-indigo-400/70">Scaling web technologies via JS Frameworks, PHP/Laravel, and Python.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-12"
            >
              <h4 className="text-[10px] font-mono text-indigo-400/40 tracking-[0.3em] uppercase mb-10 border-b border-indigo-950/50 pb-4">
                Expertise & Delivery
              </h4>
              <div className="space-y-8">
                {expertise.map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-6">
                    <div className="mt-1 text-indigo-900/40 group-hover:text-indigo-400 transition-colors duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1 tracking-tight group-hover:text-indigo-100 transition-colors">{item.title}</h5>
                      <p className="text-zinc-500 text-xs font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image - Column 3 */}
          <div className="lg:col-span-4 flex justify-end items-start relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Geometric Frame */}
              <div className="absolute -inset-4 border border-indigo-500/10 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 bg-indigo-500/[0.02]"></div>

              <div className="relative overflow-hidden rounded-lg bg-zinc-900">
                <img
                  src={hoodie}
                  alt="Natanael Detamor"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.01] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#020617]/80 border border-indigo-500/20 p-5 rounded-lg shadow-2xl backdrop-blur-xl">
                <div className="text-[10px] font-mono text-indigo-400/50 tracking-widest uppercase mb-1">Status</div>
                <div className="text-indigo-100 text-xs font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  Available for Projects
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;