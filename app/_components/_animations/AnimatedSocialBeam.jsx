"use client";

import React, { forwardRef, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa6";

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anas86",
        Icon: FaLinkedin,
        color: "#0077B5",
    },
    {
        name: "GitHub",
        url: "https://github.com/mohdanas86",
        Icon: FaGithub,
        color: "#333333",
    },
    {
        name: "Instagram",
        url: "https://instagram.com/_anas__86",
        Icon: FaInstagram,
        color: "#E4405F",
    },
    {
        name: "YouTube",
        url: "https://youtube.com/c/AG4444YT",
        Icon: FaYoutube,
        color: "#FF0000",
    },
];

const Circle = forwardRef(({ className, children, isCenter }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex items-center justify-center rounded-full border-2 bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110",
                isCenter ? "size-16 border-blue-500" : "size-12 border-gray-300",
                className
            )}
        >
            {children}
        </div>
    );
});
Circle.displayName = "Circle";

export function AnimatedSocialBeam() {
    const containerRef = useRef(null);
    const centerRef = useRef(null);
    const linkedinRef = useRef(null);
    const githubRef = useRef(null);
    const instagramRef = useRef(null);
    const youtubeRef = useRef(null);

    const LinkedInIcon = socialLinks[0].Icon;
    const GitHubIcon = socialLinks[1].Icon;
    const InstagramIcon = socialLinks[2].Icon;
    const YouTubeIcon = socialLinks[3].Icon;

    return (
        <div
            className="relative flex h-[200px] w-full items-center justify-center overflow-hidden p-10"
            ref={containerRef}
        >
            {/* Animated Beams connecting to center - Rendered first to be behind */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={linkedinRef}
                toRef={githubRef}
                curvature={30}
                gradientStartColor="#0077B5"
                gradientStopColor="#4da3ff"
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={linkedinRef}
                toRef={instagramRef}
                curvature={10}
                gradientStartColor="#333333"
                gradientStopColor="#666666"
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={githubRef}
                toRef={instagramRef}
                curvature={-10}
                gradientStartColor="#E4405F"
                gradientStopColor="#fd5c87"
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={instagramRef}
                toRef={youtubeRef}
                curvature={-30}
                gradientStartColor="#FF0000"
                gradientStopColor="#ff4444"
                className="z-0"
            />

            <div className="flex size-full max-w-4xl items-center justify-center gap-6 relative z-10">
                {/* Horizontal Line of Social Icons */}
                <div className="flex items-center gap-6">
                    <Link
                        href={socialLinks[0].url}
                        target="_blank"
                        className="group"
                        aria-label={socialLinks[0].name}
                    >
                        <Circle ref={linkedinRef}>
                            <LinkedInIcon className="text-2xl text-gray-700 group-hover:text-[#0077B5] transition-colors" />
                        </Circle>
                    </Link>
                    <Link
                        href={socialLinks[1].url}
                        target="_blank"
                        className="group"
                        aria-label={socialLinks[1].name}
                    >
                        <Circle ref={githubRef}>
                            <GitHubIcon className="text-2xl text-gray-700 group-hover:text-[#333333] transition-colors" />
                        </Circle>
                    </Link>
                    <Link
                        href={socialLinks[2].url}
                        target="_blank"
                        className="group"
                        aria-label={socialLinks[2].name}
                    >
                        <Circle ref={instagramRef}>
                            <InstagramIcon className="text-2xl text-gray-700 group-hover:text-[#E4405F] transition-colors" />
                        </Circle>
                    </Link>
                    <Link
                        href={socialLinks[3].url}
                        target="_blank"
                        className="group"
                        aria-label={socialLinks[3].name}
                    >
                        <Circle ref={youtubeRef}>
                            <YouTubeIcon className="text-2xl text-gray-700 group-hover:text-[#FF0000] transition-colors" />
                        </Circle>
                    </Link>
                </div>
            </div>
        </div>
    );
}

