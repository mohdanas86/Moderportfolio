import { Geist, Geist_Mono } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import CursorFollower from "./_components/CursorFollower";
import SmoothScroll from "./_components/SmoothScroll";
import ScrollToTop from "./_components/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import CanvasCursor from "./_components/_animations/CanvasCursor";
import { ScrollProgress } from "@/components/ui/scroll-progress.jsx"

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

// Viewport configuration
export const viewport = {
  width: 'device-width',
  themeColor: "#151312",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true, // Allow user scaling for accessibility
};

export const metadata = {
  metadataBase: new URL('https://anasalam.dev'),
  title: {
    default: "Anas Alam - Full Stack Software Developer Portfolio",
    template: "%s | Anas Alam"
  },
  description: "Full Stack Software Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable, performant web applications with focus on user experience and accessibility.",
  keywords: ["Anas Alam", "Full Stack Developer", "Software Engineer", "React Developer", "Next.js", "Node.js", "Web Development", "Portfolio", "JavaScript", "TypeScript"],
  authors: [{ name: "Anas Alam" }],
  creator: "Anas Alam",
  publisher: "Anas Alam",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anasalam.dev',
    title: 'Anas Alam - Full Stack Software Developer',
    description: 'Full Stack Software Developer specializing in React, Next.js, Node.js. Building scalable web applications with modern technologies.',
    siteName: 'Anas Alam Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anas Alam - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anas Alam - Full Stack Software Developer',
    description: 'Full Stack Software Developer specializing in React, Next.js, Node.js',
    images: ['/og-image.png'],
    creator: '@anasalam',
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: 'https://anasalam.dev',
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="light" className="no-scrollbar" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anas Alam",
              "url": "https://anasalamportfolio.netlify.app",
              "jobTitle": "Full Stack Software Developer",
              "description": "Full Stack Software Developer specializing in React, Next.js, Node.js, and modern web technologies",
              "sameAs": [
                "https://github.com/mohdanas86",
                "https://linkedin.com/in/anas86",
              ],
              "knowsAbout": ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "Web Development", "Java"],
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#151312] text-white min-h-screen no-scrollbar`}
        suppressHydrationWarning
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
        >
          Skip to main content
        </a>
        <Toaster position="bottom-right" richColors closeButton expand={false} />
        <SmoothScroll>
          {/* <CursorFollower /> */}
          <CanvasCursor />
          <ScrollToTop />
          <ScrollProgress />
          <div className="flex flex-col min-h-screen w-full relative main-content">
            {/* Header - Fixed positioning and mobile optimized */}
            <div className="fixed top-0 left-0 right-0 z-50 w-full">
              <Header />
            </div>

            {/* Main Layout - Mobile-first responsive design */}
            <div className="flex-1 w-full min-w-0 pt-[60px] mt-0">
              <div className="w-full mx-auto min-h-0">
                {/* Main Content with mobile-optimized spacing */}
                <main id="main-content" className="w-full min-w-0" role="main">
                  <div className="w-full min-w-0">
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
