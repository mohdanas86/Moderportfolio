"use client";

import { Github, MoveUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ParallaxElement from "./ParallaxElement";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { projectsData } from "@/data/projectsData";
import TextAnimateReveal from "./_animations/TextAnimateReveal";

/**
 * Project component displays a grid of portfolio projects
 * with parallax effects, animated text reveals, and hover interactions.
 * @component
 */
const Project = () => {
  const currentPathName = usePathname();

  return (
    <div
      className="py-16 relative overflow-hidden w-full"
      id="projects"
    >
      {/* Projects Section Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ParallaxElement speed={0.3}>
            <h1 className="text-4xl text-center lg:text-7xl font-bold uppercase">
              <TextAnimateReveal text="Recent" />
            </h1>
          </ParallaxElement>

          <ParallaxElement speed={0.5}>
            <h1 className="text-4xl text-center lg:text-7xl font-bold uppercase text-[#353334]">
              <TextAnimateReveal text="Projects" />
            </h1>
          </ParallaxElement>

          <p className="text-base md:text-lg text-[#948A8A] max-w-3xl mx-auto leading-relaxed mt-4">
            Selected software engineering projects spanning AI systems, sandboxed runtime environments, and scalable full-stack applications.
          </p>
        </div>

        {/* === PROJECTS GRID === */}
        <ParallaxElement speed={0.2}>
          <div className="grid grid-cols-1">
            <div className="projects mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
              {projectsData &&
                projectsData.map((project, index) => (
                  <ProjectCard key={project.id || index} project={project} index={index} />
                ))}
            </div>

            {currentPathName && !currentPathName.endsWith("/project") && (
              <div className="flex justify-center mt-12">
                <Link href="/project">
                  <button className="group cursor-pointer flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-[#FF7A00]/10 hover:border-[#FF7A00]/50 text-white hover:text-[#FF7A00] transition-all duration-300 text-sm md:text-base font-medium shadow-lg hover:shadow-[#FF7A00]/10 hover:scale-[1.02]">
                    <span>Explore All Projects</span>
                    <MoveUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </ParallaxElement>
      </div>


    </div>
  );
};

export default Project;

/**
 * ProjectCard component with single unibody glass container, glowing effect, and direct action links
 * @component
 */
const ProjectCard = ({ project, index }) => {
  return (
    <div className={cn("h-full list-none group flex flex-col")}>
      <div className="relative h-full rounded-2xl border border-white/10 bg-[#121111]/80 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#FF7A00]/40 hover:bg-[#161515] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF7A00]/10">
        <GlowingEffect
          spread={45}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          borderWidth={1.5}
          variant="orange"
        />

        <div className="relative flex flex-col h-full z-10">
          {/* Project Image Header */}
          <Link
            href={`/project/${project.id}`}
            className="block relative w-full aspect-[16/9] overflow-hidden bg-black/40 border-b border-white/10 group/img"
          >
            <Image
              src={project?.thumbnail || "/placeholder.png"}
              alt={`${project?.title} project screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Subtle Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121111] via-black/20 to-transparent pointer-events-none" />

            {/* Top Badges: Project Number & Live Indicator */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
              <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white/90">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project?.siteUrl && (
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live</span>
                </span>
              )}
            </div>

            {/* Hover Action Badge */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30 backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/25 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span>View Case Study</span>
                <MoveUpRight size={13} />
              </span>
            </div>
          </Link>

          {/* Content Body */}
          <div className="relative flex flex-1 flex-col justify-between gap-4 p-5 md:p-6">
            <div className="space-y-3">
              {/* Tech stack badges */}
              {project?.textStack && (
                <div className="flex flex-wrap gap-1.5">
                  {project.textStack.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Link href={`/project/${project.id}`} className="block">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF7A00] transition-colors duration-300 line-clamp-2 min-h-[3.25rem] leading-snug">
                  {project?.title}
                </h3>
              </Link>
              <p className="text-sm leading-relaxed text-[#948A8A] line-clamp-2">
                {project?.metaDescription}
              </p>
            </div>

            {/* Direct Action Links */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
              <Link
                href={`/project/${project.id}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/80 hover:text-[#FF7A00] transition-colors group/link"
              >
                <span>Case Study</span>
                <MoveUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
              </Link>

              <div className="flex items-center gap-2">
                {project?.githubRepo && project.githubRepo !== "#" && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/75 hover:text-white border border-white/10 hover:border-white/25 transition-all duration-200"
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FF7A00]/15 hover:bg-[#FF7A00] text-[#FF7A00] hover:text-black border border-[#FF7A00]/30 hover:border-[#FF7A00] text-xs font-semibold transition-all duration-200 shadow-sm shadow-[#FF7A00]/10"
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