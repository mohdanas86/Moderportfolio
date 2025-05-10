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
} from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // Use to determine active navigation

  return (
    <header className="shadow-md p-4 flex justify-between items-center max-h-[60px] bg-[#1e1e1e] text-white">
      {/* Site Name or Logo */}
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-[#353334] transition duration-300"
        >
          Anas Alam
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-between items-center gap-8 text-white">
        <ul className="flex gap-6">
          <Link href="/">
            <li
              className={`p-3 relative rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                pathname === "/" ? "text-[#FF7A00] " : "hover:text-[#FF7A00]"
              }`}
            >
              {/* <Home className="w-5 h-5 text-white" />  */}
              Home
              {pathname === "/" && (
                <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
              )}
            </li>
          </Link>
          <Link href="/projects">
            <li
              className={`p-3 relative rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                pathname === "/projects"
                  ? "text-[#FF7A00] "
                  : "hover:text-[#FF7A00]"
              }`}
            >
              {/* <FolderGit2 className="w-5 h-5 text-white" />  */}
              Projects
              {pathname === "/projects" && (
                <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
              )}
            </li>
          </Link>
          <Link href="/experience">
            <li
              className={`p-3 relative rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                pathname === "/experience"
                  ? "text-[#FF7A00] "
                  : "hover:text-[#FF7A00]"
              }`}
            >
              {/* <Briefcase className="w-5 h-5 text-white" />  */}
              Experience
              {pathname === "/experience" && (
                <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
              )}
            </li>
          </Link>
          <Link href="/tools">
            <li
              className={`p-3 relative rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                pathname === "/tools"
                  ? "text-[#FF7A00] "
                  : "hover:text-[#FF7A00]"
              }`}
            >
              {/* <Wrench className="w-5 h-5 text-white" /> */}
              Tools
              {pathname === "/tools" && (
                <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
              )}
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`p-3 relative rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                pathname === "/contact"
                  ? "text-[#FF7A00] "
                  : "hover:text-[#FF7A00]"
              }`}
            >
              {/* <Headset className="w-5 h-5 text-white" />  */}
              Contact
              {pathname === "/contact" && (
                <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
              )}
            </li>
          </Link>
        </ul>
      </nav>

      {/* Mobile Navigation Menu - Visible Only on Small Screens */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            aria-label="Open Menu"
            className="hover:text-[#FF7A00] transition-all duration-300 lg:hidden hover:bg-transparent"
          >
            <Menu className="w-6 h-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-64 bg-[#1e1e1e]">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold text-white text-start">
              Anas Alam
            </SheetTitle>
          </SheetHeader>
          <nav>
            <ul className="space-y-4 mt-4 text-white">
              <Link href="/">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                    pathname === "/"
                      ? "text-[#FF7A00] "
                      : "hover:text-[#FF7A00]"
                  }`}
                >
                  <Home className="w-5 h-5 text-white" /> Home
                  {pathname === "/" && (
                    <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
                  )}
                </li>
              </Link>
              <Link href="/projects">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                    pathname === "/projects"
                      ? "text-[#FF7A00] "
                      : "hover:text-[#FF7A00]"
                  }`}
                >
                  <FolderGit2 className="w-5 h-5 text-white" /> Projects
                  {pathname === "/projects" && (
                    <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
                  )}
                </li>
              </Link>
              <Link href="/experience">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                    pathname === "/experience"
                      ? "text-[#FF7A00] "
                      : "hover:text-[#FF7A00]"
                  }`}
                >
                  <Briefcase className="w-5 h-5 text-white" /> Experience
                  {pathname === "/experience" && (
                    <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
                  )}
                </li>
              </Link>
              <Link href="/tools">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                    pathname === "/tools"
                      ? "text-[#FF7A00] "
                      : "hover:text-[#FF7A00]"
                  }`}
                >
                  <Wrench className="w-5 h-5 text-white" /> Tools
                  {pathname === "/tools" && (
                    <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
                  )}
                </li>
              </Link>
              <Link href="/contact">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                    pathname === "/contact"
                      ? "text-[#FF7A00] "
                      : "hover:text-[#FF7A00]"
                  }`}
                >
                  <Headset className="w-5 h-5 text-white" /> Contact
                  {pathname === "/contact" && (
                    <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#FF7A00]"></span>
                  )}
                </li>
              </Link>
            </ul>
          </nav>
          <SheetFooter className="mt-6">
            <SheetClose asChild>
              <Button className="w-full">Close Menu</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
