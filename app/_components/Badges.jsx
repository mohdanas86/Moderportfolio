"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { certificates, skillBadges } from "@/data/userData";
import TextAnimateReveal from "./_animations/TextAnimateReveal";
import ParallaxElement from "./ParallaxElement";

const Badges = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const allSkillBadges = Object.values(skillBadges).flat();
  return (
    <div
      className={`${showAnimation ? "fade-in" : "opacity-0"
        } relative overflow-hidden w-full`}
      id="badges"
    >
      {/* Badges Section Container */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Certificates Section */}
        <section className="py-16 w-full">
          <div className="text-center mb-12">
            <ParallaxElement speed={0.3}>
              <h1 className="text-5xl text-center lg:text-7xl font-bold uppercase">
                <TextAnimateReveal text="Professional" />
              </h1>
            </ParallaxElement>

            <ParallaxElement speed={0.5}>
              <h1 className="text-5xl text-center lg:text-7xl font-bold uppercase text-[#353334]">
                <TextAnimateReveal text="Certificate" />
              </h1>
            </ParallaxElement>

            <p className="text-base md:text-lg text-[#948A8A] max-w-3xl mx-auto leading-relaxed mt-4">
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
                  className="mx-4 px-5 py-1.5 text-base font-medium border-[#FF7A00] text-[#000] bg-white"
                >
                  {categoryName}
                </Badge>
                <Separator className="flex-1 bg-[#948A8A]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {certs.map((cert) => (
                  <Card
                    key={cert.id}
                    className="group md:transition-all md:duration-300 md:hover:scale-[1.02] bg-transparent text-white hover:bg-[#2726262e] rounded-xl overflow-hidden border-0"
                  >
                    <div className="relative aspect-[4/3] bg-gray-900">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover md:group-hover:scale-105 md:transition-transform md:duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        quality={isMobile ? 75 : 85}
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
                      className="group md:transition-all md:duration-300 md:hover:shadow-lg md:hover:scale-105 border border-gray-200 bg-white rounded-xl"
                    >
                      <CardContent className="p-3 md:p-4 flex flex-col items-center">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3 bg-gray-100 rounded">
                          <Image
                            src={badge.image}
                            alt={badge.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 64px, 80px"
                            loading="lazy"
                            quality={isMobile ? 75 : 90}
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
