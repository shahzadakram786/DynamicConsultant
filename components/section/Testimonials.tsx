'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep]);

  return (
    /* Changed padding and background to variables */
    <section className="section-padding bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header - Using font-serif and fluid text variables */}
        <div className="text-center mb-[var(--space-10)]">
          <span className="text-primary font-bold tracking-widest block mb-2 uppercase" style={{ fontSize: 'var(--text-small)' }}>
            Testimonials
          </span>
          <h2 className="font-serif font-bold text-foreground" style={{ fontSize: 'var(--text-h2)' }}>
            What our happy patients say!
          </h2>
        </div>

        {/* Slider Window */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: `-${index * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3))}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex gap-[var(--space-6)]"
          >
            {testimonials.map((item, i) => (
              <div 
                key={i} 
                className="min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21.4px)]"
              >
                {/* Card - Mapped border-radius and background to tokens */}
                <div 
                  className="group h-full bg-card border border-solid border-border p-[var(--space-8)] transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/5"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  
                  {/* Rating Header */}
                  <div className="flex items-center mb-6 gap-2 text-amber-500 transition-all duration-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold text-primary" style={{ fontSize: 'var(--text-body)' }}>5.0</span>
                  </div>

                  {/* Quote Content - Using body text variable */}
                  <p className="text-muted-foreground leading-relaxed transition-all duration-500 pb-10 group-hover:text-foreground" style={{ fontSize: 'var(--text-body)' }}>
                    "{item.quote}"
                  </p>

                  {/* Author Footer - Border color updated to variable */}
                  <div className="flex items-center gap-4 border-t border-solid border-border pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg overflow-hidden border border-primary/10">
                      {item.author.charAt(0)}
                    </div>
                    <div className="block">
                      <h5 className="text-foreground font-bold transition-all duration-500 mb-0.5" style={{ fontSize: 'var(--text-h6)' }}>
                        {item.author}
                      </h5>
                      <span className="leading-4 text-muted-foreground font-medium uppercase tracking-wider" style={{ fontSize: 'var(--text-small)' }}>
                        {item.role || 'Verified Patient'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Custom Pagination Pills - Colors updated to primary/border */}
        <div className="flex justify-center items-center gap-3 mt-[var(--space-10)]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                i === index 
                  ? 'w-8 bg-primary' 
                  : 'w-4 bg-border hover:bg-primary/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}