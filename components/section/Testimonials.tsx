'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  // Update visible items based on window width
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2); // Tablet
      } else {
        setVisibleItems(1); // Mobile
      }
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const nextStep = useCallback(() => {
    // We subtract visibleItems to prevent sliding into empty space at the end
    setIndex((prev) => (prev + 1 >= testimonials.length - (visibleItems - 1) ? 0 : prev + 1));
  }, [visibleItems]);

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep]);

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-1 sm:px-4 lg:px-4">
        
        {/* Header */}
        <div className="text-center mb-[var(--space-10)]">
          <span className="text-primary font-bold tracking-widest block mb-2 uppercase" style={{ fontSize: 'var(--text-small)' }}>
            Testimonials
          </span>
          <h2 className="font-serif font-bold text-foreground" style={{ fontSize: 'var(--text-h2)' }}>
            What our happy patients say!
          </h2>
        </div>

        {/* Slider Window */}
        <div className="relative">
          <div className="overflow-hidden px-2"> {/* Added slight padding so shadows aren't clipped */}
            <motion.div
              animate={{ x: `-${index * (100 / visibleItems)}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="flex"
            >
              {testimonials.map((item, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 px-3" // Using padding for gaps instead of margin for cleaner math
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  {/* Card */}
                  <div 
                    className="group h-full bg-card border border-solid border-border p-[var(--space-8)] transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/5"
                    style={{ borderRadius: 'var(--radius)' }}
                  >
                    {/* Rating Header */}
                    <div className="flex items-center mb-6 gap-2 text-amber-500 transition-all duration-500">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-bold text-primary" style={{ fontSize: 'var(--text-body)' }}>5.0</span>
                    </div>

                    {/* Quote Content */}
                    <p className="text-muted-foreground leading-relaxed transition-all duration-500 pb-10 group-hover:text-foreground" style={{ fontSize: 'var(--text-body)' }}>
                      "{item.quote}"
                    </p>

                    {/* Author Footer */}
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
        </div>

        {/* Custom Pagination Pills */}
        <div className="flex justify-center items-center gap-3 mt-[var(--space-10)]">
          {/* We only show pills for the amount of possible 'pages' */}
          {testimonials.slice(0, testimonials.length - (visibleItems - 1)).map((_, i) => (
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