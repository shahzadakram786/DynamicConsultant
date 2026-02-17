'use client'

import React from 'react'
import { motion } from 'framer-motion'
// FIX 1: Import the correct array (the one with images)
import { insuranceProvidersImages } from '@/lib/data/services'

export default function InsuranceMarquee() {
  // FIX 2: Use the imported images array
  const duplicatedProviders = [...insuranceProvidersImages, ...insuranceProvidersImages, ...insuranceProvidersImages]

  return (
    <div className="py-10  border-y border-border/40 overflow-hidden relative mx-auto max-w-7xl">
      
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70 mb-2">
          Trusted Partners
        </p>
        <h3 className="text-2xl  lg:text-4xl font-serif font-medium text-foreground/80">
          Accepted Insurance Plans
        </h3>
      </div>

      {/* The Marquee Track */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex items-center gap-16 pr-16"
          animate={{
            x: ['0%', '-33.33%'],
          }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }} 
        >
          {duplicatedProviders.map((provider, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 flex items-center justify-center min-w-[140px]"
            >
              {/* The Logo Image */}
              <img
                src={provider.logo}
                // FIX 3: Use 'provider.name' because that matches your data file
                alt={`${provider.name} logo`}
                className="h-20 w-auto object-contain 
                           
                           grayscale-0 
                           transition-all duration-500 ease-out
                           opacity-100 
                           hover:scale-110 transform cursor-pointer" 
              />
            </div>
          ))}
        </motion.div>

        {/* Cinematic Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </div>
  )
}