"use client";

import React, { useEffect, useState } from "react";
import ScrollDownButton from "./ScrollDownButton";
import ParallaxElement from "./ParallaxElement";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

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
      className={`${showAnimation ? "fade-in" : "opacity-0"} py-16 relative`}
      id="home"
    >
      <ParallaxElement speed={0.2} direction="horizontal">
        <h1 className="text-5xl text-center lg:text-8xl font-bold">
          Full-Stack
        </h1>
      </ParallaxElement>

      <ParallaxElement speed={0.2} direction="horizontal">
        <h1 className="text-5xl text-center lg:text-8xl font-bold text-[#353334]">
          Software Engineer
        </h1>
      </ParallaxElement>

      <ParallaxElement speed={0.2} direction="horizontal">
        <p className="text-lg text-[#948A8A] lg:mt-6 mt-4 w-full text-center lg:px-0 px-2">
          Architecting modern applications using robust backend systems and
          intuitive frontend interfaces. I turn complex problems into efficient,
          full-cycle solutions.
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
            <div className="shadow lg:border overflow-hidden bg-transparent text-white lg:px-8 px-0 py-4 rounded-lg lg:rounded-xl flex flex-col">
              <h2 className="text-4xl lg:text-5xl font-bold">+13</h2>
              <p className="text-[#948A8A] font-semibold text-sm mt-2">
                MONTHS OF <br /> EXPERIENCE
              </p>
            </div>
          </ParallaxElement>

          {/* Projects */}
          <ParallaxElement speed={0.2}>
            <div className="shadow lg:border overflow-hidden bg-transparent text-white lg:px-8 px-0 py-4 rounded-lg lg:rounded-xl flex flex-col">
              <h2 className="text-4xl lg:text-5xl font-bold">+10</h2>
              <p className="text-[#948A8A] font-semibold text-sm mt-2">
                PROJECTS <br /> COMPLETED
              </p>
            </div>
          </ParallaxElement>

          {/* Clients */}
          <ParallaxElement speed={-0.2} direction="horizontal">
            <div className="shadow lg:border overflow-hidden bg-transparent text-white lg:px-8 px-0 py-4 rounded-lg lg:rounded-xl flex flex-col">
              <h2 className="text-4xl lg:text-5xl font-bold">+4</h2>
              <p className="text-[#948A8A] font-semibold text-sm mt-2">
                WORLDWIDE <br /> CLIENTS
              </p>
            </div>
          </ParallaxElement>
        </div>
      </ParallaxElement>

      {/* Scroll down button */}
      <ScrollDownButton />

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
      url: "https://instagram.com/@_anas__86",
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
                         animate-wave hover:animate-none duration-[1500ms] hover:text-[#FF7A00] hover:border-[#FF7A00]
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
