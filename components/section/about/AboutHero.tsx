import { motion, MotionValue } from "framer-motion";

interface HeroProps {
  y1: MotionValue<number>;
  intro: string;
}

export function AboutHero({ y1, intro }: HeroProps) {
  return (
    <>
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 md:top-40 left-0 text-[35vw] sm:text-[25vw] font-serif text-[#1A2A22]/5 select-none pointer-events-none whitespace-nowrap"
      >
        Dynamic Total Wellness
      </motion.div>

      <div className="lg:col-span-7 z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-8 sm:w-12 h-[1px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[9px] sm:text-[10px]">
              Philosophy
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-[#1A2A22] leading-[1] sm:leading-[0.9] mb-8 sm:mb-12">
            Healing <br /> is a <span className="italic">Process.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-[#1A2A22]/80 leading-relaxed font-light max-w-xl">
            {intro}
          </p>
        </motion.div>
      </div>
    </>
  );
}