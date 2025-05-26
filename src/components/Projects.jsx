import React, { useState, useEffect } from "react";
import { Github, Eye, ArrowUpRight, Star, Calendar, Code, Zap, Globe } from "lucide-react";
import playstationImage from "../assets/images/RentalPlaystation.jpg";
import menubandungImage from "../assets/images/menubandung.jpg";
import WebTopUpImage from "../assets/images/WebTopUp.jpg";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "PlayStation Rental Hub",
      subtitle: "Gaming Console Management",
      description: "Revolutionary platform transforming PlayStation rental experience with sophisticated booking algorithms, real-time availability tracking, and secure payment processing for seamless entertainment access.",
      longDescription: "A comprehensive ecosystem featuring advanced user authentication, encrypted account management, dynamic pricing models, and intelligent recommendation systems.",
      tech: ["Vue.js", "Node.js", "MySQL", "Laravel", "JWT"],
      demoUrl: "https://ps-rental-demo.netlify.app",
      codeUrl: "https://github.com/detamor/RentalAppPS",
      image: playstationImage,
      color: "blue",
      category: "Full Stack",
      status: "Production Ready",
      year: "2024",
      featured: true
    },
    {
      id: 2,
      title: "Bandung UMKM Ecosystem",
      subtitle: "Local Business Empowerment",
      description: "Digital transformation platform empowering Bandung's creative economy through modern e-commerce solutions, analytics dashboards, and community-driven marketplace features.",
      longDescription: "Comprehensive solution including vendor management, inventory tracking, payment gateway integration, and SEO-optimized storefronts for local businesses.",
      tech: ["Vue.js", "Node.js", "Tailwind"],
      demoUrl: "https://bandung-umkm.vercel.app",
      codeUrl: "https://github.com/detamor/umkm-cemilkuynael/tree/master/case3",
      image: menubandungImage,
      color: "emerald",
      category: "E-commerce",
      status: "Live",
      year: "2024",
      featured: true
    },
    {
      id: 3,
      title: "GameVault Store",
      subtitle: "Gaming Credit Marketplace",
      description: "Next-generation gaming top-up platform featuring instant credit delivery, multi-game support, and gamified user experience with loyalty rewards and social features.",
      longDescription: "Advanced payment processing, real-time transaction monitoring, automated delivery systems, and comprehensive admin dashboard for business intelligence.",
      tech: ["HTML" , "CSS", "Javascript"],
      demoUrl: "https://gamevault-store.netlify.app",
      codeUrl: "https://github.com/natanael/gamevault",
      image: WebTopUpImage,
      color: "purple",
      category: "Web App",
      status: "Beta",
      year: "2024",
      featured: false
    }
  ];

  const filters = ["All", "Full Stack", "E-commerce", "Web App"];
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Semua tema transparan
  const getColorTheme = () => ({
    gradient: "from-transparent via-transparent to-transparent",
    border: "border-transparent",
    text: "text-transparent",
    glow: "shadow-transparent",
    accent: "bg-transparent"
  });

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-32 px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-gray-950 to-black"
    >
      {/* Dynamic background with mouse interaction */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)`
        }}
      />

      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/5 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-purple-400/10 rounded-lg rotate-45"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-32 bg-gradient-to-b from-blue-400/20 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-500">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300 tracking-wide">Featured Work & Creative Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-6 leading-none">
            <span className="text-white/40">Selected</span>
            <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Crafting digital experiences that push boundaries and create meaningful impact through innovative technology solutions.
          </p>
        </div>

        {/* Filter tabs transparan */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 bg-transparent
                  ${activeFilter === filter
                    ? 'text-white border border-white/20'
                    : 'text-gray-400 border border-transparent hover:text-white'
                  }`}
                style={{ outline: 'none' }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8">
          {filteredProjects.map((project, index) => {
            const theme = getColorTheme();
            const isHovered = hoveredProject === project.id;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative ${isEven ? 'lg:pr-20' : 'lg:pl-20'}`}
              >
                {/* Project card */}
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image section */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} rounded-3xl blur-2xl transition-all duration-700 ${
                      isHovered ? 'opacity-60 scale-105' : 'opacity-0'
                    }`}></div>
                    {/* Image container */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 hover:border-white/20 transition-all duration-500">
                      <div className="relative h-80 rounded-2xl overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            isHovered ? 'scale-105' : ''
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 text-white font-medium"
                          >
                            <Eye className="w-4 h-4" />
                            Preview
                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </a>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/70 transition-all duration-300 text-white font-medium"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </div>
                        {/* Project status badge */}
                        <div className="absolute top-4 right-4">
                          <div className={`flex items-center gap-2 px-3 py-1 ${theme.accent} backdrop-blur-xl border ${theme.border} rounded-full`}>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-white">{project.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content section */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <span className={theme.text}>{project.category}</span>
                      {project.featured && (
                        <>
                          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-yellow-400">Featured</span>
                          </div>
                        </>
                      )}
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-light text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className={`text-lg ${theme.text} font-light`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-gray-500 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/10 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/cta inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${theme.gradient} backdrop-blur-xl border ${theme.border} rounded-full hover:scale-105 transition-all duration-300 text-white font-medium`}
                      >
                        <Globe className="w-5 h-5" />
                        Explore Project
                        <ArrowUpRight className="w-5 h-5 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project number */}
                <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} text-8xl font-extralight text-white/5 select-none pointer-events-none`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>
        {/* Call to action */}
        <div className="text-center mt-20 pt-20 border-t border-white/5">
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate on something extraordinary.
          </p>
          <button  className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium text-white overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
            <span className="relative z-10 flex items-center gap-2">
             <a href="#contact">Start a Project</a> 
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
