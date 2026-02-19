'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-gradient-to-b from-foreground/50 via-transparent to-background overflow-hidden">
      
      {/* 1. KINETIC BACKGROUND TYPOGRAPHY */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <motion.h2 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="text-[30vh] font-serif font-bold text-[#1A2A22]/5 whitespace-nowrap leading-none select-none"
        >
          DYNAMIC • TOTAL • WELLNESS • RESTORE • RECLAIM • RENEW •
        </motion.h2>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: CONTENT LAYER */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 text-primary">
                <Sparkles className="w-6 h-6" />
                <span className="text-[14px] font-bold uppercase tracking-[0.3rem] text-[#1A2A22]/70">Therapy for the Modern Soul</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-serif text-[#0c6639] leading-[0.9] mb-8">
                Your <span className="italic font-light">Evolution</span> <br /> 
                Starts Here.
              </h1>
              
              <p className="text-xl text-[#1A2A22]/70 leading-relaxed mb-10 max-w-lg font-light">
                At Dynamics Total Wellness, we don't just treat symptoms. We help you 
                rebuild your blueprint for a <span className="font-bold text-primary">thriving life.</span>
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="https://darlene-nicks.clientsecure.me/sign-in">
                  <Button size="lg" className="rounded-full h-16 px-10 bg-[#1A2A22] text-white hover:bg-primary transition-all duration-500 shadow-xl group">
                    Client Portal
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                

                <Link href="https://darlene-nicks.clientsecure.me/request/service"> 
                <button className="flex items-center gap-4 group">
                  <div className="w-16 h-16 rounded-full border border-[#1A2A22]/10 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                    <Play className="w-5 h-5 text-[#1A2A22] fill-[#1A2A22]" />
                  </div>
                  <span className="font-bold text-[10px] tracking-widest uppercase text-[#1A2A22]">Meet Darlene</span>
                </button>
                 </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: THE "MASKED" PORTRAIT */}
          <div className="order-1 lg:order-2 relative hidden md:flex">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full aspect-square"
            >
              {/* Organic Blob Mask for the Image */}
              <div className="absolute inset-0 bg-[#1A2A22] rounded-[40% 60% 70% 30% / 40% 50% 60% 50%] animate-blob overflow-hidden">
                <img 
                  src="/hero1(1).jpg" 
                  alt="Therapy session" 
                  className="w-full h-full object-cover scale-110 grayscale-[0.2]"
                />
              </div>
              
              {/* Floating Decorative Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -inset-10 border border-primary/20 rounded-full border-dashed"
              />
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          33% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          66% { border-radius: 50% 60% 30% 70% / 60% 40% 60% 40%; }
        }
        .animate-blob {
          animation: blob 15s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}