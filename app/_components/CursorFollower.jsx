"use client";

import React, { useState, useEffect, useRef } from "react";
import { useMousePosition } from "./hooks/useMousePosition";

const CursorFollower = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     window.innerWidth < 768 ||
                     (window.matchMedia("(pointer: coarse)").matches);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimized hover detection with event delegation
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === "A" ||
                           target.tagName === "BUTTON" ||
                           target.closest("a") ||
                           target.closest("button");
      setIsHovering(isInteractive);
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  // Optimized position updates with RAF
  useEffect(() => {
    if (isMobile) return;

    const updatePosition = () => {
      if (cursorRef.current) {
        const size = isHovering ? 16 : 8;
        cursorRef.current.style.transform = `translate3d(${x - size}px, ${y - size}px, 0)`;
      }
      
      if (ringRef.current && isHovering) {
        ringRef.current.style.transform = `translate3d(${x - 24}px, ${y - 24}px, 0)`;
      }
    };

    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [x, y, isHovering, isMobile]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor - subtle professional glow */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
          isHovering ? "w-8 h-8" : "w-4 h-4"
        }`}
        style={{
          background: isHovering
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)",
          borderRadius: "50%",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
      />

      {/* Outer ring - only visible on hover */}
      {isHovering && (
        <div
          ref={ringRef}
          className="fixed pointer-events-none z-40 w-12 h-12 border border-blue-400 border-opacity-20 rounded-full transition-all duration-300 ease-out"
          style={{
            background: "radial-gradient(circle, transparent 80%, rgba(59, 130, 246, 0.05) 100%)",
            willChange: "transform",
          }}
        />
      )}
    </>
  );
};

export default CursorFollower;
