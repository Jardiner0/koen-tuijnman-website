import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-sm font-medium tracking-wide text-foreground">
              Koen Tuijnman
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full pb-1"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full pb-1"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full pb-1"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full pb-1"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-secondary/50 rounded-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-up">
          <div className="px-6 py-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-3 hover:bg-secondary/50 px-3 rounded-sm min-h-[44px]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-3 hover:bg-secondary/50 px-3 rounded-sm min-h-[44px]"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-3 hover:bg-secondary/50 px-3 rounded-sm min-h-[44px]"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-3 hover:bg-secondary/50 px-3 rounded-sm min-h-[44px]"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
