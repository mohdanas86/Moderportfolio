'use client';

import { useEffect } from 'react';

/**
 * Global Error Boundary Component
 * Catches errors in the application and provides a fallback UI
 */
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#151312] px-4">
            <div className="text-center">
                <h1 className="mb-4 text-6xl font-bold text-white">Oops!</h1>
                <h2 className="mb-8 text-2xl font-semibold text-white/80">
                    Something went wrong
                </h2>
                <p className="mb-8 text-lg text-white/60">
                    We apologize for the inconvenience. Please try again.
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white rounded-lg font-medium transition-colors"
                    >
                        Try again
                    </button>
                    <button
                        onClick={() => (window.location.href = '/')}
                        className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                    >
                        Go home
                    </button>
                </div>
            </div>
        </div>
    );
}
