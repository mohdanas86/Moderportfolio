"use client";
import React, { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";

const Techstack = () => {
  const techIcons = [
    // Frontend
    { name: "HTML5", src: "/html.png" },
    { name: "CSS3", src: "/css-3.png" },
    {
      name: "JavaScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Next.js",
      src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    },
    {
      name: "Tailwind CSS",
      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Bootstrap",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    },
    { name: "Pug", src: "https://cdn.worldvectorlogo.com/logos/pug.svg" },

    // Backend
    {
      name: "Node.js",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Express.js",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },

    // Version Control & Tools
    {
      name: "Git",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "Postman",
      src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },

    // Database
    {
      name: "MongoDB",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },

    // Languages
    {
      name: "C",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    },
    {
      name: "C++",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: "Python",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },

    // Data Libraries
    {
      name: "Pandas",
      src: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
    },
    {
      name: "Seaborn",
      src: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    },
  ];

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${showAnimation ? "fade-in" : "opacity-0"} py-16 relative overflow-hidden`} id="tools">
      <ParallaxElement speed={0.3}>
        <h1 className="text-5xl text-center lg:text-7xl font-bold uppercase">
          Tools &
        </h1>
      </ParallaxElement>
      
      <ParallaxElement speed={0.5}>
        <h1 className="text-5xl text-center lg:text-7xl font-bold text-[#353334] uppercase">
          Stacks
        </h1>
      </ParallaxElement>

      <ParallaxElement speed={0.2}>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
        {techIcons.map((tech, index) => (
          <ParallaxElement 
            key={index}
            speed={0.05 * ((index % 5) + 1)}
            direction={(index % 2 === 0) ? 'vertical' : 'horizontal'}
          >
            <div
              className="flex flex-col items-center justify-center bg-white lg:p-4 p-3 rounded-lg shadow-lg transform hover:scale-110 transition duration-500 lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]"
            >
              <img
                src={tech.src}
                alt={`${tech.name} logo`}
                className="w-full max-w-[50px] transition duration-500 ease-in-out transform hover:scale-125"
              />
              {/* <p className="text-sm text-gray-600 mt-2">{tech.name}</p> */}
            </div>
          </ParallaxElement>
        ))}
      </div>
      </ParallaxElement>

      <style jsx>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        }
        .opacity-0 {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>
    </div>
  );
};

export default Techstack;
