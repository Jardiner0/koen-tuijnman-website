import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  link?: string;
  isExternal?: boolean;
}

const ProjectCard = ({ title, description, tools, link, isExternal = false }: ProjectCardProps) => {
  return (
    <div className="group p-6 border border-border rounded-sm bg-card hover:bg-secondary/50 transition-all duration-200 hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        {link && (
          isExternal ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <Link
              to={link}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${title}`}
            >
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          )
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
          {isExternal ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
            >
              View Project →
            </a>
          ) : (
            <Link
              to={link}
              className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
            >
              View Details →
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
