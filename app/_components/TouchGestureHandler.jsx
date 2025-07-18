'use client';

import { useEffect } from 'react';

export default function TouchGestureHandler() {
  useEffect(() => {
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
                     (window.matchMedia("(max-width: 768px)").matches);
    
    if (!isMobile || !window.lenis) return;
    
    let touchStartY = 0;
    let touchStartTime = 0;
    let lastTouchY = 0;
    let velocityY = 0;
    let isScrolling = false;
    
    function handleTouchStart(e) {
      touchStartY = e.touches[0].clientY;
      lastTouchY = touchStartY;
      touchStartTime = Date.now();
      velocityY = 0;
    }
    
    function handleTouchMove(e) {
      if (!isScrolling) {
        isScrolling = true;
        // Notify components that scrolling has started
        document.body.classList.add('is-touch-scrolling');
      }
      
      const currentY = e.touches[0].clientY;
      const deltaY = lastTouchY - currentY;
      const deltaTime = Date.now() - touchStartTime;
      
      if (deltaTime > 0) {
        velocityY = deltaY / deltaTime;
      }
      
      lastTouchY = currentY;
    }
    
    function handleTouchEnd(e) {
      isScrolling = false;
      document.body.classList.remove('is-touch-scrolling');
      
      // Apply momentum scrolling based on final velocity
      if (Math.abs(velocityY) > 0.1) {
        const momentum = velocityY * 20; // Adjust this multiplier for the desired momentum effect
        
        if (window.lenis) {
          // Use velocity to create momentum scrolling effect
          window.lenis.scrollTo(window.lenis.scroll + momentum, {
            duration: Math.min(Math.abs(momentum) * 50, 1000), // Longer duration for more momentum
            easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease-out for natural deceleration
          });
        }
      }
    }
    
    // Add the event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      // Clean up event listeners
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
  
  return null; // This component doesn't render anything
}
