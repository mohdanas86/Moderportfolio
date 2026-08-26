'use client';

import { useEffect, useRef, useState } from 'react';
import useCanvasCursor from "../hooks/useCanvasCursor";

const CanvasCursor = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useCanvasCursor();

    useEffect(() => {
        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        let rafId: number;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isVisible) setIsVisible(true);

            // Directly update the center dot for instantaneous response (0 latency)
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
            }

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement | null;
            if (target) {
                const interactive = target.closest('a, button, input, textarea, select, [role="button"], .group, [data-cursor-hover]');
                setIsHovered(!!interactive);
            }
        };

        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        // Smooth physics interpolation for the outer ring (tighter, responsive lag)
        const renderLoop = () => {
            ringX += (mouseX - ringX) * 0.28;
            ringY += (mouseY - ringY) * 0.28;

            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
            }

            rafId = requestAnimationFrame(renderLoop);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);

        rafId = requestAnimationFrame(renderLoop);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            cancelAnimationFrame(rafId);
        };
    }, [isVisible]);

    return (
        <>
            {/* Canvas Ribbon Trail (Brand Orange Hue) */}
            <canvas
                className='pointer-events-none fixed inset-0 hidden lg:block z-40'
                id='canvas'
            />

            {/* Smooth Outer Trailing Ring */}
            <div
                ref={cursorRingRef}
                className={`pointer-events-none fixed top-0 left-0 hidden lg:block z-50 rounded-full transition-all duration-200 ease-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                } ${
                    isHovered
                        ? 'w-10 h-10 border border-[#FF7A00]/80 bg-[#FF7A00]/10 shadow-[0_0_16px_rgba(255,122,0,0.35)] backdrop-blur-[1px]'
                        : isClicked
                        ? 'w-5 h-5 border border-[#FF7A00] bg-[#FF7A00]/20'
                        : 'w-7 h-7 border border-[#FF7A00]/40 shadow-[0_0_8px_rgba(255,122,0,0.15)]'
                }`}
                style={{
                    willChange: 'transform',
                }}
            />

            {/* Sharp Center Glowing Core */}
            <div
                ref={cursorDotRef}
                className={`pointer-events-none fixed top-0 left-0 hidden lg:block z-50 transition-all duration-150 ease-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                } ${
                    isHovered
                        ? 'w-2 h-2 bg-[#FF7A00] shadow-[0_0_10px_#FF7A00]'
                        : isClicked
                        ? 'w-1.5 h-1.5 bg-white shadow-[0_0_12px_#FF7A00]'
                        : 'w-2 h-2 bg-[#FF7A00] shadow-[0_0_6px_#FF7A00]'
                } rounded-full`}
                style={{
                    willChange: 'transform',
                }}
            />
        </>
    );
};

export default CanvasCursor;
