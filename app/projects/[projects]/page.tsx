import dynamic from 'next/dynamic';
import { getTechIcon, getTechIcons } from "@/data/userData";
import AboutTheProject from '../_components/AboutTheProject';
import ProjectGallery from '../_components/Projectgallery';

// Dynamic imports for heavy client components with code splitting
const SafariMocks = dynamic(() => import("@/app/_components/mocks/SafariMocks").then(mod => ({ default: mod.SafariMocks })), {
    loading: () => <div className="w-full h-[400px] animate-pulse bg-gray-200 rounded" />
});

const TechStacks = dynamic(() => import("../_components/TechStacks").then(mod => ({ default: mod.TechStacks })));

// Generate static params for known project IDs
export async function generateStaticParams() {
    // Add your actual project IDs here
    return [
        { projects: '1' },
        { projects: '2' },
        { projects: '3' },
    ];
}

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour

export default async function ProjectPage({ params }: { params: Promise<{ projects: string }> }) {
    // Await params to get the project ID
    const { projects: projectId } = await params;

    return (
        <div className="lg:py-16 py-6 mt-0 lg:mt-16 relative overflow-x-hidden overflow-y-visible w-full min-h-screen border">


            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-4 md:gap-6">
                    {/* Project Title */}
                    <div className="flex border w-full">
                        <h1 className="text-2xl font-sans font-semibold">AnaCgpa Academic Tool</h1>
                    </div>

                    {/* Projects Mock and Image Gallery Container */}
                    <ProjectGallery />

                    {/* About the project */}
                    <div className="flex flex-col gap-4 w-full text-white">
                        <h1 className="text-2xl font-sans font-semibold">Project Description</h1>

                        <AboutTheProject />
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-col border w-full p-4 sm:p-6 md:p-8">
                        <h1>Tech Stack</h1>

                        <TechStacks
                            techs={getTechIcons(["React", "Next.js", "TypeScript", "MongoDB", "Node.js", "Express.js", "Tailwind CSS", "Vercel"])}
                            centerIcon={getTechIcon("JavaScript")}
                        />
                    </div>

                    {/* Demo Links */}
                    <div className="flex border w-full p-4 sm:p-6 md:p-8">Demo Links</div>
                </div>
            </div>
        </div>
    )
}