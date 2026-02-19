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
    <section className="bg-background transition-colors duration-500">
      {/* 1. THE STORY SECTION - Using your fluid section-padding and stack utilities */}
      <div className="section-padding container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-12)] items-center">
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{ borderRadius: 'var(--radius)' }}
              className="relative aspect-[4/5] overflow-hidden border border-border"
            >
              <Image 
                src={aboutContent.portalUrl} 
                fill 
                alt="About Darlene" 
                className="object-cover" 
              />
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 stack stack-md">
            <motion.span 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              className="font-bold tracking-widest text-[var(--text-small)] uppercase"
            >
              Our Essence
            </motion.span>
            
            <h2 className="text-balance" style={{ fontSize: 'var(--text-h2)' }}>
              {aboutContent.subtitle}
            </h2>
            
            <div className="stack stack-sm max-w-xl">
              <p className="lg:font-medium opacity-90 " style={{ fontSize: 'var(--text-h5)' }}>
                {story1}
              </p>
              {/* <p className="text-muted-foreground">
                {story2}
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE VISION BREAK - Utilizing Theme Tokens for Dark/Green variants */}
      <div className="relative py-[var(--space-16)] bg-foreground overflow-hidden">
        {/* Decorative SVG Pattern using Primary Color */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <div className="w-[800px] h-[800px] border border-primary rounded-full scale-150" />
        </div>

        <div className="container mx-auto px-[var(--section-space-x)] max-w-5xl relative z-10 text-center stack stack-lg">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary mx-auto"
          >
            <Eye className="w-8 h-8" />
          </motion.div>
          
          <h2 className="italic text-primary-foreground text-balance" style={{ fontSize: 'var(--text-h2)' }}>
            "Our Vision for Total Dynamic Wellness"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-8)] text-left">
            {/* Vision Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-[var(--space-8)] bg-background/5 backdrop-blur-sm border border-primary-foreground/10 rounded-[var(--radius)] hover:bg-background/10 transition-colors"
            >
              <Sparkles className="text-primary mb-[var(--space-4)] w-6 h-6" />
              <h4 className="text-primary-foreground font-bold mb-[var(--space-2)]">Integrative Growth</h4>
              <p className="text-primary-foreground/70" style={{ fontSize: 'var(--text-small)' }}>{vision1}</p>
            </motion.div>

            {/* Vision Card 2 */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="p-[var(--space-8)] bg-background/5 backdrop-blur-sm border border-primary-foreground/10 rounded-[var(--radius)] hover:bg-background/10 transition-colors"
            >
              <Heart className="text-primary mb-[var(--space-4)] w-6 h-6" />
              <h4 className="text-primary-foreground font-bold mb-[var(--space-2)]">Authentic Self</h4>
              <p className="text-primary-foreground/70" style={{ fontSize: 'var(--text-small)' }}>{vision2}</p>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
          >
            <Link href="/about" className="inline-flex items-center gap-4 text-primary-foreground group">
              <span className="text-[var(--text-small)] font-bold tracking-widest uppercase">Explore our full philosophy</span>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform text-primary-foreground">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}