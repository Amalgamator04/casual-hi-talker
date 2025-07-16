import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import ProjectCard, { Project } from "./ProjectCard";

const Portfolio360 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [rotation, setRotation] = useState(0);

  // Sample projects data - you can replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with interactive charts, location-based forecasts, and responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative design and smooth animations. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with message encryption, file sharing, and group chat functionality. Supports both web and mobile.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "WebRTC", "Redux"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Data Visualization Tool",
      description: "Interactive data visualization platform for analyzing complex datasets with customizable charts and export functionality.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const totalProjects = projects.length;
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
    const radius = 400;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const scale = (z + radius) / (2 * radius);
    const opacity = z > -radius / 2 ? 1 : 0.3;

    return {
      transform: `translate3d(${x}px, 0, ${z}px) scale(${Math.max(0.6, scale)})`,
      opacity: opacity,
      zIndex: Math.round(z + radius),
      left: '50%',
      top: '50%',
      marginLeft: '-160px', // Half of card width (320px / 2)
      marginTop: '-192px', // Half of card height (384px / 2)
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/20 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          My Projects Portfolio
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Explore my work in this interactive 360° view. Each project represents my journey in creating innovative solutions.
        </p>
      </div>

      <div className="relative w-full max-w-6xl h-96 flex items-center justify-center">
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={index === currentIndex}
              style={getCardStyle(index)}
            />
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-background/80 backdrop-blur-sm border rounded-full hover:bg-accent transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-background/80 backdrop-blur-sm border rounded-full hover:bg-accent transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Controls */}
      <div className="mt-12 flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
            />
          ))}
        </div>

        {/* Current Project Info */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            {projects[currentIndex].title}
          </h3>
          <p className="text-sm text-muted-foreground">
            Project {currentIndex + 1} of {totalProjects}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio360;
