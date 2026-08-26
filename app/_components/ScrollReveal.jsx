'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal - Triggers a smooth reveal animation when the element enters the viewport.
 * 
 * Mobile-safe: checks initial bounding rect on mount (in case the element
 * is already visible on load), and has a 1.8s safety fallback so nothing
 * ever stays permanently invisible if the observer misfires.
 */
export default function ScrollReveal({
  children,
  threshold = 0.08,
  rootMargin = '0px 0px -60px 0px',
  animation = 'fade-up',
  delay = 0,
  duration = 0.65,
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setIsVisible(true);

    // 1. If already in viewport when mounted (e.g. hero-adjacent sections on mobile),
    //    reveal immediately without waiting for observer.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
      return; // no need for observer if already visible
    }

    // 2. Safety fallback — if observer never fires (mobile quirk / slow parse),
    //    force-reveal after 1.8s so content is never stuck invisible.
    const fallback = setTimeout(show, 1800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          clearTimeout(fallback);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold, rootMargin, once, duration, delay]);

  const hiddenStyles = {
    'fade-up':    { opacity: 0, transform: 'translateY(40px)' },
    'fade-down':  { opacity: 0, transform: 'translateY(-40px)' },
    'fade-left':  { opacity: 0, transform: 'translateX(40px)' },
    'fade-right': { opacity: 0, transform: 'translateX(-40px)' },
    'zoom-in':    { opacity: 0, transform: 'scale(0.94)' },
    'zoom-out':   { opacity: 0, transform: 'scale(1.06)' },
    'none':       { opacity: 0, transform: 'none' },
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
