'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { PaginationDots } from '@/components/ui/pagination-dots';
import { testimonials } from '@/lib/data/testimonials';

interface TestimonialSliderProps {
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialSlider({
  autoPlay = true,          // changed default to true
  interval = 6000,          // slightly longer for reading longer quotes
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay with cleanup
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            What Clients Are Saying
          </h2>
          <p className="text-lg text-foreground/70">
            Honest feedback from people who've experienced the work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[300px]">  {/* increased height a bit */}
            <div
              key={currentIndex}
              className="animate-fade-in bg-card rounded-2xl p-8 border border-border shadow-md"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />  {/* bigger icon */}
              <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 italic">
                “{current.quote}”
              </blockquote>

              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground text-lg">{current.author}</p>
                {(current.role || current.date) && (
                  <p className="text-foreground/60 text-sm mt-1">
                    {current.role && <span>{current.role}</span>}
                    {current.role && current.date && <span> • </span>}
                    {current.date && <span>{current.date}</span>}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <PaginationDots
              total={testimonials.length}
              current={currentIndex}
              onChange={setCurrentIndex}
            />
          </div>
        </div>

        {/* Small ethical note */}
        {/* // Testimonials disclaimer (in TestimonialSlider.tsx or similar) */}
<p className="text-center text-sm text-foreground/80 mt-12 max-w-2xl mx-auto">
  Testimonials are shared voluntarily and with permission. Individual results may vary.
</p>
      </div>

      {/* Your fade animation styles */}
      <style jsx>{`... same as before`}</style>
    </section>
  );
}

// 'use client'

// import { Quote } from 'lucide-react'
// import { testimonials, type Testimonial } from '@/lib/data/testimonials'

// export default function Testimonials() {
//   return (
//     <section className="py-20 md:py-28 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-foreground/70 text-balance">
//             Real stories from real people on their journey to wellness.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {testimonials.map((testimonial: Testimonial) => (
//             <div
//               key={testimonial.id}
//               className="group relative bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//             >
//               {/* Quote Icon */}
//               <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

//               {/* Testimonial Text */}
//               <blockquote className="text-foreground/80 leading-relaxed mb-6 relative z-10">
//                 "{testimonial.quote}"
//               </blockquote>

//               {/* Author Info */}
//               <div className="border-t border-border pt-4 mt-4">
//                 <p className="font-semibold text-foreground">
//                   {testimonial.author}
//                 </p>
//                 {(testimonial.role || testimonial.date) && (
//                   <p className="text-sm text-foreground/60">
//                     {testimonial.role && <span>{testimonial.role}</span>}
//                     {testimonial.role && testimonial.date && <span> • </span>}
//                     {testimonial.date && <span>{testimonial.date}</span>}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


