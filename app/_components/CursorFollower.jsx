"use client";

import React, { useState, useEffect } from "react";
import { useMousePosition } from "./hooks/useMousePosition";

const CursorFollower = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor - subtle professional glow */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
          isHovering ? "w-8 h-8" : "w-4 h-4"
        }`}
        style={{
          left: x - (isHovering ? 16 : 8),
          top: y - (isHovering ? 16 : 8),
          background: isHovering
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)",
          borderRadius: "50%",
          mixBlendMode: "screen",
        }}
      />

      {/* Outer ring - only visible on hover */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-40 w-12 h-12 border border-blue-400 border-opacity-20 rounded-full transition-all duration-300 ease-out"
          style={{
            left: x - 24,
            top: y - 24,
            background:
              "radial-gradient(circle, transparent 80%, rgba(59, 130, 246, 0.05) 100%)",
          }}
        />
      )}
    </>
  );
};

export default CursorFollower;
