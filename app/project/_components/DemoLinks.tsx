import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export default function DemoLinks({ githubRepo, livePreview }: { githubRepo: string, livePreview: string }) {
    return (
        <div className="flex text-center w-full gap-4 mt-0 pt-0">
            <Link href={githubRepo ? githubRepo : '#'}>
                <button className='py-1 px-6 border bg-white rounded-sm text-black flex items-center gap-2 cursor-pointer'>
                    <span>Github</span>
                    <FiGithub className="w-4 h-4" />
                </button>
            </Link>

            <Link href={livePreview ? livePreview : '#'}>
                <button className='py-1.5 px-6 border bg-white rounded-sm text-black flex items-center gap-2 cursor-pointer'>
                    <span>Preview</span>
                    <FaArrowUpRightFromSquare className="w-4 h-4" />
                </button>
            </Link>
        </div>
    )
}