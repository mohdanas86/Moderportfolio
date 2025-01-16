"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={showAnimation ? "fade-in" : "opacity-0"} id="home">
      <h1 className="text-5xl text-center lg:text-start lg:text-8xl font-bold">
        SOFTWARE
      </h1>
      <h1 className="text-5xl text-center lg:text-start lg:text-8xl font-bold text-[#353334]">
        ENGINEER
      </h1>

      <p className="text-lg text-[#948A8A] lg:mt-6 mt-4 w-full lg:w-[55%] text-center lg:text-start lg:px-0 px-2">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>

      {/* STAT */}
      <div className="flex flex-wrap justify-center lg:justify-start items-center lg:gap-8 gap-6  lg:mt-16 mt-12">
        {/* Experience */}
        <div className="shadow lg:border overflow-hidden bg-transparent text-white lg:px-8 px-0 py-4 rounded-lg lg:rounded-xl flex flex-col">
          <h2 className="text-4xl lg:text-5xl font-bold">+13</h2>
          <p className="text-[#948A8A] font-semibold text-sm mt-2">
            MONTHS OF <br /> EXPERIENCE
          </p>
        </div>

        {/* Projects */}
        <div className="shadow lg:border overflow-hidden bg-transparent text-white lg:px-8 px-0 py-4 rounded-lg lg:rounded-xl flex flex-col">
          <h2 className="text-4xl lg:text-5xl font-bold">+10</h2>
          <p className="text-[#948A8A] font-semibold text-sm mt-2">
            PROJECTS <br /> COMPLETED
          </p>
        </div>

        {/* Clients */}
        <div className="shadow lg:border overflow-hidden bg-transparent text-white lg:px-8 px-0 py-4 rounded-lg lg:rounded-xl flex flex-col">
          <h2 className="text-4xl lg:text-5xl font-bold">+4</h2>
          <p className="text-[#948A8A] font-semibold text-sm mt-2">
            WORLDWIDE <br /> CLIENTS
          </p>
        </div>
      </div>

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

export default Hero;
