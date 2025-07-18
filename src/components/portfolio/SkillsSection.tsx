
import { useEffect, useRef, useState } from "react";
import { Code, Database, BarChart3, Globe, Bot, Container } from "lucide-react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      category: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 9.5 },
        { name: "React", level: 8.5 },
        { name: "FastAPI", level: 8.5 },
        { name: "Flask", level: 8.0 }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Data Science",
      icon: BarChart3,
      skills: [
        { name: "Scikit-learn", level: 9.0 },
        { name: "Pandas", level: 9.5 },
        { name: "NumPy", level: 9.0 },
        { name: "Power BI", level: 8.5 }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      category: "AI/ML Tools",
      icon: Bot,
      skills: [
        { name: "Streamlit", level: 9.0 },
        { name: "LangChain", level: 8.0 },
        { name: "Ollama", level: 7.5 }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Database & DevOps",
      icon: Database,
      skills: [
        { name: "SQL/MySQL", level: 8.5 },
        { name: "Docker", level: 8.0 },
        { name: "GitHub", level: 9.0 },
        { name: "Botpress", level: 7.5 }
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen flex items-center py-20 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Key Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            My technical arsenal spans across data science, AI development, and full-stack solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 group"
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}/10</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{
                          width: isVisible ? `${skill.level * 10}%` : "0%",
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-muted-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {["Python", "FastAPI", "Docker", "Streamlit", "MySQL", "Power BI", "Git", "LangChain"].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
