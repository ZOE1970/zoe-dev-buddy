import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-secondary opacity-50"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 gradient-accent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 gradient-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Code className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Full Stack Developer</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-primary bg-clip-text text-transparent animate-glow">
                Zoe Dev
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Crafting digital experiences with{" "}
              <span className="text-primary font-semibold">7 years</span> of expertise in modern web technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="premium" size="xl" className="group">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
              <Button variant="contact" size="xl">
                Get In Touch
              </Button>
            </div>
            
            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              {["TypeScript", "Node.js", "PHP", "Laravel", "React"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary/50 border border-secondary rounded-full text-sm font-medium transition-smooth hover:bg-secondary/80 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 scale-110 animate-glow"></div>
              <img
                src="/lovable-uploads/9a9e45fe-626c-49de-bd61-6e5e3908daa3.png"
                alt="Zoe Dev - Full Stack Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-elevated border-4 border-primary/20 transition-smooth hover:border-primary/40 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;