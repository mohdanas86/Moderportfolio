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
    <div className="">
      {/* <FloatingElements /> */}

      <section className="snap-start z-50">
        <Hero />
      </section>

      <section className="snap-start z-50">
        <Project />
      </section>

      <section className="snap-start z-50">
        <Experience />
      </section>

      <section className="snap-start z-50">
        <Badges />
      </section>

      <section className="snap-start z-50">
        <Techstack />
      </section>

      <section className="snap-start z-50 ">
        <Contact />
      </section>
    </div>
  );
}
