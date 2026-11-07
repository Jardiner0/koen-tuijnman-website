import type { Post } from "@/data/posts";

const BlogCard = ({ title, excerpt, date, readTime, url }: Post) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 border border-border rounded-sm bg-card hover:bg-secondary/50 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
    >
      <article>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-body">
          <time>{date}</time>
          <span>·</span>
          <span>{readTime}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
          {excerpt}
        </p>
        <span className="text-sm text-accent font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
          Read on Substack
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </span>
      </article>
    </a>
  );
};

export default BlogCard;
