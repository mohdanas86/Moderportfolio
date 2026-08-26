/**
 * Project Detail Page Component
 * 
 * Dynamic route page that displays detailed information about a specific project.
 * Uses static params generation for optimal SSG performance and dynamic SEO metadata.
 * 
 * @route /project/[project]
 */

import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { getTechIcon, getTechIcons } from "@/data/userData";
import BackButton from '../_components/BackButton';
import DemoLinks from '../_components/DemoLinks';
import { projectsData } from '@/data/projectsData';

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        project: project.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }) {
    const { project: projectId } = await params;
    const currentProject = projectsData.find(project => project.id === projectId);

    if (!currentProject) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${currentProject.title} | Anas Alam`,
        description: currentProject.metaDescription,
        openGraph: {
            title: `${currentProject.title} | Anas Alam`,
            description: currentProject.metaDescription,
            images: [currentProject.thumbnail],
        },
    };
}

const AboutTheProject = dynamic(() => import('../_components/AboutTheProject'), {
    loading: () => <div className="animate-pulse h-32 bg-white/5 rounded-xl"></div>
});

const ProjectGallery = dynamic(() => import('../_components/Projectgallery'), {
    loading: () => <div className="animate-pulse h-64 bg-white/5 rounded-xl"></div>
});

const TechStacks = dynamic(() => import("../_components/TechStacks").then(mod => ({ default: mod.TechStacks })), {
    loading: () => <div className="animate-pulse h-48 bg-white/5 rounded-xl"></div>
});

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
    const { project: projectId } = await params;
    const currentProject = projectsData.find(project => project.id === projectId);

    if (!currentProject) {
        notFound();
    }

    return (
        <article className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-[0px] sm:pt-20 lg:pt-28 pb-20">
            {/* Top Navigation & Meta Header */}
            <div className="mb-6 sm:mb-10 lg:mb-12">
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                    <BackButton />
                    {currentProject.siteUrl && (
                        <span className="text-xs text-white/50 font-mono hidden sm:inline-block">
                            {currentProject.siteUrl.replace(/^https?:\/\//, '')}
                        </span>
                    )}
                </div>

                {/* Project Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                    {currentProject.title}
                </h1>

                {/* Subtitle / Meta Description */}
                <p className="text-base sm:text-lg text-[#948A8A] max-w-3xl leading-relaxed mb-6">
                    {currentProject.metaDescription}
                </p>

                {/* Direct Live Demo & Source Code Action Bar */}
                <div className="pt-2">
                    <DemoLinks
                        githubRepo={currentProject.githubRepo}
                        livePreview={currentProject.previewLink}
                    />
                </div>
            </div>

            {/* Main Interactive Gallery Showcase */}
            <div className="mb-14 lg:mb-16">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 p-2 sm:p-3 bg-[#121111]/80 backdrop-blur-md shadow-2xl">
                    <ProjectGallery
                        images={currentProject.imageGallery}
                        siteUrl={currentProject.siteUrl}
                    />
                </div>
            </div>

            {/* Seamless Content Sections (No redundant nested cards) */}
            <div className="space-y-14 lg:space-y-16 border-t border-white/10 pt-12">
                {/* Project Overview & Architecture */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            Overview & System Architecture
                        </h2>
                    </div>

                    <div className="text-gray-300 leading-relaxed space-y-4 pl-0 sm:pl-5 text-sm sm:text-base">
                        <AboutTheProject content={currentProject.content} />
                    </div>
                </section>

                {/* Technology Stack & Tooling */}
                <section className="space-y-8 border-t border-white/10 pt-14">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
                            Tools & <span className="text-[#353334]">Stacks</span>
                        </h2>
                        <p className="text-sm sm:text-base text-[#948A8A] max-w-2xl mx-auto leading-relaxed mt-3">
                            Core technologies, libraries, and frameworks powering this project.
                        </p>
                    </div>

                    {/* Stack tags with smooth glass pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto">
                        {currentProject.textStack.map((text, index) => (
                            <span
                                key={index}
                                className="py-1.5 px-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-white/80 transition-all hover:border-[#FF7A00]/40 hover:text-white hover:bg-white/10"
                            >
                                {text}
                            </span>
                        ))}
                    </div>

                    {/* Animated visualizer */}
                    <div className="w-full flex justify-center overflow-hidden">
                        <TechStacks
                            techs={getTechIcons(currentProject.techs)}
                            centerIcon={getTechIcon(currentProject.centerIcon)}
                        />
                    </div>
                </section>
            </div>
        </article>
    );
}