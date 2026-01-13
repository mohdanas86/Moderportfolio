"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ParallaxElement from "./ParallaxElement";
import { techIcons } from "@/data/userData";
import TextAnimateReveal from "./_animations/TextAnimateReveal";
import { File, Search, Settings } from "lucide-react"

import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { OrbitingIcons } from "./_animations/OrbitingIcons";
import { AnimatedBeamFrontend } from "./_animations/tech/AnimatedBeamFrontend";

/**
 * Techstack component displays a grid of technology icons
 * representing skills and tools used
 * @component
 */
const Techstack = () => {


  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"
        } py-16 relative overflow-hidden w-full`}
      id="tools"
    >
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

      <style jsx>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        }
        .opacity-0 {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>
    </div>
  );
};

export default Techstack;
