"use client";

import React from "react";

const TechUI = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* HUD Corner Elements */}
      <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-cyan-400 border-opacity-30 animate-pulse-slow"></div>
      <div
        className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-blue-400 border-opacity-30 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-cyan-400 border-opacity-30 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-blue-400 border-opacity-30 animate-pulse-slow"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Tech Data Streams
      <div className="absolute top-1/4 left-8 text-xs text-cyan-400 opacity-20 font-mono">
        <div className="animate-pulse-slow">{"> SYSTEM_INIT"}</div>
        <div className="animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
          {"> LOADING_MODULES"}
        </div>
        <div className="animate-pulse-slow" style={{ animationDelay: "1s" }}>
          {"> STATUS: ONLINE"}
        </div>
      </div>

      <div className="absolute bottom-1/4 right-8 text-xs text-blue-400 opacity-20 font-mono text-right">
        <div className="animate-pulse-slow">{"NEURAL_NET_ACTIVE"}</div>
        <div className="animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
          {"QUANTUM_READY"}
        </div>
        <div className="animate-pulse-slow" style={{ animationDelay: "1s" }}>
          {"AI_INTERFACE_OK"}
        </div>
      </div> */}

      {/* Tech Data Streams - Personalized for Anas Alam */}
      <div className="absolute top-1/4 left-8 text-xs text-cyan-400 opacity-20 font-mono">
        <div className="animate-pulse-slow">{"> INIT_ANAS_ALAM"}</div>
        <div className="animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
          {"> IMPORTING_SKILLS [React, Node, Next.js, TypeScript]"}
        </div>
        <div className="animate-pulse-slow" style={{ animationDelay: "1s" }}>
          {"> SYSTEM_STATUS: INNOVATING"}
        </div>
      </div>

      <div className="absolute bottom-1/4 right-8 text-xs text-blue-400 opacity-20 font-mono text-right">
        <div className="animate-pulse-slow">{"PASSION_MODE: ENGAGED"}</div>
        <div className="animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
          {"CREATIVITY_CORE: STABLE"}
        </div>
        <div className="animate-pulse-slow" style={{ animationDelay: "1s" }}>
          {"READY_FOR_NEXT_MISSION"}
        </div>
      </div>

      {/* Holographic Grid Lines */}
      <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-15 animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2"></div>
      <div
        className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-15 animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating Tech Icons */}
      <div className="absolute top-20 right-1/4 w-6 h-6 border border-cyan-400 border-opacity-20 rotate-45 animate-float-slow"></div>
      <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-blue-400 bg-opacity-10 rounded-full animate-pulse-slow"></div>

      {/* Circuit Board Pattern */}
      <div className="absolute top-1/3 right-12 opacity-10">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          className="animate-pulse-slow"
        >
          <path
            d="M10 10 L50 10 L50 20 L40 20 L40 30 L50 30 L50 50 L10 50 L10 40 L20 40 L20 30 L10 30 Z"
            stroke="#00d4ff"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="15" cy="15" r="2" fill="#00d4ff" opacity="0.6" />
          <circle cx="45" cy="15" r="2" fill="#00d4ff" opacity="0.6" />
          <circle cx="45" cy="45" r="2" fill="#00d4ff" opacity="0.6" />
          <circle cx="15" cy="45" r="2" fill="#00d4ff" opacity="0.6" />
        </svg>
      </div>

      {/* Digital Noise Strips */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-5 animate-pulse-slow"></div>
      <div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-5 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Hologram Frame */}
      <div className="absolute top-1/2 left-1/2 w-80 h-80 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
        <div className="absolute inset-0 border border-cyan-400 border-opacity-30 rotate-45 animate-spin-very-slow"></div>
        <div
          className="absolute inset-4 border border-blue-400 border-opacity-20 rotate-45 animate-spin-very-slow"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>
    </div>
  );
};

export default TechUI;
