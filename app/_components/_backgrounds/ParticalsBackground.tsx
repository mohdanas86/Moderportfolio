import { Particles } from "@/components/ui/particles"

export function ParticalsBackground() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <div className="relative h-screen w-full overflow-hidden">
                <Particles />
            </div>
        </div>
    )
}