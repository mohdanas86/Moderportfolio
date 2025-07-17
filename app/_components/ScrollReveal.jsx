'use client';

import { useEffect, useRef, useState } from 'react';

// This component will trigger animations when an element is scrolled into view
export default function ScrollReveal({ 
  children, 
  threshold = 0.1, 
  rootMargin = '0px',
  animation = 'fade-up', // Options: fade-up, fade-down, fade-left, fade-right, zoom-in, zoom-out
  delay = 0,
  duration = 0.6,
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  // Define animation classes
  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-down': 'opacity-0 -translate-y-10',
    'fade-left': 'opacity-0 translate-x-10',
    'fade-right': 'opacity-0 -translate-x-10',
    'zoom-in': 'opacity-0 scale-95',
    'zoom-out': 'opacity-0 scale-105',
    'none': ''
  };

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'translate3d(0, 0, 0) scale(1)' 
      : undefined, // Will use the default transform from classes if not visible
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    transitionDelay: `${delay}s`
  };

  return (
    <div 
      ref={ref} 
      className={`${!isVisible ? animationClasses[animation] : ''} transition-all`}
      style={isVisible ? animationStyle : {
        ...animationStyle,
        willChange: 'opacity, transform' // Performance optimization
      }}
    >
      {children}
    </div>
  );
}
