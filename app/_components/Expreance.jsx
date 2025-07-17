"use client";

import { useEffect, useState } from "react";
import ParallaxElement from "./ParallaxElement";

const Experience = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);

  const experienceData = [
    {
      title: "Data Analysis Intern",
      company: "Cognifyz Technologies",
      duration: "May 2025 – June 2025 (2 Months)",
      location: "Remote, Virtual",
      responsibilities: [
        "Worked on data analysis projects as part of internship under Cognifyz Technologies.",
        "Demonstrated strong analytical and problem-solving skills using relevant data tools.",
        "Showcased effective communication, attention to detail, and coordination throughout the internship.",
        "Proactively took on new challenges with enthusiasm and a desire to learn.",
        "Gained practical exposure to data cleaning, interpretation, and reporting.",
      ],
    },
    {
      title: "Frontend Development Intern",
      company: "ChartsMaze",
      duration: "February 2025 – February 2025 (1 Month)",
      location: "Remote, Virtual",
      responsibilities: [
        "Built and launched the 'Trade Journal' feature from scratch for multiple brokerage platforms.",
        "Designed a dynamic dashboard with interactive charts to enhance trade tracking and data visualization.",
        "Collaborated closely with designers and backend developers to ensure seamless integration.",
      ],
    },
    {
      title: "Frontend Development Intern",
      company: "CODEXINTERN",
      duration: "November 2024 – November 2024 (1 Month)",
      location: "Remote, Virtual",
      responsibilities: [
        "Designed and implemented responsive, user-friendly interfaces using HTML5, CSS3, and JavaScript.",
        "Enhanced frontend performance by redesigning components with React.js and Tailwind CSS.",
        "Improved API response times and integrated new features for a smoother user experience.",
      ],
    },
    {
      title: "Open-Source Contributor",
      company: "GirlScript Summer of Code 2024 - Extended Edition",
      duration: "October 2024 – October 2024 (1 Month)",
      location: "Remote",
      responsibilities: [
        "Developed and maintained code for open-source repositories, enhancing features and resolving issues.",
        "Collaborated with project maintainers to align contributions with community needs.",
        "Created documentation to improve project accessibility and ensured code quality through reviews.",
        "Enhanced project functionality while maintaining high code standards and community guidelines.",
      ],
    },
    {
      title: "Web Developer",
      company: "Fiverr - Freelance",
      duration: "March 2021 – May 2021 (3 Months)",
      location: "Remote",
      responsibilities: [
        "Completed freelance projects building responsive web apps tailored to client requirements.",
        "Delivered custom solutions using React.js, HTML5, CSS3, and JavaScript.",
        "Achieved high client satisfaction by meeting deadlines and providing quality results.",
        "Collaborated with global clients, improving communication and project management skills.",
      ],
    },
  ];

  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"} py-16 relative overflow-hidden`}
      id="experience"
    >
      <ParallaxElement speed={0.3}>
        <h1 className="text-5xl text-center lg:text-7xl font-bold">EXPERIENCE</h1>
      </ParallaxElement>

      <ParallaxElement speed={0.2}>
        <div className="experience-list mt-12 grid grid-cols-1 gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
        {experienceData.map((experience, index) => (
          <ParallaxElement speed={0.1 * (index + 1)} direction={index % 2 === 0 ? 'horizontal' : 'vertical'} key={index}>
            <div
              className="card w-full h-full min-h-[320px] md:min-h-[360px] lg:min-h-[280px] rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:bg-[#2726262e] text-white flex flex-col"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex-shrink-0 mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-tight">
                    {experience.title}
                  </h2>
                  <p className="text-[#948A8A] text-sm mb-1 font-medium">
                    {experience.company}
                  </p>
                  <p className="text-[#948A8A] text-sm mb-2">
                    {experience.duration}
                  </p>
                </div>
                <div className="flex-grow">
                  <ul className="text-sm text-[#bfbaba] list-disc ml-6 space-y-1 leading-relaxed">
                    {experience.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
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
        .card {
          transform: translateY(5px);
          transition: transform 0.4s ease-in-out;
        }
        .card:hover {
          transform: translateY(0px);
        }
      `}</style>
    </div>
  );
};

export default Experience;
