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
        title: currentProject.title,
        description: currentProject.metaDescription,
        openGraph: {
            title: `${currentProject.title} | Anas Alam`,
            description: currentProject.metaDescription,
            images: [currentProject.thumbnail],
        },
    };
}

const AboutTheProject = dynamic(() => import('../_components/AboutTheProject'), {
    loading: () => <div className="animate-pulse h-32 bg-gray-800/50 rounded-xl"></div>
});

const ProjectGallery = dynamic(() => import('../_components/Projectgallery'), {
    loading: () => <div className="animate-pulse h-64 bg-gray-800/50 rounded-xl"></div>
});

const DemoLinks = dynamic(() => import('../_components/DemoLinks'), {
    loading: () => <div className="animate-pulse h-12 bg-gray-800/50 rounded-xl"></div>
});

const TechStacks = dynamic(() => import("../_components/TechStacks").then(mod => ({ default: mod.TechStacks })), {
    loading: () => <div className="animate-pulse h-48 bg-gray-800/50 rounded-xl"></div>
});

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
    const { project: projectId } = await params;
    const currentProject = projectsData.find(project => project.id === projectId);

    if (!currentProject) {
        notFound();
    }

    return (
        <div className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pt-24">
            {/* Header & Back Button */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <BackButton />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold font-sans text-white leading-tight">
                    {currentProject.title}
                </h1>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-10 lg:space-y-12">
                {/* Project Gallery */}
                <section className="relative rounded-2xl overflow-hidden border border-white/10 p-2 sm:p-4 bg-white/5 backdrop-blur-sm">
                    <ProjectGallery
                        images={currentProject.imageGallery}
                        siteUrl={currentProject.siteUrl}
                    />
                </section>

                {/* Live Demo and Code */}
                <section className="rounded-2xl border border-white/10 p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Live Demo & Source Code
                    </h2>
                    <p className="text-sm text-gray-400 mb-4">
                        Explore the live deployment or inspect the repository architecture.
                    </p>
                    <DemoLinks
                        githubRepo={currentProject.githubRepo}
                        livePreview={currentProject.previewLink}
                    />
                </section>

                {/* Project Overview */}
                <section className="rounded-2xl border border-white/10 p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                        Project Overview & Architecture
                    </h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                        <AboutTheProject content={currentProject.content} />
                    </div>
                </section>

                {/* Technology Stack */}
                <section className="rounded-2xl border border-white/10 p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                        Technology Stack & Tooling
                    </h2>

                    {/* Stack tags with responsive wrapping */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {currentProject.textStack.map((text, index) => (
                            <span
                                key={index}
                                className="py-1 px-3.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-white/90"
                            >
                                {text}
                            </span>
                        ))}
                    </div>

                    {/* Orbiting beam visualization */}
                    <div className="flex justify-center mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                        <TechStacks
                            techs={getTechIcons(currentProject.techs)}
                            centerIcon={getTechIcon(currentProject.centerIcon)}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}