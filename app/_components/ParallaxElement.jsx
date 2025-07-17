'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * ParallaxElement - A component that adds parallax scrolling effect to its children
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to apply parallax effect to
 * @param {number} props.speed - The speed of parallax effect (negative values move in opposite direction)
 * @param {string} props.direction - Direction of movement: 'vertical' or 'horizontal'
 * @param {boolean} props.disabled - Disable parallax on mobile devices if true
 * @param {string} props.className - Additional classes for the wrapper
 */
export default function ParallaxElement({
  children,
  speed = 0.5,
  direction = 'vertical',
  disabled = false,
  className = '',
}) {
  const elementRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isInit, setIsInit] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowHeight(window.innerHeight);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Setup Intersection Observer to optimize performance
  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    // Only calculate position if element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          
          if (entry.isIntersecting && !isInit) {
            updateElementPosition();
            setIsInit(true);
          }
        });
      },
      { 
        rootMargin: '50px 0px 50px 0px',
        threshold: 0.01
      }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isInit]);
  
  // Update element position values
  const updateElementPosition = () => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementHeight(rect.height);
    }
  };

  // Handle scroll events with requestAnimationFrame for performance
  useEffect(() => {
    if (disabled || (disabled && isMobile)) return;
    
    let rafId = null;
    const handleScroll = () => {
      if (!isInView || !isInit) return;
      
      // Use requestAnimationFrame for better performance
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        const scrollPos = window.scrollY;
        const elementCenter = elementTop + elementHeight / 2;
        const windowCenter = scrollPos + windowHeight / 2;
        const distanceFromCenter = elementCenter - windowCenter;
        const movement = distanceFromCenter * speed * -0.1;
        
        if (direction === 'horizontal') {
          setTranslate({ x: movement, y: 0 });
        } else {
          setTranslate({ x: 0, y: movement });
        }
      });
    };
    
    updateElementPosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [speed, direction, disabled, isMobile, isInView, isInit, elementTop, elementHeight, windowHeight]);

  // Apply the transform styles based on scroll position
  const style = !disabled && isInView ? {
    transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
    transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)',
    willChange: 'transform'
  } : {};
  
  return (
    <div 
      ref={elementRef} 
      className={`parallax-element ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
