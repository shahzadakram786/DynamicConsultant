'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Heart, Brain, Sparkles } from 'lucide-react'
import Testimonials from '@/components/section/Testimonials'

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      
      {/* Hero Section */}
 <section className="py-20 md:py-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 ">
      {/* Left Content */}
      <div className="space-y-8 order-2 md:order-1">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight lg:leading-[1.2]">
          Your Path to Total Wellness Starts Here
        </h1>
        <p className="text-xl text-foreground/90 leading-relaxed max-w-xl">
          Expert mental health counseling designed to help you navigate life's
          challenges with confidence and clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline">
              Explore Our Services
            </Button>
          </Link>
        </div>
        <div className="space-y-2 text-md text-foreground/90">
          <p>✔ Licensed and experienced therapists</p>
          <p>✔ Personalized treatment plans</p>
          <p>✔ Confidential and supportive environment</p>
        </div>
      </div>

      {/* Right Image – now takes more natural vertical space */}
      <div className="relative order-1 md:order-2 h-auto md:min-h-[500px] lg:min-h-[580px]">
        {/* Soft Background Shape */}
        {/* <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 scale-105" /> */}
        
        {/* Main Image – fills container height */}
        <div className="relative h-full w-full">
          <img
            src="/hero1.jpg"
            alt="Therapy Session Illustration"
            className=" inset-0 h-full w-full rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Services Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 text-balance">
              Comprehensive mental health support tailored to your unique needs and circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: 'Individual Therapy',
                description: 'One-on-one counseling sessions focused on your personal growth, emotional wellness, and life challenges.',
              },
              {
                icon: Users,
                title: 'Couples Counseling',
                description: 'Build stronger relationships with evidence-based couples therapy to improve communication and connection.',
              },
              {
                icon: Heart,
                title: 'Teen & Adolescent Support',
                description: 'Specialized counseling designed for teens navigating identity, relationships, and life transitions.',
              },
              {
                icon: Sparkles,
                title: 'Workshops & Webinars',
                description: 'Educational sessions on stress management, mindfulness, communication skills, and mental wellness.',
              },
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl border border-border bg-background hover:bg-secondary/30 transition-all duration-300 cursor-pointer hover:border-primary/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-secondary">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <Testimonials/>




      {/* Affirmation/Quote Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <blockquote className="text-3xl md:text-5xl font-serif font-bold leading-[1.3] md:leading-[1.4] lg:leading-[1.5] text-primary-foreground">
              " Teaching you to be your most authentic self with boundaries and values "
            </blockquote>
            <p className="text-primary-foreground/95 text-lg">
              At Dynamics Total Wellness, we believe in the power of compassionate, professional support to transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-border bg-background p-10 md:p-16 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance lg:leading-[1.2]">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto text-balance">
                Schedule a confidential consultation with one of our licensed therapists today. We're here to support you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                    Schedule Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+1234567890">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-secondary">
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
