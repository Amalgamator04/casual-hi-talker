
import { useState, useEffect } from "react";
import { Code, Database, Brain, Rocket } from "lucide-react";

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Data Science Enthusiast & Full-Stack AI Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: 0, x: 20, y: 30 },
    { Icon: Database, delay: 1, x: 80, y: 20 },
    { Icon: Brain, delay: 2, x: 15, y: 70 },
    { Icon: Rocket, delay: 3, x: 85, y: 80 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute animate-bounce"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
            animationDuration: "3s",
          }}
        >
          <div className="p-4 rounded-full bg-background/10 backdrop-blur-sm border border-primary/20">
            <Icon size={32} className="text-primary/60" />
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="text-center z-10 px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Prabhav Sharma
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Passionate about building intelligent solutions with Python, ML, and full-stack AI. 
          Transforming complex data into meaningful insights and scalable applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-accent/20 rounded-lg animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-bounce" style={{ animationDuration: "4s" }} />
      </div>
    </section>
  );
};

export default HeroSection;
