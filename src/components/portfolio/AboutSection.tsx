
import { useEffect, useRef } from "react";
import { Code2, Lightbulb, Target, Users } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Strong foundation in Python, ML, and full-stack development"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges with innovative solutions"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focus on building impactful, scalable applications"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Thrive in team environments and high-impact projects"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-background to-secondary rounded-full flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am <span className="text-primary font-semibold">Prabhav Sharma</span>, a passionate and creative 
                <span className="text-accent font-semibold"> Data Science enthusiast</span> with a strong foundation in 
                Python, machine learning, and full-stack AI development.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I've completed impactful internships and built multiple real-world projects from scratch, focusing on 
                <span className="text-primary font-semibold"> automation, analytics, and deployment</span>. I bring a 
                builder's mindset and love solving problems with clean, scalable tech.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm committed to continuous learning and thrive in collaborative, high-impact environments. Always open 
                to challenges where I can apply my knowledge to 
                <span className="text-accent font-semibold"> create something meaningful</span>.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <highlight.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
