/**
 * Projects Listing Page Component
 * 
 * This page serves as the main projects showcase, displaying all portfolio projects
 * in a grid or list format. It acts as the entry point for users to explore 
 * different projects before navigating to individual project detail pages.
 * 
 * @route /project
 * @returns JSX.Element - Projects listing page with responsive spacing
 */

import Project from "@/app/_components/Project";

/**
 * Projects Page Component
 * 
 * Simple wrapper component that renders the main Project component with
 * responsive top margin for proper layout spacing across different screen sizes.
 * 
 * Layout Behavior:
 * - Mobile: No top margin (mt-0) for full screen utilization
 * - Desktop: Adds top margin (lg:mt-16) to account for potential fixed headers
 */
export default function ProjectsPage() {
    return (
        <div className="mt-0 lg:mt-16">
            {/* Main Projects Component - Handles all project display logic */}
            <Project />
        </div>
    )
}