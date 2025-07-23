"use client";

import React, { useEffect, useState } from "react";

const TechUI = () => {
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
    <div
      className={`fixed inset-0 overflow-hidden pointer-events-none z-0 background-ui ${
        isMobile ? "tech-ui-mobile" : ""
      }`}
    >
      {/* HUD Corner Elements - Responsive sizes */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 border-l-2 border-t-2 border-cyan-400 border-opacity-20 sm:border-opacity-30 animate-pulse-slow tech-ui-element"></div>
      <div
        className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 border-r-2 border-t-2 border-blue-400 border-opacity-20 sm:border-opacity-30 animate-pulse-slow tech-ui-element"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 border-l-2 border-b-2 border-cyan-400 border-opacity-20 sm:border-opacity-30 animate-pulse-slow tech-ui-element"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 border-r-2 border-b-2 border-blue-400 border-opacity-20 sm:border-opacity-30 animate-pulse-slow tech-ui-element"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Tech Data Streams - Hidden on mobile, responsive on larger screens */}
      <div className="hidden sm:block absolute top-1/4 left-4 lg:left-8 text-xs lg:text-sm text-cyan-400 opacity-15 lg:opacity-20 font-mono tech-ui-element">
        <div className="animate-pulse-slow">{"> INIT_ANAS_ALAM"}</div>
        <div className="animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
          {"> IMPORTING_SKILLS"}
        </div>
        <div
          className="hidden lg:block animate-pulse-slow"
          style={{ animationDelay: "0.7s" }}
        >
          {"[React, Node, Next.js, TypeScript]"}
        </div>
        <div className="animate-pulse-slow" style={{ animationDelay: "1s" }}>
          {"> STATUS: INNOVATING"}
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-1/4 right-4 lg:right-8 text-xs lg:text-sm text-blue-400 opacity-15 lg:opacity-20 font-mono text-right tech-ui-element">
        <div className="animate-pulse-slow">{"PASSION_MODE: ENGAGED"}</div>
        <div className="animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
          {"CREATIVITY_CORE: STABLE"}
        </div>
        <div className="animate-pulse-slow" style={{ animationDelay: "1s" }}>
          {"READY_FOR_NEXT_MISSION"}
        </div>
      </div>

      {/* Holographic Grid Lines - Simplified for mobile */}
      <div className="absolute top-1/2 left-1/2 w-px h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-10 lg:opacity-15 animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2 tech-ui-element"></div>
      <div
        className="absolute top-1/2 left-1/2 w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-10 lg:opacity-15 animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2 tech-ui-element"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating Tech Icons - Responsive positioning */}
      <div className="absolute top-16 sm:top-20 right-1/4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 border border-cyan-400 border-opacity-15 lg:border-opacity-20 rotate-45 animate-float-slow tech-ui-element"></div>
      <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-blue-400 bg-opacity-8 lg:bg-opacity-10 rounded-full animate-pulse-slow tech-ui-element"></div>

      {/* Circuit Board Pattern - Hidden on small screens */}
      <div className="hidden md:block absolute top-1/3 right-8 lg:right-12 opacity-8 lg:opacity-10 tech-ui-element">
        <svg
          width="40"
          height="40"
          viewBox="0 0 60 60"
          className="animate-pulse-slow lg:w-[60px] lg:h-[60px]"
        >
          <path
            d="M10 10 L50 10 L50 20 L40 20 L40 30 L50 30 L50 50 L10 50 L10 40 L20 40 L20 30 L10 30 Z"
            stroke="#00d4ff"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="15" cy="15" r="2" fill="#00d4ff" opacity="0.4" />
          <circle cx="45" cy="15" r="2" fill="#00d4ff" opacity="0.4" />
          <circle cx="45" cy="45" r="2" fill="#00d4ff" opacity="0.4" />
          <circle cx="15" cy="45" r="2" fill="#00d4ff" opacity="0.4" />
        </svg>
      </div>

      {/* Hologram Frame - Smaller and less prominent on mobile */}
      <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-3 lg:opacity-5 tech-ui-element">
        <div className="absolute inset-0 border border-cyan-400 border-opacity-20 lg:border-opacity-30 rotate-45 animate-spin-very-slow"></div>
        <div
          className="absolute inset-2 sm:inset-4 border border-blue-400 border-opacity-15 lg:border-opacity-20 rotate-45 animate-spin-very-slow"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      {/* Mobile-specific subtle effects */}
      <div className="sm:hidden absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 pointer-events-none tech-ui-element"></div>
    </div>
  );
};

export default TechUI;
