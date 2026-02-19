'use client'
import { motion } from 'framer-motion'
import { CreditCard, Check, Zap } from 'lucide-react'
import { insuranceProviders, feeInfo } from '@/lib/data/services'

export function InsuranceFees() {
  return (
    <section className="py-24 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
              <CreditCard className="text-primary" /> Insurance Accepted
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {insuranceProviders.map((provider, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-background border border-border rounded-lg text-sm font-medium">
                  <Check className="w-4 h-4 text-primary" /> {provider}
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="bg-primary p-10 rounded-[2rem] text-primary-foreground text-center flex flex-col justify-center shadow-xl relative overflow-hidden"
          >
            <Zap className="absolute -bottom-4 -left-4 w-24 h-24 text-white/10" />
            <h4 className="text-xl font-bold mb-4 italic">{feeInfo.label}</h4>
            <p className="text-4xl md:text-5xl font-serif font-bold mb-4">{feeInfo.amount}</p>
            <p className="text-sm opacity-80">Per standard session. We offer flexible options and sliding scales.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}