import React, { useState } from "react";
import { Code, BarChart3, Users, Brain, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import ReactLogo from '../assets/images/React.png';
import VueLogo from '../assets/images/Vue.png';
import BootrapLogo from '../assets/images/Bootstrap.jpg';
import TailwindcssLogo from '../assets/images/Tailwindcss.png';
import JSLogo from '../assets/images/JS.png';
import NodeJsLogo from '../assets/images/NodeJs.png';
import PythoniconLogo from '../assets/images/Pythonicon.png';
import MySqlLogo from '../assets/images/MySql.jpg';
import PHPLogo from '../assets/images/PHP.png';
import LaravelLogo from '../assets/images/Laravel.jpg';
import JavaLogo from '../assets/images/Java.png';
import GitLogo from '../assets/images/Git.png';
import GithubLogo from '../assets/images/Github.png';
import ClaudeLogo from '../assets/images/Claude.png';
import FigmaLogo from '../assets/images/Figma.png';
import VscodeLogo from '../assets/images/Vscode.jpg';
import IntelijLogo from '../assets/images/Intelij.jpg';
import PowerBiLogo from '../assets/images/Power Bi.png';
import TableauLogo from '../assets/images/Tableau.png'; 
import SqlLogo from '../assets/images/Sql.png';
import ExcelLogo from '../assets/images/Excel.jpg';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("fullstack");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: "fullstack",
      name: "Full Stack Development",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-400 to-cyan-400",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-400",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      description: "Complete web application development from frontend to backend",
      techs: [
        { 
          name: "React.js", 
          level: "Advanced",
          image: ReactLogo,
          experience: "3+ years"
        },
        { 
          name: "Vue.js", 
          level: "Intermediate",
          image: VueLogo,
          experience: "2+ years"
        },
        {
          nama: "Bootstrap",
          level: "Intermidiate",
          image: BootrapLogo,
          experience: "1+ years"  
        },
        { 
          name: "Node.js", 
          level: "Advanced",
          image: NodeJsLogo,
          experience: "3+ years"
        },
        {
          name: "Java",
          level: "Intermidiate",
          image: JavaLogo,
          experience: "1+ years" 
        },
        { 
          name: "Laravel", 
          level: "Advanced",
          image: LaravelLogo,
          experience: "3+ years"
        },
        { 
          name: "MySQL", 
          level: "Advanced",
          image: MySqlLogo,
          experience: "3+ years"
        },
        { 
          name: "Tailwind CSS", 
          level: "Advanced",
          image: TailwindcssLogo,
          experience: "3+ years"
        },
        { 
          name: "JavaScript", 
          level: "Advanced",
          image: JSLogo,
          experience: "4+ years"
        },
        { 
          name: "PHP", 
          level: "Intermediate",
          image: PHPLogo,
          experience: "2+ years"
        }
      ],
    },
    {
      id: "dataanalyst",
      name: "Data Analysis",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "from-emerald-400 to-green-400",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-400",
      bgGradient: "from-emerald-500/10 to-green-500/10",
      description: "Data processing, visualization and insights extraction",
      techs: [
        { 
          name: "Python", 
          level: "Advanced",
          image: PythoniconLogo,
          experience: "3+ years"
        },
        { 
          name: "Power BI", 
          level: "Advanced",
          image: PowerBiLogo,
          experience: "2+ years"
        },
        { 
          name: "Tableau", 
          level: "Intermediate",
          image: TableauLogo,
          experience: "1+ years"
        },
        { 
          name: "SQL", 
          level: "Advanced",
          image: SqlLogo,
          experience: "3+ years"
        },
        { 
          name: "Excel", 
          level: "Advanced",
          image: ExcelLogo,
          experience: "4+ years"
        }
      ],
    },
    {
      id: "tools",
      name: "Tools & Technologies",
      icon: <Brain className="w-5 h-5" />,
      color: "from-purple-400 to-pink-400",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-400",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      description: "Development tools, design software and productivity platforms",
      techs: [
        { 
          name: "Git", 
          level: "Advanced",
          image: GitLogo,
          experience: "4+ years"
        },
        { 
          name: "GitHub", 
          level: "Advanced",
          image: GithubLogo,
          experience: "3+ years"
        },
        { 
          name: "Claude AI", 
          level: "Intermediate",
          image: ClaudeLogo,
          experience: "1+ years"
        },
        { 
          name: "Figma", 
          level: "Advanced",
          image: FigmaLogo,
          experience: "3+ years"
        },
        { 
          name: "VS Code", 
          level: "Advanced",
          image: VscodeLogo,
          experience: "4+ years"
        },
        { 
          name: "IntelliJ IDEA", 
          level: "Intermediate",
          image: IntelijLogo,
          experience: "2+ years"
        }
      ],
    },
  ];

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500/20 text-green-300 border-green-400/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-400/30";
      case "Beginner":
        return "bg-blue-500/20 text-blue-300 border-blue-400/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-400/30";
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden bg-zinc-950">
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-black" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
        
        {/* Ambient light effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.008] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-mono text-zinc-400 tracking-wider uppercase">
              Technical Expertise
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-extralight tracking-tight text-white leading-none mb-4">
            Skills &
            <br />
            <span className="text-zinc-400">Technologies</span>
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto mb-6" />
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive technical expertise spanning full-stack development and data analysis
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`group relative px-8 py-4 border transition-all duration-300 ${
                activeTab === category.id
                  ? `bg-white/5 border-zinc-700 text-white`
                  : "bg-transparent border-zinc-800/50 text-zinc-400 hover:bg-zinc-900/50 hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 transition-all duration-300 ${
                  activeTab === category.id ? 'text-white' : 'text-zinc-500'
                }`}>
                  {category.icon}
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">{category.name}</div>
                  <div className="text-xs opacity-60 max-w-48">{category.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeCategory.techs.map((tech, index) => (
            <div
              key={tech.name}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
              }}
            >
              <div className={`relative bg-zinc-900/30 border border-zinc-800/50 p-6 transition-all duration-500 h-full ${
                hoveredSkill === index ? 'border-zinc-700/70 bg-zinc-900/50 transform -translate-y-2' : ''
              }`}>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Tech Image */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className={`w-16 h-16 object-cover transition-transform duration-300 ${
                          hoveredSkill === index ? 'scale-110' : ''
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Tech Name */}
                  <h3 className="text-white font-medium text-lg text-center mb-3">
                    {tech.name}
                  </h3>
                  
                  {/* Level Badge */}
                  <div className="flex justify-center mb-3">
                    <span className={`px-3 py-1 text-xs font-medium border ${getLevelColor(tech.level)}`}>
                      {tech.level}
                    </span>
                  </div>
                  
                  {/* Experience */}
                  <div className="text-center text-zinc-400 text-sm mb-4">
                    {tech.experience} experience
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex justify-center">
                    <div className={`inline-flex items-center space-x-2 text-sm font-medium text-zinc-400 opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-zinc-800/50">
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">25+</div>
            <div className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">04+</div>
            <div className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">50+</div>
            <div className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">02</div>
            <div className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Specializations</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;