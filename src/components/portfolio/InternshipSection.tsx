
import { useEffect, useRef } from "react";
import { Building2, BarChart3, Database, TrendingUp } from "lucide-react";

const InternshipSection = () => {
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

  const achievements = [
    {
      icon: BarChart3,
      title: "Dashboard Development",
      description: "Built comprehensive Power BI dashboards for business insights"
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Cleaned and transformed large datasets for analysis"
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Provided actionable insights to solve critical business problems"
    }
  ];

  return (
    <section id="internships" ref={sectionRef} className="min-h-screen flex items-center py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="relative pl-20">
              {/* Internship Card */}
              <div className="mb-12">
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                
                <div className="p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-[1.02] group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 mr-6 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Data Analyst Intern</h3>
                        <h4 className="text-xl text-primary font-semibold mb-1">Bharti Airtel</h4>
                        <p className="text-muted-foreground">2023 - 2024</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Contributed to building AI solutions to automate data insight generation from natural language - users can simply write their needs and get explained answers based on data. Focused on creating meaningful visualizations and deriving actionable insights from complex datasets.
                  </p>

                  {/* Achievements Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="p-6 rounded-2xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all duration-300 text-center group-hover:transform group-hover:scale-105"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <achievement.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                        <h5 className="font-semibold mb-2">{achievement.title}</h5>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills Used */}
                  <div className="mt-8">
                    <h5 className="font-semibold mb-4 text-lg">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-3">
                      {["Power BI", "SQL", "Data Analysis", "Business Intelligence", "Data Visualization"].map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "6+", label: "Months Experience" },
              { number: "10+", label: "Dashboards Built" },
              { number: "5+", label: "Business Problems Solved" },
              { number: "1", label: "Major Telecom Company" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
