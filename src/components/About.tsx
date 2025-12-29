const About = () => {
  return (
    <section id="about" className="pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Two Column Layout: Image + Name | Bio */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Headshot and Name */}
          <div className="space-y-6">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQEOuXui7VR3_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713970751867?e=1768435200&v=beta&t=r9Vni2yg4bi6YbCtWYlnnQpUFdIfDAzaidvPHsh_nNI"
              alt="Koen Tuijnman"
              className="w-full aspect-square max-w-sm object-cover rounded-sm"
            />
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
                Koen Tuijnman
              </h1>
              <p className="text-lg text-muted-foreground font-body">
                Principal Product Manager
              </p>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-6 lg:pt-8">
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
      </div>
    </section>
  );
};

export default About;
