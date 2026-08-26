'use client';

import { useState, useEffect } from 'react';
import useCanvasCursor from "../hooks/useCanvasCursor";
import { FaRegCircle } from "react-icons/fa";

const CanvasCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useCanvasCursor();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    return (
        <>
            <canvas className='pointer-events-none fixed inset-0 hidden lg:block z-40' id='canvas' />
            <div
                className={`pointer-events-none fixed hidden lg:block z-50 transition-opacity duration-150 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
                    willChange: 'transform',
                }}
            >
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-4 h-4 bg-[#FF7A00]/30 rounded-full blur-xs animate-ping" />
                    <FaRegCircle className='w-3.5 h-3.5 text-[#FF7A00] drop-shadow-[0_0_8px_#FF7A00]' />
                </div>
            </div>
        </>
    );
};

export default CanvasCursor;
