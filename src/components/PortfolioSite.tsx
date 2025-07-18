
import { useState, useEffect } from "react";
import { ChevronDown, Download, Moon, Sun, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "./portfolio/HeroSection";
import AboutSection from "./portfolio/AboutSection";
import SkillsSection from "./portfolio/SkillsSection";
import InternshipSection from "./portfolio/InternshipSection";
import ProjectsSection from "./portfolio/ProjectsSection";
import Project360View from "./portfolio/Project360View";
import ContactSection from "./portfolio/ContactSection";

const PortfolioSite = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/10 text-foreground overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Prabhav Sharma
          </h1>
          
          <nav className="hidden md:flex space-x-8">
            {["about", "skills", "internships", "projects", "experience", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="capitalize hover:text-primary transition-colors duration-300"
              >
                {section}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="rounded-full"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Button
              onClick={() => window.open("#", "_blank")}
              className="hidden md:flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection scrollY={scrollY} />

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all duration-300"
        >
          <ChevronDown className="text-primary" size={24} />
        </button>
      </div>

      {/* Main Content */}
      <main className="space-y-0">
        <AboutSection />
        <SkillsSection />
        <InternshipSection />
        <ProjectsSection />
        <Project360View />
        <ContactSection />
      </main>

      {/* Floating Social Links */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        <a
          href="https://github.com/Amalgamator04"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent hover:scale-110 transition-all duration-300"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/prabhav-sharma-6b3ba8263"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent hover:scale-110 transition-all duration-300"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:prabhav@example.com"
          className="block p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent hover:scale-110 transition-all duration-300"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
};

export default PortfolioSite;
