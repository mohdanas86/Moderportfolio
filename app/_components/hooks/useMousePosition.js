// Custom hook for mouse tracking with throttling for better performance
"use client";

import { useState, useEffect, useRef } from 'react';

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const lastUpdate = useRef(0);

    useEffect(() => {
        const updateMousePosition = (e) => {
            // Throttle updates using RAF for better performance
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            rafRef.current = requestAnimationFrame(() => {
                const now = Date.now();
                // Throttle to max 60fps (16.67ms between updates)
                if (now - lastUpdate.current >= 16) {
                    setMousePosition({ x: e.clientX, y: e.clientY });
                    lastUpdate.current = now;
                }
            });
        };

        window.addEventListener('mousemove', updateMousePosition, { passive: true });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return mousePosition;
};
