import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { techIcons } from "@/data/userData"
import Image from "next/image"

export function OrbitingIcons() {
    const firstOrbit = techIcons.slice(0, 8)
    const secondOrbit = techIcons.slice(8, 16)

    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={60} radius={200} duration={30}>
                {firstOrbit.map((tech, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image
                            src={tech.src}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={120} reverse speed={1.5} duration={25}>
                {secondOrbit.map((tech, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image
                            src={tech.src}
                            alt={tech.name}
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                    </div>
                ))}
            </OrbitingCircles>
        </div>
    )
}
