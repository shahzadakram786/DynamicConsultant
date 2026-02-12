'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Brain, Users, Heart, Sparkles, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: 'Individual Therapy',
      shortDesc: 'One-on-one counseling for personal growth',
      fullDesc: 'Individual therapy provides a safe, confidential space to explore your thoughts, feelings, and behaviors. Whether you\'re dealing with anxiety, depression, trauma, or life transitions, our licensed therapists work with you to develop personalized coping strategies and achieve your mental health goals.',
      benefits: [
        'Evidence-based therapeutic approaches',
        'Personalized treatment plans',
        'Flexible scheduling options',
        'Progress monitoring and adjustments',
      ],
    },
    {
      icon: Users,
      title: 'Couples Counseling',
      shortDesc: 'Strengthen your relationship',
      fullDesc: 'Couples therapy helps partners improve communication, resolve conflicts, and rebuild intimacy. Our therapists use proven techniques to help you understand each other better and create a stronger, healthier relationship built on mutual respect and understanding.',
      benefits: [
        'Improved communication skills',
        'Conflict resolution strategies',
        'Rebuilding trust and connection',
        'Prevention of relationship issues',
      ],
    },
    {
      icon: Heart,
      title: 'Teen & Adolescent Support',
      shortDesc: 'Specialized care for young people',
      fullDesc: 'Adolescence brings unique challenges. Our therapists specialize in working with teens on identity development, peer relationships, academic stress, family dynamics, and mental health concerns specific to this critical life stage.',
      benefits: [
        'Age-appropriate therapeutic approaches',
        'Support for identity and self-esteem',
        'Peer and family relationship guidance',
        'Stress and academic support',
      ],
    },
    {
      icon: Sparkles,
      title: 'Workshops & Webinars',
      shortDesc: 'Educational mental wellness sessions',
      fullDesc: 'Our interactive workshops and webinars provide evidence-based education on mental health topics. Learn practical skills for stress management, mindfulness, communication, emotional regulation, and overall wellness in a supportive group setting.',
      benefits: [
        'Practical skill-building',
        'Community support and connection',
        'Accessible learning formats',
        'Affordable group pricing',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Comprehensive mental health support tailored to your unique needs. From individual therapy to couples counseling, we offer evidence-based services designed to help you thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'md:auto-cols-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-6 ${!isEven ? 'md:order-last' : ''}`}
                  >
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {service.title}
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-foreground/70 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  {/* Icon Visual */}
                  <div
                    className={`flex justify-center md:justify-${
                      isEven ? 'end' : 'start'
                    }`}
                  >
                    <div className="w-64 h-64 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <IconComponent className="w-32 h-32 text-primary/30" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing/Process Section */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              How It Works
            </h2>
            <p className="text-lg text-foreground/70">
              Getting started with Dynamics Total Wellness is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: '01',
                title: 'Schedule',
                description: 'Contact us to book your initial consultation. We offer flexible scheduling to fit your life.',
              },
              {
                number: '02',
                title: 'Assessment',
                description: 'During your first session, we learn about your goals and concerns to create a personalized plan.',
              },
              {
                number: '03',
                title: 'Ongoing Support',
                description: 'Work with your therapist regularly. We adjust your treatment plan as you progress.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-block w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif font-bold text-2xl flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70">
                    {step.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our compassionate therapists are here to support you. Schedule a consultation today to discuss which service is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Schedule Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+1234567890">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-secondary"
                >
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
