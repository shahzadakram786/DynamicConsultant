'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Flower, ShieldCheck, Waves } from 'lucide-react'
import Image from 'next/image'
import { aboutContent } from '@/lib/data/about-content'

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Parallax offsets for a "different" feel
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15])

  const [intro, philosophy, culture, integration] = aboutContent.paragraphs

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
                  <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px]">Philosophy</span>
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
            <motion.div 
              style={{ y: y2, rotate }}
              className="lg:col-span-5 relative z-10"
            >
              <div className="relative aspect-[3/4] w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(26,42,34,0.2)]">
                <Image src={aboutContent.portalUrl} fill alt="Darlene Nicks" className="object-cover" />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-50">
                 <Flower className="text-primary w-12 h-12 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE "STATIONS" (Animated Content Blocks) */}
      <section className="py-40 relative z-20">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {[
            { title: "The Philosophy", text: philosophy, icon: Waves, color: "bg-white" },
            { title: "The Culture", text: culture, icon: ShieldCheck, color: "bg-[#1A2A22] text-white" },
            { title: "The Integration", text: integration, icon: Flower, color: "bg-white" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`p-12 md:p-20 rounded-[4rem] ${item.color} shadow-2xl mb-24 last:mb-0 relative group`}
            >
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${idx === 1 ? 'bg-primary/20' : 'bg-primary/5 text-primary'}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={`text-xs font-bold tracking-[0.3em] uppercase mb-6 ${idx === 1 ? 'text-primary' : 'text-gray-400'}`}>
                    Chapter 0{idx + 1}
                  </h3>
                  <h2 className="text-3xl md:text-5xl font-serif mb-8">{item.title}</h2>
                  <p className={`text-lg leading-relaxed ${idx === 1 ? 'text-gray-300' : 'text-gray-600'}`}>
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
               <Image src={aboutContent.portalUrl} width={80} height={80} className="rounded-full grayscale" alt="Sign" />
            </div>
            <h4 className="text-4xl font-serif text-[#1A2A22]">{aboutContent.signature.name}</h4>
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs">{aboutContent.signature.tagline}</p>
            
            <div className="pt-10">
              <button className="relative px-12 py-5 bg-[#1A2A22] text-white rounded-full overflow-hidden group shadow-2xl">
                <span className="relative z-10 font-bold tracking-widest text-xs">BEGIN YOUR JOURNEY</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}