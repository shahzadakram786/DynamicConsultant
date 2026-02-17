// src/app/contact/page.tsx
import ContactForm from '@/components/section/ContactForm'
import ContactInfo from '@/components/section/ContactInfo'
import FAQSection from '@/components/section/FAQSection'
import LocationsSection from '@/components/section/LocationSection'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Ready to begin your wellness journey? We're here to answer your questions and help you schedule an appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      {/* Main Content */}
<section className="py-20 md:py-28">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Form – takes 2 columns on lg+ */}
      <div className="lg:col-span-2 order-2 lg:order-1">
        <ContactForm />
      </div>

      {/* Sidebar – sticky on lg+ */}
      <div className="lg:col-span-1 order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
        <ContactInfo />
      </div>
    </div>
  </div>
</section>
      {/* Location  */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <LocationsSection />
        </div>
      </section>

 
    </div>
  )
}