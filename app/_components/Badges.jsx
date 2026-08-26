"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { certificates, skillBadges } from "@/data/userData";
import TextAnimateReveal from "./_animations/TextAnimateReveal";
import ParallaxElement from "./ParallaxElement";
import { Highlighter } from "@/components/ui/highlighter";
import { SkillBadgeMarquee } from "./_animations/SkillBadgeMarquee";
import { Lens } from "@/components/ui/lens";

const Badges = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      className="relative overflow-hidden w-full"
      id="badges"
    >
      {/* Badges Section Container */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Certificates Section */}
        <section className="py-16 w-full">
          <div className="text-center mb-12">
            <ParallaxElement speed={0.3}>
              <h1 className="text-4xl text-center lg:text-7xl font-bold uppercase">
                <TextAnimateReveal text="Professional" />
              </h1>
            </ParallaxElement>

            <ParallaxElement speed={0.5}>
              <h1 className="text-4xl text-center lg:text-7xl font-bold uppercase text-[#353334]">
                <TextAnimateReveal text="Certificates" />
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
                  className="mx-4 px-5 py-1.5 text-base font-medium text-white border-none"
                >
                  {categoryName === "Industry Simulations & Professional Development" ? (
                    <Highlighter
                      action="highlight"
                      color="#FF7A00"
                      strokeWidth={0}
                      animationDuration={1000}
                      isView={true}
                    >
                      {categoryName}
                    </Highlighter>
                  ) : categoryName === "Technical Certifications & Skills" ? (
                    <Highlighter
                      action="highlight"
                      color="#4285F4"
                      strokeWidth={0}
                      animationDuration={950}
                      isView={true}
                    >
                      {categoryName}
                    </Highlighter>
                  ) : categoryName === "Competitions & Academic Achievements" ? (
                    <Highlighter
                      action="highlight"
                      color="#34A853"
                      strokeWidth={0}
                      animationDuration={1050}
                      isView={true}
                    >
                      {categoryName}
                    </Highlighter>
                  ) : (
                    categoryName
                  )}
                </Badge>
                <Separator className="flex-1 bg-[#948A8A]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {certs.map((cert) => (
                  <Card
                    key={cert.id}
                    className="group md:transition-all md:duration-300 md:hover:scale-[1.02] bg-transparent text-white hover:bg-[#2726262e] rounded-xl overflow-hidden border-0"
                  >
                    <Lens>
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
                    </Lens>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        {cert.badge ? (
                          <span aria-hidden="true" className="text-lg leading-none">
                            {cert.badge}
                          </span>
                        ) : null}
                        <Badge
                          variant="outline"
                          className="self-start border-[#FF7A00] text-[#FF7A00] bg-transparent"
                        >
                          {cert.issuer}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg md:text-xl text-white line-clamp-2 font-semibold">
                        {cert.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {(cert.date || cert.organization) ? (
                        <p className="text-xs md:text-sm text-[#b8b2b2] mb-2">
                          {[cert.date, cert.organization].filter(Boolean).join(" • ")}
                        </p>
                      ) : null}
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
            <h1 className="text-4xl text-center lg:text-7xl font-bold uppercase">
              <TextAnimateReveal text="Google Cloud" />
            </h1>

            <h1 className="text-4xl text-center lg:text-7xl font-bold uppercase text-[#353334]">
              <TextAnimateReveal text="Skill Badges" />
            </h1>


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
                    className="mx-4 px-5 py-1.5 text-base font-medium text-white border-none"
                  >
                    {categoryName === "AI & Machine Learning" ? (
                      <Highlighter
                        action="highlight"
                        color="#EA4335"
                        strokeWidth={0}
                        animationDuration={1000}
                        isView={true}
                      >
                        {categoryName}
                      </Highlighter>
                    ) : categoryName === "Networking & Security" ? (
                      <Highlighter
                        action="highlight"
                        color="#FBBC04"
                        strokeWidth={0}
                        animationDuration={950}
                        isView={true}
                      >
                        {categoryName}
                      </Highlighter>
                    ) : categoryName === "Data Analytics & Storage" ? (
                      <Highlighter
                        action="highlight"
                        color="#4285F4"
                        strokeWidth={0}
                        animationDuration={1100}
                        isView={true}
                      >
                        {categoryName}
                      </Highlighter>
                    ) : categoryName === "Infrastructure & Development" ? (
                      <Highlighter
                        action="highlight"
                        color="#34A853"
                        strokeWidth={0}
                        animationDuration={1050}
                        isView={true}
                      >
                        {categoryName}
                      </Highlighter>
                    ) : (
                      categoryName
                    )}
                  </Badge>
                  <Separator className="flex-1 bg-[#948A8A]" />
                </div>
                {/* Marquee for each category */}
                <SkillBadgeMarquee badges={badges} />
              </div>
            )
          )}
        </section>
      </div >


    </div >
  );
};

export default Badges;
