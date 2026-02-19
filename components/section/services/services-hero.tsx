'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export function ServicesHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105" // scale-105 prevents white edges
        >
          {/* Replace this URL with your hosted video file (e.g., from Pexels or local public folder) */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-silver-stream-1102-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* 2. OVERLAY (Crucial for text readability) */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-transparent to-background" />
      </div>

      {/* 3. CENTERED CONTENT */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight">
              Our <span className="italic text-primary">Services</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Professional, compassionate care designed to help you 
              reconnect with your authentic self.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-2xl">
                <Calendar className="mr-2 h-5 w-5" />
                Book Initial Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

    </section>
  )
}