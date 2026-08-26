"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectGallery({ images, siteUrl }: {
    images: string[],
    siteUrl: string
}) {
    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr,200px] gap-4 w-full p-0 mb-0 overflow-hidden">
            {/* Projects Main Image Preview */}
            <div className="w-full">
                <div className="w-full aspect-video relative overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black/40">
                    <Image
                        src={currentImage}
                        alt={siteUrl || "Project screenshot"}
                        fill
                        className="object-cover transition-all duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                        priority
                    />
                </div>
            </div>

            {/* Image Gallery Thumbnails */}
            <div className="w-full">
                {/* Mobile: Horizontal scroll */}
                <div className="md:hidden w-full flex gap-2.5 overflow-x-auto scrollbar pb-2">
                    {images.map((img, index) => {
                        const isActive = currentImage === img;
                        return (
                            <button
                                key={index}
                                className={`flex-shrink-0 w-[140px] aspect-video relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                                    isActive ? "border-[#FF7A00] shadow-md shadow-[#FF7A00]/20 scale-[1.02]" : "border-white/20 opacity-70 hover:opacity-100"
                                }`}
                                onClick={() => setCurrentImage(img)}
                                aria-label={`View image ${index + 1}`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="140px"
                                />
                            </button>
                        );
                    })}
                </div>

                {/* Desktop: Vertical scroll */}
                <div
                    className="hidden md:flex md:flex-col gap-2.5 w-full max-h-[380px] overflow-y-auto pr-1 scrollbar"
                    data-lenis-prevent
                    style={{ pointerEvents: 'auto' }}
                >
                    {images.map((img, index) => {
                        const isActive = currentImage === img;
                        return (
                            <button
                                key={index}
                                className={`w-full aspect-video relative overflow-hidden rounded-lg border-2 transition-all duration-200 flex-shrink-0 ${
                                    isActive ? "border-[#FF7A00] shadow-md shadow-[#FF7A00]/20 scale-[1.02]" : "border-white/10 opacity-70 hover:opacity-100 hover:border-white/30"
                                }`}
                                onClick={() => setCurrentImage(img)}
                                aria-label={`View image ${index + 1}`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="200px"
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}