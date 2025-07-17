'use client';

import { useEffect, useState } from 'react';
import { scrollToTop } from './hooks/useLenis';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Set up the event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    // Using our Lenis scroll helper
    scrollToTop({
      duration: 1.5, // Longer duration for smoother experience
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Ease out expo
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 bg-[#FF7A00] rounded-full shadow-lg transition-all duration-300 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  );
}
