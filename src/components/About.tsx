import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Code, Download } from "lucide-react";

const About = () => {
  const skills = [
    "Scrum",
    "Python",
    "SQL",
    "HTML & CSS",
    "Jira",
    "Figma",
    "Salesforce",
    "PowerBI",
    "AWS",
    "Behavioral Modeling",
    "UX/UI",
    "Ecommerce",
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principal Product Manager with 10 years of experience building products that serve 200,000+ customers across enterprise and SMB markets
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
                    <h4 className="font-medium">Principal Product Manager - Platforms</h4>
                    <p className="text-sm text-muted-foreground">Spotzer Digital • 2022 - Present</p>
                    <p className="text-sm mt-2">Leading cross-functional team of 15, serving 200K+ customers via T-Mobile, Vodafone, Telstra</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Senior Product Manager</h4>
                    <p className="text-sm text-muted-foreground">Acroud • 2017 - 2021</p>
                    <p className="text-sm mt-2">Improved onboarding by 110%, driving $500K annual revenue increase</p>
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
                    <h4 className="font-medium">BA in Psychobiology</h4>
                    <p className="text-sm text-muted-foreground">University of Amsterdam • 2009 - 2012</p>
                    <p className="text-sm mt-2">Foundation in behavioral science and research methods</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Languages</h4>
                    <p className="text-sm text-muted-foreground">Multilingual</p>
                    <p className="text-sm mt-2">English, Dutch, Mandarin, Spanish, German</p>
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
