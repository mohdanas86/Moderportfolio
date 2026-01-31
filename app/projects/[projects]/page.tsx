"use client";

import { AndroidMocks } from "@/app/_components/mocks/AndroidMocks";
import { IphoneMocks } from "@/app/_components/mocks/IphoneMocks";
import { SafariMocks } from "@/app/_components/mocks/SafariMocks";
import { useEffect, useState } from "react";

export default function ProjectPage() {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(true);
        }, 200); // Delay animation by 200ms

        return () => clearTimeout(timer);
    }, []);
    return (
        <div
            className={`${showAnimation ? "fade-in" : "opacity-0"}
  py-16 mt-0 lg:mt-16 relative overflow-x-hidden overflow-y-visible w-full min-h-screen border`}
        // id="project"
        >

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border">
                <div className="grid border border-red-600 gap-4 md:gap-6">
                    {/* Projects Mock and Image Gallery Container */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr,200px] gap-4 border w-full p-2 sm:p-4">
                        {/* Projects Mock Container */}
                        <div className="border p-2 sm:p-4">
                            <div className="w-full max-w-[1203px] mx-auto">
                                <SafariMocks />
                            </div>
                        </div>

                        {/* Image Gallery - Horizontal scroll on mobile, vertical on desktop */}
                        <div className="border">
                            {/* Mobile: Horizontal scroll */}
                            <div className="md:hidden w-full flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((img, index) => (
                                    <button key={index} className="border p-2 flex items-center justify-center flex-shrink-0 w-[200px] aspect-video hover:border-gray-400 transition-colors">
                                        img {index + 1}
                                    </button>
                                ))}
                            </div>
                            {/* Desktop: Vertical scroll */}
                            <div
                                className="hidden md:block w-full border-2 border-blue-500 h-[500px] overflow-y-auto"
                                data-lenis-prevent
                                style={{ pointerEvents: 'auto' }}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((img, index) => (
                                    <div
                                        key={index}
                                        className="border p-2 flex items-center justify-center w-full mb-3"
                                        style={{ aspectRatio: '16/9' }}
                                    >
                                        img {index + 1}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* About the project */}
                    <div className="flex border w-full p-4 sm:p-6 md:p-8">About the project</div>

                    {/* Tech Stack */}
                    <div className="flex border w-full p-4 sm:p-6 md:p-8">Tech Stack</div>

                    {/* Demo Links */}
                    <div className="flex border w-full p-4 sm:p-6 md:p-8">Demo Links</div>
                </div>
            </div>
        </div>
    )
}