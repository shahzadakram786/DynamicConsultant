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
      <p className="text-lg opacity-70 text-balance">
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

     {/* Small & Attractive Final CTA */}
      <section className="py-16 bg-background relative overflow-hidden">
        {/* Decorative background split */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#062c1f]/5" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto bg-[#F8F5F0] rounded-[2.5rem] p-8 md:p-14 border border-[#3E5C4A]/10 shadow-[0_32px_64px_-16px_rgba(6,44,31,0.1)] overflow-hidden"
          >
            {/* Subtle Leaf Pattern Overlay (Logo Reference) */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <Sparkles className="w-32 h-32 text-primary" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">
                  Your journey starts here
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2A22] leading-tight">
                  Ready to <span className="italic font-normal text-primary">Begin?</span>
                </h2>
                <p className="mt-4 text-sm md:text-base text-[#1A2A22]/60 max-w-sm">
                  Connect with our specialists for a personalized consultation tailored to your wellness.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full rounded-full px-8 h-14 bg-[#062c1f] hover:bg-[#0a4d3c] shadow-lg shadow-primary/20 transition-all active:scale-95 group">
                    Schedule Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full px-8 h-14 border-primary/20 text-[#1A2A22] hover:bg-white transition-all active:scale-95"
                  asChild
                >
                  <a href="tel:+1234567890">
                    <Phone className="mr-2 w-4 h-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full" />
          </motion.div>
          
          {/* Reassurance Footer */}
          <div className="mt-6 flex items-center justify-center gap-4 text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> HIPAA Compliant</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> Secure & Private</span>
          </div>
        </div>
      </section>
    </div>
  )
}