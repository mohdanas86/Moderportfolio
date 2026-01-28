/**
 * Global Loading Component
 * Displays while pages are loading
 */
export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#151312]">
            <div className="text-center">
                <div className="relative h-20 w-20 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-t-[#FF7A00] animate-spin"></div>
                </div>
                <p className="text-lg text-white/60">Loading...</p>
            </div>
        </div>
    );
}
