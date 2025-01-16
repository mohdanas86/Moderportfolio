// "use client";

// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import Link from "next/link";
// import { Menu } from "lucide-react";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const pathname = usePathname(); // Use to determine active navigation

//   return (
//     <header className="shadow-sm  p-4 flex justify-between items-center min-h-[60px] text-black">
//       {/* Site Name or Logo */}
//       <div>
//         <Link
//           href="/"
//           className="text-xl font-bold text-white hover:text-[#353334] lg:hidden"
//         >
//           Anas Alam
//         </Link>
//       </div>

//       {/* Mobile Navigation Menu - Visible Only on Small Screens */}
//       <Sheet>
//         <SheetTrigger asChild>
//           <Button
//             variant="outline"
//             className="lg:hidden" // Hide button on large screens
//             aria-label="Open Menu"
//           >
//             <Menu className="w-6 h-6 text-black" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent className="w-64 bg-gray-50">
//           <SheetHeader>
//             <SheetTitle className="text-xl font-bold">Anas</SheetTitle>
//           </SheetHeader>
//           <nav>
//             <ul className="space-y-2 mt-4 text-black">
//               <Link href="/">
//                 <li
//                   className={`p-4 rounded-lg cursor-pointer ${
//                     pathname === "/"
//                       ? "bg-blue-50 text-[#353334] font-semibold"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   Home
//                 </li>
//               </Link>
//               <Link href="/about">
//                 <li
//                   className={`p-4 rounded-lg cursor-pointer ${
//                     pathname === "/about"
//                       ? "bg-blue-50 text-[#353334] font-semibold"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   Project
//                 </li>
//               </Link>
//               <Link href="/projects">
//                 <li
//                   className={`p-4 rounded-lg cursor-pointer ${
//                     pathname === "/projects"
//                       ? "bg-blue-50 text-[#353334] font-semibold"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   Expreance
//                 </li>
//               </Link>
//               <Link href="/contact">
//                 <li
//                   className={`p-4 rounded-lg cursor-pointer ${
//                     pathname === "/contact"
//                       ? "bg-blue-50 text-[#353334] font-semibold"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   Contact
//                 </li>
//               </Link>
//             </ul>
//           </nav>
//           <SheetFooter className="mt-6">
//             <SheetClose asChild>
//               <Button className="w-full" variant="primary">
//                 Close Menu
//               </Button>
//             </SheetClose>
//           </SheetFooter>
//         </SheetContent>
//       </Sheet>
//     </header>
//   );
// };

// export default Header;

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
    <header className="shadow-sm p-4 flex justify-between items-center min-h-[60px] text-black">
      {/* Site Name or Logo */}
      <div>
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-[#353334] lg:hidden"
        >
          Anas Alam
        </Link>
      </div>

      {/* Mobile Navigation Menu - Visible Only on Small Screens */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="lg:hidden" // Hide button on large screens
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6 text-black" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-64 bg-gray-50">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold">Anas Alam</SheetTitle>
          </SheetHeader>
          <nav>
            <ul className="space-y-2 mt-4 text-black">
              <Link href="/">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer ${
                    pathname === "/"
                      ? "bg-blue-50 text-[#353334] font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Home className="w-5 h-5 text-black" /> Home
                </li>
              </Link>
              <Link href="/projects">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer ${
                    pathname === "/projects"
                      ? "bg-blue-50 text-[#353334] font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FolderGit2 className="w-5 h-5 text-black" /> Projects
                </li>
              </Link>
              <Link href="/experience">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer ${
                    pathname === "/experience"
                      ? "bg-blue-50 text-[#353334] font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Briefcase className="w-5 h-5 text-black" /> Experience
                </li>
              </Link>
              <Link href="/tools">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer ${
                    pathname === "/tools"
                      ? "bg-blue-50 text-[#353334] font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Wrench className="w-5 h-5 text-black" /> Tools
                </li>
              </Link>
              <Link href="/contact">
                <li
                  className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer ${
                    pathname === "/contact"
                      ? "bg-blue-50 text-[#353334] font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Headset className="w-5 h-5 text-black" /> Contact
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
