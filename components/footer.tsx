import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Dynamics Total Wellness</h3>
            <p className="text-primary-foreground/80">
              Professional mental health counseling services dedicated to supporting your wellness journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Individual Therapy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Couples Counseling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Adolescent Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Workshops
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a href="mailto:info@dynamics.com" className="hover:text-accent transition-colors">
                  info@dynamics.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Wellness Street<br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {currentYear} Dynamics Total Wellness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
