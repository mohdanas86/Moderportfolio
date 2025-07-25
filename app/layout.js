import { Geist, Geist_Mono } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import CursorFollower from "./_components/CursorFollower";
import TechUI from "./_components/TechUI";
import SmoothScroll from "./_components/SmoothScroll";
import ScrollToTop from "./_components/ScrollToTop";
import InstallPWAWrapper from "./_components/InstallPWAWrapper";
import ServiceWorkerRegistration from "./_components/ServiceWorkerRegistration";
import MobileScrollOptimizer from "./_components/MobileScrollOptimizer";
import TouchGestureHandler from "./_components/TouchGestureHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Separate viewport export as per Next.js guidelines
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: false, // Prevent pinch zooming for app-like feel
  themeColor: '#151312',
};

export const metadata = {
  title: "Anas Alam - Portfolio",
  description: "A portfolio website built by Anas Alam.",
  manifest: '/manifest.json', // For PWA support
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Anas Alam'
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="light" className="no-scrollbar">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Anas Alam" />
        <link rel="apple-touch-icon" href="/icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#151312] text-white min-h-screen overflow-x-hidden no-scrollbar overscroll-none`}
      >
        <SmoothScroll>
          <CursorFollower />
          <TechUI />
          <ScrollToTop />
          <InstallPWAWrapper />
          <ServiceWorkerRegistration />
          <MobileScrollOptimizer />
          <TouchGestureHandler />
          <div className="flex flex-col min-h-screen w-full relative main-content">
            {/* Header - Fixed positioning and mobile optimized */}
            <div className="header-fixed top-0 z-50 w-full">
              <Header />
            </div>

            {/* Main Layout - Mobile-first responsive design */}
            <div className="flex-1 w-full min-w-0 pt-[60px]">
              <div className="w-full max-w-7xl mx-auto min-h-0">
                {/* Main Content with mobile-optimized spacing */}
                <main className="w-full px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8 min-w-0">
                  <div className="max-w-4xl mx-auto min-w-0">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
