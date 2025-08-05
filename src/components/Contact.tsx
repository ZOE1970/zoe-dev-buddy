import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+2349016689243",
      href: "tel:+2349016689243",
      description: "Call me directly"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hephzibaholaolu3@gmail.com",
      href: "mailto:hephzibaholaolu3@gmail.com",
      description: "Send me an email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "09016689243",
      href: "https://wa.me/2349016689243",
      description: "Chat on WhatsApp"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 gradient-accent opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card
              key={method.title}
              className="p-6 bg-secondary/30 border-secondary/50 hover:bg-secondary/50 transition-smooth hover:shadow-glow group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-xl mb-4 group-hover:scale-110 transition-smooth">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                {method.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              <a
                href={method.href}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="text-primary hover:text-accent transition-smooth font-medium"
              >
                {method.value}
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="premium" size="xl" className="group">
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Start a Project
          </Button>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for freelance projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;