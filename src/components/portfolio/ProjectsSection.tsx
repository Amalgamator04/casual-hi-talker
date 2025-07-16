
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Zap, Cpu, Bot, BarChart3, Shield, MapPin, Plane, Cake, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  const projects = [
    {
      id: 1,
      title: "KDP Content QA System",
      description: "Automated quality assurance pipeline for Kindle publishing with Excel tracker, escalation alerts, and comprehensive dashboard for content management.",
      icon: Zap,
      technologies: ["Python", "Excel", "Automation", "Quality Assurance"],
      category: "Automation",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      title: "Laptop Price Predictor",
      description: "End-to-end ML application with FastAPI backend and Docker deployment. Predicts laptop prices based on user specifications input.",
      icon: Cpu,
      technologies: ["Python", "FastAPI", "Docker", "Machine Learning"],
      category: "Machine Learning",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "Insurance Risk Predictor",
      description: "Full-stack application with Streamlit frontend and FastAPI backend. Predicts insurance categories based on health and financial data.",
      icon: Shield,
      technologies: ["Streamlit", "FastAPI", "ML", "Risk Analysis"],
      category: "FinTech",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Restaurant Recommendation Bot",
      description: "Natural language chatbot for food queries with realistic restaurant data and intelligent user interaction patterns.",
      icon: Bot,
      technologies: ["NLP", "Chatbot", "Python", "Data Modeling"],
      category: "AI/NLP",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 5,
      title: "Agentic LangGraph System",
      description: "Advanced system using Planner + Tool agents with local LLM, featuring intelligent feedback loops and retry mechanisms.",
      icon: Bot,
      technologies: ["LangGraph", "LLM", "AI Agents", "Python"],
      category: "AI Systems",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 6,
      title: "IPL Analytics Dashboard",
      description: "Comprehensive cricket analytics platform providing insights on teams, players, match statistics, and performance trends.",
      icon: BarChart3,
      technologies: ["Python", "Data Analytics", "Streamlit", "Sports Data"],
      category: "Analytics",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 7,
      title: "Flight Crash Survival Analysis",
      description: "Advanced anomaly detection system with data profiling capabilities and interactive Streamlit dashboard for aviation safety analysis.",
      icon: Plane,
      technologies: ["Anomaly Detection", "Streamlit", "Data Science", "Safety Analysis"],
      category: "Data Science",
      gradient: "from-gray-500 to-slate-500"
    },
    {
      id: 8,
      title: "Travel Agency System",
      description: "Comprehensive travel management platform with route planning, package management, and tourism documentation features.",
      icon: MapPin,
      technologies: ["System Design", "Travel Tech", "Route Planning", "Documentation"],
      category: "System Design",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      id: 9,
      title: "Bakery Website (Experimental)",
      description: "Creative one-page website featuring smooth scroll animations, interactive elements, and an impressive 3D cake model.",
      icon: Cake,
      technologies: ["Web Development", "3D Modeling", "Animations", "Frontend"],
      category: "Web Development",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 10,
      title: "Chatbot Integration",
      description: "Seamless Botpress chatbot integration with custom domain deployment using CDN links for enhanced user interaction.",
      icon: MessageSquare,
      technologies: ["Botpress", "Integration", "CDN", "Customer Service"],
      category: "Integration",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
            setVisibleProjects(prev => [...prev, projectId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Major Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning machine learning, automation, web development, and AI systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`transform transition-all duration-700 ${
                visibleProjects.includes(project.id) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] border-border/50 hover:border-primary/50 bg-background/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200">
                        <Github size={16} className="text-primary" />
                      </button>
                      <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200">
                        <ExternalLink size={16} className="text-primary" />
                      </button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white opacity-80 hover:opacity-100 transition-opacity duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Technologies Mastered" },
            { number: "3+", label: "Domains Explored" },
            { number: "100%", label: "Passion Driven" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
