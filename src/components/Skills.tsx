import { Download } from "lucide-react";

const Skills = () => {
  const skills = {
    "Product & Strategy": ["Scrum", "Jira", "Roadmapping", "User Research"],
    "Technical": ["Python", "SQL", "HTML & CSS", "AWS"],
    "Design & Analytics": ["Figma", "PowerBI", "UX/UI", "Behavioral Modeling"],
    "Domain": ["Ecommerce", "SaaS", "AI/ML", "Enterprise Platforms"],
  };

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Proficient In
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="text-sm font-medium text-muted-foreground mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2.5 bg-secondary text-secondary-foreground rounded-full text-sm font-body min-h-[36px] inline-flex items-center justify-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CV Download Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium transition-all duration-200 hover:bg-primary/90 hover:shadow-lg min-h-[44px]"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
