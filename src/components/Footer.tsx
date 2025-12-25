import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer id="contact" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact CTA */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            
            <a className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors" href="mailto:koentuijnman90@gmail.com">koentuijnman90@gmail.com<Mail className="h-4 w-4" />
              hello@koentuijnman.com
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground mb-4 font-body">
              Connect
            </p>
            <div className="flex md:justify-end gap-4">
              <a href="https://github.com/Jardiner0" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@koentuijnman.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-12" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground font-body">
          <p>&copy; {new Date().getFullYear()} Koen Tuijnman. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;