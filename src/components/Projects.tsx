import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Menu Digitalizer",
      description: "AI-powered tool that transforms physical restaurant and food truck menus into beautiful digital formats, making menu management effortless.",
      image: project1,
      tools: ["OpenAI Vision", "React", "Supabase", "Tailwind"],
      languages: ["TypeScript", "Python", "SQL"],
    },
    {
      title: "Journal Summarizer",
      description: "Converts handwritten notes from Supernote into structured summaries, actionable tasks, and insights using AI-powered handwriting recognition.",
      image: project2,
      tools: ["Claude API", "OCR", "LangChain", "React"],
      languages: ["Python", "TypeScript"],
    },
    {
      title: "AI Content Solutions",
      description: "Scalable AI content generation system for digital marketing products, accelerating product delivery by 50% for enterprise clients.",
      image: project3,
      tools: ["OpenAI API", "Python", "AWS", "PostgreSQL"],
      languages: ["Python", "SQL", "HTML & CSS"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Personal AI projects and enterprise solutions I've built to improve life and work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
