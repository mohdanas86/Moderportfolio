"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
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
} from "lucide-react";
import { usePathname } from "next/navigation";

/**
 * Smooth scroll to section
 * @param {string} sectionId - The ID of the section to scroll to
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4">
      <div className="w-full h-[60px] lg:h-[65px] flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/5">
        {/* Site Logo/Name - Mobile optimized */}
        <div className="flex-shrink-0 min-w-0">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-base sm:text-lg lg:text-xl font-bold text-white hover:text-[#FF7A00] transition-colors duration-300 truncate"
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
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${
                  activeSection === "hero"
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
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${
                  activeSection === "projects"
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
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${
                  activeSection === "experience"
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
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${
                  activeSection === "badges"
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
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${
                  activeSection === "tools"
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
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer whitespace-nowrap ${
                  activeSection === "contact"
                    ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/30"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                Contact
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
                size="sm"
                aria-label="Open navigation menu"
                className="w-10 h-10 p-0 rounded-full hover:bg-white/10 hover:text-[#FF7A00] transition-all duration-300 flex justify-center items-center"
              >
                <Menu className="w-5 h-5 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[300px] bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-white/10 p-0 [&>button]:top-6 [&>button]:right-6 [&>button]:text-white [&>button:hover]:text-[#FF7A00]"
            >
              {/* Mobile Menu Header */}
              <SheetHeader className="p-6 pb-4 border-b border-white/10">
                <SheetTitle className="text-xl font-bold text-white text-left">
                  Navigation
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Menu Navigation */}
              <nav className="flex-1 p-6">
                <ul className="space-y-2">
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollToSection("hero")}
                        className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 w-full text-left ${
                          activeSection === "hero"
                            ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Home className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">Home</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollToSection("projects")}
                        className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 w-full text-left ${
                          activeSection === "projects"
                            ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <FolderGit2 className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">Projects</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollToSection("experience")}
                        className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 w-full text-left ${
                          activeSection === "experience"
                            ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Briefcase className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">Experience</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollToSection("badges")}
                        className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 w-full text-left ${
                          activeSection === "badges"
                            ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Award className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">Badges</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollToSection("tools")}
                        className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 w-full text-left ${
                          activeSection === "tools"
                            ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Wrench className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">Tools</span>
                      </button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollToSection("contact")}
                        className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 w-full text-left ${
                          activeSection === "contact"
                            ? "text-white bg-[#FF7A00] shadow-lg shadow-[#FF7A00]/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Headset className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">Contact</span>
                      </button>
                    </SheetClose>
                  </li>
                </ul>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 pt-4 border-t border-white/10">
                <SheetClose asChild>
                  <Button className="w-full bg-white/5 border border-white/10 text-white hover:bg-[#FF7A00] hover:border-[#FF7A00] rounded-full py-6 font-medium transition-all duration-300">
                    Close Menu
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
