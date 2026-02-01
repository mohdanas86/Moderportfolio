import { SafariMocks } from "@/app/_components/mocks/SafariMocks";

export default function ProjectGallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr,200px] gap-4 w-full p-0">
            {/* Projects Mock Container */}
            <div className="">
                <div className="w-full max-w-[1203px] mx-auto">
                    <SafariMocks />
                </div>
            </div>

            {/* Image Gallery - Horizontal scroll on mobile, vertical on desktop */}
            <div className="">
                {/* Mobile: Horizontal scroll */}
                <div className="md:hidden w-full flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((img, index) => (
                        <button key={index} className=" p-2 border flex items-center justify-center flex-shrink-0 w-[200px] aspect-video hover:border-gray-400 transition-colors">
                            img {index + 1}
                        </button>
                    ))}
                </div>
                {/* Desktop: Vertical scroll */}
                <div
                    className="hidden md:block w-full h-[550px] overflow-y-auto"
                    data-lenis-prevent
                    style={{ pointerEvents: 'auto' }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((img, index) => (
                        <div
                            key={index}
                            className="border p-2 flex items-center justify-center w-full mb-3"
                            style={{ aspectRatio: '16/9' }}
                        >
                            img {index + 1}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}