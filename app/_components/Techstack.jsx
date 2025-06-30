"use client";
import React from "react";

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

  return (
    <div className="fade-in-animation py-16" id="tools">
      <h1 className="text-5xl text-center lg:text-7xl font-bold uppercase">
        Tools &
      </h1>
      <h1 className="text-5xl text-center lg:text-7xl font-bold text-[#353334] uppercase">
        Stacks
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white lg:p-4 p-3 rounded-lg shadow-lg transform hover:scale-110 transition duration-500  lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]"
          >
            <img
              src={tech.src}
              alt={`${tech.name} logo`}
              className="w-full max-w-[50px] transition duration-500 ease-in-out transform hover:scale-125"
            />
            {/* <p className="text-sm text-gray-600 mt-2">{tech.name}</p> */}
          </div>
        ))}
      </div>

      <style jsx>{`
        .fade-in-animation {
          animation: fadeIn 1s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Techstack;
