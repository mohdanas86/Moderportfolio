'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { LenisContext } from './hooks/useLenis';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Mobile scrolling should be natural
      touchMultiplier: 2,
      infinite: false,
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

    // Optional: Connect to scroll events
    function onScroll({ scroll, limit, velocity, direction, progress }) {
      // You can use these values to create parallax effects or trigger animations
    }

    lenisRef.current?.on('scroll', onScroll);

    // Clean up
    return () => {
      lenisRef.current?.destroy();
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
