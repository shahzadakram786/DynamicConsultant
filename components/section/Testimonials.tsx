'use client'

import { Quote } from 'lucide-react'
import { testimonials, type Testimonial } from '@/lib/data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Real stories from real people on their journey to wellness.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial: Testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

              {/* Testimonial Text */}
              <blockquote className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-border pt-4 mt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                {(testimonial.role || testimonial.date) && (
                  <p className="text-sm text-foreground/60">
                    {testimonial.role && <span>{testimonial.role}</span>}
                    {testimonial.role && testimonial.date && <span> • </span>}
                    {testimonial.date && <span>{testimonial.date}</span>}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}