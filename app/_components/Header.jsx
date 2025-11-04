"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import {
  Menu,
  Briefcase,
  FolderGit2,
  Headset,
  Home,
  Wrench,
  Award,
  FileText,
} from "lucide-react";
import { usePathname } from "next/navigation";

/**
 * Smooth scroll to section
 * @param {string} sectionId - The ID of the section to scroll to
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Use Lenis if available, otherwise fallback to native scrollIntoView
    if (window.lenis) {
      window.lenis.scrollTo(element, { duration: 1.5, offset: -80 });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

/**
 * Handle resume click - opens in new tab on desktop, downloads on mobile
 */
const handleResumeClick = () => {
  const resumeUrl = "/AnasAlamResumeSoftwareEngineer.pdf";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // On mobile, trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'AnasAlamResumeSoftwareEngineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // On desktop, open in new tab
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  }
};

const Header = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "experience", "badges", "tools", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-4 pt-3 sm:pt-4">
      <div className="w-full h-[56px] sm:h-[60px] lg:h-[65px] flex items-center justify-between px-3 sm:px-4 lg:px-8 max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/5">
        {/* Site Logo/Name - Mobile optimized */}
        <div className="flex-shrink-0 min-w-0">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm sm:text-base lg:text-xl font-bold text-white hover:text-[#FF7A00] transition-colors duration-300 truncate"
          >
            Anas Alam
          </button>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-2">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${activeSection === "hero"
                  ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/30"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${activeSection === "projects"
                  ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/30"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${activeSection === "experience"
                  ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/30"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("badges")}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${activeSection === "badges"
                  ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/30"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                Badges
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("tools")}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${activeSection === "tools"
                  ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/30"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                Tools
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${activeSection === "contact"
                  ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/30"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={handleResumeClick}
                className="px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap text-white/70 hover:text-white hover:bg-white/10"
              >
                Resume
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button - Properly sized for touch */}
        <div className="flex-shrink-0 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="h-9 w-9 rounded-full text-white hover:bg-white/10 hover:text-[#FF7A00]"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[85vw] max-w-[320px] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] backdrop-blur-2xl border-r border-white/10 p-0 [&>button]:top-4 [&>button]:right-4 [&>button]:h-8 [&>button]:w-8 [&>button]:rounded-full [&>button]:bg-white/5 [&>button]:text-white [&>button]:hover:bg-[#FF7A00] [&>button]:hover:text-white [&>button]:transition-all"
            >
              {/* Accessible Sheet Title - Hidden but present for screen readers */}
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Navigate through different sections of the portfolio</SheetDescription>
              </SheetHeader>

              {/* Mobile Menu Header - Sleek Design */}
              <div className="relative h-24 flex items-center px-6 pr-14 border-b border-white/10 bg-gradient-to-r from-[#FF7A00]/10 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF7A00]/20 flex items-center justify-center">
                    <span className="text-[#FF7A00] font-bold text-lg">AA</span>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">Anas Alam</h2>
                    <p className="text-white/50 text-xs">Software Engineer</p>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Navigation - Clean & Modern */}
              <nav className="flex-1 overflow-y-auto py-6 px-4 max-h-[calc(100vh-6rem)]">
                <ul className="space-y-2">
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => setTimeout(() => scrollToSection("hero"), 350)}
                        className={`group flex items-center gap-4 w-full px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === "hero"
                          ? "bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/30"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <Home className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-sm">Home</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => setTimeout(() => scrollToSection("projects"), 350)}
                        className={`group flex items-center gap-4 w-full px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === "projects"
                          ? "bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/30"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <FolderGit2 className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-sm">Projects</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => setTimeout(() => scrollToSection("experience"), 350)}
                        className={`group flex items-center gap-4 w-full px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === "experience"
                          ? "bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/30"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <Briefcase className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-sm">Experience</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => setTimeout(() => scrollToSection("badges"), 350)}
                        className={`group flex items-center gap-4 w-full px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === "badges"
                          ? "bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/30"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <Award className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-sm">Badges</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => setTimeout(() => scrollToSection("tools"), 350)}
                        className={`group flex items-center gap-4 w-full px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === "tools"
                          ? "bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/30"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <Wrench className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-sm">Tools</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => setTimeout(() => scrollToSection("contact"), 350)}
                        className={`group flex items-center gap-4 w-full px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === "contact"
                          ? "bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/30"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <Headset className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-sm">Contact</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => setTimeout(() => handleResumeClick(), 350)}
                        className="group flex items-center gap-4 w-full px-4 py-3 rounded-lg transition-all duration-300 text-white/60 hover:text-white hover:bg-white/5"
                      >
                        <FileText className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-sm">Resume</span>
                      </button>
                    </SheetClose>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
