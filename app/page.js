"use client";

import dynamic from "next/dynamic";

// Dynamically import components
const Hero = dynamic(() => import("./_components/Hero"));
const Project = dynamic(() => import("./_components/Project"));
const Experience = dynamic(() => import("./_components/Expreance"));
const Techstack = dynamic(() => import("./_components/Techstack"));
const Contact = dynamic(() => import("./_components/Contact"));

export default function Home() {
  return (
    <div className="">
      <section className="snap-start">
        <Hero />
      </section>

      <section className="snap-start">
        <Project />
      </section>

      <section className="snap-start">
        <Experience />
      </section>

      <section className="snap-start">
        <Techstack />
      </section>

      <section className="snap-start ">
        <Contact />
      </section>
    </div>
  );
}
