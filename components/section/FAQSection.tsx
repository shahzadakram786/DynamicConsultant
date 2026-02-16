// src/components/section/FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "How much does therapy cost?",
      answer:
        "Our rates vary based on the therapist and service. We offer flexible pricing options and accept most insurance plans. Contact us for specific pricing information.",
    },
    {
      question: "What should I expect in my first session?",
      answer:
        "Your first session is a consultation where we learn about your goals and concerns. We discuss confidentiality, create a treatment plan, and answer any questions you have.",
    },
    {
      question: "Do you offer virtual sessions?",
      answer:
        "Yes, we offer both in-person and secure video therapy sessions for your convenience.",
    },
    {
      question: "How often should I come to therapy?",
      answer:
        "This varies based on your needs and treatment plan. Most clients benefit from weekly sessions, though frequency is personalized to your situation.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center text-balance">
        Frequently Asked Questions
      </h2>

      <Accordion type="multiple" className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border rounded-xl overflow-hidden bg-card shadow-sm"
          >
            <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold text-foreground hover:no-underline hover:bg-secondary/50 transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 pt-2 text-foreground/80 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20 text-center">
        <p className="text-foreground/80">
          Can't find the answer you're looking for?{" "}
          <span className="font-medium text-foreground">Contact us directly</span> and we'll be happy to help.
        </p>
      </div>
    </div>
  )
}