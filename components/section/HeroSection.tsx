'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-[#131f19] ">
      {/* SPACER - matches header height (non-scrolled) */}
      <div className="h-26 md:h-38" />

      {/* CONTENT AREA with its own background */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Background image (only for this content area) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero1(1).jpg"
            alt="Therapy Session"
            className="w-full h-full object-cover  scale-110 blur-[6px] opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2A22]/20 via-transparent to-[#1A2A22]/90" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className=" lg:text-3xl inline-flex items-center gap-2 px-4 py-4 rounded-full border border-white/20 bg-white/2 backdrop-blur-lg text-white/90 text-[15px] md:text-lg font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8"
            >
              Welcome to Dynamics Total Wellness
            </motion.div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-5xl font-serif font-bold text-white leading-[1.2] tracking-tight mb-6 md:mb-8 drop-shadow-2xl">
              Your Path to Total Wellness <br />
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-8 md:mb-12 font-medium">
              Expert mental health counseling designed to help you navigate life's
              challenges with confidence and clarity.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://darlene-nicks.clientsecure.me/sign-in"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-10 text-base md:text-lg bg-[#026228] hover:bg-[#FDFCF9] hover:text-[#3E5C4A] transition-all duration-500 shadow-xl border-none font-bold"
                >
                  Clients Portal
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-10 text-base md:text-lg border-[#A7D1B8]/40 text-white bg-white/5 hover:bg-[#026228] backdrop-blur-lg transition-all font-bold"
                >
                  Request Appointment
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="hidden sm:flex flex-wrap justify-center gap-4 md:gap-6 mt-12 md:mt-16 opacity-60">
              {['Licensed therapists', 'Personalized plans', 'Confidential care'].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white text-[10px] md:text-sm font-bold uppercase tracking-widest"
                  >
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary" /> {item}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (hidden on mobile) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30 hidden lg:block">
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </div>
    </section>
  );
}