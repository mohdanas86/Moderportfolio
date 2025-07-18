"use client";

import React from "react";
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

const Header = () => {
  const pathname = usePathname(); // Use to determine active navigation

  // Debug logging to see what pathname we're getting
  console.log("Current pathname:", pathname);

  return (
    <header className="w-full bg-[#1e1e1e] border-b border-gray-800/50 backdrop-blur-sm">
      <div className="w-full h-[60px] lg:h-[60px] flex items-center justify-between px-3 sm:px-4 lg:px-8 max-w-7xl mx-auto">
        {/* Site Logo/Name - Mobile optimized */}
        <div className="flex-shrink-0 min-w-0">
          <Link
            href="/"
            className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white hover:text-[#FF7A00] transition-colors duration-200 truncate flex items-center justify-center"
          >
            Anas Alam
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1 xl:gap-2">
            <li>
              <Link
                href="/"
                className={`px-2 xl:px-3 py-2 rounded-lg transition-colors duration-200 text-sm xl:text-base ${
                  pathname === "/"
                    ? "text-[#FF7A00] bg-[#FF7A00]/10"
                    : "text-white hover:text-[#FF7A00] hover:bg-[#FF7A00]/5"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`px-2 xl:px-3 py-2 rounded-lg transition-colors duration-200 text-sm xl:text-base ${
                  pathname === "/projects"
                    ? "text-[#FF7A00] bg-[#FF7A00]/10"
                    : "text-white hover:text-[#FF7A00] hover:bg-[#FF7A00]/5"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className={`px-2 xl:px-3 py-2 rounded-lg transition-colors duration-200 text-sm xl:text-base ${
                  pathname === "/experience"
                    ? "text-[#FF7A00] bg-[#FF7A00]/10"
                    : "text-white hover:text-[#FF7A00] hover:bg-[#FF7A00]/5"
                }`}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className={`px-2 xl:px-3 py-2 rounded-lg transition-colors duration-200 text-sm xl:text-base ${
                  pathname === "/tools"
                    ? "text-[#FF7A00] bg-[#FF7A00]/10"
                    : "text-white hover:text-[#FF7A00] hover:bg-[#FF7A00]/5"
                }`}
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`px-2 xl:px-3 py-2 rounded-lg transition-colors duration-200 text-sm xl:text-base ${
                  pathname === "/contact"
                    ? "text-[#FF7A00] bg-[#FF7A00]/10"
                    : "text-white hover:text-[#FF7A00] hover:bg-[#FF7A00]/5"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/badges"
                className={`px-2 xl:px-3 py-2 rounded-lg transition-colors duration-200 text-sm xl:text-base ${
                  pathname === "/badges"
                    ? "text-[#FF7A00] bg-[#FF7A00]/10"
                    : "text-white hover:text-[#FF7A00] hover:bg-[#FF7A00]/5"
                }`}
              >
                Badges
              </Link>
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
                className="w-10 h-10 p-0 hover:bg-[#FF7A00]/10 hover:text-[#FF7A00] transition-colors duration-200 flex justify-center items-center outline-0"
              >
                <Menu className="w-5 h-5 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[300px] bg-[#1e1e1e] border-l border-gray-800/50 p-0 [&>button]:top-6 [&>button]:right-6 [&>button]:text-white [&>button:hover]:text-[#FF7A00]"
            >
              {/* Mobile Menu Header */}
              <SheetHeader className="p-6 pb-4 border-b border-gray-800/50 border">
                <SheetTitle className="text-xl font-bold text-white text-left">
                  Explore
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Menu Navigation */}
              <nav className="flex-1 p-6">
                <ul className="space-y-2">
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                          pathname === "/"
                            ? "text-[#FF7A00] bg-[#FF7A00]/10"
                            : "text-white hover:text-[#FF7A00] hover:bg-white/5"
                        }`}
                      >
                        <Home
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "currentColor" }}
                        />
                        <span className="font-medium">Home</span>
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/projects"
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                          pathname === "/projects"
                            ? "text-[#FF7A00] bg-[#FF7A00]/10"
                            : "text-white hover:text-[#FF7A00] hover:bg-white/5"
                        }`}
                      >
                        <FolderGit2
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "currentColor" }}
                        />
                        <span className="font-medium">Projects</span>
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/experience"
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                          pathname === "/experience"
                            ? "text-[#FF7A00] bg-[#FF7A00]/10"
                            : "text-white hover:text-[#FF7A00] hover:bg-white/5"
                        }`}
                      >
                        <Briefcase
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "currentColor" }}
                        />
                        <span className="font-medium">Experience</span>
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/tools"
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                          pathname === "/tools"
                            ? "text-[#FF7A00] bg-[#FF7A00]/10"
                            : "text-white hover:text-[#FF7A00] hover:bg-white/5"
                        }`}
                      >
                        <Wrench
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "currentColor" }}
                        />
                        <span className="font-medium">Tools</span>
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/contact"
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                          pathname === "/contact"
                            ? "text-[#FF7A00] bg-[#FF7A00]/10"
                            : "text-white hover:text-[#FF7A00] hover:bg-white/5"
                        }`}
                      >
                        <Headset
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "currentColor" }}
                        />
                        <span className="font-medium">Contact</span>
                      </Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link
                        href="/badges"
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                          pathname === "/badges"
                            ? "text-[#FF7A00] bg-[#FF7A00]/10"
                            : "text-white hover:text-[#FF7A00] hover:bg-white/5"
                        }`}
                      >
                        <Award
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "currentColor" }}
                        />
                        <span className="font-medium">Badges</span>
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 pt-4 border-t border-gray-800/50 flex justify-center w-full">
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-gray-600 text-white hover:bg-[#FF7A00]/10 hover:border-[#FF7A00] hover:text-[#FF7A00]"
                  >
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
