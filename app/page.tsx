'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, CheckCircle2, Phone, Shield, Sparkles } from 'lucide-react'
import Testimonials from '@/components/section/Testimonials'
import { services } from '@/lib/data/services'
import ServiceCard from '@/components/section/ServiceCard'
import Hero from '@/components/section/HeroSection'
import InsuranceMarquee from '@/components/section/InsuranceMarquee'
import Cta from '@/components/section/Cta'

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // replace string ease with cubic-bezier array
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
  viewport: { once: true }
}

export default function Home() {
  const homepageServices = services.slice(0, 4)

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#1A2A22]">
      
      {/* Hero Section */}
      <Hero />

      {/* // ... inside the Home component */}
<section className="py-24 bg-[#FDFCF9]">
  <div className="container mx-auto px-4">
    <div className="max-w-xl mb-16">
      <h2 className="text-5xl font-serif font-bold text-[#3E5C4A] mb-4">Our Services</h2>
      <p className="text-lg opacity-70 text-nowrap">
        Comprehensive mental health support tailored to your unique needs.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {homepageServices.map((service, index) => (
        <ServiceCard
          key={index}
          index={index}
          title={service.title}
          shortDesc={service.shortDesc}
          image={service.image ?? '/placeholder.jpg'} // fallback to avoid string | undefined} // Make sure this is in your data!
          Icon={service.icon}
        />
      ))}
    </div>
  </div>
</section>

      {/* Testimonials */}
     
        <Testimonials />


        {/* Your Hero Section */}
      <InsuranceMarquee />
      {/* Rest of your sections */}
      

      {/* Quote Section with Parallax Feel */}
      <section className="py-32 bg-green-700 text-white relative overflow-hidden">
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="container mx-auto px-4 text-center relative z-10"
        >
          <blockquote className="text-4xl md:text-7xl font-serif font-medium leading-tight max-w-5xl mx-auto italic">
            "Teaching you to be your most authentic self with boundaries and values"
          </blockquote>
        </motion.div>
      </section>

     

     <Cta />
    </div>
  )
}