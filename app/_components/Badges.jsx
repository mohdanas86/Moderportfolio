"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

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

  // Professional Certificates
  const certificates = [
    {
      id: "cert-1",
      image: "/certificates/Accenture UK_page-0001.jpg",
      title: "Accenture UK - Software Engineering Job Simulation",
      issuer: "Accenture",
      type: "Professional Development",
    },
    {
      id: "cert-2",
      image:
        "/certificates/frontend_developer_react certificate (1)_page-0001.jpg",
      title: "Frontend Developer React Certificate",
      issuer: "HackerRank",
      type: "Technical Certification",
    },
    {
      id: "cert-3",
      image: "/certificates/object-automation-hackathon_page-0001.jpg",
      title: "Object Automation Hackathon",
      issuer: "Hackathon",
      type: "Competition",
    },
    {
      id: "cert-4",
      image:
        "/certificates/Participation _ Student_E Certificate-251-500-77_page-0001.jpg",
      title: "Research Paper Participation Certificate",
      issuer: "Educational Institution",
      type: "Academic",
    },
    {
      id: "cert-5",
      image: "/certificates/Tata Group_page-0001.jpg",
      title: "Tata Group - Professional Development Program",
      issuer: "Tata Group",
      type: "Professional Development",
    },
  ];

  const allSkillBadges = Object.values(skillBadges).flat();
  return (
    <div className={`${showAnimation ? "fade-in" : "opacity-0"}`} id="badges">
      {/* Achievement Overview */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold text-[#353334] tracking-tight">
              Professional Achievement Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#353334] mb-2">
                  {allSkillBadges.length}
                </div>
                <Badge
                  variant="outline"
                  className="mb-3 border-[#FF7A00] text-[#FF7A00] bg-white"
                >
                  Google Cloud Badges
                </Badge>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#353334] mb-2">
                  {certificates.length}
                </div>
                <Badge
                  variant="outline"
                  className="mb-3 border-blue-400 text-blue-500 bg-white"
                >
                  Professional Certificates
                </Badge>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#353334] mb-2">
                  {Object.keys(skillBadges).length +
                    new Set(certificates.map((c) => c.type)).size}
                </div>
                <Badge
                  variant="outline"
                  className="mb-3 border-green-400 text-green-600 bg-white"
                >
                  Expertise Areas
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Google Cloud Skill Badges Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
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
        {Object.entries(skillBadges).map(([categoryName, badges]) => (
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
              {badges.map((badge) => (
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
        ))}
        {/* Skill Badges Summary */}
        <div className="mt-14 flex justify-center">
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="px-6 md:px-8 py-6">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#948A8A]">
                    {allSkillBadges.length}
                  </div>
                  <Badge
                    variant="outline"
                    className="mt-2 border-[#948A8A] text-[#948A8A] bg-white"
                  >
                    Skill Badges
                  </Badge>
                </div>
                <Separator
                  orientation="vertical"
                  className="h-12 bg-gray-200"
                />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#948A8A]">
                    {Object.keys(skillBadges).length}
                  </div>
                  <Badge
                    variant="outline"
                    className="mt-2 border-[#948A8A] text-[#948A8A] bg-white"
                  >
                    Expertise Areas
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Certificates Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Separator className="flex-1 bg-gray-200" />
          <div className="mx-8">
            <Badge
              variant="outline"
              className="px-6 py-2 text-lg font-semibold border-[#FF7A00] text-[#FF7A00] bg-white"
            >
              Professional Achievements
            </Badge>
          </div>
          <Separator className="flex-1 bg-gray-200" />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-[#353334]">
            Professional
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#948A8A] mb-6 tracking-tight">
            Certificates
          </h2>
          <p className="text-base md:text-lg text-[#948A8A] max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications from leading companies and
            institutions, validating my expertise in software engineering and
            professional development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-200 bg-white rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-gray-50">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardHeader className="pb-2">
                <Badge
                  variant="outline"
                  className="self-start border-[#FF7A00] text-[#FF7A00] bg-white mb-2"
                >
                  {cert.type}
                </Badge>
                <CardTitle className="text-lg md:text-xl text-[#353334] line-clamp-2 font-semibold">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#948A8A] text-sm md:text-base font-medium">
                  {cert.issuer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Certificates Summary */}
        <div className="mt-14 flex justify-center">
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
            <CardContent className="px-6 md:px-8 py-6">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#353334]">
                    {certificates.length}
                  </div>
                  <Badge
                    variant="outline"
                    className="mt-2 border-[#FF7A00] text-[#FF7A00] bg-white"
                  >
                    Certificates
                  </Badge>
                </div>
                <Separator
                  orientation="vertical"
                  className="h-12 bg-gray-200"
                />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#353334]">
                    {new Set(certificates.map((c) => c.type)).size}
                  </div>
                  <Badge
                    variant="outline"
                    className="mt-2 border-green-400 text-green-600 bg-white"
                  >
                    Categories
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
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
