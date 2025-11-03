"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Badges = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Google Cloud Skill Badges organized by category
  const skillBadges = {
    "AI & Machine Learning": [
      {
        id: "ai-1",
        image:
          "/google_badges/analyze-speech-and-language-with-google-apis-skill-.png",
        title: "Analyze Speech and Language with Google APIs",
        alt: "Google Cloud Speech and Language API Skill Badge",
      },
      {
        id: "ai-2",
        image:
          "/google_badges/build-real-world-ai-applications-with-gemini-and-im.png",
        title: "Build Real-World AI Applications with Gemini",
        alt: "Google Cloud AI with Gemini Skill Badge",
      },
    ],
    "Networking & Security": [
      {
        id: "net-1",
        image:
          "/google_badges/build-a-secure-google-cloud-network-skill-badge.png",
        title: "Build a Secure Google Cloud Network",
        alt: "Google Cloud Network Security Skill Badge",
      },
      {
        id: "net-2",
        image:
          "/google_badges/develop-your-google-cloud-network-skill-badge.png",
        title: "Develop Your Google Cloud Network",
        alt: "Google Cloud Network Development Skill Badge",
      },
      {
        id: "net-3",
        image:
          "/google_badges/implement-load-balancing-on-compute-engine-skill-ba.png",
        title: "Implement Load Balancing on Compute Engine",
        alt: "Google Cloud Load Balancing Skill Badge",
      },
      {
        id: "net-4",
        image:
          "/google_badges/networking-fundamentals-on-google-cloud-skill-badge.png",
        title: "Networking Fundamentals on Google Cloud",
        alt: "Google Cloud Networking Fundamentals Skill Badge",
      },
    ],
    "Data Analytics & Storage": [
      {
        id: "data-1",
        image:
          "/google_badges/create-a-streaming-data-lake-on-cloud-storage-skill.png",
        title: "Create a Streaming Data Lake on Cloud Storage",
        alt: "Google Cloud Data Lake Skill Badge",
      },
      {
        id: "data-2",
        image: "/google_badges/secure-biglake-data-skill-badge.png",
        title: "Secure BigLake Data",
        alt: "Google Cloud BigLake Security Skill Badge",
      },
      {
        id: "data-3",
        image:
          "/google_badges/store-process-and-manage-data-on-google-cloud-comma.png",
        title: "Store, Process, and Manage Data - Command Line",
        alt: "Google Cloud Data Management Command Line Skill Badge",
      },
      {
        id: "data-4",
        image:
          "/google_badges/store-process-and-manage-data-on-google-cloud-conso.png",
        title: "Store, Process, and Manage Data - Console",
        alt: "Google Cloud Data Management Console Skill Badge",
      },
      {
        id: "data-5",
        image:
          "/google_badges/streaming-analytics-into-bigquery-skill-badge.png",
        title: "Streaming Analytics into BigQuery",
        alt: "Google Cloud BigQuery Streaming Analytics Skill Badge",
      },
      {
        id: "data-6",
        image:
          "/google_badges/use-apis-to-work-with-cloud-storage-skill-badge.png",
        title: "Use APIs to Work with Cloud Storage",
        alt: "Google Cloud Storage APIs Skill Badge",
      },
    ],
    "Infrastructure & Development": [
      {
        id: "infra-1",
        image:
          "/google_badges/deploy-kubernetes-applications-on-google-cloud-skil.png",
        title: "Deploy Kubernetes Applications on Google Cloud",
        alt: "Google Cloud Kubernetes Skill Badge",
      },
      {
        id: "infra-2",
        image:
          "/google_badges/set-up-an-app-dev-environment-on-google-cloud-skill.png",
        title: "Set Up an App Dev Environment on Google Cloud",
        alt: "Google Cloud App Development Environment Skill Badge",
      },
      {
        id: "infra-3",
        image:
          "/google_badges/the-basics-of-google-cloud-compute-skill-badge.png",
        title: "The Basics of Google Cloud Compute",
        alt: "Google Cloud Compute Basics Skill Badge",
      },
    ],
  };

  // Professional Certificates organized by category
  const certificates = {
    "Industry Simulations & Professional Development": [
      {
        id: "cert-1",
        image: "/certificates/deloitte.png",
        title: "Deloitte Australia - Data Analytics Job Simulation",
        issuer: "Forage",
        description:
          "Hands-on experience with real-world data analytics challenges from a Big 4 consulting firm",
      },
      {
        id: "cert-2",
        image: "/certificates/Accenture UK_page-0001.jpg",
        title: "Accenture UK - Software Engineering Job Simulation",
        issuer: "Accenture",
        description:
          "Professional software engineering practices and methodologies from a global technology leader",
      },
      {
        id: "cert-3",
        image: "/certificates/Tata Group_page-0001.jpg",
        title: "Tata Group - Professional Development Program",
        issuer: "Tata Group",
        description:
          "Leadership and professional skills development from one of India's largest conglomerates",
      },
    ],
    "Technical Certifications & Skills": [
      {
        id: "cert-10",
        image: "/certificates/machineLearning.png",
        title: "Machine Learning with Python",
        issuer: "Coursera",
        description:
          "Comprehensive understanding of machine learning concepts and practical implementation using Python.",
      },
      {
        id: "cert-11",
        image: "/certificates/mongodb-basic-of-students.png",
        title: "MongoDB Basics for Students",
        issuer: "MongoDB, Inc",
        description:
          "Foundational understanding of MongoDB document database fundamentals and basic operations.",
      },
      {
        id: "cert-12",
        image: "/certificates/relational-doc-model.png",
        title: "Relational to Document Model",
        issuer: "MongoDB, Inc",
        description:
          "Understanding the transition from relational database concepts to MongoDB's document-based approach.",
      },
      {
        id: "cert-4",
        image: "/certificates/postman.png",
        title: "Postman API Fundamentals Student Expert",
        issuer: "Canvas Credentials (Badgr)",
        description:
          "API testing, documentation, and development using industry-standard tools",
      },
      {
        id: "cert-5",
        image:
          "/certificates/frontend_developer_react certificate (1)_page-0001.jpg",
        title: "Frontend Developer React Certificate",
        issuer: "HackerRank",
        description:
          "Advanced React.js development skills validated through practical coding assessments",
      },
      {
        id: "cert-6",
        image: "/certificates/cyber.png",
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        description:
          "Foundational cybersecurity principles, threat detection, and network security fundamentals",
      },
      {
        id: "cert-7",
        image: "/certificates/intro-data-science.png",
        title: "Introduction to Data Science",
        issuer: "Simplilearn",
        description:
          "Data analysis, machine learning basics, and statistical modeling techniques",
      },
    ],
    "Competitions & Academic Achievements": [
      {
        id: "cert-8",
        image: "/certificates/object-automation-hackathon_page-0001.jpg",
        title: "Object Automation Hackathon",
        issuer: "Hackathon",
        description:
          "Innovative automation solutions developed under time constraints in competitive environment",
      },
      {
        id: "cert-9",
        image:
          "/certificates/Participation _ Student_E Certificate-251-500-77_page-0001.jpg",
        title: "Research Paper Participation Certificate",
        issuer: "Educational Institution",
        description:
          "Academic research contribution and scholarly publication participation",
      },
    ],
  };

  const allSkillBadges = Object.values(skillBadges).flat();
  return (
    <div
      className={`${
        showAnimation ? "fade-in" : "opacity-0"
      } relative overflow-hidden w-full`}
      id="badges"
    >
      {/* Badges Section Container */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Certificates Section */}
        <section className="py-16 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-[#353334]">
            Professional
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#948A8A] mb-6 tracking-tight">
            Certificates
          </h2>

          <p className="text-base md:text-lg text-[#948A8A] max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications from leading companies and
            institutions, validating expertise across multiple domains and
            showcasing commitment to professional growth.
          </p>
        </div>

        {/* Category-wise certificate display */}
        {Object.entries(certificates).map(([categoryName, certs]) => (
          <div key={categoryName} className="mb-14">
            <div className="flex items-center justify-center mb-8">
              <Separator className="flex-1 bg-[#948A8A]" />
              <Badge
                variant="outline"
                className="mx-4 px-5 py-1.5 text-base font-medium border-[#FF7A00] text-[#FF7A00] bg-white"
              >
                {categoryName}
              </Badge>
              <Separator className="flex-1 bg-[#948A8A]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {certs.map((cert) => (
                <Card
                  key={cert.id}
                  className="group transition-all duration-300 hover:scale-[1.02] bg-transparent text-white hover:bg-[#2726262e] rounded-xl overflow-hidden border-0"
                >
                  <div className="relative aspect-[4/3] bg-gray-50">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <Badge
                      variant="outline"
                      className="self-start border-[#FF7A00] text-[#FF7A00] bg-transparent mb-2"
                    >
                      {cert.issuer}
                    </Badge>
                    <CardTitle className="text-lg md:text-xl text-white line-clamp-2 font-semibold">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-[#948A8A] text-sm md:text-base leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Google Cloud Skill Badges Section */}
      <section className="py-16 pt-0 px-4 md:px-8 w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-[#353334]">
            Google Cloud
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#948A8A] mb-6 tracking-tight">
            Skill Badges
          </h2>

          <p className="text-base md:text-lg text-[#948A8A] max-w-3xl mx-auto leading-relaxed">
            Professional Google Cloud skill badges organized by expertise areas
            – showcasing hands-on experience in AI/ML, networking, data
            analytics, and cloud infrastructure.
          </p>
        </div>
        {/* Category-wise display */}
        {Object.entries(skillBadges).map(
          ([categoryName, badges], categoryIndex) => (
            <div key={categoryName} className="mb-14">
              <div className="flex items-center justify-center mb-8">
                <Separator className="flex-1 bg-[#948A8A]" />
                <Badge
                  variant="outline"
                  className="mx-4 px-5 py-1.5 text-base font-medium border-[#FF7A00] text-[#FF7A00] bg-white"
                >
                  {categoryName}
                </Badge>
                <Separator className="flex-1 bg-[#948A8A]" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {badges.map((badge, badgeIndex) => (
                  <Card
                    key={badge.id}
                    className="group transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 bg-white rounded-xl"
                  >
                    <CardContent className="p-3 md:p-4 flex flex-col items-center">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
                        <Image
                          src={badge.image}
                          alt={badge.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 64px, 80px"
                          loading="lazy"
                          quality={90}
                          placeholder="blur"
                          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                        />
                      </div>
                      <h4 className="text-xs md:text-sm font-medium text-[#353334] text-center leading-tight line-clamp-3">
                        {badge.title}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        )}
        </section>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 1;
          transition: opacity 0.8s ease-in-out;
        }
        .opacity-0 {
          opacity: 0;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Badges;
