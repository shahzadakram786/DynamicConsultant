'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  services, issues, approaches, 
  insuranceProviders, feeInfo 
} from '@/lib/data/services'
import { 
  ArrowRight, CheckCircle, Check, CreditCard, 
  Stethoscope, Shield, Sparkles, Zap, Calendar 
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

export default function ServicesPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-50 origin-left" style={{ scaleX }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/10">
        {/* The Gradient Background Layer */}
        <div className="absolute inset-0 z-0 bg-[#062c1f] bg-[radial-gradient(circle_at_top_right,_#0a4d3c_0%,_#062c1f_100%)]" />
  
        {/* Animated Mesh Glow */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] z-0" 
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            className="max-w-4xl"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3 text-primary" />
              Empowering Your Mental Health
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight"
            >
              Comprehensive <br />
              <span className="text-primary italic">Support</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10"
            >
              From individual growth to relationship healing, explore our full range of evidence-based services designed to help you thrive.
            </motion.p>

          
          </motion.div>
        </div>

        {/* Subtle Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
      </section>
      {/* Dynamic Services Loop */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-32 md:space-y-48">
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <motion.div variants={fadeInUp} className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                        <service.icon className="w-4 h-4" />
                        {service.title}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold">{service.title}</h2>
                      <p className="text-lg text-primary/80 italic font-medium">{service.shortDesc}</p>
                      <p className="text-muted-foreground leading-relaxed text-lg">{service.fullDesc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="inline-block pt-6">
                        <Button size="lg" className="rounded-full px-10 group">
                          Book Session <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                  <motion.div variants={fadeInUp} className="relative group">
                    <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10 rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                    <img src={service.image} alt={service.imageAlt} className="rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover border border-border" />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Issues We Address */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 italic text-primary">Total Dynamic Wellness</h2>
            <h3 className="text-2xl font-serif font-semibold">Issues We Address</h3>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-3">
            {issues.map((issue, i) => (
              <motion.span key={i} variants={fadeInUp} whileHover={{ y: -3, backgroundColor: 'var(--primary)', color: 'black' }} className="px-5 py-2.5 bg-background border border-border rounded-xl text-sm font-semibold transition-all cursor-default shadow-sm hover:shadow-md">
                {issue}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Approaches */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-center mb-16 flex items-center justify-center gap-3">
            <Stethoscope className="text-primary w-8 h-8" /> Therapeutic Approaches
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {approaches.map((app, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-5 bg-card border border-border rounded-2xl text-center font-bold text-sm text-foreground/80 hover:border-primary/40 transition-all">
                {app}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Fees */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3"><CreditCard className="text-primary" /> Insurance Accepted</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {insuranceProviders.map((provider, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-background border border-border rounded-lg text-sm font-medium">
                    <Check className="w-4 h-4 text-primary" /> {provider}
                  </div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-primary p-10 rounded-[2rem] text-primary-foreground text-center flex flex-col justify-center shadow-xl relative overflow-hidden">
              <Zap className="absolute -bottom-4 -left-4 w-24 h-24 text-white/10" />
              <h4 className="text-xl font-bold mb-4 italic">{feeInfo.label}</h4>
              <p className="text-4xl md:text-5xl font-serif font-bold mb-4">{feeInfo.amount}</p>
              <p className="text-sm opacity-80">Per standard session. We offer flexible options and sliding scales.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="py-24 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-foreground text-background p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden">
           <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic">Ready to Begin?</h2>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" variant="secondary" className="rounded-full px-12 font-bold h-14 text-lg">Schedule Now</Button>
             <Button size="lg" variant="outline" className="rounded-full px-12 border-background text-background hover:bg-background hover:text-foreground h-14 text-lg">Call Us Today</Button>
           </div>
        </motion.div>
      </section> */}
    </div>
  )
}