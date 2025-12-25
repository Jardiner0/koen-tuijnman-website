const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl mx-auto pt-16">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          KOEN TUIJNMAN
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-body font-normal mb-8">
          Principal Product Manager
        </p>
        <p className="text-base text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
          10 years of experience building digital products and AI solutions
          that serve 200,000+ customers across enterprise and SMB markets.
        </p>
      </div>
    </section>
  );
};

export default Hero;
