'use client';

import { useEffect } from 'react';

// This component optimizes page performance for mobile devices
export default function MobileScrollOptimizer() {
  useEffect(() => {
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
                    (window.matchMedia("(max-width: 768px)").matches);
    
    if (!isMobile) return;
    
    // Passive event listeners for better touch performance
    document.addEventListener('touchstart', () => {}, { passive: true });
    document.addEventListener('touchmove', () => {}, { passive: true });
    
    // Prevent momentum scrolling from causing issues with smooth scrolling
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Optimize animation performance during scroll
    let scrolling = false;
    let scrollTimeout;
    
    function onScroll() {
      if (!scrolling) {
        scrolling = true;
        // Lower image quality during scroll for better performance
        document.documentElement.style.setProperty('--image-quality', 'low');
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrolling = false;
        // Restore image quality after scrolling stops
        document.documentElement.style.setProperty('--image-quality', 'high');
      }, 150);
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  
  return null; // This component doesn't render anything
}
