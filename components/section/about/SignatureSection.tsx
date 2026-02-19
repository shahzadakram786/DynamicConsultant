"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface SignatureProps {
  portalUrl: string;
  name: string;
  tagline: string;
}

export function AboutSignature({ portalUrl, name, tagline }: SignatureProps) {
  return (
    // Added relative and z-30 to ensure it sits above the parallax background text
    <section className="relative z-30 py-20 px-1 sm:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Circular Portrait */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 sm:mb-10 overflow-hidden ring-4 ring-[#FAF9F6] shadow-sm">
            <Image 
              src={portalUrl} 
              width={80} 
              height={80} 
              className="grayscale object-cover w-full h-full" 
              alt="Sign" 
            />
          </div>

          {/* Text Branding */}
          <div className="space-y-2 sm:space-y-4">
            <h4 className="text-3xl sm:text-4xl font-serif text-[#1A2A22]">
              {name}
            </h4>
            <p className="text-primary font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-xs">
              {tagline}
            </p>
          </div>

          {/* CTA Button - Logic Fix */}
          <div className="pt-8 sm:pt-10 flex justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <button 
                type="button"
                className="group relative w-full px-10 py-4 sm:px-12 sm:py-5 bg-[#1A2A22] text-white rounded-full overflow-hidden shadow-xl transition-all hover:shadow-2xl active:scale-95 cursor-pointer"
              >
                {/* Label - z-index 20 to stay above the hover effect */}
                <span className="relative z-20 font-bold tracking-widest text-[10px] sm:text-xs pointer-events-none">
                  BEGIN YOUR JOURNEY
                </span>

                {/* Hover Background - z-index 10 */}
                <div 
                  className="absolute inset-0 z-10 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" 
                />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}