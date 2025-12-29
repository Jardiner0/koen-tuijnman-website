import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import projectImage from "@/assets/project-2.jpg";

const JournalSummarizer = () => {
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
            Journal Summarizer
          </h1>

          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
            Converts handwritten notes from Supernote into structured summaries, actionable tasks,
            and insights using AI-powered handwriting recognition.
          </p>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-4xl">
          <img
            src={projectImage}
            alt="Journal Summarizer Screenshot"
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
              The Journal Summarizer bridges the gap between analog note-taking and digital productivity.
              It processes handwritten journal entries from digital notebooks like Supernote, extracting key
              themes, actionable items, and insights using advanced OCR and natural language processing.
              This allows users to maintain the cognitive benefits of handwriting while gaining the searchability
              and organization of digital tools.
            </p>
          </div>

          {/* Technical Stack */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Technical Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Claude API", "OCR", "LangChain", "Python"].map((tool) => (
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
                • Advanced handwriting recognition optimized for cursive and mixed writing styles
              </li>
              <li className="text-muted-foreground font-body leading-relaxed">
                • Automatic extraction of action items, questions, and key decisions from journal entries
              </li>
              <li className="text-muted-foreground font-body leading-relaxed">
                • Intelligent summarization that preserves context and emotional tone
              </li>
              <li className="text-muted-foreground font-body leading-relaxed">
                • Integration with task management tools to convert extracted actions into trackable todos
              </li>
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              <strong className="text-foreground">Challenge:</strong> Maintaining semantic context from freeform handwritten notes
              that often lack traditional document structure or clear sectioning.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              <strong className="text-foreground">Solution:</strong> Leveraged Claude's long-context capabilities to process entire
              journal pages holistically rather than line-by-line. Implemented a custom prompt engineering framework using
              LangChain to identify contextual markers (dates, headers, emphasis) and maintain narrative flow across
              fragmented thoughts. This approach achieved 85%+ accuracy in capturing user intent.
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Results & Impact
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Personal use has shown a 70% reduction in time spent reviewing past notes to extract action items.
              The system processes an average journal page in under 10 seconds while maintaining high fidelity to
              the original content. Users report that the summaries effectively capture the essence of their thoughts,
              making retrospectives and weekly planning significantly more efficient.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JournalSummarizer;
