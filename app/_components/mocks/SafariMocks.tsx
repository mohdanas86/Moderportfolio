import { Safari } from "@/components/ui/safari"
import { Lens } from "@/components/ui/lens";

export function SafariMocks() {
    return (
        <div className="w-full max-w-[1203px]">
            <Lens defaultPosition={{ x: 0, y: 0 }} lensSize={100}>
                <Safari
                    url="magicui.design"
                    imageSrc="/anaspice.png"
                    videoSrc=""
                    className="w-full h-auto"
                    style={{}}
                />
            </Lens>
        </div>
    )
}
