'use client'

import React from 'react'
import { useScroll, useSpring, motion } from 'framer-motion'
import { services, issues, approaches } from '@/lib/data/services'
import { Stethoscope } from 'lucide-react'

// Sub-components
import { ServicesHero } from '@/components/section/services/services-hero'
import { ServiceListItem } from '@/components/section/services/service-list-item'
import { InsuranceFees } from '@/components/section/services/insurance-fees'

export default function ServicesPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-50 origin-left" style={{ scaleX }} />

      <ServicesHero />

      {/* Main Services Loop */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-32 md:space-y-48">
            {services.map((service, index) => (
              <ServiceListItem key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Issues Grid */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 italic text-primary">Total Dynamic Wellness</h2>
            <h3 className="text-2xl font-serif font-semibold mb-16">Issues We Address</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {issues.map((issue, i) => (
                <span key={i} className="px-5 py-2.5 bg-background border border-border rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-all cursor-default shadow-sm">
                    {issue}
                </span>
                ))}
            </div>
        </div>
      </section>

      {/* Approaches Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-center mb-16 flex items-center justify-center gap-3">
            <Stethoscope className="text-primary w-8 h-8" /> Therapeutic Approaches
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {approaches.map((app, i) => (
              <div key={i} className="p-5 bg-card border border-border rounded-2xl text-center font-bold text-sm text-foreground/80 hover:border-primary transition-all">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsuranceFees />
    </div>
  )
}