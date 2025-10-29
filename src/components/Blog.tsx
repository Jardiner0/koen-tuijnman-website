import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Building AI Products: Lessons from 15+ Projects",
      excerpt: "Key insights and frameworks I've developed while building AI prototypes for various industries.",
      date: "Mar 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "From Idea to MVP: The AI Product Playbook",
      excerpt: "A practical guide to rapidly prototyping AI solutions and validating them with real users.",
      date: "Feb 28, 2024",
      readTime: "7 min read",
    },
    {
      title: "Why Most AI Projects Fail (And How to Avoid It)",
      excerpt: "Common pitfalls in AI product development and strategies to build solutions that actually work.",
      date: "Feb 10, 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Latest Insights</h2>
          <p className="text-lg text-muted-foreground">
            Thoughts on AI product development, prototyping, and lessons learned
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
