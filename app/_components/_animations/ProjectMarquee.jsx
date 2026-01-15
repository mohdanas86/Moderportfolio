"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Link from "next/link";
import { Github, MoveUpRight } from "lucide-react";
import { Projects } from "@/data/userData";

const firstRow = Projects.slice(0, Math.ceil(Projects.length / 2));
const secondRow = Projects.slice(Math.ceil(Projects.length / 2));

const ProjectCard = ({ img, title, des, repo, link }) => {
    return (
        <figure
            className={cn(
                "relative h-[420px] w-80 cursor-pointer overflow-hidden rounded-2xl border p-4",
                // light styles
                "border-gray-950/[.1]",
                // dark styles
                "dark:border-gray-50/[.1]",
                "transition-all duration-300"
            )}
        >
            <div className="flex flex-col h-full gap-4">
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden rounded-xl bg-gray-900">
                    <Image
                        src={img || "/placeholder.png"}
                        alt={`${title} project screenshot`}
                        fill
                        sizes="320px"
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between gap-3">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold font-sans tracking-tight text-white line-clamp-2">
                            {title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400 line-clamp-3">
                            {des}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                        {link && link.trim() !== "" && (
                            <Link href={link} target="_blank">
                                <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                                    <MoveUpRight size={18} />
                                </button>
                            </Link>
                        )}
                        {repo && repo.trim() !== "" && (
                            <Link href={repo} target="_blank">
                                <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                                    <Github size={18} />
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </figure>
    );
};

export function ProjectMarquee() {
    if (!Projects || Projects.length === 0) {
        return null;
    }

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-8">
            <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((project, index) => (
                    <ProjectCard key={project.title || index} {...project} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s]">
                {secondRow.map((project, index) => (
                    <ProjectCard key={project.title || index} {...project} />
                ))}
            </Marquee>
        </div>
    );
}
