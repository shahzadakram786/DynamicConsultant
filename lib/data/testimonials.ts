export type Testimonial = {
  id: number
  quote: string
  author: string
  role?: string | null
  date?: string | null
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "She holds space well with listening, and is clearly experienced, authentic, direct, open-minded, skilled & intelligent. As a therapist myself, I am very intentional about where I get mental health. I appreciate every session & look forward to future sessions.",
    author: "DC",
    role: "Therapist",
  },
  {
    id: 2,
    quote: "I gained confidence & conquered my eating addiction!",
    author: "AW",
  },
  {
    id: 3,
    quote: "She has been wonderful to work with, and has helped me and my husband work through problems in our marriage.",
    author: "M.H",
    date: "May 19, 2023",
  },
  {
    id: 4,
    quote: "Darlene listens well and asks questions that keep the conversation going. I feel very comfortable talking to her.",
    author: "Verified client",
    role: "age 35-44",
    date: "April 24, 2025",
  },
  {
    id: 5,
    quote: "I am a clinician who sees so much value in how Darlene interacts with her clients. I feel like God sent me to her.",
    author: "AR",
    role: "Clinician",
  },
  {
    id: 6,
    quote: "I really enjoy her and her clinical expertise.",
    author: "AP",
  },
]