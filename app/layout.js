import { Geist, Geist_Mono } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";

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

export const metadata = {
  title: "Anas Alam - Portfolio",
  description: "A portfolio website built by Anas Alam.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#151312',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="no-scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#151312] text-white min-h-screen overflow-x-hidden`}
      >
        <div className="flex flex-col min-h-screen w-full">
          {/* Header - Fixed positioning and mobile optimized */}
          <div className="sticky top-0 z-50 w-full">
            <Header />
          </div>

          {/* Main Layout - Mobile-first responsive design */}
          <div className="flex-1 w-full min-w-0">
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
      </body>
    </html>
  );
}
