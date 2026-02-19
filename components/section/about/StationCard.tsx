import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StationProps {
  title: string;
  text: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

export function AboutStation({ title, text, icon: Icon, color, index }: StationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`py-10 px-2 sm:p-20  rounded-[2.5rem] sm:rounded-[4rem] ${color} shadow-xl sm:shadow-2xl mb-12 sm:mb-24 relative group`}
    >
      <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start">
        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 ${index === 1 ? "bg-primary/20" : "bg-primary/5 text-primary"}`}>
          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div>
          <h3 className={`text-[9px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6 ${index === 1 ? "text-primary" : "text-gray-400"}`}>
            Chapter 0{index + 1}
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 sm:mb-8 leading-snug">{title}</h2>
          <p className={`text-base sm:text-lg leading-relaxed ${index === 1 ? "text-gray-300" : "text-gray-600"}`}>{text}</p>
        </div>
      </div>
    </motion.div>
  );
}