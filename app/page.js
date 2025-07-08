"use client";

import dynamic from "next/dynamic";

// Dynamically import components
const Hero = dynamic(() => import("./_components/Hero"));
const Project = dynamic(() => import("./_components/Project"));
const Experience = dynamic(() => import("./_components/Expreance"));
const Techstack = dynamic(() => import("./_components/Techstack"));
const Contact = dynamic(() => import("./_components/Contact"));
const Badges = dynamic(() => import("./_components/Badges"))

export default function Home() {
  return (
    <div className="relative">
      <section className="snap-start relative">
        <Hero />
      </section>

      <section className="snap-start relative">
        <Project />
      </section>

      <section className="snap-start relative">
        <Experience />
      </section>

      <section className="snap-start relative">
        <Badges />
      </section>

      <section className="snap-start relative">
        <Techstack />
      </section>

      <section className="snap-start relative">
        <Contact />
      </section>
    </div>
  );
}
