'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Eye, Sparkles, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { aboutContent } from '@/lib/data/about-content'

export default function HomeAboutVision() {
  // We use the first 2 paragraphs for the "Story" and the last 2 for the "Vision"
  const [story1, story2, vision1, vision2] = aboutContent.paragraphs

  return (
    <section className="bg-white">
      {/* 1. THE STORY SECTION (Clean & Aligned) */}
      <div className="container mx-auto px-6 max-w-7xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
            >
              <Image src={aboutContent.portalUrl} fill alt="About Darlene" className="object-cover" />
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Our Essence
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A2A22] mb-8 leading-tight">
              {aboutContent.subtitle}
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-xl">
              <p className="text-lg font-medium text-[#1A2A22]/80">{story1}</p>
              <p>{story2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE VISION BREAK (Immersive & Interactive) */}
      <div className="relative py-32 bg-[#1A2A22] overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <div className="w-[800px] h-[800px] border border-white rounded-full scale-150" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary mb-10"
          >
            <Eye className="w-8 h-8" />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-16 italic">
            "Our Vision for Total Dynamic Wellness"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Sparkles className="text-primary mb-4 w-6 h-6" />
              <h4 className="text-white font-bold mb-4">Integrative Growth</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{vision1}</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Heart className="text-primary mb-4 w-6 h-6" />
              <h4 className="text-white font-bold mb-4">Authentic Self</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{vision2}</p>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="mt-20"
          >
            <Link href="/about" className="inline-flex items-center gap-4 text-white group">
              <span className="text-sm font-bold tracking-widest uppercase">Explore our full philosophy</span>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}