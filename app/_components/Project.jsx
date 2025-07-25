"use client";

import { Github, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";

const Project = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const Projects = [
    {
      img: "imgrithm.png",
      title: "ImgRithm",
      des: "A free and unlimited online image compressor and resizer used globally. Supports bulk image optimization, JPG/PNG to WebP conversion, and up to 95% size reduction with zero quality loss.",
      repo: "#", // Add GitHub repo link if available
      link: "https://imgrithm.tech/", // Add live link if hosted
    },
    {
      img: "blog-backend.png",
      title: "Blog API Platform",
      des: "A high-performance, fully-featured blog backend API built with Express.js, MongoDB, and Redis. Features RESTful endpoints, caching, rate limiting, and Docker containerization.",
      repo: "https://github.com/mohdanas86/Blog-CRUD", // Add GitHub repo link if available
      link: "#", // Add live link if hosted
    },
    {
      img: "fynsera.png",
      title: "Fynnsera – AI Financial Assistant",
      des: "AI-powered platform offering real-time financial analytics and a chatbot for personalized assistance. Built optimized data pipelines for sub-second insights.",
      repo: "https://github.com/mohdanas86/fynnsera", // Add GitHub repo link if available
      link: "https://fynsera.netlify.app/", // Add live link if hosted
    },
    {
      img: "ainotestaker.png",
      title: "AI Notes Taker",
      des: "Transform your notes with AI! Select text from PDFs to generate concise summaries and intelligent answers. Integrated secure auth and subscription payments.",
      repo: "https://github.com/mohdanas86/ainotestaker", // Add GitHub repo link if available
      link: "https://ainotestaker.netlify.app/",
    },
    {
      img: "anaspice.png",
      title: "AnaSpice – Food Delivery App",
      des: "Feature-rich food delivery platform with intuitive UI, real-time order tracking, and responsive design for a seamless user experience.",
      repo: "https://github.com/mohdanas86/anaspiceFood.git",
      link: "https://anaspice.netlify.app/",
    },
    // {
    //   img: "anasufy.png",
    //   title: "Anasufy Academy",
    //   des: "A learning platform offering curated resources and course materials for self-paced education and upskilling.",
    //   repo: "#",
    //   link: "#",
    // },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"} py-16 relative overflow-hidden`}
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
                <div
                  className="card w-full z-50 rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:bg-[#2726262e] text-white"
                >
                  <figure className="h-[100%]">
                    <img
                      src={`${v?.img}`}
                      alt={`${v?.title}`}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
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
                      <Link href={`${v.link}`} target="_blank">
                        <button className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-white hover:border-[#FF7A00] hover:text-[#FF7A00] transition-all duration-300 hover:translate-y-1">
                          <MoveUpRight size={20} />
                        </button>
                      </Link>
                      <Link href={`${v.repo}`} target="_blank">
                        <button className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-white hover:border-[#FF7A00] hover:text-[#FF7A00] transition-all duration-300 hover:translate-y-1">
                          <Github size={20} />
                        </button>
                      </Link>
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
