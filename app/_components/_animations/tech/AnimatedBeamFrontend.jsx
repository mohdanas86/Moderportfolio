"use client"
import React, { forwardRef, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { techIcons } from "@/data/userData"

// Organize tech icons by category
const getTechIcon = (name) => techIcons.find(icon => icon.name === name)

const frontendTechs = [
    getTechIcon("React"),
    getTechIcon("Next.js"),
    getTechIcon("Tailwind CSS"),
    getTechIcon("HTML5"),
    getTechIcon("CSS3"),
    getTechIcon("Bootstrap"),
]

const backendTechs = [
    getTechIcon("Node.js"),
    getTechIcon("Express.js"),
    getTechIcon("MongoDB"),
    getTechIcon("MySQL"),
]

const otherTechs = [
    getTechIcon("Git"),
    getTechIcon("Docker"),
    getTechIcon("Google Cloud"),
    getTechIcon("GitHub"),
]

const dataScienceTechs = [
    getTechIcon("Python"),
    getTechIcon("NumPy"),
    getTechIcon("Pandas"),
]

const Circle = forwardRef(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-slate-50 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {children}
        </div>
    )
})
Circle.displayName = "Circle"

export function AnimatedBeamFrontend() {
    const containerRef = useRef(null)
    const div1Ref = useRef(null)
    const div2Ref = useRef(null)
    const div3Ref = useRef(null)
    const div4Ref = useRef(null)
    const div5Ref = useRef(null)
    const div6Ref = useRef(null)
    const div7Ref = useRef(null)
    const div8Ref = useRef(null)
    const div9Ref = useRef(null)
    const div10Ref = useRef(null)
    const div11Ref = useRef(null)
    const div12Ref = useRef(null)
    const div13Ref = useRef(null)
    const div14Ref = useRef(null)
    const div15Ref = useRef(null)
    const div16Ref = useRef(null)
    const div17Ref = useRef(null)

    return (
        <div
            className="relative flex h-[600px] w-full items-center justify-center overflow-hidden p-10"
            ref={containerRef}
        >
            <div className="flex size-full max-w-4xl flex-col items-stretch justify-between gap-6">
                {/* Top Row - Frontend */}
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div1Ref}>
                        <Image src={frontendTechs[0].src} alt={frontendTechs[0].name} width={32} height={32} />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Image src={frontendTechs[1].src} alt={frontendTechs[1].name} width={32} height={32} />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <Image src={frontendTechs[2].src} alt={frontendTechs[2].name} width={32} height={32} />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <Image src={frontendTechs[3].src} alt={frontendTechs[3].name} width={32} height={32} />
                    </Circle>
                </div>

                {/* Second Row - More Frontend & Backend */}
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div5Ref}>
                        <Image src={frontendTechs[4].src} alt={frontendTechs[4].name} width={32} height={32} />
                    </Circle>
                    <Circle ref={div6Ref}>
                        <Image src={backendTechs[0].src} alt={backendTechs[0].name} width={32} height={32} />
                    </Circle>
                    <Circle ref={div7Ref} className="size-16">
                        <Image src={getTechIcon("JavaScript").src} alt="JavaScript" width={48} height={48} />
                    </Circle>
                    <Circle ref={div8Ref}>
                        <Image src={backendTechs[1].src} alt={backendTechs[1].name} width={32} height={32} />
                    </Circle>
                    <Circle ref={div9Ref}>
                        <Image src={frontendTechs[5].src} alt={frontendTechs[5].name} width={32} height={32} />
                    </Circle>
                </div>

                {/* Third Row - Backend & Databases */}
                <div className="flex flex-row items-center justify-between px-12">
                    <Circle ref={div10Ref} className="size-14">
                        <Image src={backendTechs[2].src} alt={backendTechs[2].name} width={40} height={40} />
                    </Circle>
                    <Circle ref={div11Ref}>
                        <Image src={backendTechs[3].src} alt={backendTechs[3].name} width={32} height={32} />
                    </Circle>
                    <Circle ref={div12Ref}>
                        <Image src={dataScienceTechs[0].src} alt={dataScienceTechs[0].name} width={32} height={32} />
                    </Circle>
                </div>

                {/* Bottom Row - DevOps & Tools */}
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div13Ref} className="size-14">
                        <Image src={otherTechs[0].src} alt={otherTechs[0].name} width={40} height={40} />
                    </Circle>
                    <Circle ref={div14Ref} className="size-14">
                        <Image src={otherTechs[1].src} alt={otherTechs[1].name} width={40} height={40} />
                    </Circle>
                    <Circle ref={div15Ref}>
                        <Image src={otherTechs[2].src} alt={otherTechs[2].name} width={32} height={32} />
                    </Circle>
                    <Circle ref={div16Ref} className="size-14">
                        <Image src={otherTechs[3].src} alt={otherTechs[3].name} width={40} height={40} />
                    </Circle>
                </div>
            </div>

            {/* Animated Beams connecting to center */}
            <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div7Ref} curvature={-75} endYOffset={-10} />
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div7Ref} curvature={-50} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div7Ref} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div7Ref} curvature={75} endYOffset={-10} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div7Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div7Ref} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div9Ref} toRef={div7Ref} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div10Ref} toRef={div7Ref} curvature={-75} endYOffset={10} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div11Ref} toRef={div7Ref} curvature={-30} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div12Ref} toRef={div7Ref} curvature={30} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div13Ref} toRef={div7Ref} curvature={-90} endYOffset={10} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div14Ref} toRef={div7Ref} curvature={-60} endYOffset={10} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div15Ref} toRef={div7Ref} curvature={60} endYOffset={10} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div16Ref} toRef={div7Ref} curvature={90} endYOffset={10} reverse />
        </div>
    )
}

