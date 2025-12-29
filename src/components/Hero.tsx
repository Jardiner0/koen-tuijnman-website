const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Image (takes up most of the left side) */}
      <div className="w-full lg:w-[60%] h-[50vh] lg:h-screen">
        <img
          src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/499bbc80ffd91eb0216d4a48c9bca9610aef20c9/big-9ea4c0d19a2f8566fe3b190af06bb823.jpg"
          alt="Makalu Base Camp, Nepal"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Right Side - Name, Title, and About */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 sm:px-12 py-12 lg:py-0">
        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            KOEN TUIJNMAN
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-body font-normal">
            Principal Product Manager
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-4 max-w-xl">
          <p className="text-sm sm:text-base text-foreground font-body leading-relaxed">
            I'm a Principal Product Manager with a decade of experience turning complex problems into elegant solutions. Currently, I lead a cross-functional team of 15 at Spotzer Digital, building platforms that power digital presence for 200K+ small businesses through partners like T-Mobile, Vodafone, and Telstra.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
            My background in Psychobiology from the University of Amsterdam gives me a unique lens on user behavior. I combine this with strong technical acumen—Python, SQL, and cloud infrastructure—to build products that not only work but resonate.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
            Now I'm channeling my expertise into personal AI projects: tools that digitize restaurant menus, summarize handwritten journals, and automate the mundane so we can focus on what matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
