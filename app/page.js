import Hero from "./_components/Hero";
import Project from "./_components/Project";
import Experience from "./_components/Experience";
import Techstack from "./_components/Techstack";
import Badges from "./_components/Badges";
import Contact from "./_components/Contact";
import ScrollReveal from "./_components/ScrollReveal";
import { ParticalsBackground } from "./_components/_backgrounds/ParticalsBackground";
import { BackgroundPaths } from "./_components/_backgrounds/linesBackgounds";
import { RaysBackground } from "./_components/_backgrounds/RaysBackground";

export default function Home() {
  return (
    <div className="relative">
      {/* Background - Confined to Hero Section */}
      <section id="hero" className="snap-start relative min-h-screen overflow-hidden mt-10 lg:mt-0">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <RaysBackground />
        </div>
        {/* Hero Content */}
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      <section id="projects" className="snap-start relative">
        <ScrollReveal animation="fade-up">
          <Project />
        </ScrollReveal>
      </section>

      <section id="experience" className="snap-start relative">
        <ScrollReveal animation="fade-up" delay={0.1}>
          <Experience />
        </ScrollReveal>
      </section>

      <section id="badges" className="snap-start relative">
        <Badges />
      </section>

      <section id="tools" className="snap-start relative">
        <ScrollReveal animation="fade-up" delay={0.3}>
          <Techstack />
        </ScrollReveal>
      </section>

      <section id="contact" className="snap-start relative">
        <ScrollReveal animation="fade-up" delay={0.4}>
          <Contact />
        </ScrollReveal>
      </section>
    </div>
  );
}
