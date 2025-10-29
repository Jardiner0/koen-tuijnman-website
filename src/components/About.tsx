import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Code, Download } from "lucide-react";

const About = () => {
  const skills = [
    "Product Management",
    "AI/ML Strategy",
    "Rapid Prototyping",
    "User Research",
    "Python",
    "TypeScript",
    "LangChain",
    "OpenAI API",
    "Claude API",
    "Vector Databases",
    "React",
    "FastAPI",
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI Product Manager specializing in turning complex AI concepts into practical, user-friendly solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Experience */}
            <Card className="border border-border bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Senior AI Product Manager</h4>
                    <p className="text-sm text-muted-foreground">Tech Startup • 2022 - Present</p>
                    <p className="text-sm mt-2">Leading AI product initiatives, built 8+ prototypes</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Product Manager</h4>
                    <p className="text-sm text-muted-foreground">SaaS Company • 2020 - 2022</p>
                    <p className="text-sm mt-2">Managed product roadmap, launched 3 major features</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border border-border bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">MS in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">University Name • 2018 - 2020</p>
                    <p className="text-sm mt-2">Focus: Machine Learning & AI</p>
                  </div>
                  <div>
                    <h4 className="font-medium">BS in Engineering</h4>
                    <p className="text-sm text-muted-foreground">University Name • 2014 - 2018</p>
                    <p className="text-sm mt-2">Graduated with Honors</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <Card className="border border-border bg-gradient-to-br from-card to-card/50 mb-12">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Skills & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button variant="accent" size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
