"use client";
import React from "react";
import ParallaxElement from "./ParallaxElement";
import TextAnimateReveal from "./_animations/TextAnimateReveal";
import { AnimatedBeamFrontend } from "./_animations/tech/AnimatedBeamFrontend";

/**
 * Techstack component displays the technology icons / animated beam.
 * Entrance animation is handled by the ScrollReveal wrapper in page.js.
 * @component
 */
const Techstack = () => {
  return (
    <div className="py-16 relative overflow-hidden w-full" id="tools">
      {/* Techstack Section Container */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.3}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold uppercase">
            <TextAnimateReveal text="Tools &" />
          </h1>
        </ParallaxElement>

        <ParallaxElement speed={0.5}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold text-[#353334] uppercase">
            <TextAnimateReveal text="Stacks" />
          </h1>
        </ParallaxElement>

        <AnimatedBeamFrontend />
      </div>
    </div>
  );
};

export default Techstack;
