"use client";

import { AndroidMocks } from "@/app/_components/mocks/AndroidMocks";
import { IphoneMocks } from "@/app/_components/mocks/IphoneMocks";
import { SafariMocks } from "@/app/_components/mocks/SafariMocks";
import { useEffect, useState } from "react";

import { TechStacks } from "../_components/TechStacks";
import { getTechIcon, getTechIcons } from "@/data/userData";

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
            className={`${showAnimation ? "fade-in" : "opacity-0"} lg:py-16 py-6 mt-0 lg:mt-16 relative overflow-x-hidden overflow-y-visible w-full min-h-screen border`}
        >

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-4 md:gap-6">
                    {/* Project Title */}
                    <div className="flex border w-full">
                        <h1 className="text-2xl font-sans font-semibold">AnaCgpa Academic Tool</h1>
                    </div>

                    {/* Projects Mock and Image Gallery Container */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr,200px] gap-4 w-full p-0">
                        {/* Projects Mock Container */}
                        <div className="">
                            <div className="w-full max-w-[1203px] mx-auto">
                                <SafariMocks />
                            </div>
                        </div>

                        {/* Image Gallery - Horizontal scroll on mobile, vertical on desktop */}
                        <div className="">
                            {/* Mobile: Horizontal scroll */}
                            <div className="md:hidden w-full flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((img, index) => (
                                    <button key={index} className=" p-2 border flex items-center justify-center flex-shrink-0 w-[200px] aspect-video hover:border-gray-400 transition-colors">
                                        img {index + 1}
                                    </button>
                                ))}
                            </div>
                            {/* Desktop: Vertical scroll */}
                            <div
                                className="hidden md:block w-full h-[550px] overflow-y-auto"
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
                    <div className="flex border w-full p-4 sm:p-6 md:p-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis provident, impedit autem temporibus ipsam est velit architecto quas vel totam assumenda commodi, voluptatem vero, perspiciatis a ipsum animi quidem!</div>

                    {/* Tech Stack */}
                    <div className="flex flex-col border w-full p-4 sm:p-6 md:p-8">
                        <h1>Tech Stack</h1>

                        <TechStacks
                            techs={getTechIcons(["React", "Next.js", "TypeScript", "MongoDB", "Node.js", "Express.js", "Tailwind CSS", "Vercel"])}
                            centerIcon={getTechIcon("JavaScript")}
                        />
                    </div>

                    {/* Demo Links */}
                    <div className="flex border w-full p-4 sm:p-6 md:p-8">Demo Links</div>
                </div>
            </div>
        </div>
    )
}