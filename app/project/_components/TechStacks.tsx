"use client";

import React, { forwardRef, useRef, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

type TechIconType =
    | string
    | { name?: string; src?: string; icon?: string | React.ReactNode }
    | React.ReactElement
    | null
    | undefined;

interface CircleProps {
    className?: string;
    children?: React.ReactNode;
    isCenter?: boolean;
}

const Circle = forwardRef<HTMLDivElement, CircleProps>(({ className, children, isCenter }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex items-center justify-center rounded-full border-2 bg-white p-2 sm:p-2.5 shadow-[0_0_20px_-10px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-110",
                isCenter
                    ? "size-16 sm:size-20 border-[#FF7A00] bg-white shadow-[0_0_25px_rgba(255,122,0,0.45)] z-20"
                    : "size-11 sm:size-13 border-slate-200 hover:border-slate-400",
                className
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

// Helper component to render different icon types
const TechIcon = ({ icon, className = "size-6" }: { icon: TechIconType; className?: string }) => {
    if (!icon) return null;

    if (typeof icon === "string") {
        if (icon.startsWith("http") || icon.startsWith("/")) {
            return (
                <Image
                    src={icon}
                    alt="Tech icon"
                    width={28}
                    height={28}
                    className={cn("object-contain", className)}
                />
            );
        }
        return <span className="text-[11px] sm:text-xs font-bold text-slate-900">{icon.slice(0, 3)}</span>;
    }

    if (React.isValidElement(icon)) {
        return icon;
    }

    if (icon && typeof icon === "object" && ("src" in icon || "icon" in icon)) {
        const techIcon = icon as { name?: string; src?: string; icon?: string | React.ReactNode };
        const iconSrc = techIcon.src || techIcon.icon;
        if (typeof iconSrc === "string") {
            return (
                <Image
                    src={iconSrc}
                    alt={techIcon.name || "Tech icon"}
                    width={28}
                    height={28}
                    className={cn("object-contain", className)}
                />
            );
        }
        return iconSrc as React.ReactElement;
    }

    return null;
};

interface TechStacksProps {
    techs?: TechIconType[];
    centerIcon?: TechIconType;
    className?: string;
}

/**
 * TechStacks - Dynamic multi-beam visualization modeled after the homepage tech stack
 */
export function TechStacks({ techs = [], centerIcon = null, className }: TechStacksProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Limit to max 12 outer icons for optimal visual balance
    const visibleTechs = useMemo(() => (techs || []).slice(0, 12), [techs]);

    // Create a stable persistent array of RefObjects
    const techRefs = useMemo(
        () => Array.from({ length: 16 }, () => React.createRef<HTMLDivElement>()),
        []
    );

    // Split techs into Top, Middle (left/right of center), and Bottom tiers
    const { topTier, middleLeftTier, middleRightTier, bottomTier } = useMemo(() => {
        const total = visibleTechs.length;
        if (total <= 4) {
            return {
                topTier: visibleTechs.slice(0, Math.ceil(total / 2)).map((t, idx) => ({ tech: t, globalIdx: idx })),
                middleLeftTier: [],
                middleRightTier: [],
                bottomTier: visibleTechs.slice(Math.ceil(total / 2)).map((t, idx) => ({ tech: t, globalIdx: Math.ceil(total / 2) + idx })),
            };
        }

        const topCount = Math.min(4, Math.floor(total / 3));
        const bottomCount = Math.min(4, Math.floor(total / 3));
        const remaining = total - topCount - bottomCount;
        const leftCount = Math.ceil(remaining / 2);

        return {
            topTier: visibleTechs.slice(0, topCount).map((t, idx) => ({ tech: t, globalIdx: idx })),
            middleLeftTier: visibleTechs.slice(topCount, topCount + leftCount).map((t, idx) => ({ tech: t, globalIdx: topCount + idx })),
            middleRightTier: visibleTechs.slice(topCount + leftCount, topCount + remaining).map((t, idx) => ({ tech: t, globalIdx: topCount + leftCount + idx })),
            bottomTier: visibleTechs.slice(topCount + remaining).map((t, idx) => ({ tech: t, globalIdx: topCount + remaining + idx })),
        };
    }, [visibleTechs]);

    const centerTech = centerIcon || visibleTechs[0] || <Sparkles className="size-7 text-[#FF7A00]" />;

    return (
        <div
            className={cn(
                "relative flex min-h-[360px] sm:min-h-[440px] w-full items-center justify-center overflow-hidden p-6 sm:p-10",
                className
            )}
            ref={containerRef}
        >
            <div className="flex size-full max-w-3xl flex-col items-center justify-between gap-10 sm:gap-14 relative z-10">
                {/* Top Tier */}
                {topTier.length > 0 && (
                    <div className="flex flex-row items-center justify-center gap-6 sm:gap-12">
                        {topTier.map(({ tech, globalIdx }) => (
                            <Circle key={globalIdx} ref={techRefs[globalIdx]}>
                                <TechIcon icon={tech} />
                            </Circle>
                        ))}
                    </div>
                )}

                {/* Middle Tier (Left Nodes + Center Core + Right Nodes) */}
                <div className="flex flex-row items-center justify-center gap-6 sm:gap-14 w-full">
                    {/* Left Nodes */}
                    <div className="flex flex-row items-center gap-4 sm:gap-8">
                        {middleLeftTier.map(({ tech, globalIdx }) => (
                            <Circle key={globalIdx} ref={techRefs[globalIdx]}>
                                <TechIcon icon={tech} />
                            </Circle>
                        ))}
                    </div>

                    {/* Prominent Center Hero Icon */}
                    <Circle ref={centerRef} isCenter className="shrink-0">
                        <TechIcon icon={centerTech} className="size-8 sm:size-10" />
                    </Circle>

                    {/* Right Nodes */}
                    <div className="flex flex-row items-center gap-4 sm:gap-8">
                        {middleRightTier.map(({ tech, globalIdx }) => (
                            <Circle key={globalIdx} ref={techRefs[globalIdx]}>
                                <TechIcon icon={tech} />
                            </Circle>
                        ))}
                    </div>
                </div>

                {/* Bottom Tier */}
                {bottomTier.length > 0 && (
                    <div className="flex flex-row items-center justify-center gap-6 sm:gap-12">
                        {bottomTier.map(({ tech, globalIdx }) => (
                            <Circle key={globalIdx} ref={techRefs[globalIdx]}>
                                <TechIcon icon={tech} />
                            </Circle>
                        ))}
                    </div>
                )}
            </div>

            {/* Dynamic Animated Beams radiating to Center (rendered once mounted to ensure refs are attached) */}
            {isMounted &&
                visibleTechs.map((_, index) => {
                    const isLeft = index < visibleTechs.length / 2;
                    const curvature = (isLeft ? -1 : 1) * (35 + (index % 4) * 20);
                    const endYOffset = ((index % 3) - 1) * 8;

                    return (
                        <AnimatedBeam
                            key={index}
                            className=""
                            containerRef={containerRef}
                            fromRef={techRefs[index]}
                            toRef={centerRef}
                            curvature={curvature}
                            endYOffset={endYOffset}
                            gradientStartColor="#FF7A00"
                            gradientStopColor="#FFA116"
                            reverse={index % 2 === 1}
                        />
                    );
                })}
        </div>
    );
}

export default TechStacks;
