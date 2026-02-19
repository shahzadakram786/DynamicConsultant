"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Waves, ShieldCheck, Flower } from "lucide-react";
import { aboutContent } from "@/lib/data/about-content";
import { AboutHero } from "@/components/section/about/AboutHero";
import { AboutProfileCard } from "@/components/section/about/ProfileCard";
import { AboutStation } from "@/components/section/about/StationCard";
import { AboutSignature } from "@/components/section/about/SignatureSection";



export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const [intro, philosophy, culture, integration] = aboutContent.paragraphs;

  const stations = [
    { title: "The Philosophy", text: philosophy, icon: Waves, color: "bg-white" },
    { title: "The Culture", text: culture, icon: ShieldCheck, color: "bg-[#1A2A22] text-white" },
    { title: "The Integration", text: integration, icon: Flower, color: "bg-white" },
  ];

  return (
    <main ref={containerRef} className="bg-[#FAF9F6] relative overflow-hidden">
      {/* Hero & Profile Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-20 px-0 ">
        <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <AboutHero y1={y1} intro={intro} />
            <AboutProfileCard portalUrl={aboutContent.portalUrl} />
          </div>
        </div>
      </section>

      {/* Chapters / Stations Section */}
      <section className="py-20 sm:py-40 relative z-20">
        <div className="container mx-auto px-1 sm:px-12 md:px-5 lg:px-5 max-w-5xl">
          {stations.map((s, i) => (
            <AboutStation key={i} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* Final Signature Section */}
      <AboutSignature 
        portalUrl={aboutContent.portalUrl}
        name={aboutContent.signature.name}
        tagline={aboutContent.signature.tagline}
      />
    </main>
  );
}