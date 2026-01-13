/**
 * SocialLinks component displays animated social media links
 * @component
 * @returns {JSX.Element} Social media links with wave animation
 */

import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export const SocialLinks = () => {
    const SocialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/anas86",
            icon: <FaLinkedin />,
        },
        {
            name: "GitHub",
            url: "https://github.com/mohdanas86",
            icon: <FaGithub />,
        },
        {
            name: "Instagram",
            url: "https://instagram.com/_anas__86",
            icon: <FaInstagram />,
        },
        {
            name: "YouTube",
            url: "https://youtube.com/c/AG4444YT",
            icon: <FaYoutube />,
        },
    ];

    const animations = [
        "animate-move-up",
        "animate-move-right",
        "animate-move-down",
        "animate-move-left",
    ];

    return (
        <>
            <div className="flex justify-start lg:justify-center items-center gap-4 mt-6 w-full lg:h-[80px] h-[60px]">
                {/* social container */}
                <div className="socialContainer w-full relative overflow-hidden flex justify-start lg:justify-center items-center gap-4 py-4">
                    {SocialLinks &&
                        SocialLinks.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    // The magic happens here: apply the wave animation and a staggered delay
                                    className={`flex justify-center items-center border rounded-full w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] lg:text-xl 
                         animate-wave hover:animate-none duration-[1500ms] hover:text-blue-500 hover:border-blue-500
                         [animation-delay:${index * 150}ms]`}
                                >
                                    {item.icon}
                                </Link>
                            );
                        })}
                </div>
            </div>
        </>
    );
};