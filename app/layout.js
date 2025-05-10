import { Geist, Geist_Mono } from "next/font/google";
import Header from "./_components/Header";
import HeroCard from "./_components/HeroCard";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anas Alam - Portfolio",
  description: "A portfolio website built by Anas Alam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="no-scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#151312] text-white lg:h-screen overflow-hidden overflow-y-scroll no-scrollbar`}
      >
        <div className="flex flex-col lg:max-h-screen no-scrollbar">
          <div className=" h-[50px]">
            <Header />
          </div>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 py-6 gap-6 flex-1">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 flex-shrink-0 ">
              <HeroCard />
            </aside>

            {/* Main Content */}
            <main className="w-full lg:w-3/3 flex-1 overflow-y-scroll no-scrollbar lg:max-h-[85vh]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
