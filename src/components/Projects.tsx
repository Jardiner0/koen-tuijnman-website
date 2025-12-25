import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Menu Digitalizer",
      description: "AI-powered tool that transforms physical restaurant and food truck menus into beautiful digital formats, making menu management effortless.",
      tools: ["OpenAI Vision", "React", "Supabase", "TypeScript"],
      link: "#",
    },
    {
      title: "Journal Summarizer",
      description: "Converts handwritten notes from Supernote into structured summaries, actionable tasks, and insights using AI-powered handwriting recognition.",
      tools: ["Claude API", "OCR", "LangChain", "Python"],
      link: "#",
    },
    {
      title: "AI Content Solutions",
      description: "Scalable AI content generation system for digital marketing products, accelerating product delivery by 50% for enterprise clients.",
      tools: ["OpenAI API", "AWS", "PostgreSQL", "Python"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground font-body">
            Personal AI projects and enterprise solutions
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
