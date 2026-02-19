'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background Decorative Element - Adjusted opacity and size for mobile */}
      <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 text-[15rem] md:text-[25rem] font-serif opacity-[0.03] pointer-events-none select-none">
        D
      </div>

      {/* Changed py-10 to px-6 (mobile) and responsive padding py-16/24 */}
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          
          {/* LEFT SIDE: Brand Narrative */}
          <div className="w-full lg:w-1/3 stack stack-lg">
            <div className="stack stack-sm">
              <h2 className="font-serif italic text-4xl md:text-5xl text-white">
                Dynamics
              </h2>
              <p className="text-accent uppercase tracking-[0.3em] font-bold text-[10px]">
                Total Wellness Center
              </p>
            </div>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-md">
              We believe in the power of authentic growth. Our space is designed for those ready to define their boundaries and reclaim their values.
            </p>
            <div className="flex gap-6">
               <Link href="/contact" className="group flex items-center gap-2 text-white font-medium hover:text-accent transition-colors">
                 Start your journey <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
               </Link>
            </div>
          </div>

          {/* RIGHT SIDE: The "Glass" Info Hub */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-8">
            
            {/* Navigation Column */}
            <div className="stack stack-md">
              <h4 className="text-white font-bold border-b border-white/10 pb-4">Explore</h4>
              <nav className="stack stack-sm">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <Link 
                    key={item} 
                    href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                    className="text-primary-foreground/60 hover:text-accent transition-all hover:pl-2 py-1 inline-block"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Card - Floating Design */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-3xl stack stack-md shadow-2xl">
              <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Reach Out</h4>
              
              <div className="stack stack-sm">
                <a href="tel:+16095070123" className="text-lg md:text-xl font-medium text-white hover:text-accent transition-colors break-words">
                  609.507.0123
                </a>
                <a href="mailto:info@dynamics.com" className="text-sm md:text-base text-primary-foreground/80 hover:text-white transition-colors break-all">
                  info@dynamics.com
                </a>
              </div>

              <div className="pt-2 md:pt-4 stack stack-xs">
                <p className="text-primary-foreground/50 text-[10px] uppercase font-bold tracking-tighter">Our Office</p>
                <p className="text-primary-foreground/90 text-sm md:text-base leading-snug">Nutley, NJ 07110-4707</p>
              </div>

              <div className="flex gap-4 pt-2 md:pt-4">
                {[
                  { Icon: Facebook, href: "#", ariaLabel: "Visit our Facebook profile" },
                  { Icon: Twitter, href: "#", ariaLabel: "Visit our Twitter profile" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/darlene-nicks-468620113/", ariaLabel: "Visit our LinkedIn profile" } 
                ].map((social, i) => (
                  <a key={i} href={social.href} aria-label={social.ariaLabel} className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-all">
                    <social.Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary-foreground/70 text-[10px] md:text-xs uppercase tracking-widest text-center md:text-left">
            &copy; {currentYear} Dynamics Total Wellness &bull; Made with Intention
          </p>
          <div className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-widest font-bold text-primary-foreground/70">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}