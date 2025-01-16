"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Briefcase, FolderGit2, Headset, Home, Wrench } from "lucide-react";

export default function Sidebar({ activeSection }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen hidden md:block ">
      <h2 className="text-lg font-semibold p-4">Navigation</h2>
      <nav>
        <ul>
          <Link href="/">
            <li
              className={`p-4 duration-300 flex items-center gap-4 ${
                pathname === "/"
                  ? "bg-[#211f1d84] border-r-2 border-white"
                  : "hover:bg-[#1d1b1a]"
              }`}
            >
              <Home /> Home
            </li>
          </Link>
          <Link href="/projects">
            <li
              className={`p-4 duration-300 flex items-center gap-4 ${
                pathname === "/projects"
                  ? "bg-[#211f1d84] border-r-2 border-white "
                  : "hover:bg-[#1d1b1a]"
              }`}
            >
              <FolderGit2 /> Projects
            </li>
          </Link>
          <Link href="/experience">
            <li
              className={`p-4 duration-300 flex items-center gap-4 ${
                pathname === "/experience"
                  ? "bg-[#211f1d84] border-r-2 border-white "
                  : "hover:bg-[#1d1b1a]"
              }`}
            >
              <Briefcase /> Experience
            </li>
          </Link>
          <Link href="/tools">
            <li
              className={`p-4 duration-300 flex items-center gap-4 ${
                pathname === "/tools"
                  ? "bg-[#211f1d84] border-r-2 border-white "
                  : "hover:bg-[#1d1b1a]"
              }`}
            >
              <Wrench /> Tools
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`p-4 duration-300 flex items-center gap-4 ${
                pathname === "/contact"
                  ? "bg-[#211f1d84] border-r-2 border-white "
                  : "hover:bg-[#1d1b1a]"
              }`}
            >
              <Headset /> Contact
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
