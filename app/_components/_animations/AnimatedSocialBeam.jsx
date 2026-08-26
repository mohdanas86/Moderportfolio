"use client";

import React, { forwardRef, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa6";

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
        color: "#181717",
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/mohdanas86",
        Icon: FaCode,
        color: "#FFA116",
    },
    {
        name: "Email",
        url: "mailto:coadanas@gmail.com",
        Icon: FaEnvelope,
        color: "#EA4335",
    },
];

const Circle = forwardRef(({ className, children, isCenter }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex items-center justify-center rounded-full border-2 bg-white/10 backdrop-blur-md p-3 shadow-lg border-white/20 transition-all duration-300 hover:scale-110 hover:border-white/50 hover:bg-white/20",
                isCenter ? "size-16 border-[#FF7A00]" : "size-12",
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
    const linkedinRef = useRef(null);
    const githubRef = useRef(null);
    const leetcodeRef = useRef(null);
    const emailRef = useRef(null);

    const LinkedInIcon = socialLinks[0].Icon;
    const GitHubIcon = socialLinks[1].Icon;
    const LeetCodeIcon = socialLinks[2].Icon;
    const EmailIcon = socialLinks[3].Icon;

    return (
        <div
            className="relative flex h-[180px] w-full items-center justify-center overflow-hidden p-6"
            ref={containerRef}
        >
            {/* Animated Beams connecting professional links */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={linkedinRef}
                toRef={githubRef}
                curvature={25}
                gradientStartColor="#0077B5"
                gradientStopColor="#FF7A00"
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={githubRef}
                toRef={leetcodeRef}
                curvature={-20}
                gradientStartColor="#FF7A00"
                gradientStopColor="#FFA116"
                className="z-0"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={leetcodeRef}
                toRef={emailRef}
                curvature={25}
                gradientStartColor="#FFA116"
                gradientStopColor="#EA4335"
                className="z-0"
            />

            <div className="flex size-full max-w-4xl items-center justify-center gap-6 relative z-10">
                {/* Horizontal Line of Social Icons */}
                <div className="flex items-center gap-6">
                    <Link
                        href={socialLinks[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label={socialLinks[0].name}
                    >
                        <Circle ref={linkedinRef}>
                            <LinkedInIcon className="text-2xl text-white/80 group-hover:text-[#0077B5] transition-colors" />
                        </Circle>
                    </Link>
                    <Link
                        href={socialLinks[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label={socialLinks[1].name}
                    >
                        <Circle ref={githubRef}>
                            <GitHubIcon className="text-2xl text-white/80 group-hover:text-white transition-colors" />
                        </Circle>
                    </Link>
                    <Link
                        href={socialLinks[2].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label={socialLinks[2].name}
                    >
                        <Circle ref={leetcodeRef}>
                            <LeetCodeIcon className="text-2xl text-white/80 group-hover:text-[#FFA116] transition-colors" />
                        </Circle>
                    </Link>
                    <Link
                        href={socialLinks[3].url}
                        className="group"
                        aria-label={socialLinks[3].name}
                    >
                        <Circle ref={emailRef}>
                            <EmailIcon className="text-2xl text-white/80 group-hover:text-[#EA4335] transition-colors" />
                        </Circle>
                    </Link>
                </div>
            </div>
        </div>
    );
}


