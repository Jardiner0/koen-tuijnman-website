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

            <a className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-all duration-200 hover:gap-3 group" href="mailto:koentuijnman90@gmail.com">
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              koentuijnman90@gmail.com
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground mb-4 font-body">
              Connect
            </p>
            <div className="flex md:justify-end gap-4">
              <a href="https://github.com/Jardiner0" target="_blank" rel="noopener noreferrer" className="p-3 text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-secondary/50 rounded-sm hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/koen-tuijnman/" target="_blank" rel="noopener noreferrer" className="p-3 text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-secondary/50 rounded-sm hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:koentuijnman90@gmail.com" className="p-3 text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-secondary/50 rounded-sm hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Email">
                <Mail className="h-6 w-6" />
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