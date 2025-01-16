"use client";

import { Github, Linkedin, Instagram, Youtube, Flame } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroCard = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200); // Delay animation by 500ms

    return () => clearTimeout(timer);
  }, []);

  const social = [
    {
      icon: <Github />,
      link: "https://www.github.com/mohdanas86",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/anas86/",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/_anas__86/",
    },
    {
      icon: <Youtube />,
      link: "https://www.youtube.com/c/AG4444YT",
    },
  ];

  return (
    <div
      className={`w-full max-w-md px-4 ${
        showAnimation ? "fade-in" : "opacity-0"
      }`}
    >
      <div className="flex bg-white text-black rounded-2xl p-6 min-h-[60vh] w-full flex-col justify-between items-center text-center relative">
        <div className="flex justify-center items-center flex-col text-center gap-4 mt-8 bg-blue-500 p-4 rounded-2xl z-40">
          <h2 className="font-semibold text-3xl text-white">Anas Alam</h2>
          <h4 className="font-semibold text-[#e0dcdc]">
            Full Stack Engineer | Data Analyst | Ex-Frontend Intern | Java, C++,
            JavaScript, Python | Former GSsoC Contributor
          </h4>
        </div>

        {/* ICONS */}
        <div className="socialIcons flex items-center justify-center gap-2 mt-12">
          {social.map((v, i) => (
            <Link
              key={i}
              href={v.link}
              className="hover:border w-[50px] h-[50px] flex justify-center items-center rounded-full hover:bg-gray-100 transition"
            >
              <span className="text-[#FF7A00] text-sm p-4">{v.icon}</span>
            </Link>
          ))}
        </div>

        {/* <span className="absolute top-[64%] left-[69%] w-[30px] h-[30px] bg-[#FF7A00] rounded-full text-white flex items-center justify-center z-50">
          <Flame />
        </span> */}
        <span className="absolute top-[11%] left-[5%] w-[30px] h-[30px] bg-[#FF7A00] rounded-full text-white flex items-center justify-center z-50">
          <Flame />
        </span>

        <img
          src="lines.png"
          alt="lines"
          className=" absolute top-[65%] left-0 rotate-45 w-[50%]"
        />
        <img
          src="lines.png"
          alt="lines"
          className="absolute top-[65%] right-0 -rotate-45 w-[50%] transform scale-x-[-1]"
        />
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 1;
          transition: opacity 1s ease-in-out;
        }
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default HeroCard;
