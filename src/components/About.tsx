const About = () => {
  const skills = {
    "Product & Strategy": ["Scrum", "Jira", "Roadmapping", "User Research"],
    "Technical": ["Python", "SQL", "HTML & CSS", "AWS"],
    "Design & Analytics": ["Figma", "PowerBI", "UX/UI", "Behavioral Modeling"],
    "Domain": ["Ecommerce", "SaaS", "AI/ML", "Enterprise Platforms"],
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            About
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Placeholder for headshot */}
          <div className="flex items-start">
            <div className="w-full aspect-square max-w-sm bg-secondary rounded-sm flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Photo</span>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-6">
            <p className="text-foreground font-body leading-relaxed">
              I'm a Principal Product Manager with a decade of experience turning complex problems into elegant solutions. Currently, I lead a cross-functional team of 15 at Spotzer Digital, building platforms that power digital presence for 200K+ small businesses through partners like T-Mobile, Vodafone, and Telstra.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              My background in Psychobiology from the University of Amsterdam gives me a unique lens on user behavior. I combine this with strong technical acumen—Python, SQL, and cloud infrastructure—to build products that not only work but resonate.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Now I'm channeling my expertise into personal AI projects: tools that digitize restaurant menus, summarize handwritten journals, and automate the mundane so we can focus on what matters.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-16" />

        {/* Skills Section */}
        <div>
          <h3 className="font-display text-xl font-bold text-foreground mb-8">
            Proficient In
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
