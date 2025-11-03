"use client";

import dynamic from "next/dynamic";
import ScrollReveal from "./_components/ScrollReveal";
import { RaysBackground } from "./_components/_backgounds/RaysBackground";
import { BackgroundPaths } from "./_components/_backgounds/linesBackgounds";

// Dynamically import components with loading states for better performance
const Hero = dynamic(() => import("./_components/Hero"), {
  loading: () => <div className="min-h-screen" />,
});
const Project = dynamic(() => import("./_components/Project"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: true,
});
const Experience = dynamic(() => import("./_components/Experience"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: true,
});
const Techstack = dynamic(() => import("./_components/Techstack"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: true,
});
const Contact = dynamic(() => import("./_components/Contact"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: true,
});
const Badges = dynamic(() => import("./_components/Badges"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: true,
});

export default function Home() {
  return (
    <div className="relative">
      <section id="hero" className="snap-start relative min-h-screen overflow-hidden">
        {/* Rays Background - Confined to Hero Section */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* <RaysBackground /> */}
          <BackgroundPaths />
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
