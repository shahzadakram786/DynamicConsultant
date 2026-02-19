'use client'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ServiceListItem({ service, index }: { service: any, index: number }) {
  const isEven = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className={!isEven ? 'lg:order-2' : ''}>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
            <service.icon className="w-4 h-4" />
            {service.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">{service.title}</h2>
          <p className="text-lg text-primary/80 italic font-medium">{service.shortDesc}</p>
          <p className="text-muted-foreground leading-relaxed text-lg">{service.fullDesc}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            {service.benefits.map((benefit: string, i: number) => (
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
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10 rotate-2 group-hover:rotate-0 transition-transform duration-500" />
        <img src={service.image} alt={service.imageAlt} className="rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover border border-border" />
      </div>
    </motion.div>
  )
}