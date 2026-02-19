'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { insuranceProvidersImages } from '@/lib/data/services'

export default function InsuranceMarquee() {
  const duplicatedProviders = [...insuranceProvidersImages, ...insuranceProvidersImages, ...insuranceProvidersImages]

  return (
    <section className="section-padding overflow-hidden relative">
      {/* BACKGROUND DECORATION: Subtle primary color glows to break the "flat" feel */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div 
          className="relative bg-card/50 backdrop-blur-md border border-primary/0 shadow-2xl overflow-hidden"
          style={{ 
            borderRadius: 'var(--radius)',
            paddingBlock: 'var(--space-12)' 
          }}
        >
          {/* INNER GRADIENT: Gives the card itself some depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />

          {/* Section Header */}
          <div className="px-[var(--section-space-x)] mb-[var(--space-10)] text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-3 py-1 mb-4 rounded-full bg-primary text-primary-foreground font-bold tracking-[0.15em] uppercase"
              style={{ fontSize: '9px' }}
            >
              Coverage Simplified
            </motion.span>
            <h3 
              className="font-serif font-bold text-foreground"
              style={{ fontSize: 'var(--text-h3)' }}
            >
              We Accept Most Major <span className="text-primary italic">Insurance Plans</span>
            </h3>
          </div>

          {/* The Marquee Track */}
          <div className="relative flex overflow-hidden py-10">
            <motion.div
              className="flex items-center gap-[var(--space-16)] pr-[var(--space-16)]"
              animate={{
                x: ['0%', '-33.33%'],
              }}
              transition={{
                duration: 40,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {duplicatedProviders.map((provider, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 flex items-center justify-center group/logo"
                  style={{ minWidth: '160px' }}
                >
                  {/* LOGO DESIGN: Instead of grayscale, we use a soft 'muted' look with a slight warm tint */}
                  <img
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    className="h-16 w-auto object-contain 
                               opacity-100 saturate-100 brightness-125
                               group-hover/logo:opacity-100 group-hover/logo:saturate-100 group-hover/logo:brightness-100
                               transition-all duration-700 ease-in-out
                               hover:scale-110 transform cursor-pointer z-10" 
                  />
                  
                  {/* Subtle 'Spotlight' effect on hover behind each logo */}
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-0 group-hover/logo:scale-100 transition-transform duration-500" />
                </div>
              ))}
            </motion.div>

            {/* Fades: Now matched to the bg-card with more "feathering" */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-card/80 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-card/80 to-transparent z-20" />
          </div>

          {/* Bottom Hint - Using Accent color to catch the eye */}
          <div className="mt-[var(--space-8)] text-center relative z-10">
             <p className="text-muted-foreground font-medium" style={{ fontSize: 'var(--text-small)' }}>
               Don't see your provider? <span className="text-primary underline underline-offset-4 cursor-pointer hover:text-accent transition-colors">Contact our team</span> to verify.
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}