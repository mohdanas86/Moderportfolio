"use client";

import { useEffect, useRef, useState } from "react";
import ParallaxElement from "./ParallaxElement";
import { experienceData } from "@/data/userData";
import TextAnimateReveal from "./_animations/TextAnimateReveal";

/**
 * ExperienceCard - Individual experience card with its own scroll-reveal.
 * Each card observes itself so they stagger naturally as you scroll down.
 */
const ExperienceCard = ({ experience, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setVisible(true);

    // If already in viewport on mount (common on mobile for early cards), show immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
      return;
    }

    // Safety fallback: if observer never fires, force-reveal after 1.8s.
    const fallback = setTimeout(show, 1800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          clearTimeout(fallback);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const getResponsibilities = (exp) => {
    if (Array.isArray(exp?.responsibilities)) return exp.responsibilities;
    if (Array.isArray(exp?.contributions)) {
      return exp.contributions
        .map((entry) => {
          if (!entry) return null;
          if (typeof entry === "string") return entry;
          const org = entry.org ? `${entry.org}: ` : "";
          return `${org}${entry.detail || "Contribution details"}`;
        })
        .filter(Boolean);
    }
    if (exp?.description) return [exp.description];
    return ["Details will be added soon."];
  };

  const company = experience?.company || experience?.organization || "Organization";
  const duration = experience?.duration || experience?.period || "";
  const meta = [experience?.location, experience?.type].filter(Boolean).join(" • ");
  const responsibilities = getResponsibilities(experience);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(36px)",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
        willChange: "opacity, transform",
      }}
    >
      <div className="w-full rounded-2xl overflow-hidden text-white flex flex-col border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-[#FF7A00]/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF7A00]/5">
        <div className="p-6 md:p-7 flex flex-col h-full gap-4">
          {/* Header */}
          <div className="pb-4 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h2 className="text-lg md:text-xl font-bold text-white leading-snug">
                {experience.title}
              </h2>
              {duration && (
                <span className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FF7A00]/15 text-[#FF7A00] border border-[#FF7A00]/25 self-start sm:self-auto whitespace-nowrap">
                  {duration}
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <span className="font-medium text-white/80">{company}</span>
              {meta && (
                <>
                  <span className="text-white/30">•</span>
                  <span className="text-xs text-white/50">{meta}</span>
                </>
              )}
            </div>
          </div>

          {/* Responsibilities */}
          <ul className="flex flex-col gap-2.5">
            {responsibilities.map((item, i) => (
              <li key={`${experience.title}-${i}`} className="flex items-start gap-2.5 text-sm text-[#a8a3a3] leading-relaxed">
                <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF7A00]/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/**
 * Experience component displays professional work history
 * with scroll-based staggered card reveals and parallax headings.
 * @component
 */
const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="py-16 relative overflow-hidden w-full" id="experience">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <ParallaxElement speed={0.3} disabled={isMobile}>
            <h1 className="text-4xl text-center lg:text-7xl font-bold uppercase">
              <TextAnimateReveal text="Experience" />
            </h1>
          </ParallaxElement>

          <ParallaxElement speed={0.5} disabled={isMobile}>
            <h1 className="text-4xl text-center lg:text-7xl font-bold uppercase text-[#353334]">
              <TextAnimateReveal text="& Work" />
            </h1>
          </ParallaxElement>

          <p className="text-base md:text-lg text-[#948A8A] max-w-2xl mx-auto leading-relaxed mt-4">
            Professional roles, internships, and open-source contributions shaping a well-rounded engineering background.
          </p>
        </div>

        {/* Cards — each self-observes for staggered scroll reveal */}
        <div className="experience-list grid grid-cols-1 gap-5 lg:gap-6 w-full">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
