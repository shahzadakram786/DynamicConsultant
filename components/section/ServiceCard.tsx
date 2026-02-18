'use client'

import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  shortDesc: string
  image: string
  imageAlt?: string
  Icon: LucideIcon
  index: number
  slug?: string
}

export default function ServiceCard({
  title,
  shortDesc,
  image,
  imageAlt,
  Icon,
  index,
  slug = '',
}: ServiceCardProps) {
  const href = slug ? `/services/${slug}` : '/services'

  return (
    <Link href={href} className="block w-full group focus:outline-none focus:ring-2 focus:ring-[#3E5C4A] rounded-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
        whileHover={{ y: -5, scale: 1.015 }}
        className="relative overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-[#3E5C4A]/20"
      >
        {/* Image Section - Full top visibility, no overlay */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={imageAlt || title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Small icon overlay on image */}
          <div className="absolute top-4 right-4 z-10 rounded-full bg-[#3E5C4A]/70 p-3 backdrop-blur-sm shadow-md">
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Text Section - Clean white background below image */}
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A2A22] mb-3 leading-tight group-hover:text-[#3E5C4A] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-base text-[#3E5C4A]/90 leading-relaxed mb-6">
            {shortDesc}
          </p>

          {/* Learn More Button - Subtle animation on hover */}
          <div className="flex items-center justify-start">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-[#F4F7F5] px-6 py-3 text-sm font-medium text-[#3E5C4A] shadow-sm group-hover:bg-[#3E5C4A] group-hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}