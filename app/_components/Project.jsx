"use client";

import { Github, MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Projects } from "@/data/userData";
import { useParams, usePathname } from "next/navigation";

/**
 * Project component displays a grid of portfolio projects
 * with parallax effects and hover animations
 * @component
 */
const Project = () => {
  const currentPathName = usePathname();

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    console.log(currentPathName);

    if (currentPathName && currentPathName.endsWith("/project")) {
      console.log("Not on /project page, skipping animation.");
    }

    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);


  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"
        } py-16 relative overflow-hidden w-full`}
      id="project"
    >
      {/* Projects Section Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.3}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold">RECENT</h1>
        </ParallaxElement>

        <ParallaxElement speed={0.5}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold text-[#353334]">
            PROJECTS
          </h1>
        </ParallaxElement>

        {/* === PROJECTS === */}
        <ParallaxElement speed={0.2}>
          <div className="grid grid-cols-1">
            <div className="projects mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 w-full">
              {Projects &&
                Projects.map((v, i) => {
                  return (
                    <ProjectCard key={i} project={v} index={i} />
                  );
                })}
            </div>

            {currentPathName && !currentPathName.endsWith("/project") && (
              <div className="flex mt-4">
                <Link href="/project" className="m-auto">
                  <button className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-sm md:text-base font-medium">
                    <span>View All</span>
                    <MoveUpRight size={16} />
                  </button>
                </Link>
              </div>
            )}
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

export default Project;

/**
 * ProjectCard component with glowing effect
 * @component
 */
const ProjectCard = ({ project, index }) => {
  return (
    <ParallaxElement speed={0.1} disabled={true}>
      <div className={cn("min-h-[26rem] list-none group")}>
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3 bg-gradient-to-br from-gray-900/50 to-black/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
          <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-white/10 shadow-lg backdrop-blur-sm">
            {/* Project Image */}
            <figure className="relative w-full aspect-video overflow-hidden rounded-t-xl">
              <Image
                src={project?.img || '/placeholder.png'}
                alt={`${project?.title} project screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </figure>

            {/* Content */}
            <div className="relative flex flex-1 flex-col justify-between gap-3 p-4 md:p-6">
              {/* Title and Description */}
              <div className="space-y-3">
                <h3 className="pt-0.5 text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.875rem] text-balance text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project?.title}
                </h3>
                <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {project?.des}
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center justify-end gap-3 pt-2">
                {project.link && project.link.trim() !== "" && (
                  <Link href={project.link} target="_blank">
                    <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-sm font-medium">
                      <MoveUpRight size={16} />
                      Live
                    </button>
                  </Link>
                )}
                {project.repo && project.repo.trim() !== "" && (
                  <Link href={project.repo} target="_blank">
                    <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-sm font-medium">
                      <Github size={16} />
                      Code
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxElement>
  );
};