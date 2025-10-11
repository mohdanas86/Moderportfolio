"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => setShowAnimation(true), 200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Generate particles only on client side to avoid hydration mismatch
        const newParticles = [...Array(6)].map((_, i) => ({
            id: i,
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            top: Math.random() * 100,
            left: Math.random() * 100,
            delay: i * 0.8,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div
            className={`${showAnimation ? "fade-in" : "opacity-0"
                } min-h-screen flex flex-col items-center justify-center  text-center relative overflow-hidden`}
        >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute rounded-full "
                        style={{
                            width: `${particle.width}px`,
                            height: `${particle.height}px`,
                            top: `${particle.top}%`,
                            left: `${particle.left}%`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-6 max-w-3xl mx-auto">
                {/* 404 Text */}
                <div className="relative mb-10">
                    <h1 className="text-[8rem] sm:text-[10rem] lg:text-[14rem] font-extrabold bg-gradient-to-r from-[#FF7A00] via-orange-400 to-[#FF7A00] bg-clip-text text-transparent animate-float drop-shadow-[0_0_30px_rgba(255,122,0,0.5)] select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 text-[8rem] sm:text-[10rem] lg:text-[14rem] font-extrabold text-[#FF7A00]/20 blur-md animate-pulse select-none">
                        404
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#FF7A00] rounded-full animate-ping opacity-60" />
                    <div
                        className="absolute -bottom-4 -left-4 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-40"
                        style={{ animationDelay: "1s" }}
                    />
                    <div
                        className="absolute top-1/2 -right-6 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                        style={{ animationDelay: "2s" }}
                    />
                </div>

                {/* Message */}
                <div className="space-y-6 mb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-up">
                        Page Not Found
                    </h2>

                </div>

                {/* Button */}
                <Link href="/" className="inline-block">
                    <Button
                        className="px-10 py-5 text-lg font-semibold rounded-2xl bg-gradient-to-r from-[#FF7A00] to-orange-500 text-white shadow-[0_0_25px_rgba(255,122,0,0.4)] 
            hover:shadow-[0_0_40px_rgba(255,122,0,0.6)] transition-all duration-300 flex items-center gap-3"
                    >
                        <Home size={22} />
                        <span>Back to Home</span>
                    </Button>
                </Link>
            </div>

            {/* Animations */}
            <style jsx>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 1.5s ease-out, transform 1.5s ease-out;
        }
        .opacity-0 {
          opacity: 0;
          transform: translateY(30px);
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
        </div>
    );
};

export default NotFound;
