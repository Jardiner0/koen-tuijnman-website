import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Divider */}
      <div className="container mx-auto max-w-5xl px-6">
        <div className="section-divider" />
      </div>
      
      <Projects />
      
      {/* Divider */}
      <div className="container mx-auto max-w-5xl px-6">
        <div className="section-divider" />
      </div>
      
      <Blog />

      {/* Divider */}
      <div className="container mx-auto max-w-5xl px-6">
        <div className="section-divider" />
      </div>

      <Skills />

      <Footer />
    </div>
  );
};

export default Index;
