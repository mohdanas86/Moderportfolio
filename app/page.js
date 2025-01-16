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
    <>
      <Hero />
      <div className="mt-24">
        <Project />
      </div>
      <div className="mt-24">
        <Experience />
      </div>
      <div className="lg:mt-24 mt-16">
        <Techstack />
      </div>
      <div className="mt-24">
        <Contact />
      </div>
    </>
  );
}
