"use client"

import { useState } from "react";
import Image from "next/image";

export default function ProjectGallery({ images, siteUrl }: {
    images: string[],
    siteUrl: string
}) {
    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr,200px] gap-4 w-full p-0 mb-0 overflow-hidden">
            {/* Projects Mock Container */}
            <div className="">
                <div className="w-full aspect-video relative overflow-hidden rounded-[1px]">
                    <Image
                        src={currentImage}
                        alt={siteUrl}
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
                    {images.map((img, index) => (
                        <button
                            key={index}
                            className="border border-white hover:border-gray-400 transition-colors flex-shrink-0 w-[200px] aspect-video relative overflow-hidden rounded-[1px]"
                            onClick={() => setCurrentImage(img)}
                        >
                            <Image
                                src={img}
                                alt={siteUrl}
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
                    {images.map((img, index) => (
                        <button
                            key={index}
                            className="border border-white hover:border-gray-400 transition-colors w-full mb-3 aspect-video relative overflow-hidden rounded-[1px]"
                            onClick={() => setCurrentImage(img)}
                        >
                            <Image
                                src={img}
                                alt={siteUrl}
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