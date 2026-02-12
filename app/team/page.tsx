'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Users } from 'lucide-react'

export default function TeamPage() {
  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Clinical Director & Psychologist',
      credential: 'Ph.D. Clinical Psychology',
      expertise: ['Individual Therapy', 'Trauma-Informed Care', 'Anxiety & Depression'],
      bio: 'Dr. Mitchell brings over 15 years of clinical experience to Dynamics Total Wellness. She specializes in trauma recovery and evidence-based cognitive behavioral therapy.',
    },
    {
      name: 'James Chen',
      role: 'Licensed Marriage & Family Therapist',
      credential: 'LMFT, Masters in Counseling',
      expertise: ['Couples Counseling', 'Family Therapy', 'Communication Skills'],
      bio: 'James is dedicated to helping couples and families navigate relationship challenges. His approach integrates systemic theory with practical communication strategies.',
    },
    {
      name: 'Maya Patel',
      role: 'Licensed Clinical Counselor',
      credential: 'LCC, Adolescent Specialization',
      expertise: ['Teen & Adolescent Support', 'Identity Development', 'School Counseling'],
      bio: 'Maya specializes in working with teens during critical developmental years. She creates a safe, non-judgmental space for young people to explore their identities and concerns.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Licensed Professional Counselor',
      credential: 'LPC, Addiction Counseling Certification',
      expertise: ['Substance Use Disorders', 'Dual Diagnosis', 'Recovery Support'],
      bio: 'Marcus brings personal recovery experience and professional training to help clients overcome addiction. He uses a holistic, compassionate approach to wellness.',
    },
    {
      name: 'Dr. Lisa Anderson',
      role: 'Clinical Psychologist',
      credential: 'Ph.D. Behavioral Psychology',
      expertise: ['Cognitive Behavioral Therapy', 'Anxiety Disorders', 'Performance Anxiety'],
      bio: 'Dr. Anderson specializes in evidence-based CBT for anxiety and performance-related concerns. She has worked with athletes, professionals, and students.',
    },
    {
      name: 'David Williams',
      role: 'Licensed Clinical Counselor',
      credential: 'LCC, Mindfulness Certification',
      expertise: ['Mindfulness-Based Therapy', 'Stress Management', 'Life Transitions'],
      bio: 'David integrates mindfulness and acceptance-based approaches into counseling. He helps clients build resilience and find meaning through life changes.',
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
              Our Expert Team
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Meet the dedicated professionals committed to supporting your mental health and wellness journey with compassion, expertise, and evidence-based care.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Avatar Area */}
                <div className="h-48 bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Users className="w-20 h-20 text-primary/30 group-hover:text-primary/40 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {member.role}
                    </p>
                    <p className="text-foreground/60 text-xs">
                      {member.credential}
                    </p>
                  </div>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold text-foreground text-sm">Areas of Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-xs bg-secondary text-foreground rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors text-sm">
                    Request This Therapist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              Our Commitment
            </h2>
            <p className="text-lg text-foreground/70">
              What our team brings to every session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expertise',
                description: 'Licensed professionals with advanced degrees and ongoing training',
              },
              {
                title: 'Compassion',
                description: 'Client-centered care that honors your unique experiences and perspectives',
              },
              {
                title: 'Confidentiality',
                description: 'Strict adherence to ethical standards and privacy regulations',
              },
              {
                title: 'Collaboration',
                description: 'Personalized care plans tailored to your specific goals and needs',
              },
            ].map((value, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center text-balance">
              Professional Standards
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: 'Licensing & Credentials',
                  description: 'All our therapists hold current licenses in their respective fields and maintain continuing education to stay current with best practices.',
                },
                {
                  title: 'Evidence-Based Practice',
                  description: 'We utilize scientifically-proven therapeutic approaches including CBT, DBT, EMDR, and mindfulness-based interventions.',
                },
                {
                  title: 'Ethical Standards',
                  description: 'We adhere to strict ethical guidelines and maintain confidentiality in accordance with HIPAA and professional licensing boards.',
                },
                {
                  title: 'Cultural Competence',
                  description: 'Our team is trained in culturally sensitive therapy and works to understand and respect diverse backgrounds and perspectives.',
                },
              ].map((standard, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {standard.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Connect With Your Therapist
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Ready to start working with one of our experienced therapists? Schedule your first consultation today.
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
