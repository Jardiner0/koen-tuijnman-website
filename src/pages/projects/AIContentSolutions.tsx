import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import projectImage from "@/assets/project-3.jpg";

const AIContentSolutions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            AI Content Solutions
          </h1>

          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
            Scalable AI content generation system for digital marketing products, accelerating
            product delivery by 50% for enterprise clients.
          </p>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-4xl">
          <img
            src={projectImage}
            alt="AI Content Solutions Screenshot"
            className="w-full rounded-sm border border-border"
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Overview */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Overview
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              AI Content Solutions is an enterprise-grade platform that automates the generation of marketing content
              for small business digital products. Built to support white-label partners like T-Mobile and Vodafone,
              the system generates customized website content, SEO-optimized copy, and social media posts at scale.
              By integrating AI-driven content creation into the product onboarding flow, the platform reduced
              time-to-market for new digital products by 50% while maintaining brand consistency.
            </p>
          </div>

          {/* Technical Stack */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Technical Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {["OpenAI API", "AWS", "PostgreSQL", "Python"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-body font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              <li className="text-muted-foreground font-body leading-relaxed">
                • Industry-specific content generation using fine-tuned prompts for 15+ business verticals
              </li>
              <li className="text-muted-foreground font-body leading-relaxed">
                • Multi-tenant architecture supporting brand customization for white-label partners
              </li>
              <li className="text-muted-foreground font-body leading-relaxed">
                • Quality assurance pipeline with automated content scoring and human-in-the-loop review
              </li>
              <li className="text-muted-foreground font-body leading-relaxed">
                • Real-time content generation APIs integrated directly into product provisioning workflows
              </li>
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              <strong className="text-foreground">Challenge:</strong> Balancing content quality, generation speed, and cost
              at enterprise scale while serving 200,000+ customers across multiple brands and industries.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              <strong className="text-foreground">Solution:</strong> Designed a tiered generation strategy using GPT-3.5 Turbo
              for initial drafts and GPT-4 for quality refinement only when needed. Implemented intelligent caching of common
              content patterns and reusable components, reducing API costs by 60%. Built a feedback loop system that continuously
              improved prompt templates based on user edits, achieving a 92% acceptance rate for generated content.
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Results & Impact
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              The platform has generated content for over 50,000 small business websites, reducing manual content
              creation time from 2-3 hours to under 5 minutes per product. Partner satisfaction scores increased
              by 35% due to faster time-to-market, and the system maintains a 92% content acceptance rate with
              minimal human intervention. The architecture has proven scalable, handling peaks of 1,000+ concurrent
              content generation requests during product launches.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIContentSolutions;
