import BlogCard from "./BlogCard";

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
    <section id="blog" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Writing
          </h2>
          <p className="text-muted-foreground font-body">
            Thoughts on AI product development and lessons learned
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
