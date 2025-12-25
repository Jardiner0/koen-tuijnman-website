import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  link?: string;
}

const ProjectCard = ({ title, description, tools, link }: ProjectCardProps) => {
  return (
    <div className="group p-6 border border-border rounded-sm bg-card hover:bg-secondary/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-lg font-bold text-foreground">
          {title}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`View ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
      <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-xs text-muted-foreground font-body"
          >
            {tool}
          </span>
        ))}
      </div>
      {link && (
        <div className="mt-4 pt-4 border-t border-border">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
          >
            View Project →
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
