
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2 } from "lucide-react";

interface Project3D {
  id: number;
  title: string;
  description: string;
  category: string;
  color: string;
  icon: string;
}

const Project360View = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project3D | null>(null);

  const projects3D: Project3D[] = [
    {
      id: 1,
      title: "KDP Content QA",
      description: "Automated quality assurance pipeline for Kindle publishing",
      category: "Automation",
      color: "#F59E0B",
      icon: "⚡"
    },
    {
      id: 2,
      title: "Laptop Predictor",
      description: "ML-powered laptop price prediction system",
      category: "Machine Learning",
      color: "#8B5CF6",
      icon: "💻"
    },
    {
      id: 3,
      title: "Insurance Risk AI",
      description: "AI-driven insurance risk assessment platform",
      category: "FinTech",
      color: "#10B981",
      icon: "🛡️"
    },
    {
      id: 4,
      title: "Restaurant Bot",
      description: "Natural language restaurant recommendation chatbot",
      category: "AI/NLP",
      color: "#EF4444",
      icon: "🤖"
    },
    {
      id: 5,
      title: "Agentic LangGraph",
      description: "Advanced AI agent system with feedback loops",
      category: "AI Systems",
      color: "#6366F1",
      icon: "🧠"
    },
    {
      id: 6,
      title: "IPL Analytics",
      description: "Comprehensive cricket analytics dashboard",
      category: "Analytics",
      color: "#06B6D4",
      icon: "📊"
    }
  ];

  const totalProjects = projects3D.length;
  const angleStep = 360 / totalProjects;

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
    setRotation((prev) => prev - angleStep);
  }, [totalProjects, angleStep]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    setRotation((prev) => prev + angleStep);
  }, [totalProjects, angleStep]);

  const goToProject = (index: number) => {
    setCurrentIndex(index);
    setRotation(-index * angleStep);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextProject, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextProject]);

  const getCardStyle = (index: number): React.CSSProperties => {
    const angle = (index * angleStep + rotation) * (Math.PI / 180);
    const radius = 300;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const scale = (z + radius) / (2 * radius);
    const opacity = z > -radius / 3 ? 1 : 0.4;

    return {
      transform: `translate3d(${x}px, 0, ${z}px) scale(${Math.max(0.7, scale)})`,
      opacity: opacity,
      zIndex: Math.round(z + radius),
      left: '50%',
      top: '50%',
      marginLeft: '-120px',
      marginTop: '-160px',
    };
  };

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            360° Project Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            Navigate through my projects in an immersive 3D experience. Each project represents a unique journey in innovation.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto h-96 flex items-center justify-center">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              perspective: '1200px',
              transformStyle: 'preserve-3d'
            }}
          >
            {projects3D.map((project, index) => (
              <div
                key={project.id}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`w-60 h-80 rounded-3xl border-2 transition-all duration-700 hover:scale-110 ${
                  index === currentIndex 
                    ? 'shadow-2xl border-primary glow-effect' 
                    : 'shadow-lg border-border/30 hover:border-primary/50'
                }`}
                style={{ 
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                  backdropFilter: 'blur(10px)'
                }}>
                  
                  {/* Card Header */}
                  <div className="p-6 text-center border-b border-border/20">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${project.color}20` }}
                    >
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: `${project.color}20`,
                        color: project.color
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-center">
                      <button
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                          border: `1px solid ${project.color}30`
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        Explore Project
                      </button>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {index === currentIndex && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div 
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: project.color }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="group-hover:text-primary transition-colors duration-300" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
          >
            <ChevronRight size={24} className="group-hover:text-primary transition-colors duration-300" />
          </button>
        </div>

        {/* Controls */}
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-105"
            >
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
            </button>

            <button
              onClick={() => setSelectedProject(projects3D[currentIndex])}
              className="flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-full hover:bg-accent/20 transition-all duration-300 hover:scale-105"
            >
              <Maximize2 size={20} />
              View Details
            </button>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex gap-3">
            {projects3D.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-110'
                }`}
              />
            ))}
          </div>

          {/* Current Project Info */}
          <div className="text-center max-w-md">
            <h3 className="text-xl font-bold mb-2">
              {projects3D[currentIndex].title}
            </h3>
            <p className="text-muted-foreground">
              {projects3D[currentIndex].description}
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              Project {currentIndex + 1} of {totalProjects}
            </p>
          </div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-background rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-border/50">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: `${selectedProject.color}20` }}
                  >
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <p className="text-muted-foreground">{selectedProject.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              
              <div className="flex gap-4">
                <button className="flex-1 py-3 px-6 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200">
                  View Live Demo
                </button>
                <button className="flex-1 py-3 px-6 border border-border rounded-full hover:bg-muted transition-colors duration-200">
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Project360View;
