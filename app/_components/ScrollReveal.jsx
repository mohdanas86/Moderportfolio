'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal - Triggers a smooth reveal animation when the element enters the viewport.
 * Uses a clean CSS-only approach (no conflicting inline + class transforms).
 */
export default function ScrollReveal({
  children,
  threshold = 0.12,
  rootMargin = '0px 0px -60px 0px',
  animation = 'fade-up',
  delay = 0,
  duration = 0.65,
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

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
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // Initial transforms for each animation type
  const hiddenStyles = {
    'fade-up':    { opacity: 0, transform: 'translateY(40px)' },
    'fade-down':  { opacity: 0, transform: 'translateY(-40px)' },
    'fade-left':  { opacity: 0, transform: 'translateX(40px)' },
    'fade-right': { opacity: 0, transform: 'translateX(-40px)' },
    'zoom-in':    { opacity: 0, transform: 'scale(0.94)' },
    'zoom-out':   { opacity: 0, transform: 'scale(1.06)' },
    'none':       {},
  };

  const visibleStyle = {
    opacity: 1,
    transform: 'translate3d(0, 0, 0) scale(1)',
  };

  const baseTransition = {
    transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
    transitionDelay: `${delay}s`,
    willChange: 'opacity, transform',
  };

  const currentStyle = isVisible
    ? { ...baseTransition, ...visibleStyle }
    : { ...baseTransition, ...(hiddenStyles[animation] ?? hiddenStyles['fade-up']) };

  return (
    <div ref={ref} style={currentStyle}>
      {children}
    </div>
  );
}
