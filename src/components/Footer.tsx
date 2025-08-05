import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-secondary/50 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made by{" "}
            <span className="gradient-primary bg-clip-text text-transparent font-semibold">
              Zoe dev
            </span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Zoe Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;