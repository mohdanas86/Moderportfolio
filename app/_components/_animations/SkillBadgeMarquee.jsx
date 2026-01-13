"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Lens } from "@/components/ui/lens";

const SkillBadgeCard = ({ image, title, alt }) => {
    return (
        <Card
            className={cn(
                "group transition-all duration-300 hover:shadow-lg hover:scale-105",
                "border border-gray-200 bg-white rounded-xl",
                "w-[160px] h-[180px]"
            )}
        >
            <CardContent className="p-4 flex flex-col items-center justify-between h-full">
                <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        className="object-contain"
                        sizes="80px"
                        loading="lazy"
                        quality={90}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                    />
                </div>
                <h4 className="text-xs font-medium text-gray-800 text-center line-clamp-3 leading-tight w-full">
                    {title}
                </h4>
            </CardContent>
        </Card>
    );
};

export function SkillBadgeMarquee({ badges }) {
    if (!badges || badges.length === 0) {
        return null;
    }

    return (
        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg py-4">
            <Marquee pauseOnHover className="[--duration:30s]">
                {badges.map((badge, index) => (
                    <Lens key={badge.id || index} zoomFactor={1.5} lensSize={140}>
                        <SkillBadgeCard {...badge} />
                    </Lens>
                ))}
            </Marquee>
        </div>
    );
}
