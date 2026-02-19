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
    <Link 
      href={href} 
      className="block w-full group focus:outline-none focus:ring-4 focus:ring-ring h-full" 
      style={{ borderRadius: 'var(--radius)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
        whileHover={{ y: -5, scale: 1.015 }}
        /* h-full: Matches height of other cards in the grid.
           flex-col: Allows internal alignment of text and button.
        */
        className="relative h-full flex flex-col overflow-hidden bg-card shadow-lg transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-primary/20"
        style={{ borderRadius: 'var(--radius)' }}
      >
        {/* Image Section - shrink-0 prevents the image from collapsing */}
        <div className="relative h-64 overflow-hidden shrink-0">
          <motion.img
            src={image}
            alt={imageAlt || title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Badge/Icon using --primary-foreground for text color */}
          <div className="absolute top-4 right-4 z-10 rounded-full bg-primary/70 p-3 backdrop-blur-sm shadow-md">
            <Icon className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>

        {/* Content Section:
            flex-grow: Stretches this container to fill the card.
            flex-col: Allows the button to be pushed to the bottom.
        */}
        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          <h3 
            className="font-serif font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300"
            style={{ fontSize: 'var(--text-h3)' }}
          >
            {title}
          </h3>
          
          {/* flex-grow: The "spacer" that pushes the button down if the text is short.
          */}
          <p 
            className="text-muted-foreground leading-relaxed mb-6 flex-grow"
            style={{ fontSize: 'var(--text-body)' }}
          >
            {shortDesc}
          </p>

          {/* Button Section:
              mt-auto: Ensures the button is always at the absolute bottom margin.
          */}
          <div className="flex items-center justify-start mt-auto">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-medium text-secondary-foreground shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              style={{ fontSize: 'var(--text-small)' }}
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