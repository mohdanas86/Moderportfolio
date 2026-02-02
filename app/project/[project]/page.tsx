import dynamic from 'next/dynamic';
import { getTechIcon, getTechIcons } from "@/data/userData";
import BackButton from '../_components/BackButton';

// Dynamic imports for better performance
const AboutTheProject = dynamic(() => import('../_components/AboutTheProject'), {
    loading: () => <div className="animate-pulse h-32 bg-gray-800 rounded"></div>
});

const ProjectGallery = dynamic(() => import('../_components/Projectgallery'), {
    loading: () => <div className="animate-pulse h-64 bg-gray-800 rounded"></div>
});

const DemoLinks = dynamic(() => import('../_components/DemoLinks'), {
    loading: () => <div className="animate-pulse h-16 bg-gray-800 rounded"></div>
});

const TechStacks = dynamic(() => import("../_components/TechStacks").then(mod => ({ default: mod.TechStacks })), {
    loading: () => <div className="animate-pulse h-48 bg-gray-800 rounded"></div>
});

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
    // Await params to get the project ID
    const { project: projectId } = await params;

    return (
        <div className="min-h-screen max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="relative pt-16 pb-6 lg:pt-24 lg:pb-8">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-4 md:gap-6">
                        {/* Project Title */}
                        <div className="flex justify-start items-center gap-4 w-full">
                            <BackButton />
                            <div className="flex-1">
                                <h1 className="text-2xl lg:text-3xl font-bold font-sans text-white leading-tight">
                                    Portfolio Project
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
                <div className="space-y-6 lg:space-y-10">
                    {/* Project Gallery */}
                    <section className="relative">
                        <ProjectGallery />
                    </section>

                    {/* Demo Links */}
                    <section className="relative">
                        <div className="bg-transparent">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 lg:mb-4">
                                Live Demo & Source Code
                            </h2>
                            <DemoLinks />
                        </div>
                    </section>

                    {/* About the Project */}
                    <section className="relative">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 lg:mb-4">
                            Project Overview
                        </h2>
                        <div className="text-[#bfbaba]">
                            <AboutTheProject />
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="relative">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 lg:mb-4">
                            Technology Stack
                        </h2>
                        <div className="flex justify-center">
                            <TechStacks
                                techs={getTechIcons(["React", "Next.js", "TypeScript", "MongoDB", "Node.js", "Express.js", "Tailwind CSS", "Vercel"])}
                                centerIcon={getTechIcon("JavaScript")}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}