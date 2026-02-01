"use client"

import React, { forwardRef, useRef, useMemo } from "react"
import Image from "next/image"
import { Sparkles } from "lucide-react" // Import only specific icons needed

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"

type TechIconType =
    | string
    | { name?: string; src?: string; icon?: string | React.ReactNode }
    | React.ReactElement
    | null
    | undefined

interface CircleProps {
    className?: string
    children?: React.ReactNode
}

const Circle = forwardRef<HTMLDivElement, CircleProps>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {children}
        </div>
    )
})

Circle.displayName = "Circle"

// Helper component to render different icon types
const TechIcon = ({ icon, className = "size-6" }: { icon: TechIconType; className?: string }) => {
    if (!icon) return null

    // If it's a string (icon name or image URL)
    if (typeof icon === "string") {
        // Check if it's an image URL
        if (icon.startsWith("http") || icon.startsWith("/")) {
            return (
                <Image
                    src={icon}
                    alt="Tech icon"
                    width={24}
                    height={24}
                    className={className}
                />
            )
        }

        // Fallback text for icon names
        return <span className="text-xs font-bold">{icon.slice(0, 2)}</span>
    }

    // If it's a React component or element
    if (React.isValidElement(icon)) {
        return icon
    }

    // If it's an object with src (like getTechIcon returns)
    if (icon && typeof icon === 'object' && ('src' in icon || 'icon' in icon)) {
        const techIcon = icon as { name?: string; src?: string; icon?: string | React.ReactNode }
        const iconSrc = techIcon.src || techIcon.icon
        if (typeof iconSrc === "string") {
            return (
                <Image
                    src={iconSrc}
                    alt={techIcon.name || "Tech icon"}
                    width={24}
                    height={24}
                    className={className}
                />
            )
        }
        return iconSrc as React.ReactElement
    }

    return null
}

interface TechStacksProps {
    techs?: TechIconType[]
    centerIcon?: TechIconType
    className?: string
}

/**
 * TechStacks - Dynamic animated beam visualization for tech stacks
 * @param techs - Array of tech icons (can be strings, URLs, components, or objects with {name, icon/src})
 * @param centerIcon - Center icon (optional, defaults to first tech or a default icon)
 * @param className - Additional classes for container
 */
export function TechStacks({ techs = [], centerIcon = null, className }: TechStacksProps) {
    const containerRef = useRef(null)

    // Create refs dynamically based on the number of techs
    const techRefs = useRef([])
    const centerRef = useRef(null)

    // Initialize refs array
    if (techRefs.current.length !== techs.length) {
        techRefs.current = Array(techs.length)
            .fill(null)
            .map((_, i) => techRefs.current[i] || React.createRef())
    }

    // Organize techs in a circular pattern
    const organizedTechs = useMemo(() => {
        const count = techs.length
        if (count === 0) return []

        // Calculate optimal grid layout
        const rows = Math.ceil(Math.sqrt(count))
        const cols = Math.ceil(count / rows)

        const organized = []
        for (let i = 0; i < rows; i++) {
            const rowTechs = []
            const startIdx = i * cols
            const endIdx = Math.min(startIdx + cols, count)

            for (let j = startIdx; j < endIdx; j++) {
                rowTechs.push({ tech: techs[j], index: j })
            }
            organized.push(rowTechs)
        }

        return organized
    }, [techs])

    // Determine center icon - use Sparkles component as default
    const centerTech = centerIcon || techs[0] || <Sparkles className="size-8" />

    return (
        <div
            className={cn(
                "relative flex min-h-[300px] w-full items-center justify-center overflow-hidden p-10",
                className
            )}
            ref={containerRef}
        >
            <div className="flex size-full max-w-4xl flex-col items-center justify-center gap-8">
                {/* Dynamically render tech grid */}
                {organizedTechs.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex flex-row items-center justify-center gap-6 md:gap-10"
                    >
                        {row.map(({ tech, index }) => (
                            <Circle key={index} ref={techRefs.current[index]}>
                                <TechIcon icon={tech} />
                            </Circle>
                        ))}
                    </div>
                ))}

                {/* Center icon */}
                <Circle ref={centerRef} className="absolute size-16">
                    <TechIcon icon={centerTech} className="size-8" />
                </Circle>
            </div>

            {/* Dynamically create beams from each tech to center */}
            {techs.map((_, index) => {
                // Vary curvature based on position
                const curvature = (index % 2 === 0 ? -1 : 1) * (50 + (index % 3) * 25)
                const yOffset = (index % 3 - 1) * 10

                return (
                    <AnimatedBeam
                        key={index}
                        className=""
                        containerRef={containerRef}
                        fromRef={techRefs.current[index]}
                        toRef={centerRef}
                        curvature={curvature}
                        endYOffset={yOffset}
                        reverse={index % 2 === 1}
                    />
                )
            })}
        </div>
    )
}
