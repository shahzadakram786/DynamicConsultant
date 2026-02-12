'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function PlansAndPricing() {
  const plans = [
    {
      name: 'Basic Plan',
      price: 120,
      desc: 'Perfect for individuals starting their wellness journey.',
      validity: 'Valid for 1 month',
      features: [
        '1 Therapy Session',
        'Personal Growth Support',
        'Confidential Guidance',
        'Flexible Scheduling',
      ],
    },
    {
      name: 'Standard Package',
      price: 200,
      desc: 'Best for clients who want consistent support.',
      validity: 'Valid for 1 month',
      features: [
        '4 Therapy Sessions',
        'Goal Tracking',
        'Weekly Progress Support',
        'Customized Care Plan',
      ],
      popular: true,
    },
    {
      name: 'Premium Plan',
      price: 210,
      desc: 'Most valuable option with extra session benefits.',
      validity: 'Valid for 2 months',
      features: [
        '8 Therapy Sessions',
        '1 FREE Bonus Session',
        'Priority Scheduling',
        'Full Wellness Support',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20 pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Choose Your Pricing Plan
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Affordable and flexible mental wellness plans designed for individuals,
            couples, teens, and families.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border bg-card shadow-sm p-8 flex flex-col justify-between
                ${
                  plan.popular
                    ? 'border-primary scale-105 shadow-lg'
                    : 'border-border'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                {/* Plan Info */}
                <div className="space-y-5">
                  <h2 className="text-xl font-semibold text-foreground">
                    {plan.name}
                  </h2>

                  <div className="flex items-end gap-1">
                    <span className="text-lg font-medium">$</span>
                    <span className="text-6xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>

                  <p className="text-foreground/70">{plan.desc}</p>

                  {/* Features */}
                  <ul className="space-y-3 pt-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-foreground/60 pt-4">
                    {plan.validity}
                  </p>
                </div>

                {/* Button */}
                <div className="pt-8">
                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                          : 'bg-secondary hover:bg-secondary/80'
                      }`}
                    >
                      Select Plan
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Ready to Begin?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our compassionate therapists are here to guide you every step of the way.
            Book your consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="border-primary">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}