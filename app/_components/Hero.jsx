"use client";

import React, { useEffect, useState } from "react";
import ScrollDownButton from "./ScrollDownButton";
import ParallaxElement from "./ParallaxElement";

const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 20); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"} py-16 relative overflow-hidden`}
      id="home"
    >
      <ParallaxElement speed={0.3}>
        <h1 className="text-5xl text-center lg:text-8xl font-bold">Full-Stack</h1>
      </ParallaxElement>
      
      <ParallaxElement speed={0.5}>
        <h1 className="text-5xl text-center lg:text-8xl font-bold text-[#353334]">
          Software Engineer
        </h1>
      </ParallaxElement>

      <ParallaxElement speed={0.2}>
        <p className="text-lg text-[#948A8A] lg:mt-6 mt-4 w-full text-center lg:px-0 px-2">
          Architecting modern applications using robust backend systems and
          intuitive frontend interfaces. I turn complex problems into efficient,
          full-cycle solutions.
        </p>
      </ParallaxElement>

      {/* STAT */}
      <ParallaxElement speed={0.4}>
        <div className="flex flex-wrap justify-center lg:justify-center items-center lg:gap-8 gap-6 mt-12">
          {/* Experience */}
          <ParallaxElement speed={-0.2} direction="horizontal">
            <div className="shadow lg:border overflow-hidden bg-transparent text-white lg:px-8 px-0 py-4 rounded-lg lg:rounded-xl flex flex-col">
              <h2 className="text-4xl lg:text-5xl font-bold">+13</h2>
              <p className="text-[#948A8A] font-semibold text-sm mt-2">
                MONTHS OF <br /> EXPERIENCE
              </p>
            </div>
          </ParallaxElement>

          {/* Projects */}
          <ParallaxElement speed={0.2}>
            <div className="shadow lg:border overflow-hidden bg-transparent text-white lg:px-8 px-0 py-4 rounded-lg lg:rounded-xl flex flex-col">
              <h2 className="text-4xl lg:text-5xl font-bold">+10</h2>
              <p className="text-[#948A8A] font-semibold text-sm mt-2">
                PROJECTS <br /> COMPLETED
              </p>
            </div>
          </ParallaxElement>

          {/* Clients */}
          <ParallaxElement speed={-0.2} direction="horizontal">
            <div className="shadow lg:border overflow-hidden bg-transparent text-white lg:px-8 px-0 py-4 rounded-lg lg:rounded-xl flex flex-col">
              <h2 className="text-4xl lg:text-5xl font-bold">+4</h2>
              <p className="text-[#948A8A] font-semibold text-sm mt-2">
                WORLDWIDE <br /> CLIENTS
              </p>
            </div>
          </ParallaxElement>
        </div>
      </ParallaxElement>
      
      {/* Scroll down button */}
      <ScrollDownButton />

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

export default Hero;
