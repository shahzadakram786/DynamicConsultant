'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Brain, Users, Heart, Sparkles, CheckCircle, Check, CreditCard, Stethoscope } from 'lucide-react'

export default function ServicesPage() {
const services = [
    // New - Anxiety
    {
      icon: Brain,
      title: 'Anxiety Treatment',
      shortDesc: 'Regain calm and control in daily life',
      fullDesc: 'Anxiety can feel overwhelming, but effective treatment helps you understand triggers, reduce physical symptoms, and build lasting coping tools. We use evidence-based methods to help you feel more grounded, confident, and at peace.',
      benefits: [
        'Learn proven anxiety management techniques',
        'Reduce panic attacks and constant worry',
        'Improve sleep and physical tension',
        'Build long-term resilience and confidence',
      ],
      image: 'https://dy7glz37jgl0b.cloudfront.net/advice/images/regain/3c1c369ccf74570aa98a052972eb4741-therapist-takes-notes-while-sitting-with-a-female-client-who-looks-upset_l.jpg?v=ab3ccb07d4f4',
      imageAlt: 'Therapist taking notes while listening to upset female client during anxiety therapy session',
    },
    {
      icon: Heart,
      title: 'PTSD & Trauma Recovery',
      shortDesc: 'Heal from trauma with safety and compassion',
      fullDesc: 'Post-Traumatic Stress Disorder and trauma can leave deep imprints, but recovery is possible. We provide trauma-informed care using gentle, evidence-based approaches to help you process experiences, reduce flashbacks and hypervigilance, and reclaim a sense of safety and trust.',
      benefits: [
        'Trauma-focused therapy (CPT, EMDR-informed)',
        'Reduce nightmares, flashbacks, and avoidance',
        'Rebuild safety, trust, and emotional regulation',
        'Support for complex trauma and PTSD symptoms',
      ],
      image: 'https://cpdonline.co.uk/wp-content/uploads/2025/10/PTSD-treatment-scaled.jpg',
      imageAlt: 'Therapist listening attentively to client during PTSD trauma recovery session',
    },
    {
      icon: Sparkles,
      title: 'Addiction Recovery Support',
      shortDesc: 'Path to freedom from substance and behavioral addictions',
      fullDesc: 'Addiction affects every part of life, but meaningful recovery is possible with the right support. We offer compassionate, non-judgmental therapy to help you understand underlying patterns, build healthier coping mechanisms, and create a life aligned with your values.',
      benefits: [
        'Evidence-based addiction treatment approaches',
        'Address co-occurring mental health concerns',
        'Build relapse prevention and coping skills',
        'Support for sobriety, harm reduction, or moderation goals',
      ],
      image: 'https://thumbs.dreamstime.com/b/care-group-counseling-sad-woman-support-addiction-recovery-kindness-comfort-psychology-people-therapy-help-400243985.jpg',
      imageAlt: 'Group therapy session providing support for addiction recovery',
    },
    // Original services (kept as they were)
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
      image: 'https://dy7glz37jgl0b.cloudfront.net/advice/images/regain/3c1c369ccf74570aa98a052972eb4741-therapist-takes-notes-while-sitting-with-a-female-client-who-looks-upset_l.jpg',
      imageAlt: 'Empathetic therapist taking notes while listening to a thoughtful female client in a cozy session',
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
      image: 'https://bayareacbtcenter.com/wp-content/uploads/2025/02/Untitled-design-683-1024x791.png',
      imageAlt: 'Happy diverse couple smiling and connecting during a positive couples therapy session',
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
      image: 'https://www.sandiegotherapy.com/wp-content/uploads/2026/01/a-young-lady-with-a-female-therapist-in-a-teen-therapy-session.jpg',
      imageAlt: 'Teen girl in supportive conversation with caring female therapist in a comfortable setting',
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
      image: 'https://www.icanotes.com/wp-content/uploads/2022/06/group-therapy-life-skill-activities-for-adults.jpg',
      imageAlt: 'Diverse group of adults actively participating in a warm group therapy or workshop circle',
    },
  ]

  const issues = [
    'Anxiety',
    'Depression',
    'Trauma',
    'Attachment Issues',
    'Binge Eating Disorder',
    'Body Image Disorders',
    'Racial Identity',
    'Work Stress',
    "Women's Issues",
    'Spirituality and Religion',
    'Self Esteem',
    'Relationship Issues',
    'PTSD',
    'Perfectionism',
    'Marital and Premarital',
    'Life Transitions',
    'Life Coaching',
    'Loneliness',
    'Mood Disorders',
    'Peer Relationships',
    'Domestic Violence',
    'Eating Disorders',
    'Emotional Abuse',
    'Couples Counseling',
    'Addiction',
  ]

  const approaches = [
    'Behavioral Therapy',
    'Cognitive Behavioral Therapy (CBT)',
    'Family/Marital Therapy',
    'Acceptance and Commitment (ACT)',
    'Attachment-Based',
    'Breathwork',
    'Christian Counseling',
    'Clinical Supervision and Licensed Supervisors',
    'Coaching',
    'Cognitive Processing Therapy (CPT)',
    'Compassion Focused',
    'Culturally Sensitive',
    'Dialectical (DBT)',
    'Trauma Focused',
    'Psychotherapy',
  ]

  const insurance = [
    'Aetna',
    'Blue Cross',
    'United Healthcare',
    'Optum',
    'Out of Pocket',
    'Out of Network',
    'Oscar',
    'Optima Health Plan',
    'Oxford',
    'United Healthcare Oxford',
    'Cigna',
    'Highmark',
    'Medicare',
    'Medicaid',
  ]

  const fees = 'Psychotherapy Range: $200 - $250'

  return (
    <div className="min-h-screen bg-background">
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
          <div className="space-y-20 md:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  <div 
                    className={`space-y-8 ${!isEven ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
                        <service.icon className="w-5 h-5 text-primary" />
                        <span className="text-base font-medium text-primary">
                          {service.title}
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance leading-tight">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground text-xl">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80 text-base">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  <div 
                    className={`flex justify-center ${!isEven ? 'md:order-1' : 'md:order-2'}`}
                  >
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full max-w-lg rounded-2xl shadow-xl object-cover border border-border/30"
                      width={600}
                      height={400}
                      loading="lazy"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Issues We Address */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center text-balance">
            Are you ready to start the journey together to Total Dynamic Wellness?
          </h2>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
              Issues We Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {issues.map((issue, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl border border-border p-6 flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approaches */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
              Approaches
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approaches.map((approach, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <Stethoscope className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{approach}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Accepted */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-8 text-center">
              Insurance Accepted
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insurance.map((ins, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl border border-border p-6 flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <CreditCard className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{ins}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-card rounded-xl border border-border p-8 text-center shadow-md">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-4">
              Fees
            </h3>
            <p className="text-xl text-primary font-medium">{fees}</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
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
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif font-bold text-2xl flex items-center justify-center mb-4 mx-auto">
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

    </div>
  )
}