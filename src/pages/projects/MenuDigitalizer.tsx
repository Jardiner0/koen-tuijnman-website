import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import projectImage from "@/assets/project-1.jpg";

const MenuDigitalizer = () => {
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
            Menu Digitalizer
          </h1>

          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
            AI-powered tool that transforms physical restaurant and food truck menus
            into beautiful digital formats, making menu management effortless.
          </p>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-4xl">
          <img
            src={projectImage}
            alt="Menu Digitalizer Screenshot"
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
              The Menu Digitalizer simplifies the process of converting physical restaurant menus into digital formats.
              Using advanced AI vision technology, it extracts menu items, prices, and descriptions from photos,
              enabling restaurant owners to quickly create and update their digital presence without manual data entry.
            </p>
          </div>

          {/* Technical Stack */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Technical Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {["OpenAI Vision", "React", "Supabase", "TypeScript"].map((tool) => (
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
                • AI-powered menu extraction from photos with high accuracy OCR and image recognition
              </li>
              <li className="text-muted-foreground font-body leading-relaxed">
                • Automatic categorization of menu items by type (appetizers, mains, desserts, etc.)
              </li>
              <li className="text-muted-foreground font-body leading-relaxed">
                • Real-time editing and customization of extracted menu data
              </li>
              <li className="text-muted-foreground font-body leading-relaxed">
                • Export to multiple formats including web-embeddable widgets and PDF
              </li>
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              <strong className="text-foreground">Challenge:</strong> Handling diverse menu layouts and handwritten text with varying quality and lighting conditions.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              <strong className="text-foreground">Solution:</strong> Implemented a multi-stage processing pipeline combining OpenAI's Vision API
              with custom preprocessing algorithms to normalize images before extraction. Added confidence scoring to flag
              low-confidence extractions for manual review, ensuring data quality.
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Results & Impact
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              The tool has successfully processed hundreds of menus with 95%+ accuracy on structured menu layouts.
              Early users report saving 3-4 hours per menu update cycle, enabling them to focus on their core business
              rather than administrative tasks. The platform continues to evolve with feedback from restaurant owners
              and food truck operators.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuDigitalizer;
