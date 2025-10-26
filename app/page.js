"use client";

import dynamic from "next/dynamic";
import ScrollReveal from "./_components/ScrollReveal";
import { BackgroundPaths } from "@/app/_components/_backgounds/linesBackgounds";
import { RaysBackground } from "./_components/_backgounds/RaysBackground";

// Dynamically import components
const Hero = dynamic(() => import("./_components/Hero"));
const Project = dynamic(() => import("./_components/Project"));
const Experience = dynamic(() => import("./_components/Experience"));
const Techstack = dynamic(() => import("./_components/Techstack"));
const Contact = dynamic(() => import("./_components/Contact"));
const Badges = dynamic(() => import("./_components/Badges"));

export default function Home() {
  return (
    <div className="relative">
      <section id="hero" className="snap-start relative min-h-screen overflow-hidden">
        {/* Rays Background - Confined to Hero Section */}
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
