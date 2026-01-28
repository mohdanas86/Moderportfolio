import { Particles } from "@/components/ui/particles"

export function ParticalsBackground() {
    return (
        <div className="absolute top-0 left-0 inset-0 w-full min-h-screen">
            <div className="relative h-screen w-full overflow-hidden">
                <Particles />
            </div>
        </div>
    )
}