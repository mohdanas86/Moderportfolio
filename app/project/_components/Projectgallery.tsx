"use client"

import { SafariMocks } from "@/app/_components/mocks/SafariMocks";
import { useState } from "react";
import Image from "next/image";

export const galleryImages = [
    { src: "/anaspice.png", url: "anaspice.com" },
    { src: "/anasufy.png", url: "anasufy.com" },
    { src: "/ainotestaker.png", url: "ainotestaker.com" }
];

export default function ProjectGallery() {
    const [currentImage, setCurrentImage] = useState(galleryImages[0]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr,200px] gap-4 w-full p-0 mb-0 overflow-hidden">
            {/* Projects Mock Container */}
            <div className="">
                <div className="w-full aspect-video relative overflow-hidden rounded-[1px]">
                    <Image
                        src={currentImage.src}
                        alt={currentImage.url}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                    />
                </div>
            </div>

            {/* Image Gallery - Horizontal scroll on mobile, vertical on desktop */}
            <div className="">
                {/* Mobile: Horizontal scroll */}
                <div className="md:hidden w-full flex gap-3 overflow-x-auto scrollbar pb-2">
                    {galleryImages.map((img, index) => (
                        <button
                            key={index}
                            className="border border-white hover:border-gray-400 transition-colors flex-shrink-0 w-[200px] aspect-video relative overflow-hidden rounded-[1px]"
                            onClick={() => setCurrentImage(img)}
                        >
                            <Image
                                src={img.src}
                                alt={img.url}
                                fill
                                className="object-cover"
                                sizes="200px"
                            />
                        </button>
                    ))}
                </div>
                {/* Desktop: Vertical scroll */}
                <div
                    className="hidden md:block w-full h-[400px] overflow-y-auto scrollbar"
                    data-lenis-prevent
                    style={{ pointerEvents: 'auto' }}
                >
                    {galleryImages.map((img, index) => (
                        <button
                            key={index}
                            className="border border-white hover:border-gray-400 transition-colors w-full mb-3 aspect-video relative overflow-hidden rounded-[1px]"
                            onClick={() => setCurrentImage(img)}
                        >
                            <Image
                                src={img.src}
                                alt={img.url}
                                fill
                                className="object-cover"
                                sizes="200px"
                            />
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}