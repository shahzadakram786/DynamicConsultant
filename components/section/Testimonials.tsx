'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 8000);
    return () => clearInterval(timer);
  }, [nextStep]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '20%' : '-20%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '20%' : '-20%',
      opacity: 0,
    })
  };

  return (
    /* CHANGED: Background to a warm, sophisticated linen color */
    <section className="py-24 md:py-32 bg-[#F8F5F0] overflow-hidden relative">
      
      {/* Subtle background decorative circle */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center md:text-left max-w-2xl mb-12 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3 block"
          >
            Real Stories
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A2A22] leading-tight">
            The Impact of <br className="hidden md:block" /> 
            <span className="italic font-normal text-primary/80">Support</span>
          </h2>
        </div>

        {/* Slider Wrapper */}
        <div className="relative max-w-full mx-auto px-4 md:px-16">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevStep}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 md:p-5 rounded-full bg-white shadow-xl border border-border text-[#1A2A22] hover:bg-primary hover:text-white transition-all duration-300 -translate-x-2 md:-translate-x-6 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button 
            onClick={nextStep}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 md:p-5 rounded-full bg-white shadow-xl border border-border text-[#1A2A22] hover:bg-primary hover:text-white transition-all duration-300 translate-x-2 md:translate-x-6 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          {/* Main Content Area */}
          <div className="relative min-h-[500px] md:min-h-[420px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="w-full"
              >
                {/* CHANGED: Card uses a subtle border and higher shadow for a floating effect */}
                <div className="bg-white border border-[#3E5C4A]/5 p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative">
                  <Quote className="hidden sm:block absolute top-12 right-12 w-20 h-20 text-primary/5 -rotate-12" />

                  <div className="relative z-10">
                    <div className="flex gap-1 mb-8 justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-3xl font-serif italic text-[#1A2A22] leading-relaxed mb-10 md:mb-14 text-center md:text-left">
                      "{testimonials[index].quote}"
                    </blockquote>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 border-t border-[#F8F5F0] pt-10">
                      {/* CHANGED: Avatar matches the Hero's Emerald theme */}
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#062c1f] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg">
                        {testimonials[index].author.charAt(0)}
                      </div>
                      <div className="text-center md:text-left">
                        <p className="font-bold text-[#1A2A22] text-lg md:text-xl">
                          {testimonials[index].author}
                        </p>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary/60 mt-1 font-bold">
                          {testimonials[index].role || 'Verified Journey'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === index ? 'w-12 bg-primary' : 'w-3 bg-primary/10'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}