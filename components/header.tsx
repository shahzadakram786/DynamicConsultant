'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/plansAndPricing' },
  ];

  return (
    <>
      {/* 1. Header with White Background */}
      <header className="relative w-full z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-1 md:px-4 max-w-7xl">
          <nav className="flex items-center justify-between py-1">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <div className="relative h-20 md:h-28 w-auto">
                <img
                  src="/removedBG (1).png"
                  alt="Dynamics Total Wellness"
                  /* Added a slight dark contrast filter if your logo is very light, 
                     otherwise object-contain is perfect for white backgrounds */
                  className="h-full w-auto object-contain lg:object-cover"
                />
              </div>
            </Link>

            {/* DESKTOP NAV - Changed text color to Dark Green for readability on white */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-extrabold text-[#1A2A22]  tracking-loose hover:text-[#026228] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#026228] transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* ACTION BUTTON */}
            <div className="flex items-center gap-4">
              <Link href="https://darlene-nicks.clientsecure.me/sign-in" target="_blank" className="hidden sm:block">
                <Button className="rounded-full bg-[#026228] hover:bg-[#1A2A22] text-white font-bold px-8 h-12 transition-all shadow-md">
                  Patient Portal
                </Button>
              </Link>
              
              {/* Mobile Menu Toggle - Changed to Dark Green */}
              <button 
                className="lg:hidden p-2 text-[#1A2A22] hover:bg-gray-100 rounded-lg transition-colors" 
                onClick={() => setIsOpen(true)}
              >
                <Menu size={32} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU - White Background Theme */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white p-10 lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <img src="/removedBG.png" alt="Logo" className="h-16 w-auto object-contain" />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#1A2A22] hover:bg-gray-100 rounded-full"
              >
                <X size={32} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-3xl font-bold text-[#1A2A22] hover:text-[#026228] transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-2 h-2 rounded-full bg-[#026228] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>

            <div className="mt-auto pb-10">
              <Link href="https://darlene-nicks.clientsecure.me/sign-in" target="_blank">
                <Button className="w-full rounded-2xl bg-[#026228] h-16 text-lg font-bold shadow-xl">
                  Patient Portal
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}