// src/components/section/ContactInfo.tsx
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="bg-card rounded-xl border border-border p-8 space-y-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Phone className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Phone</h3>
        <a
          href="tel:+16095070123"
          className="text-primary font-medium hover:text-primary/80 transition-colors block"
        >
          609.507.0123
        </a>
        <p className="text-sm text-foreground/60">
          Available Monday-Friday, 9 AM - 6 PM
        </p>
      </div>

      <div className="bg-card rounded-xl border border-border p-8 space-y-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Email</h3>
        <a
          href="mailto:info@dynamics.com"
          className="text-primary font-medium hover:text-primary/80 transition-colors block"
        >
          info@dynamics.com
        </a>
        <p className="text-sm text-foreground/60">
          We respond within 24 business hours
        </p>
      </div>

      <div className="bg-card rounded-xl border border-border p-8 space-y-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <MapPin className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Address</h3>
        <p className="text-foreground/70">Nutley, NJ 07110-4707</p>
      </div>

      <div className="bg-card rounded-xl border border-border p-8 space-y-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Clock className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Hours</h3>
        <div className="text-sm text-foreground/70 space-y-1">
          <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 3:00 PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
    </div>
  )
}