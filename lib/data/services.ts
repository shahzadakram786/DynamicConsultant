import { Brain, Users, Heart, Sparkles, Stethoscope, CreditCard, Shield } from 'lucide-react'

export const services = [
  {
    id: 'anxiety',
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
    imageAlt: 'Therapist taking notes during anxiety therapy session',
  },
  {
    id: 'ptsd',
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
    imageAlt: 'Therapist listening attentively during PTSD recovery session',
  },
  {
    id: 'addiction',
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
    imageAlt: 'Group therapy session for addiction recovery',
  },
  {
    id: 'individual',
    icon: Brain,
    title: 'Individual Therapy',
    shortDesc: 'One-on-one counseling for personal growth',
    fullDesc: 'Individual therapy provides a safe, confidential space to explore your thoughts, feelings, and behaviors. Whether you\'re dealing with anxiety, depression, trauma, or life transitions, our licensed therapists work with you to develop personalized coping strategies.',
    benefits: [
      'Evidence-based therapeutic approaches',
      'Personalized treatment plans',
      'Flexible scheduling options',
      'Progress monitoring and adjustments',
    ],
image: 'https://images.pexels.com/photos/3958461/pexels-photo-3958461.jpeg',  // or whichever you like best
imageAlt: 'Empathetic therapist in a cozy session',
  },
  {
    id: 'couples',
    icon: Users,
    title: 'Couples Counseling',
    shortDesc: 'Strengthen your relationship',
    fullDesc: 'Couples therapy helps partners improve communication, resolve conflicts, and rebuild intimacy. Our therapists use proven techniques to help you understand each other better and create a stronger relationship.',
    benefits: [
      'Improved communication skills',
      'Conflict resolution strategies',
      'Rebuilding trust and connection',
      'Prevention of relationship issues',
    ],
    image: 'https://bayareacbtcenter.com/wp-content/uploads/2025/02/Untitled-design-683-1024x791.png',
    imageAlt: 'Diverse couple connecting during therapy',
  },
  {
    id: 'teen',
    icon: Heart,
    title: 'Teen & Adolescent Support',
    shortDesc: 'Specialized care for young people',
    fullDesc: 'Adolescence brings unique challenges. Our therapists specialize in working with teens on identity development, peer relationships, academic stress, and family dynamics.',
    benefits: [
      'Age-appropriate therapeutic approaches',
      'Support for identity and self-esteem',
      'Peer and family relationship guidance',
      'Stress and academic support',
    ],
    image: 'https://www.sandiegotherapy.com/wp-content/uploads/2026/01/a-young-lady-with-a-female-therapist-in-a-teen-therapy-session.jpg',
    imageAlt: 'Teen girl in supportive conversation with therapist',
  },
  {
    id: 'workshops',
    icon: Sparkles,
    title: 'Workshops & Webinars',
    shortDesc: 'Educational mental wellness sessions',
    fullDesc: 'Interactive workshops and webinars provide evidence-based education on mental health topics. Learn practical skills for stress management and mindfulness in a group setting.',
    benefits: [
      'Practical skill-building',
      'Community support and connection',
      'Accessible learning formats',
      'Affordable group pricing',
    ],
    image: 'https://www.icanotes.com/wp-content/uploads/2022/06/group-therapy-life-skill-activities-for-adults.jpg',
    imageAlt: 'Group participating in wellness workshop',
  },
]

export const issues = [
  'Anxiety', 'Depression', 'Trauma', 'Attachment Issues', 'Binge Eating Disorder', 
  'Body Image Disorders', 'Racial Identity', 'Work Stress', "Women's Issues", 
  'Spirituality and Religion', 'Self Esteem', 'Relationship Issues', 'PTSD', 
  'Perfectionism', 'Marital and Premarital', 'Life Transitions', 'Life Coaching', 
  'Loneliness', 'Mood Disorders', 'Peer Relationships', 'Domestic Violence', 
  'Eating Disorders', 'Emotional Abuse', 'Couples Counseling', 'Addiction'
]

export const approaches = [
  'Behavioral Therapy', 'Cognitive Behavioral Therapy (CBT)', 'Family/Marital Therapy', 
  'Acceptance and Commitment (ACT)', 'Attachment-Based', 'Breathwork', 
  'Christian Counseling', 'Clinical Supervision', 'Coaching', 
  'Cognitive Processing Therapy (CPT)', 'Compassion Focused', 'Culturally Sensitive', 
  'Dialectical (DBT)', 'Trauma Focused', 'Psychotherapy'
]

export const insuranceProviders = [
  'Aetna', 'Blue Cross', 'United Healthcare', 'Optum', 'Out of Pocket', 
  'Out of Network', 'Oscar', 'Optima Health Plan', 'Oxford', 
  'United Healthcare Oxford', 'Cigna', 'Highmark', 'Medicare', 'Medicaid'
]

// Add this to your src/lib/data/services.ts
export const insuranceProvidersImages = [
 { name: 'Aetna', logo: '/insurances/imageye___-_imgi_47_image.webp' },
  { name: 'BlueCross', logo: '/insurances/BlueCross.webp' },
  // { name: 'United', logo: '/insurances/United.webp' },
  // { name: 'Cigna', logo: '/insurances/Cigna.webp' },
  { name: 'Medicare', logo: '/insurances/Medicare.webp' },
  { name: 'Medicaid', logo: '/insurances/MedicAid.webp' },
  { name: 'Oscar', logo: '/insurances/Oscar.webp' },
  { name: 'Optum', logo: '/insurances/Optum.webp' },
  // { name: 'Oxford', logo: '/insurances/Oxford.webp' },
  // { name: 'Highmark', logo: '/insurances/Highmark.webp' },
  // { name: 'Optima', logo: '/insurances/Optima.webp' },
  // { name: 'Out of Pocket', logo: '/insurances/OutOfPocket.webp' },
  // { name: 'Out of Network', logo: '/insurances/OutOfNetwork.webp' },


];

export const feeInfo = {
  label: 'Psychotherapy Range',
  amount: '$200 - $250'
}