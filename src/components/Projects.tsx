import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI Customer Support Assistant",
      description: "Intelligent chatbot that handles customer queries with 95% accuracy, reducing support costs by 40%.",
      image: project1,
      tools: ["OpenAI GPT-4", "LangChain", "Pinecone", "React"],
      languages: ["Python", "TypeScript", "SQL"],
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "ML-powered dashboard providing real-time insights and predictions for business metrics.",
      image: project2,
      tools: ["TensorFlow", "Pandas", "D3.js", "FastAPI"],
      languages: ["Python", "JavaScript", "R"],
    },
    {
      title: "Automated Workflow Engine",
      description: "AI-driven automation system that streamlines complex business processes and decision-making.",
      image: project3,
      tools: ["Claude API", "n8n", "PostgreSQL", "Docker"],
      languages: ["Python", "TypeScript", "Bash"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of AI products I've built, from concept to deployment
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
