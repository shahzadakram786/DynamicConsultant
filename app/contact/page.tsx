'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

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

      {/* Content Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-10 md:p-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-primary font-medium">
                      Thank you! We've received your message and will get back to you shortly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border-border focus:border-primary"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border-border focus:border-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-border focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-border focus:border-primary"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="couples">Couples Counseling</option>
                      <option value="adolescent">Teen & Adolescent Support</option>
                      <option value="workshops">Workshops & Webinars</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us a bit about what brings you in..."
                      className="border-border focus:border-primary min-h-32"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-card rounded-xl border border-border p-8 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                <a href="tel:+1234567890" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  (123) 456-7890
                </a>
                <p className="text-sm text-foreground/60">
                  Available Monday-Friday, 9 AM - 6 PM
                </p>
              </div>

              {/* Email */}
              <div className="bg-card rounded-xl border border-border p-8 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Email</h3>
                <a href="mailto:info@dynamics.com" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  info@dynamics.com
                </a>
                <p className="text-sm text-foreground/60">
                  We respond within 24 business hours
                </p>
              </div>

              {/* Address */}
              <div className="bg-card rounded-xl border border-border p-8 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Address</h3>
                <p className="text-foreground/70">
                  123 Wellness Street<br />
                  City, State 12345
                </p>
              </div>

              {/* Hours */}
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center text-balance">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How much does therapy cost?',
                  answer: 'Our rates vary based on the therapist and service. We offer flexible pricing options and accept most insurance plans. Contact us for specific pricing information.',
                },
                {
                  question: 'What should I expect in my first session?',
                  answer: 'Your first session is a consultation where we learn about your goals and concerns. We discuss confidentiality, create a treatment plan, and answer any questions you have.',
                },
                {
                  question: 'Do you offer virtual sessions?',
                  answer: 'Yes, we offer both in-person and secure video therapy sessions for your convenience.',
                },
                {
                  question: 'How often should I come to therapy?',
                  answer: 'This varies based on your needs and treatment plan. Most clients benefit from weekly sessions, though frequency is personalized to your situation.',
                },
              ].map((faq, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-foreground/70">
                Can't find the answer you're looking for? <span className="font-medium text-foreground">Contact us directly</span> and we'll be happy to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
