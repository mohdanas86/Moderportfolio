"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ParallaxElement from "./ParallaxElement";
import { techIcons } from "@/data/userData";

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
            Tools &
          </h1>
        </ParallaxElement>

        <ParallaxElement speed={0.5}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold text-[#353334] uppercase">
            Stacks
          </h1>
        </ParallaxElement>

        <ParallaxElement speed={0.2}>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {techIcons.map((tech, index) => (
              <ParallaxElement
                key={index}
                speed={0.05 * ((index % 5) + 1)}
                direction={index % 2 === 0 ? "vertical" : "horizontal"}
              >
                <div className="flex flex-col items-center justify-center bg-white lg:p-4 p-3 rounded-lg shadow-lg transform hover:scale-110 transition duration-500 lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]">
                  <div className="relative w-full h-full max-w-[50px] max-h-[50px]">
                    <Image
                      src={tech.src}
                      alt={`${tech.name} technology icon`}
                      fill
                      sizes="50px"
                      className="object-contain transition duration-500 ease-in-out transform hover:scale-125"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ParallaxElement>
            ))}
          </div>
        </ParallaxElement>
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
