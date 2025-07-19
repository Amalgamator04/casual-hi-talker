
import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Phone, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prabhavs2004@gmail.com",
      href: "mailto:prabhavs2004@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7303025805",
      href: "tel:+917303025805"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Amalgamator04",
      href: "https://github.com/Amalgamator04"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prabhav-sharma-6b3ba8263",
      href: "https://www.linkedin.com/in/prabhav-sharma-6b3ba8263"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm a data analyst who has built AI solutions to automate insight extraction from natural language to insight generation with SQL connections. Always open to discussing new opportunities, innovative projects, or just having a chat about data science and AI development.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] border-border/50 hover:border-primary/50 bg-background/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Resume Download */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Download Resume</h4>
                    <p className="text-muted-foreground">Get a detailed overview of my experience and skills</p>
                  </div>
                  <Button
                    onClick={() => window.open("https://drive.google.com/file/d/16jckQOx1Hl9qgSVD4RPzNKqmwZo4a_Lk/view?usp=sharing", "_blank")}
                    className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                  >
                    <Download size={16} />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t border-border/20">
          <p className="text-muted-foreground mb-4">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground/60">
            © 2024 Prabhav Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
