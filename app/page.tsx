'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { services } from '@/lib/data/services'
import ServiceCard from '@/components/section/ServiceCard'
import Hero from '@/components/section/HeroSection'
import InsuranceMarquee from '@/components/section/InsuranceMarquee'
import Cta from '@/components/section/Cta'
import HomeAbout from '@/components/section/HomeAbout'
import Testimonials from '@/components/section/Testimonials'

export default function Home() {
  const homepageServices = services.slice(0, 4)

  return (
    /* Updated background to use variable and removed hardcoded text color */
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <HomeAbout />

      {/* Services Section - Redesigned with your scale tokens */}
      <section className="section-padding bg-background transition-colors duration-500">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[var(--space-16)] gap-[var(--space-6)]">
            <div className="max-w-2xl stack stack-sm">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-primary font-bold tracking-widest uppercase"
                style={{ fontSize: 'var(--text-small)' }}
              >
                What we offer
              </motion.span>
              <h2 
                className="font-serif font-bold text-foreground leading-tight"
                style={{ fontSize: 'var(--text-h2)' }}
              >
                Our Specialized Services  
              </h2>
              <p 
                className="text-muted-foreground max-w-lg"
                style={{ fontSize: 'var(--text-body)' }}
              >
                Comprehensive mental health support tailored to your unique needs, 
                blending clinical expertise with compassionate care.
              </p>
            </div>
            
            <motion.div whileHover={{ x: 5 }} className="hidden md:block">
              <a href="/services" className="text-primary font-bold flex items-center gap-2 border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                View All Services
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-8)]">
            {homepageServices.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={service.title}
                shortDesc={service.shortDesc}
                image={service.image ?? '/placeholder.jpg'}
                Icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Insurance Marquee */}
      <InsuranceMarquee />

      {/* Quote Section - Redesigned for a "Premium" feel using Primary/Foreground mix */}
      <section className="relative overflow-hidden">
        {/* Background treatment using your primary color tokens */}
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }}
        />
        
        <div className="section-padding container mx-auto text-center relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="stack stack-lg"
          >
            <div className="w-16 h-1px bg-primary-foreground/30 mx-auto" />
            <blockquote 
              className="font-serif font-medium leading-tight max-w-5xl mx-auto italic text-primary-foreground"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              "Teaching you to be your most authentic self with boundaries and values"
            </blockquote>
            <div className="w-16 h-1px bg-primary-foreground/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
    </div>
  )
}