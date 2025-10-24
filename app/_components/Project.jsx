"use client";

import { Github, MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";

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
      des: "The POWERGRID Inventory Management System is a comprehensive, production-ready solution designed for enterprise-level inventory management, demand forecasting, and procurement optimization.",
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
      className={`${
        showAnimation ? "fade-in" : "opacity-0"
      } py-16 relative overflow-hidden`}
      id="project"
    >
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
        <div className="projects lg:pr-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* <div className="projects pr-8 mt-12 flex flex-wrap items-center justify-center border gap-8 w-full"> */}
          {Projects &&
            Projects.map((v, i) => {
              return (
                <ParallaxElement speed={0.1} key={i} disabled={true}>
                  <div className="card w-full z-50 rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:bg-[#2726262e] text-white">
                    <figure className="h-[100%] relative w-full aspect-video">
                      <Image
                        src={v?.img || '/placeholder.png'}
                        alt={`${v?.title} project screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </figure>
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div className="prodes">
                        <h2 className="text-2xl font-semibold text-white mb-2">
                          {v?.title}
                        </h2>
                        <p className="text-[#948A8A] text-sm">{v?.des}</p>
                      </div>
                      <div className="flex items-center justify-end mt-4 gap-4">
                        {v.link && v.link.trim() !== "" && (
                          <Link href={`${v.link}`} target="_blank">
                            <button className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-white hover:border-[#FF7A00] hover:text-[#FF7A00] transition-all duration-300 hover:translate-y-1">
                              <MoveUpRight size={20} />
                            </button>
                          </Link>
                        )}
                        {v.repo && v.repo.trim() !== "" && (
                          <Link href={`${v.repo}`} target="_blank">
                            <button className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-white hover:border-[#FF7A00] hover:text-[#FF7A00] transition-all duration-300 hover:translate-y-1">
                              <Github size={20} />
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </ParallaxElement>
              );
            })}
        </div>
      </ParallaxElement>

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

export default Project;
