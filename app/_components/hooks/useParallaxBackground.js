'use client';

import { useEffect, useState, useRef } from 'react';

/**
 * Helper hook to create parallax background effects with performance optimizations
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.speed - The speed of the parallax effect (default: 0.2)
 * @param {boolean} options.disabled - Whether to disable the effect (default: false)
 */
export default function useParallaxBackground(options = {}) {
  const { 
    speed = 0.2,
    disabled = false
  } = options;
  
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const frameRef = useRef(null);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Setup Intersection Observer to optimize performance
  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { 
        rootMargin: '50px 0px 50px 0px',
        threshold: 0
      }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  // Handle scroll events with optimized animation frame
  useEffect(() => {
    if (disabled || (disabled && isMobile) || !isVisible) return;
    
    const handleScroll = () => {
      if (!isVisible) return;
      
      // Calculate the new offset
      const scrollPos = window.scrollY;
      setOffset(scrollPos * speed);
      
      // Cancel any pending animation frame
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      // Schedule the next frame
      frameRef.current = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translateY(${scrollPos * speed}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [speed, disabled, isMobile, isVisible]);
  
  return { ref, offset };
}
