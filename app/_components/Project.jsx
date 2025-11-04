"use client";

import { Github, MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

/**
 * Project component displays a grid of portfolio projects
 * with parallax effects and hover animations
 * @component
 */
const Project = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const Projects = [
    {
      id: "POWERGRID Inventory Management System",
      img: "/dashboard.png",
      title: "POWERGRID Inventory Management System",
      des: "A comprehensive, inventory management, demand forecasting, and procurement optimization.",
      repo: "https://github.com/mohdanas86/POWERGRID-Inventory-Management-System",
      link: "",
    },
    {
      img: "/smartcrop.png",
      title: "Smart Crop Advisory System",
      des: "AI-powered crop disease detection platform that provides instant diagnosis and treatment recommendations for farmers.",
      repo: "https://github.com/mohdanas86/agrilenses_frontend",
      link: "https://agrilenses.netlify.app/",
    },
    {
      img: "/imgrithm.png",
      title: "Image Compression Tool",
      des: "Free online image compression tool supporting bulk optimization and WebP conversion with minimal quality loss.",
      repo: "",
      link: "https://imgrithm.tech/",
    },
    {
      img: "/fynsera.png",
      title: "Fynnsera – AI Financial Assistant",
      des: "AI platform with real-time financial analytics and personalized chatbot assistance.",
      repo: "https://github.com/mohdanas86/fynnsera",
      link: "https://fynsera.netlify.app/",
    },
    {
      img: "/ainotestaker.png",
      title: "AI Notes Taker",
      des: "PDF text analysis tool that generates summaries and answers with integrated auth and payment system.",
      repo: "https://github.com/mohdanas86/ainotestaker",
      link: "https://ainotestaker.netlify.app/",
    },
    {
      img: "/anaspice.png",
      title: "AnaSpice – Food Delivery App",
      des: "Food delivery platform with real-time order tracking and responsive design.",
      repo: "https://github.com/mohdanas86/anaspiceFood.git",
      link: "https://anaspice.netlify.app/",
    },
    {
      img: "/blog-backend.png",
      title: "Blog API Platform",
      des: "RESTful blog backend with Express.js, MongoDB, and Redis featuring caching and Docker containerization.",
      repo: "https://github.com/mohdanas86/Blog-CRUD",
      link: "",
    },
  ];

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
          <div className="projects mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            {Projects &&
              Projects.map((v, i) => {
                return (
                  <ProjectCard key={i} project={v} index={i} />
                );
              })}
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ParallaxElement speed={0.1} disabled={true}>
      <div className={cn("min-h-[24rem] list-none")}>
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
          {/* Disable glowing effect on mobile for performance */}
          {!isMobile && (
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
          )}
          <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden">
            {/* Project Image */}
            <figure className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-gray-900">
              <Image
                src={project?.img || '/placeholder.png'}
                alt={`${project?.title} project screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover md:transition-transform md:duration-500 md:hover:scale-110"
                loading="lazy"
                quality={isMobile ? 75 : 85}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
            </figure>

            {/* Content */}
            <div className="relative flex flex-1 flex-col justify-between gap-3 p-2">
              {/* Title and Description */}
              <div className="space-y-3">
                <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                  {project?.title}
                </h3>
                <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400">
                  {project?.des}
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center justify-end gap-3 pt-2">
                {project.link && project.link.trim() !== "" && (
                  <Link href={project.link} target="_blank">
                    <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                      <MoveUpRight size={18} />
                    </button>
                  </Link>
                )}
                {project.repo && project.repo.trim() !== "" && (
                  <Link href={project.repo} target="_blank">
                    <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                      <Github size={18} />
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
