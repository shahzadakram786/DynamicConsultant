"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function AboutProfileCard({ portalUrl }: { portalUrl: string }) {
  return (
    <div className="lg:col-span-5 flex flex-col items-center lg:items-stretch gap-8 sm:gap-12 group">
      
      {/* --- PORTRAIT SECTION --- */}
      <div className="relative w-full max-w-[400px] sm:max-w-[500px] aspect-[4/5] self-center lg:self-start">
        
        {/* EST. Watermark - Stays hidden on SM mobile for space, visible on tablet+ */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -left-8 sm:-left-12 top-10 hidden sm:block select-none"
        >
          <span className="text-4xl sm:text-6xl font-serif font-black text-primary/5 rotate-180 [writing-mode:vertical-lr] tracking-tighter">
            EST. 2009
          </span>
        </motion.div>

        {/* The Image Canvas */}
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full h-full grayscale-0  transition-all duration-1000 shadow-xl overflow-hidden"
          style={{ borderRadius: 'var(--radius)' }}
        >
          <Image 
            src={portalUrl} 
            fill 
            alt="Darlene Nicks" 
            className="object-cover"
            priority 
          />
          {/* Elegant Inner Frame Overlay */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/20 pointer-events-none rounded-[calc(var(--radius)-8px)]" />
        </motion.div>

        {/* Experience Stamp */}
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-20 w-20 sm:h-24 sm:w-24 bg-background border-[6px] sm:border-8 border-background rounded-full flex items-center justify-center shadow-xl z-10"
        >
           <div className="w-full h-full rounded-full border border-dashed border-primary/30 flex flex-col items-center justify-center">
              <span className="text-xl sm:text-2xl font-serif font-bold text-primary">15</span>
              <span className="text-[6px] sm:text-[7px] uppercase tracking-widest font-black">Years</span>
           </div>
        </motion.div>
      </div>

      {/* --- INFO PLATE SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-[500px] space-y-6 sm:space-y-8"
      >
        {/* Name & Title */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6 sm:w-8 bg-primary" />
            <p className="text-primary font-bold tracking-[0.2em] text-[9px] sm:text-[10px] uppercase">
              Clinical Profile
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-serif text-4xl sm:text-5xl font-light leading-tight">
              Darlene <span className="font-bold italic">Nicks</span>
            </h3>
            {/* Restored Missing Data */}
            <p className="text-muted-foreground text-xs sm:text-sm tracking-widest uppercase mt-2 font-medium">
              LCSW, LICSW • Clinical Director
            </p>
          </div>
        </div>

        {/* Licensure Details */}
        <div className="grid grid-cols-1 gap-6 py-6 sm:py-8 border-y border-border/60">
          <div className="flex flex-col gap-3">
            <h4 className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-primary/60">
              Licensure & Jurisdiction
            </h4>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
              {["New Jersey", "Florida", "Pennsylvania", "Alabama"].map((s, i) => (
                <motion.div 
                  key={s} 
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="flex items-center gap-2"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/20" />
                  <span className="text-xs sm:text-sm font-medium text-foreground/80">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Verification ID */}
        <div className="flex items-center justify-between group/footer">
          <div className="space-y-0.5">
            <p className="text-[10px] sm:text-xs font-bold text-foreground">
              Board Certified Professional
            </p>
            {/* Restored Missing Data */}
            <p className="text-[9px] sm:text-[11px] text-muted-foreground uppercase tracking-tighter">
              Verification ID: 2940-LCSW
            </p>
          </div>
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-secondary flex items-center justify-center group-hover/footer:bg-primary transition-all duration-500 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-primary group-hover/footer:text-white transition-colors" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}