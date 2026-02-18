'use client'

import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link' // Import Link

interface ServiceCardProps {
  title: string
  shortDesc: string
  image: string
  imageAlt?: string
  Icon: LucideIcon
  index: number
  slug?: string // Added slug to handle navigation to specific service
}

export default function ServiceCard({ title, shortDesc, image, imageAlt, Icon, index, slug = "" }: ServiceCardProps) {
  // If you want to link to a general services page, use "/services" 
  // If you want to link to a specific sub-page, use `/services/${slug}`
  const href = slug ? `/services/${slug}` : '/services';

  return (
    <Link href={href} className="block w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="group relative h-[500px] w-full overflow-hidden rounded-[2.5rem] cursor-pointer bg-[#3E5C4A]/5"
      >
        {/* Background Image */}
        <motion.img
          src={image}
          alt={imageAlt || title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />

        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A22] via-[#1A2A22]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Top Floating Glass Badge */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Bottom Content Card */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <div className="bg-white p-7 rounded-[2rem] shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-[#3E5C4A] mb-2 leading-tight">
              {title}
            </h3>
            
            {/* Animated Description Reveal */}
            <div className="grid grid-rows-[1fr] transition-all duration-500 ease-in-out">
              <p className="text-sm text-foreground/70 overflow-hidden leading-relaxed">
                {shortDesc}
              </p>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 transition-all duration-500">
                Learn More
              </span>
              <div className="w-10 h-10 rounded-full bg-[#F4F7F5] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}