import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
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
      
      <About />
      
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
      
      <Footer />
    </div>
  );
};

export default Index;
