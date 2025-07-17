'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSmoothNavigation } from './hooks/useSmoothNavigation';

// Enhanced navigation with smooth scrolling
export default function SmoothNavLink({ href, children, className, mobileNavigation = false }) {
  const pathname = usePathname();
  const { navigateToSection } = useSmoothNavigation();
  const [isActive, setIsActive] = useState(false);
  
  // Check if this is an in-page navigation (starts with #)
  const isInPageNav = href.startsWith('#');
  
  // Extract section ID from href if it's an in-page nav
  const sectionId = isInPageNav ? href.substring(1) : null;
  
  // Handle in-page navigation with smooth scrolling
  const handleClick = (e) => {
    if (isInPageNav && sectionId) {
      e.preventDefault();
      navigateToSection(sectionId);
      
      // Close mobile menu if this is a mobile navigation item
      if (mobileNavigation && typeof window !== 'undefined') {
        // You would need to implement this based on your mobile menu implementation
        // For example, dispatch a custom event that your mobile menu listens to
        const closeEvent = new CustomEvent('closeMobileMenu');
        window.dispatchEvent(closeEvent);
      }
    }
  };
  
  // Determine if this link is active
  useEffect(() => {
    if (isInPageNav) {
      // For in-page links, check if the hash in URL matches
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      setIsActive(hash === href);
    } else {
      // For regular links, check if pathname matches
      setIsActive(pathname === href);
    }
    
    // Set up listener for hash changes for in-page links
    const handleHashChange = () => {
      if (isInPageNav) {
        const hash = window.location.hash;
        setIsActive(hash === href);
      }
    };
    
    if (isInPageNav && typeof window !== 'undefined') {
      window.addEventListener('hashchange', handleHashChange);
    }
    
    return () => {
      if (isInPageNav && typeof window !== 'undefined') {
        window.removeEventListener('hashchange', handleHashChange);
      }
    };
  }, [pathname, href, isInPageNav]);
  
  // For in-page links on the same page, use a button with onClick
  if (isInPageNav && pathname === '/') {
    return (
      <button
        onClick={handleClick}
        className={className}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </button>
    );
  }
  
  // For regular links or in-page links on different pages, use next/link
  // But still capture the click for in-page links to handle navigation
  return (
    <a
      href={href}
      onClick={isInPageNav ? handleClick : undefined}
      className={className}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  );
}
