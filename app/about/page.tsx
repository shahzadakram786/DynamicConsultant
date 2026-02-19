"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Flower, ShieldCheck, Waves } from "lucide-react";
import Image from "next/image";
import { aboutContent } from "@/lib/data/about-content";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax offsets for a "different" feel
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const [intro, philosophy, culture, integration] = aboutContent.paragraphs;

  return (
    <main ref={containerRef} className="bg-[#FAF9F6] relative overflow-hidden">
      {/* 1. BACKGROUND FLOATING TEXT (Animated) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-40 left-0 text-[25vw] font-serif text-[#1A2A22]/5 select-none pointer-events-none whitespace-nowrap"
      >
        Dynamic Total Wellness
      </motion.div>

      {/* 2. HERO SECTION: The Overlap */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* The Text Layer */}
            <div className="lg:col-span-7 z-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-primary" />
                  <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px]">
                    Philosophy
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-serif text-[#1A2A22] leading-[0.9] mb-12">
                  Healing <br /> is a <span className="italic">Process.</span>
                </h1>
                <p className="text-2xl text-[#1A2A22]/80 leading-relaxed font-light max-w-xl">
                  {intro}
                </p>
              </motion.div>
            </div>

            {/* The Image Layer (Average size, parallax movement) */}
           <div className="lg:col-span-5 relative flex flex-col items-center lg:items-start">
  {/* 1. THE PORTRAIT - Framed with a Decorative Offset */}
  <div className="relative w-full max-w-[450px] aspect-[4/5] z-0">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-full overflow-hidden shadow-xl"
      style={{ borderRadius: 'var(--radius)' }}
    >
      <Image 
        src={aboutContent.portalUrl} 
        fill 
        alt="Darlene Nicks" 
        className="object-cover" 
        priority
      />
      {/* Subtle overlay to tie the image to the theme */}
      <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
    </motion.div>

    {/* Decorative Frame Element */}
    <div 
      className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 -z-10 hidden md:block"
      style={{ borderRadius: 'var(--radius)' }}
    />
  </div>

  {/* 2. THE INFO PLATE - Overlapping for a "Designer" look */}
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="relative lg:absolute lg:-bottom-12 lg:-right-8 z-10 w-[90%] lg:w-[380px] mt-[-60px] lg:mt-0 bg-white shadow-2xl p-8 flex flex-col gap-5 border border-border"
    style={{ borderRadius: 'var(--radius)' }}
  >
    {/* Experience Badge */}
    <div className="flex items-center gap-4">
      <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg shadow-inner">
        15
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Years of Clinical</span>
        <span className="text-foreground font-serif italic font-bold">Experience</span>
      </div>
    </div>

    {/* Name & Credentials */}
    <div className="stack stack-xs">
      <h3 className="text-foreground font-serif font-bold text-3xl leading-tight">
        Darlene Nicks
      </h3>
      <p className="text-primary font-bold tracking-widest text-xs uppercase">
        LCSW, LICSW
      </p>
    </div>

    <div className="h-[1px] w-full bg-border" />

    {/* Licenses - Extremely Accessible Chips */}
    <div className="stack stack-xs">
      <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-muted-foreground">Licensed Practice States</p>
      <div className="flex flex-wrap gap-2">
        {['FL', 'NJ', 'PA', 'AL'].map((state) => (
          <span 
            key={state} 
            className="px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-bold rounded-full border border-border/50"
          >
            {state}
          </span>
        ))}
      </div>
    </div>

    {/* Role Footer */}
    <p className="text-muted-foreground text-[10px] uppercase tracking-[0.1em] font-medium pt-2 border-t border-dashed border-border">
      Licensed Clinical Social Worker
    </p>
  </motion.div>
</div>
          </div>
        </div>
      </section>

      {/* 3. THE "STATIONS" (Animated Content Blocks) */}
      <section className="py-40 relative z-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {[
            {
              title: "The Philosophy",
              text: philosophy,
              icon: Waves,
              color: "bg-white",
            },
            {
              title: "The Culture",
              text: culture,
              icon: ShieldCheck,
              color: "bg-[#1A2A22] text-white",
            },
            {
              title: "The Integration",
              text: integration,
              icon: Flower,
              color: "bg-white",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`p-12 md:p-20 rounded-[4rem] ${item.color} shadow-2xl mb-24 last:mb-0 relative group`}
            >
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${idx === 1 ? "bg-primary/20" : "bg-primary/5 text-primary"}`}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3
                    className={`text-xs font-bold tracking-[0.3em] uppercase mb-6 ${idx === 1 ? "text-primary" : "text-gray-400"}`}
                  >
                    Chapter 0{idx + 1}
                  </h3>
                  <h2 className="text-3xl md:text-5xl font-serif mb-8">
                    {item.title}
                  </h2>
                  <p
                    className={`text-lg leading-relaxed ${idx === 1 ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
              {/* Subtle hover reveal */}
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. THE SIGNATURE CLOSE */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-10">
              <Image
                src={aboutContent.portalUrl}
                width={80}
                height={80}
                className="rounded-full grayscale"
                alt="Sign"
              />
            </div>
            <h4 className="text-4xl font-serif text-[#1A2A22]">
              {aboutContent.signature.name}
            </h4>
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs">
              {aboutContent.signature.tagline}
            </p>

            <div className="pt-10">
              <button className="relative px-12 py-5 bg-[#1A2A22] text-white rounded-full overflow-hidden group shadow-2xl">
                <span className="relative z-10 font-bold tracking-widest text-xs">
                  BEGIN YOUR JOURNEY
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
