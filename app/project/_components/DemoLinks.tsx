import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export default function DemoLinks() {
    return (
        <div className="flex text-center w-full gap-4 mt-0 pt-0">
            <button className='py-1 px-6 border bg-white rounded-sm text-black flex items-center gap-2 cursor-pointer'>
                <span>Github</span>
                <FiGithub />
            </button>

            <button className='py-1.5 px-6 border bg-white rounded-sm text-black flex items-center gap-2 cursor-pointer'>
                <span>Preview</span>
                <FaArrowUpRightFromSquare />
            </button>
        </div>
    )
}