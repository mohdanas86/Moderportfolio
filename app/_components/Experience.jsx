"use client";

import { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";
import { experienceData } from "@/data/userData";
import TextAnimateReveal from "./_animations/TextAnimateReveal";

/**
 * Experience component displays professional work history
 * in a grid layout with parallax effects
 * @component
 */
const Experience = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateFlags = () => {
      setIsMobile(media.matches);
      setPrefersReducedMotion(motionMedia.matches);
    };

    updateFlags();
    media.addEventListener("change", updateFlags);
    motionMedia.addEventListener("change", updateFlags);

    return () => {
      media.removeEventListener("change", updateFlags);
      motionMedia.removeEventListener("change", updateFlags);
    };
  }, []);

  const getResponsibilities = (experience) => {
    if (Array.isArray(experience?.responsibilities)) {
      return experience.responsibilities;
    }

    if (Array.isArray(experience?.contributions)) {
      return experience.contributions
        .map((entry) => {
          if (!entry) return null;
          if (typeof entry === "string") return entry;
          const org = entry.org ? `${entry.org}: ` : "";
          return `${org}${entry.detail || "Contribution details"}`;
        })
        .filter(Boolean);
    }

    if (experience?.description) {
      return [experience.description];
    }

    return ["Details will be added soon."];
  };

  const getCompany = (experience) =>
    experience?.company || experience?.organization || "Organization";

  const getDuration = (experience) =>
    experience?.duration || experience?.period || "";

  const getMeta = (experience) =>
    [experience?.location, experience?.type].filter(Boolean).join(" • ");

  const disableParallax = isMobile || prefersReducedMotion;


  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"
        } py-16 relative overflow-hidden w-full`}
      id="experience"
    >
      {/* Experience Section Container */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.3} disabled={disableParallax}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold">
            <TextAnimateReveal text="EXPERIENCE" />
          </h1>
        </ParallaxElement>

        <ParallaxElement speed={0.2} disabled={disableParallax}>
          <div className="experience-list mt-12 grid grid-cols-1 gap-6 lg:gap-8 w-full">
            {experienceData.map((experience, index) => (
              <ParallaxElement
                speed={0.1 * (index + 1)}
                direction={index % 2 === 0 ? "horizontal" : "vertical"}
                disabled={disableParallax}
                key={index}
              >
                {(() => {
                  const responsibilities = getResponsibilities(experience);
                  const company = getCompany(experience);
                  const duration = getDuration(experience);
                  const meta = getMeta(experience);
                  const entranceDelay = `${Math.min(index * 80, 420)}ms`;

                  return (
                    <div
                      className="w-full h-full min-h-[320px] md:min-h-[360px] lg:min-h-[280px] rounded-xl overflow-hidden text-white flex flex-col transform-gpu transition-[transform,opacity,background-color] duration-500 hover:bg-[#2726262e] hover:-translate-y-1 md:hover:scale-[1.015]"
                      style={{
                        opacity: showAnimation ? 1 : 0,
                        transform: showAnimation
                          ? "translate3d(0, 0, 0)"
                          : "translate3d(0, 14px, 0)",
                        transitionDelay: entranceDelay,
                        willChange: "transform, opacity",
                      }}
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex-shrink-0 mb-4">
                          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-tight">
                            {experience.title}
                          </h2>
                          <p className="text-[#948A8A] text-sm mb-1 font-medium">
                            {company}
                          </p>
                          <p className="text-[#948A8A] text-sm mb-2">
                            {duration}
                          </p>
                          {meta ? (
                            <p className="text-xs text-[#8f8f8f] uppercase tracking-wide">
                              {meta}
                            </p>
                          ) : null}
                        </div>
                        <div className="flex-grow">
                          <ul className="text-sm text-[#bfbaba] list-disc ml-6 space-y-1 leading-relaxed">
                            {responsibilities.map((item, i) => (
                              <li key={`${experience.title}-${i}`}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })()}
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

export default Experience;
