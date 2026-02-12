"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 bg-white-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-40 h-20 flex-shrink-0">
              <img
                src="/removedBG.png"
                alt="Dynamics Total Wellness"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <span className="hidden sm:block text-lg font-serif font-bold text-foreground">
              Dynamics
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-lg font-bold">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/team"
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/plansAndPricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Plans & Pricing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/services"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/team"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/plans-pricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Plans & Pricing
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
