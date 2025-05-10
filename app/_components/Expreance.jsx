"use client";

import { useEffect, useState } from "react";

const Experience = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200); // Delay animation by 200ms

    return () => clearTimeout(timer);
  }, []);

  // const experienceData = [
  //   {
  //     title: "Frontend Development Intern",
  //     company: "CODEXINTERN",
  //     duration: "November 2024 – November 2024 (1 Month)",
  //     location: "Remote, Virtual",
  //     responsibilities: [
  //       "Designed and implemented responsive, user-friendly interfaces using HTML5, CSS3, and JavaScript for interactive web applications.",
  //       "Explored modern frontend frameworks, enhancing problem-solving skills and understanding of industry standards.",
  //       "Collaborated effectively in a virtual environment with peers and mentors to deliver high-quality, on-time project deliverables.",
  //       "Leveraged tools like React.js to create scalable and maintainable codebases.",
  //     ],
  //   },
  //   {
  //     title: "Open-Source Contributor",
  //     company: "GirlScript Summer of Code 2024 – Extended Edition!",
  //     duration: "October 2024 – October 2024 (1 Month)",
  //     location: "Remote",
  //     responsibilities: [
  //       "Contributed to open-source repositories by developing new features and resolving issues to improve functionality.",
  //       "Worked closely with project maintainers to ensure contributions aligned with community goals and requirements.",
  //       "Enhanced accessibility through detailed project documentation and ensured code quality by conducting comprehensive reviews.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company: "Fiverr - Freelance",
  //     duration: "Mar 2021 – May 2021 (3 Months)",
  //     location: "Remote",
  //     responsibilities: [
  //       "Successfully completed numerous freelance projects focused on creating engaging, responsive web applications tailored to client needs.",
  //       "Delivered custom solutions using technologies like React.js, HTML5, CSS3, and JavaScript.",
  //       "Maintained a high client satisfaction rate by adhering to deadlines and providing consistent, high-quality results.",
  //       "Collaborated with diverse clients worldwide, enhancing communication and project management skills.",
  //     ],
  //   },
  // ];

  const experienceData = [
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
    <div className={showAnimation ? "fade-in" : "opacity-0"} id="experience">
      <h1 className="text-5xl text-center lg:text-start lg:text-7xl font-bold">
        EXPERIENCE
      </h1>

      <div className="experience-list mt-12 grid grid-cols-1 lg:gap-8 gap-6 w-full">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="card w-full shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hover:bg-[#2726262e] text-white"
          >
            <div className="p-6 flex flex-col justify-between h-full w-full">
              <h2 className="text-2xl font-semibold text-white mb-2">
                {experience.title}
              </h2>
              <p className="text-[#948A8A] text-sm mb-2">
                {experience.company}
              </p>
              <p className="text-[#948A8A] text-sm mb-4">
                {experience.duration}
              </p>
              <ul className="text-sm text-[#bfbaba] list-disc ml-6">
                {experience.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
