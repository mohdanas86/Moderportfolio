'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { LenisContext } from './hooks/useLenis';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
                     (window.matchMedia("(max-width: 768px)").matches);
                     
    // Initialize Lenis for smooth scrolling with optimized mobile settings
    lenisRef.current = new Lenis({
      duration: isMobile ? 0.8 : 1.2, // Shorter duration for mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: isMobile, // Enable smooth touch on mobile
      touchMultiplier: isMobile ? 1.2 : 2, // Less aggressive for mobile
      infinite: false,
      orientation: 'vertical',
      normalizeWheel: true,
      smoothWheel: true,
    });
    
    setLenis(lenisRef.current);

    // Connect Lenis to the RAF (request animation frame)
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Stop animations on window resize for better performance
    const resizeObserver = new ResizeObserver(() => {
      lenisRef.current?.resize();
    });
    
    resizeObserver.observe(document.documentElement);

    // Optimize scrolling behavior based on scroll data
    function onScroll({ scroll, limit, velocity, direction, progress }) {
      // Adjust scroll behavior based on velocity for smoother experience
      if (Math.abs(velocity) > 30) {
        // Fast scrolling - make it more responsive
        lenisRef.current.options.lerp = 0.04;
      } else if (Math.abs(velocity) < 10) {
        // Slow scrolling - make it smoother
        lenisRef.current.options.lerp = 0.08;
      } else {
        // Normal scrolling - default smoothness
        lenisRef.current.options.lerp = 0.06;
      }
    }

    // Detect scroll stop to restore default settings
    let scrollTimeout;
    function onScrollEnd() {
      // Reset lerp to default value after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.options.lerp = 0.1;
        }
      }, 100);
    }

    lenisRef.current?.on('scroll', onScroll);
    lenisRef.current?.on('scroll', onScrollEnd);

    // Clean up
    return () => {
      if (lenisRef.current) {
        lenisRef.current.off('scroll', onScroll);
        lenisRef.current.off('scroll', onScrollEnd);
        lenisRef.current.destroy();
      }
      clearTimeout(scrollTimeout);
      resizeObserver.disconnect();
    };
  }, []);

  // Expose the Lenis instance to the window for debugging and external access
  useEffect(() => {
    if (lenisRef.current) {
      window.lenis = lenisRef.current;
    }
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
