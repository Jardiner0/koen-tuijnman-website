import { ArrowUpRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { posts } from "@/data/posts";
import { SUBSTACK_URL } from "@/data/links";

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Writing
            </h2>
            <p className="text-muted-foreground font-body">
              Notes on AI products, answer engines and building things that work
            </p>
          </div>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
          >
            Subscribe on Substack
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.url} {...post} />
            ))}
          </div>
        ) : (
          <div className="p-8 border border-border rounded-sm bg-card">
            <p className="font-display text-lg font-bold text-foreground mb-2">
              First essay coming soon
            </p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
              Follow along on Substack to get new posts in your inbox.
            </p>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
            >
              Go to Substack
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
