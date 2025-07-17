'use client';

import { ChevronDown } from 'lucide-react';
import { scrollToElement } from './hooks/useLenis';

export default function ScrollDownButton() {
  const handleScrollDown = () => {
    // Find the projects section and scroll to it
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      scrollToElement(projectsSection, {
        offset: -50,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  return (
    <button 
      onClick={handleScrollDown}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF7A00]/10 hover:bg-[#FF7A00]/20 text-[#FF7A00] transition-colors duration-300 animate-bounce mt-8 mx-auto"
      aria-label="Scroll Down"
    >
      <ChevronDown className="w-6 h-6" />
    </button>
  );
}
