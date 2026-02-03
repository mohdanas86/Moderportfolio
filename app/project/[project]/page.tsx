/**
 * Project Detail Page Component
 * 
 * This is a dynamic route page that displays detailed information about a specific project.
 * It uses dynamic imports for performance optimization and renders project gallery,
 * demo links, overview, and technology stack information.
 * 
 * @route /project/[project]
 * @param params - Dynamic route parameters containing project identifier
 */

import dynamic from 'next/dynamic';
import { getTechIcon, getTechIcons } from "@/data/userData";
import BackButton from '../_components/BackButton';
import { projectsData } from '@/data/projectsData';

/**
 * Dynamic Imports for Code Splitting & Performance Optimization
 * Each component is lazy-loaded with a loading skeleton to improve initial page load time
 */
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

/**
 * Project Detail Page Component
 * 
 * Renders a comprehensive project details page with:
 * - Navigation back button
 * - Project title and hero section
 * - Interactive project gallery
 * - Live demo and source code links
 * - Detailed project overview
 * - Technology stack visualization
 * 
 * @param params - Promise containing dynamic route parameters
 * @returns JSX.Element - Complete project detail page
 */
export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
    // Extract project ID from dynamic route parameters
    const { project: projectId } = await params;

    // Find the specific project based on the ID from URL
    const currentProject = projectsData.find(project => project.id === projectId);

    // If project not found, you might want to handle this case
    if (!currentProject) {
        console.error(`Project with ID "${projectId}" not found`);
        // You could redirect to 404 or show error message
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                    <p>The project you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen max-w-5xl mx-auto">
            {/* 
                Hero Section - Contains navigation and project title
                Responsive design: stacked on mobile, side-by-side on desktop
            */}
            <div className="relative pt-4 pb-6 lg:pt-24 lg:pb-8">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-4 md:gap-6">
                        {/* Navigation & Title Layout */}
                        <div className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-start gap-4 w-full">
                            {/* Back Navigation Button */}
                            <span><BackButton /></span>

                            {/* Project Title - Responsive typography */}
                            <div className="flex-1">
                                <h1 className="text-2xl lg:text-3xl font-bold font-sans text-white leading-tight">
                                    {currentProject.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 
                Main Content Area - Contains all project information sections
                Uses consistent spacing and responsive design patterns
            */}
            < div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16" >
                <div className="space-y-6 lg:space-y-10">
                    {/* 
                        Project Gallery Section
                        Displays project screenshots/images with site preview functionality
                    */}
                    <section className="relative">
                        <ProjectGallery
                            images={currentProject.imageGallery}
                            siteUrl={currentProject.siteUrl}
                        />
                    </section>

                    {/* 
                        Demo Links Section
                        Provides access to live demo and source code repository
                    */}
                    <section className="relative">
                        <div className="bg-transparent">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 lg:mb-4">
                                Live Demo & Source Code
                            </h2>
                            <DemoLinks
                                githubRepo={currentProject.githubRepo}
                                livePreview={currentProject.previewLink}
                            />
                        </div>
                    </section>

                    {/* 
                        Project Overview Section
                        Detailed description and features of the project
                    */}
                    <section className="relative">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 lg:mb-4">
                            Project Overview
                        </h2>
                        <div className="text-[#bfbaba]">
                            <AboutTheProject content={currentProject.content} />
                        </div>
                    </section>

                    {/* 
                        Technology Stack Section
                        Visual representation of technologies used in the project
                        Features orbiting icons animation with center technology focus
                    */}
                    <section className="relative">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 lg:mb-4">
                            Technology Stack
                        </h2>
                        <div className="flex justify-center">
                            <TechStacks
                                techs={getTechIcons(currentProject.techs)}
                                centerIcon={getTechIcon(currentProject.centerIcon)}
                            />
                        </div>
                    </section>
                </div>
            </div >
        </div >
    )
}