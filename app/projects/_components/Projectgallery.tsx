"use client"

import { SafariMocks } from "@/app/_components/mocks/SafariMocks";
import { useState } from "react";

export const galleryImages = [
    { src: "/anaspice.png", url: "anaspice.com" },
    { src: "/anasufy.png", url: "anasufy.com" },
    { src: "/ainotestaker.png", url: "ainotestaker.com" }
];

export default function ProjectGallery() {
    const [currentImage, setCurrentImage] = useState(galleryImages[0]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr,200px] gap-4 w-full p-0 border mb-0">
            {/* Projects Mock Container */}
            <div className="border">
                <div className="w-full max-w-[1203px] mx-auto">
                    <img src={currentImage.src} alt={currentImage.url} />
                </div>
            </div>

            {/* Image Gallery - Horizontal scroll on mobile, vertical on desktop */}
            <div className="">
                {/* Mobile: Horizontal scroll */}
                <div className="md:hidden w-full flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                    {galleryImages.map((img, index) => (
                        <button key={index} className="border flex items-center justify-center flex-shrink-0 w-[200px] aspect-video hover:border-gray-400 transition-colors" onClick={() => setCurrentImage(img)}>
                            <img src={img.src} alt={img.url} />
                        </button>
                    ))}
                </div>
                {/* Desktop: Vertical scroll */}
                <div
                    className="hidden md:block w-full h-[550px] overflow-y-auto"
                    data-lenis-prevent
                    style={{ pointerEvents: 'auto' }}
                >
                    {galleryImages.map((img, index) => (
                        <button
                            key={index}
                            className="border flex items-center justify-center w-full mb-3"
                            style={{ aspectRatio: '16/9' }}
                            onClick={() => setCurrentImage(img)}
                        >
                            <img src={img.src} alt={img.url} />
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}