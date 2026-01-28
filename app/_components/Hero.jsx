"use client";

import React, { useEffect, useState } from "react";
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
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 0.2); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"} py-4 lg:py-16 relative w-full `}
      id="home"
    >
      {/* Content with higher z-index */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center items-start">
        <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl lg:mt-12 mt-0">
          <ScrollVelocityRow baseVelocity={5} direction={1}>
            <SparklesText>
              <h1 className="text-7xl text-left lg:text-center lg:text-8xl font-bold text-white tracking-wider">
                Software
              </h1>
            </SparklesText>
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={20} direction={-1}>
            <h1 className="text-7xl text-left lg:text-center lg:text-8xl font-bold text-[#5A5A5A] tracking-wider">
              Developer
            </h1>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        <ParallaxElement speed={0.2} direction="horizontal" disabled>
          <p className="text-lg text-[#A8A8A8] lg:mt-6 mt-4 text-left lg:text-center lg:px-0 px-2">
            Specializing in React, Node.js, and modern frameworks to build
            scalable web solutions. I transform complex requirements into clean,
            maintainable code with a focus on performance, accessibility, and user
            experience. From database architecture to responsive interfaces, I
            deliver end-to-end solutions that drive business value.
          </p>
        </ParallaxElement>
        <ParallaxElement speed={0.2} direction="horizontal" disabled className="ml-4 lg:ml-0">
          <AnimatedSocialBeam />
        </ParallaxElement>
        {/* Scroll down button */}
        <ScrollDownButton />
      </div >

      <style jsx>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        .opacity-0 {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>
    </div >
  );
};

export default Hero;
