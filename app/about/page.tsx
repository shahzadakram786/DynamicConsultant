// src/app/about/page.js
import { aboutContent } from '@/lib/data/about-content'
import Image from 'next/image'
import { Leaf, Flower2, Sparkles, Heart } from 'lucide-react'
import FAQSection from '@/components/section/FAQSection'

export default function AboutPage() {
  // Extract key principles from the paragraphs
  const principles = [
    {
      icon: Leaf,
      title: 'Dynamic Wellness',
      desc: 'A continuous, active process of pursuing optimal health—mental, physical, and social.',
    },
    {
      icon: Flower2,
      title: 'Holistic Approach',
      desc: 'Adapting theories to each individual’s unique personality and needs.',
    },
    {
      icon: Heart,
      title: 'Healing Trauma',
      desc: 'Recognizing and restructuring distorted perceptions shaped by life experiences.',
    },
    {
      icon: Sparkles,
      title: 'Total Integration',
      desc: 'Blending psychological, social, and spiritual dimensions for authentic growth.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-[#f8f5f0]">
      {/* Hero Section with Soft Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pt-20 pb-16 md:pt-28 md:pb-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
              About <span className="text-primary">Serene Path</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-2xl mx-auto italic">
              "{aboutContent.subtitle}"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Image and Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Changed to flex-col on mobile → image first, then paragraphs */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Image + Signature FIRST in DOM → shows first on mobile */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8 lg:sticky lg:top-24">
                <div className="group relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src={aboutContent.portalUrl}
                      alt="Darlene Nicks"
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Signature Card */}
                <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-primary/10">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                    {aboutContent.signature.name}
                  </h2>
                  <p className="text-lg text-primary/70 mt-2 flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    {aboutContent.signature.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Paragraphs come AFTER image on mobile */}
            <div className="lg:col-span-2 space-y-8">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">
              Our Core Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary/10"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Floral Footer */}
      <div className="py-16 text-center">
        <div className="inline-flex items-center gap-3 text-3xl text-primary/40">
          <span>🪻</span>
          <span>🌿</span>
          <span>🪴</span>
          <span>🌿</span>
          <span>🪻</span>
        </div>
        <p className="text-foreground/40 text-sm mt-4 italic">
          — Nurturing growth, one step at a time —
        </p>
      </div>




           {/* FAQ */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <FAQSection />
        </div>
      </section>
    </div>
  )
}