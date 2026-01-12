"use client";

import { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";
import { experienceData } from "@/data/userData";

/**
 * Experience component displays professional work history
 * in a grid layout with parallax effects
 * @component
 */
const Experience = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);


  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"
        } py-16 relative overflow-hidden w-full`}
      id="experience"
    >
      {/* Experience Section Container */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.3}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold">
            EXPERIENCE
          </h1>
        </ParallaxElement>

        <ParallaxElement speed={0.2}>
          <div className="experience-list mt-12 grid grid-cols-1 gap-6 lg:gap-8 w-full">
            {experienceData.map((experience, index) => (
              <ParallaxElement
                speed={0.1 * (index + 1)}
                direction={index % 2 === 0 ? "horizontal" : "vertical"}
                key={index}
              >
                <div className="card w-full h-full min-h-[320px] md:min-h-[360px] lg:min-h-[280px] rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:bg-[#2726262e] text-white flex flex-col">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex-shrink-0 mb-4">
                      <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-tight">
                        {experience.title}
                      </h2>
                      <p className="text-[#948A8A] text-sm mb-1 font-medium">
                        {experience.company}
                      </p>
                      <p className="text-[#948A8A] text-sm mb-2">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex-grow">
                      <ul className="text-sm text-[#bfbaba] list-disc ml-6 space-y-1 leading-relaxed">
                        {experience.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
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
        .card {
          transform: translateY(5px);
          transition: transform 0.4s ease-in-out;
        }
        .card:hover {
          transform: translateY(0px);
        }
      `}</style>
    </div>
  );
};

export default Experience;
