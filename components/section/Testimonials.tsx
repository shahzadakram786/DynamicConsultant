'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Determine how many dots to show based on window size (assuming 3 per view on desktop)
  const dots = Math.ceil(testimonials.length);

  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header - Styled like your reference */}
        <div className="mb-16 text-center">
          <span className="text-sm text-primary font-bold tracking-widest block mb-2 uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2A22]">
            What our happy patients say!
          </h2>
        </div>

        {/* Slider Window */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: `-${index * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3))}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex gap-8"
          >
            {testimonials.map((item, i) => (
              <div 
                key={i} 
                className="min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21.4px)]"
              >
                <div className="group h-full bg-white border border-solid border-gray-200 rounded-2xl p-8 transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/5 active-slide:border-primary">
                  
                  {/* Rating Header */}
                  <div className="flex items-center mb-6 gap-2 text-amber-500 transition-all duration-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-base font-bold text-primary">5.0</span>
                  </div>

                  {/* Quote Content */}
                  <p className="text-base text-gray-600 leading-relaxed transition-all duration-500 pb-10 group-hover:text-gray-900">
                    "{item.quote}"
                  </p>

                  {/* Author Footer */}
                  <div className="flex items-center gap-4 border-t border-solid border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg overflow-hidden border border-primary/10">
                      {item.author.charAt(0)}
                    </div>
                    <div className="block">
                      <h5 className="text-[#1A2A22] font-bold transition-all duration-500 mb-0.5">
                        {item.author}
                      </h5>
                      <span className="text-xs leading-4 text-gray-500 font-medium uppercase tracking-wider">
                        {item.role || 'Verified Patient'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Custom Pagination Pills (Requested Design) */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full ${
                i === index 
                  ? 'w-8 h-1.5 bg-primary' 
                  : 'w-4 h-1.5 bg-gray-200 hover:bg-primary/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}