"use client";

import dynamic from "next/dynamic";
import ScrollReveal from "./_components/ScrollReveal";
import { ParticalsBackground } from "./_components/_backgrounds/ParticalsBackground";

// Dynamically import components with loading states for better performance
const Hero = dynamic(() => import("./_components/Hero"), {
  loading: () => <div className="min-h-screen" />,
  ssr: false, // Disable SSR for Hero component to prevent animation hydration issues
});
const Project = dynamic(() => import("./_components/Project"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: false, // Disable SSR for Project component
});
const Experience = dynamic(() => import("./_components/Experience"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: false, // Disable SSR for Experience component
});
const Techstack = dynamic(() => import("./_components/Techstack"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: false, // Disable SSR for Techstack component
});
const Contact = dynamic(() => import("./_components/Contact"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: false, // Disable SSR for Contact component
});
const Badges = dynamic(() => import("./_components/Badges"), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: false, // Disable SSR for Badges component to fix Google Cloud badge animations
});

export default function Home() {
  return (
    <div className="relative">
      <section id="hero" className="snap-start relative min-h-screen overflow-hidden">
        {/* Background - Confined to Hero Section */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 border">
          <ParticalsBackground />
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
