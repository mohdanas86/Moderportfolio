"use client";

import React from "react";
import ScrollDownButton from "./ScrollDownButton";
import ParallaxElement from "./ParallaxElement";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { AnimatedSocialBeam } from "./_animations/AnimatedSocialBeam";
import { SparklesText } from "@/components/ui/sparkles-text";

/**
 * Hero section component displaying main introduction,
 * social links, and statistics
 * @component
 */
const Hero = () => {
  return (
    <div
      className="py-4 lg:py-16 relative w-full"
      id="home"
    >
      {/* Content with higher z-index */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center items-start justify-center">
        <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl lg:mt-12 mt-0">
          <ScrollVelocityRow baseVelocity={4} direction={1}>
            <SparklesText>
              <h1 className="text-7xl text-left lg:text-center lg:text-8xl font-bold text-white tracking-wider">
                Software
              </h1>
            </SparklesText>
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={12} direction={-1}>
            <h1 className="text-7xl text-left lg:text-center lg:text-8xl font-bold text-[#6a6868] tracking-wider">
              Developer
            </h1>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        <ParallaxElement speed={0.2} direction="horizontal" disabled>
          <p className="text-sm sm:text-base lg:text-lg text-[#b5b0b0] lg:mt-6 mt-4 text-left lg:text-center lg:px-0 px-2 max-w-3xl leading-relaxed">
            Full-Stack Software Developer specializing in <span className="text-white font-medium">React, Next.js, TypeScript, Node.js, and Cloud Architectures</span>.
            I build scalable, performant web applications and AI-driven platforms with clean code, strong system design, and accessible user experiences.
          </p>
        </ParallaxElement>
        <div className="w-full flex justify-center mt-2">
          <AnimatedSocialBeam />
        </div>
        {/* Scroll down button */}
        <ScrollDownButton />
      </div>


    </div>
  );
};

export default Hero;

