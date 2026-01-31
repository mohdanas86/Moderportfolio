'use client';

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import useCanvasCursor from "../hooks/useCanvasCursor";

import { FaRegCircle } from "react-icons/fa";

import { AiOutlineLoading } from "react-icons/ai";




const CanvasCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useCanvasCursor();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <canvas className='pointer-events-none fixed inset-0 hidden md:block' id='canvas' />
            <div
                className='pointer-events-none fixed hidden md:block z-50'
                style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <FaRegCircle className='w-4 h-4 animate-pulse' />
            </div>
        </>
    );
};
export default CanvasCursor;
