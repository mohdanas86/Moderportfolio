import dynamic from 'next/dynamic';
import { getTechIcon, getTechIcons } from "@/data/userData";
import AboutTheProject from '../_components/AboutTheProject';
import ProjectGallery from '../_components/Projectgallery';
import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


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
        <div className="lg:py-16 py-6 mt-0 lg:mt-16 relative overflow-x-hidden overflow-y-visible w-full min-h-screen">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-4 md:gap-6">
                    {/* Project Title */}
                    <div className="flex w-full">
                        <h1 className="text-2xl font-sans font-semibold">AnaCgpa Academic Tool</h1>
                    </div>

                    {/* Projects Mock and Image Gallery Container */}
                    <ProjectGallery />

                    {/* Demo Links */}
                    <div className="flex text-center w-full gap-4 mt-0 pt-0">
                        <button className='py-1.5 px-6 border bg-white rounded-sm text-black flex items-center gap-2'>
                            <span>Github</span>
                            <FiGithub />
                        </button>

                        <button className='py-1.5 px-6 border bg-white rounded-sm text-black flex items-center gap-2'>
                            <span>Preview</span>
                            <FaArrowUpRightFromSquare />
                        </button>
                    </div>

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
                </div>
            </div>
        </div>
    )
}