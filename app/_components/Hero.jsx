"use client";

import React, { useEffect, useState } from "react";
import ScrollDownButton from "./ScrollDownButton";
import ParallaxElement from "./ParallaxElement";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

/**
 * Hero section component displaying main introduction,
 * social links, and statistics
 * @component
 */
const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 0.2); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"} py-16 relative w-full`}
      id="home"
    >
      {/* Content with higher z-index */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxElement speed={0.2} direction="horizontal">
          <h1 className="text-7xl text-center lg:text-8xl font-bold text-white">
            {/* Full-Stack */}
            Software
          </h1>
        </ParallaxElement>
        <ParallaxElement speed={0.2} direction="horizontal">
          <h1 className="text-7xl text-center lg:text-8xl font-bold text-[#5A5A5A]">
            Engineer
          </h1>
        </ParallaxElement>
        <ParallaxElement speed={0.2} direction="horizontal">
          <p className="text-lg text-[#A8A8A8] lg:mt-6 mt-4 w-full text-center lg:px-0 px-2">
            Specializing in React, Node.js, and modern frameworks to build
            scalable web solutions. I transform complex requirements into clean,
            maintainable code with a focus on performance, accessibility, and user
            experience. From database architecture to responsive interfaces, I
            deliver end-to-end solutions that drive business value.
          </p>
        </ParallaxElement>
        <ParallaxElement speed={0.2} direction="horizontal">
          <SocialLinks />
        </ParallaxElement>
        {/* STAT */}
        <ParallaxElement speed={0.2} direction="horizontal">
          <div className="flex flex-wrap justify-center lg:justify-center items-center lg:gap-8 gap-6 mt-12">
            {/* Experience */}
            <ParallaxElement speed={-0.2} direction="horizontal">
              <div className="shadow-lg lg:border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm text-white lg:px-8 px-6 py-4 rounded-lg lg:rounded-xl flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">+13</h2>
                <p className="text-[#B8B8B8] font-semibold text-sm mt-2">
                  MONTHS OF <br /> EXPERIENCE
                </p>
              </div>
            </ParallaxElement>

            {/* Projects */}
            <ParallaxElement speed={0.2}>
              <div className="shadow-lg lg:border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm text-white lg:px-8 px-6 py-4 rounded-lg lg:rounded-xl flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">+10</h2>
                <p className="text-[#B8B8B8] font-semibold text-sm mt-2">
                  PROJECTS <br /> COMPLETED
                </p>
              </div>
            </ParallaxElement>

            {/* Clients */}
            <ParallaxElement speed={-0.2} direction="horizontal">
              <div className="shadow-lg lg:border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm text-white lg:px-8 px-6 py-4 rounded-lg lg:rounded-xl flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">+4</h2>
                <p className="text-[#B8B8B8] font-semibold text-sm mt-2">
                  WORLDWIDE <br /> CLIENTS
                </p>
              </div>
            </ParallaxElement>
          </div>
        </ParallaxElement>
        {/* Scroll down button */}
        <ScrollDownButton />
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
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

/**
 * SocialLinks component displays animated social media links
 * @component
 * @returns {JSX.Element} Social media links with wave animation
 */
const SocialLinks = () => {
  const SocialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anas86",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/mohdanas86",
      icon: <FaGithub />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/_anas__86",
      icon: <FaInstagram />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/c/AG4444YT",
      icon: <FaYoutube />,
    },
  ];

  const animations = [
    "animate-move-up",
    "animate-move-right",
    "animate-move-down",
    "animate-move-left",
  ];

  return (
    <>
      <div className="flex justify-center items-center gap-4 mt-6 w-full lg:h-[80px] h-[60px]">
        {/* social container */}
        <div className="socialContainer w-full relative overflow-hidden flex justify-center items-center gap-4 py-4">
          {SocialLinks &&
            SocialLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  // The magic happens here: apply the wave animation and a staggered delay
                  className={`flex justify-center items-center border rounded-full w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] lg:text-xl 
                         animate-wave hover:animate-none duration-[1500ms] hover:text-blue-500 hover:border-blue-500
                         [animation-delay:${index * 150}ms]`}
                >
                  {item.icon}
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};
