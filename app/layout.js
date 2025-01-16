import { Geist, Geist_Mono } from "next/font/google";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import "./globals.css";
import HeroCard from "./_components/HeroCard";

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
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-[#151312] text-white lg:h-screen lg:overflow-hidden`}
      >
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex lg:flex-row flex-col items-start w-full gap-4 flex-1 lg:overflow-hidden">
            <div className="lg:w-[25%] w-[90%] lg:overflow-hidden mx-auto">
              <HeroCard />
            </div>
            <main className="p-6 lg:w-[70%] w-full lg:overflow-y-auto h-full no-scrollbar">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
