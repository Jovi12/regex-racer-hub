import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Jovi12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jovi-dsilva-8ab392235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 DevTools Hub | Built for Developers by Developers
          </p>
          {/* Ad placeholder for future Google AdSense integration */}
          {/* <div className="w-full max-w-2xl h-24 border border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center text-muted-foreground/50 text-xs">
            Ad Space (728x90)
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
