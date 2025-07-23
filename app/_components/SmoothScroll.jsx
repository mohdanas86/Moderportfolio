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
                     (window.matchMedia("(max-width: 768px)").matches) ||
                     (window.matchMedia("(pointer: coarse)").matches);
                     
    // On mobile devices, use native scrolling instead of Lenis for better performance
    if (isMobile) {
      // Enable native scrolling on mobile
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.overflowY = 'auto';
      document.body.style.touchAction = 'pan-y pinch-zoom';
      
      // Set a simple lenis-like object for context compatibility
      const simpleLenis = {
        scrollTo: (target, options = {}) => {
          const element = typeof target === 'string' ? document.querySelector(target) : target;
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: options.offset ? 'start' : 'center',
              ...options
            });
          } else if (typeof target === 'number') {
            window.scrollTo({
              top: target,
              behavior: 'smooth'
            });
          }
        },
        on: () => {},
        off: () => {},
        destroy: () => {},
        resize: () => {},
      };
      
      setLenis(simpleLenis);
      window.lenis = simpleLenis;
      
      return () => {
        document.documentElement.style.scrollBehavior = '';
      };
    }
                     
    // Initialize Lenis for smooth scrolling only on desktop
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Disable smooth touch - use native mobile scrolling
      touchMultiplier: 2,
      infinite: false,
      orientation: 'vertical',
      normalizeWheel: true,
      smoothWheel: true,
    });
    
    setLenis(lenisRef.current);

    // Connect Lenis to the RAF (request animation frame) only for desktop
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
