"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Leaf, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-40 h-20 flex-shrink-0">
              <img
                src="/removedBG (1).png"
                alt="Dynamics Total Wellness"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-lg font-bold">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/plansAndPricing" className="text-foreground hover:text-primary transition-colors">
              Plans & Pricing
            </Link>
          </div>

          {/* Right side: Theme toggle + Mobile hamburger */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>

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
          </div>
        </nav>
      </div>

      {/* Full-screen Mobile Menu - slides from right */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu} // close when clicking outside menu
      >
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-card shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // prevent close when clicking inside menu
        >
          {/* Header inside menu */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="text-xl font-bold text-foreground">Menu</span>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col py-8 px-6 space-y-4 text-lg font-medium">
            <Link
              href="/"
              className="py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/plansAndPricing"
              className="py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Plans & Pricing
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}