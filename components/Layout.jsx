import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resizing for responsiveness
  useEffect(() => {
    const updateMobileView = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateMobileView();
    window.addEventListener("resize", updateMobileView);
    return () => window.removeEventListener("resize", updateMobileView);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <aside className="w-64 bg-gray-800 text-white p-4">
          <nav>
            <ul>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}

      {/* Content */}
      <main className={cn("flex-1 p-4", isMobile ? "pt-16" : "")}>
        {isMobile && (
          <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl">My App</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-white">
                  Menu
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-gray-800 text-white p-4">
                <SheetHeader>
                  <h2>Menu</h2>
                </SheetHeader>
                <nav>
                  <ul>
                    <li className="mb-4">
                      <a href="/" className="hover:underline">
                        Home
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="/about" className="hover:underline">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="hover:underline">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </header>
        )}
        {children}
      </main>
    </div>
  );
}
