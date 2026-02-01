import { Safari } from "@/components/ui/safari"
import { Lens } from "@/components/ui/lens";

export function SafariMocks({ currentImage }: { currentImage: { src: string; url: string }[] }) {
    return (
        <div className="w-full max-w-[1203px]">
            <Lens defaultPosition={{ x: 0, y: 0 }} lensSize={100}>
                <Safari
                    url={currentImage[0].url}
                    imageSrc={currentImage[0].src}
                    videoSrc=""
                    className="w-full h-auto"
                    style={{}}
                />
            </Lens>
        </div>
    )
}
