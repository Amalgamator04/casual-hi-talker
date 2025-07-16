
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  style: React.CSSProperties;
}

const ProjectCard = ({ project, isActive, style }: ProjectCardProps) => {
  return (
    <div 
      className="absolute transition-all duration-700 ease-in-out"
      style={style}
    >
      <Card className={`w-80 h-96 transform transition-all duration-700 hover:scale-105 ${
        isActive ? 'shadow-2xl ring-2 ring-primary' : 'shadow-lg'
      }`}>
        <CardHeader className="p-0">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <CardTitle className="text-white text-xl font-bold mb-2">
                {project.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-2">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 border rounded text-sm hover:bg-accent transition-colors"
              >
                <Github size={14} />
                Code
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
