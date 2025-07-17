'use client';

import { useEffect, useCallback } from 'react';
import { scrollToElement } from './useLenis';

export function useSmoothNavigation() {
  // Handle hash changes in URL
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Small delay to ensure DOM has updated
        setTimeout(() => {
          scrollToElement(element, {
            offset: -100, // Offset to account for fixed header
            duration: 1.5,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))
          });
        }, 100);
      }
    }
  }, []);

  // Set up listeners for hash changes
  useEffect(() => {
    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  // Function to navigate to sections
  const navigateToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Update URL without reloading the page
      window.history.pushState({}, '', `#${sectionId}`);
      
      // Scroll to the section
      scrollToElement(section, {
        offset: -100, // Offset to account for fixed header
        duration: 1.5,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))
      });
    }
  }, []);

  return { navigateToSection };
}
