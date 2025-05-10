// "use client";

// import { Github, Linkedin, Instagram, Youtube, Flame } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const HeroCard = () => {
//   const [showAnimation, setShowAnimation] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowAnimation(true);
//     }, 200); // Delay animation by 500ms

//     return () => clearTimeout(timer);
//   }, []);

//   const social = [
//     {
//       icon: <Github />,
//       link: "https://www.github.com/mohdanas86",
//     },
//     {
//       icon: <Linkedin />,
//       link: "https://www.linkedin.com/in/anas86/",
//     },
//     {
//       icon: <Instagram />,
//       link: "https://www.instagram.com/_anas__86/",
//     },
//     {
//       icon: <Youtube />,
//       link: "https://www.youtube.com/c/AG4444YT",
//     },
//   ];

//   return (
//     <div
//       className={`w-full max-w-md px-4 ${
//         showAnimation ? "fade-in" : "opacity-0"
//       }`}
//     >
//       <div className="flex bg-white text-black rounded-2xl p-6 min-h-[60vh] w-full flex-col justify-between items-center text-center relative">
//         <div className="flex w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-[#FF7A00] bg-white shadow-lg">
//           <img src="/anaspfp.jpg" className=" rotate-[-33deg]" />
//         </div>

//         <div className="flex justify-center items-center flex-col text-center gap-4 mt-8 bg-blue-500 p-4 rounded-2xl z-40">
//           <h2 className="font-semibold text-3xl text-white">Anas Alam</h2>
//           <h4 className="font-semibold text-[#e0dcdc]">
//             Full Stack Engineer | Data Analyst | Ex-Frontend Intern | Java, C++,
//             JavaScript, Python | Former GSsoC Contributor
//           </h4>
//         </div>

//         {/* ICONS */}
//         <div className="socialIcons flex items-center justify-center gap-2 mt-12">
//           {social.map((v, i) => (
//             <Link
//               key={i}
//               href={v.link}
//               className="hover:border w-[50px] h-[50px] flex justify-center items-center rounded-full hover:bg-gray-100 transition"
//             >
//               <span className="text-[#FF7A00] text-sm p-4">{v.icon}</span>
//             </Link>
//           ))}
//         </div>

//         {/* <span className="absolute top-[64%] left-[69%] w-[30px] h-[30px] bg-[#FF7A00] rounded-full text-white flex items-center justify-center z-50">
//           <Flame />
//         </span> */}
//         <span className="absolute top-[11%] left-[5%] w-[30px] h-[30px] bg-[#FF7A00] rounded-full text-white flex items-center justify-center z-50">
//           <Flame />
//         </span>

//         <img
//           src="lines.png"
//           alt="lines"
//           className=" absolute top-[65%] left-0 rotate-45 w-[50%]"
//         />
//         <img
//           src="lines.png"
//           alt="lines"
//           className="absolute top-[65%] right-0 -rotate-45 w-[50%] transform scale-x-[-1]"
//         />
//       </div>

//       <style jsx>{`
//         .fade-in {
//           opacity: 1;
//           transition: opacity 1s ease-in-out;
//         }
//         .opacity-0 {
//           opacity: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroCard;

"use client";

import { Github, Linkedin, Instagram, Youtube, Flame } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroCard = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const social = [
    {
      icon: <Github />,
      link: "https://www.github.com/mohdanas86",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/anas86/",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/_anas__86/",
    },
    {
      icon: <Youtube />,
      link: "https://www.youtube.com/c/AG4444YT",
    },
  ];

  return (
    <div
      className={`w-full max-w-[90%] mx-auto md:max-w-md px-2 sm:px-4 ${
        showAnimation ? "fade-in" : "opacity-0"
      }`}
    >
      <div className="flex bg-white text-black rounded-2xl p-4 md:p-6 min-h-[50vh] md:min-h-[60vh] w-full flex-col justify-between items-center text-center relative overflow-hidden">
        {/* Profile Image Container */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[#FF7A00] bg-white shadow-lg transform transition-transform duration-300 hover:scale-105">
          <img
            src="/anaspfp.jpg"
            className="w-full h-full object-cover rotate-[-35deg]"
            alt="Anas Alam Profile"
            loading="lazy"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center w-full mt-4 md:mt-8">
          {/* Name and Title */}
          <div className="bg-[#FF7A00] w-full py-3 md:py-4 px-4 rounded-2xl z-10 transform transition-all duration-300 hover:scale-[1.02]">
            <h2 className="font-semibold text-2xl md:text-3xl text-white mb-2">
              Anas Alam
            </h2>
            <h4 className="font-medium text-sm md:text-base text-white/90 leading-tight">
              Founder @ Fynnsera | Full-Stack Developer & Data Science Explorer
              | Ex-Frontend Intern @ ChartsMaze & Codexintern | Open Source @
              GirlScript
            </h4>
          </div>

          {/* Social Icons */}
          <div className="socialIcons flex items-center justify-center gap-2 mt-6 md:mt-8 w-full">
            {social.map((v, i) => (
              <Link
                key={i}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border w-12 h-12 md:w-14 md:h-14 flex justify-center items-center rounded-full hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
              >
                <span className="text-[#FF7A00] text-xl md:text-2xl">
                  {v.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <span className="absolute top-[35%] left-[58%] w-6 h-6 md:w-8 md:h-8 bg-[#FF7A00] rounded-full text-white flex items-center justify-center z-50">
          <Flame className="w-4 h-4 md:w-5 md:h-5" />
        </span>

        <img
          src="/lines.png"
          alt="decorative lines"
          className="absolute top-[60%] left-0 rotate-45 w-[45%] md:w-[50%] opacity-75"
        />
        <img
          src="/lines.png"
          alt="decorative lines"
          className="absolute top-[60%] right-0 -rotate-45 w-[45%] md:w-[50%] opacity-75 transform scale-x-[-1]"
        />

        <style jsx>{`
          .fade-in {
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
          }
          @media (max-width: 640px) {
            .fade-in {
              transition-duration: 0.3s;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroCard;
