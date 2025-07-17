'use client';

import { createContext, useContext } from 'react';

// Create a context for Lenis instance
export const LenisContext = createContext(null);

// Hook to use the Lenis instance in any component
export const useLenis = () => {
  const lenis = useContext(LenisContext);
  
  if (!lenis) {
    console.warn('useLenis must be used within a SmoothScroll component');
    return null;
  }
  
  return lenis;
};

// Helper functions to manipulate scrolling
export const scrollTo = (target, options = {}) => {
  if (typeof window !== 'undefined' && window.lenis) {
    window.lenis.scrollTo(target, options);
  }
};

export const scrollToTop = (options = {}) => {
  scrollTo(0, options);
};

export const scrollToElement = (element, options = {}) => {
  if (typeof window !== 'undefined' && window.lenis && element) {
    window.lenis.scrollTo(element, options);
  }
};

// Custom hook to handle scroll-triggered animations
export const useScrollTrigger = (callback, deps = []) => {
  if (typeof window !== 'undefined' && window.lenis) {
    window.lenis.on('scroll', callback);
    
    return () => {
      window.lenis.off('scroll', callback);
    };
  }
  
  return () => {};
};
