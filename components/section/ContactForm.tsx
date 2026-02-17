'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Upload, Send, AlertTriangle, 
  CheckCircle2, ArrowRight, ShieldCheck 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from '@/components/ui/select'
import { sendContactEmail } from '@/app/actions/sendEmail'

// Separate Success Component for clean code
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col items-center justify-center text-center p-12 md:p-24 min-h-[600px]"
    >
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
        <motion.div
          initial={{ rotate: -45, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </motion.div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2A22] mb-4">
        Message Received
      </h2>
      
      <p className="text-lg text-[#1A2A22]/60 max-w-md mx-auto mb-10 leading-relaxed">
        Thank you for reaching out to <strong>Dynamics Total Wellness</strong>. 
        Your inquiry has been securely delivered to Darlene Nicks. 
        We typically respond within 24–48 business hours.
      </p>

      <div className="flex flex-col items-center gap-6">
        <Button 
          onClick={onReset}
          variant="outline"
          className="rounded-full px-10 h-14 border-primary/20 text-primary hover:bg-primary/5"
        >
          Send Another Message
        </Button>
        
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/40">
          <ShieldCheck className="w-4 h-4" />
          HIPAA Compliant & Secure
        </div>
      </div>
    </motion.div>
  )
}

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    recipient: 'me',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nameYouGoBy: '',
    dateOfBirth: '',
    state: '',
    additionalPhone: '',
    preferences: '',
    file: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    try {
      const data = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          data.append(key, value)
        } else if (value !== null && value !== undefined) {
          data.append(key, String(value))
        }
      })

      const result = await sendContactEmail(data)
      
      if (result.success) {
        setSubmitted(true)
        setFormData({
          recipient: 'me',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          nameYouGoBy: '',
          dateOfBirth: '',
          state: '',
          additionalPhone: '',
          preferences: '',
          file: null,
        })
      } else {
        alert("Error: " + result.error)
      }
    } catch (error) {
      alert("An unexpected error occurred.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="py-16 md:py-0 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-[2.5rem] border border-border shadow-2xl shadow-primary/5 overflow-hidden transition-all duration-500">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form-layout"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="bg-primary/5 p-8 md:p-12 border-b border-border text-center">
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">
                    Confidential Inquiry
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                    Send Message to <span className="italic font-normal text-primary">Darlene Nicks</span>
                  </h1>
                </div>

                <form onSubmit={handleSubmit} className="p-6 md:p-12 space-y-12">
                  {/* Who is receiving care? */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-serif font-bold text-foreground">
                      Who would be receiving care?
                    </h2>
                    <RadioGroup
                      value={formData.recipient}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, recipient: value }))}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                      {['me', 'partner', 'someone-else'].map((val) => (
                        <div key={val} className={`flex items-center space-x-3 p-4 rounded-xl border transition-all ${formData.recipient === val ? 'border-primary bg-primary/5' : 'border-border'}`}>
                          <RadioGroupItem value={val} id={val} />
                          <Label htmlFor={val} className="text-sm font-bold capitalize cursor-pointer">
                            {val.replace('-', ' ')}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Your Info */}
                  <div className="space-y-8">
                    <h2 className="text-2xl font-serif font-bold text-foreground">Your Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">First name *</Label>
                        <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Last name *</Label>
                        <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Date of Birth *</Label>
                        <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} required className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">State of Residence *</Label>
                        <Select value={formData.state} onValueChange={(v) => setFormData(p => ({ ...p, state: v }))}>
                          <SelectTrigger className="h-12 rounded-xl">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AL">Alabama</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            {/* ... more states */}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Administrative Section */}
                  <div className="space-y-6 border-t border-border pt-10">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-serif font-bold text-foreground">Administrative</h2>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-sm text-foreground/70 flex items-center gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                        Please upload your Driver's License. Avoid sensitive financial documents.
                      </p>
                      
                      <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center hover:border-primary/50 transition-all bg-muted/30">
                        <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} className="hidden" id="license-upload" />
                        <label htmlFor="license-upload" className="cursor-pointer flex flex-col items-center gap-4">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <Upload className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <p className="text-lg font-bold text-foreground">Upload Driver's License</p>
                            <p className="text-sm text-muted-foreground">Drag and drop or click to browse (JPG, PNG, PDF)</p>
                          </div>
                        </label>
                        {formData.file && (
                          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-bold text-primary">
                            <CheckCircle2 className="w-4 h-4" /> {formData.file.name}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Client Preferences */}
                  <div className="space-y-4 border-t border-border pt-10">
                    <Label htmlFor="preferences" className="text-xl font-serif font-bold text-foreground">
                      Practitioner Notes & Preferences
                    </Label>
                    <Textarea
                      id="preferences"
                      name="preferences"
                      value={formData.preferences}
                      onChange={handleChange}
                      placeholder="Focus areas, insurance questions, or specific needs..."
                      className="min-h-[150px] rounded-2xl p-4"
                      maxLength={600}
                    />
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                      <span>Confidential Message</span>
                      <span>{formData.preferences.length} / 600</span>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-muted/50 p-6 rounded-2xl text-xs text-muted-foreground leading-relaxed space-y-3">
                    <p className="font-bold text-foreground/70 underline uppercase">Medical Disclaimer</p>
                    <p>For medical emergencies, call 911. For mental health crises, call or text 988.</p>
                    <p>By submitting, you agree to the processing of PHI (Protected Health Information) by members of this practice.</p>
                  </div>

                  {/* Submit Area */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-border">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSending}
                      className="w-full md:w-auto min-w-[240px] h-14 rounded-full bg-[#062c1f] hover:bg-[#0a4d3c] text-white shadow-xl shadow-primary/20 group"
                    >
                      {isSending ? (
                        <span className="flex items-center gap-2">
                          <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="border-2 border-white/30 border-t-white rounded-full w-4 h-4" />
                          SENDING...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          SEND SECURE MESSAGE <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <SuccessState onReset={() => setSubmitted(false)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}