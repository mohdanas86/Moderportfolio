"use client";

import { Github, MoveUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { projectsData } from "@/data/projectsData";

/**
 * Project component displays a grid of portfolio projects
 * with parallax effects and hover animations
 * @component
 */
const Project = () => {
  const currentPathName = usePathname();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"} py-16 relative overflow-hidden w-full`}
      id="projects"
    >
      {/* Projects Section Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.3}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold uppercase tracking-tight">Recent</h1>
        </ParallaxElement>

        <ParallaxElement speed={0.5}>
          <h1 className="text-5xl text-center lg:text-7xl font-bold text-[#353334] uppercase tracking-tight">
            Projects
          </h1>
        </ParallaxElement>

        {/* === PROJECTS GRID === */}
        <ParallaxElement speed={0.2}>
          <div className="grid grid-cols-1">
            <div className="projects mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
              {projectsData &&
                projectsData.map((project, index) => (
                  <ProjectCard key={project.id || index} project={project} index={index} />
                ))}
            </div>

            {currentPathName && !currentPathName.endsWith("/project") && (
              <div className="flex mt-10">
                <Link href="/project" className="m-auto">
                  <button className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-gray-200 hover:border-[#FF7A00] hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 transition-all duration-300 text-sm md:text-base font-medium">
                    <span>View All Details</span>
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
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
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
 * ProjectCard component with glowing effect and direct action links
 * @component
 */
const ProjectCard = ({ project, index }) => {
  return (
    <div className={cn("min-h-[28rem] list-none group flex flex-col")}>
      <div className="relative h-full rounded-[1.25rem] border border-white/10 p-2 md:rounded-[1.5rem] md:p-3 bg-gradient-to-br from-gray-900/60 to-black/60 hover:shadow-2xl hover:shadow-[#FF7A00]/10 transition-all duration-500 flex flex-col justify-between">
        <GlowingEffect
          spread={45}
          glow={true}
          disabled={false}
          proximity={70}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 shadow-lg backdrop-blur-sm bg-[#121111]/80">
          {/* Project Image - Clickable to detail */}
          <Link href={`/project/${project.id}`} className="block relative w-full aspect-video overflow-hidden rounded-t-xl">
            <figure className="relative w-full h-full">
              <Image
                src={project?.thumbnail || '/placeholder.png'}
                alt={`${project?.title} project screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                  View Case Study
                </span>
              </div>
            </figure>
          </Link>

          {/* Content */}
          <div className="relative flex flex-1 flex-col justify-between gap-4 p-5 md:p-6">
            <div className="space-y-3">
              {/* Tech stack badges */}
              {project?.textStack && (
                <div className="flex flex-wrap gap-1.5">
                  {project.textStack.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Link href={`/project/${project.id}`}>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF7A00] transition-colors duration-300 line-clamp-1">
                  {project?.title}
                </h3>
              </Link>
              <p className="text-sm leading-relaxed text-gray-400 line-clamp-2">
                {project?.metaDescription}
              </p>
            </div>

            {/* Direct Action Links */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
              <Link
                href={`/project/${project.id}`}
                className="text-xs font-medium text-white/70 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Read Overview</span>
                <MoveUpRight size={13} />
              </Link>

              <div className="flex items-center gap-2">
                {project?.githubRepo && project.githubRepo !== "#" && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-all duration-200"
                    aria-label="GitHub Repository"
                    title="View Source Code"
                  >
                    <Github size={15} />
                  </a>
                )}
                {project?.previewLink && (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF7A00]/15 hover:bg-[#FF7A00]/25 text-[#FF7A00] border border-[#FF7A00]/30 text-xs font-semibold transition-all duration-200"
                    title="Open Live Preview"
                  >
                    <span>Live</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};