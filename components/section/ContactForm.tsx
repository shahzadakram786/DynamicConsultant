// src/components/section/ContactForm.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Upload, Send, AlertTriangle } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/sendEmail'

export default function ContactForm() {
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

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }))
    }
  }


  // 1. Add this state at the top with your other states
const [isSending, setIsSending] = useState(false)

// 2. Updated handleSubmit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSending(true) // Start loading

  try {
    // We use FormData because it handles File objects automatically
    const data = new FormData()
    
    // Append all text fields and the file
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        data.append(key, value)
      } else if (value !== null && value !== undefined) {
        data.append(key, String(value))
      }
    })

    // Call the Server Action
    const result = await sendContactEmail(data)

    if (result.success) {
      setSubmitted(true)
      // Reset form after success
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
      setTimeout(() => setSubmitted(false), 6000)
    } else {
      // Handle error (you can use a toast library here)
      alert("Error: " + result.error)
    }
  } catch (error) {
    alert("An unexpected error occurred.")
  } finally {
    setIsSending(false) // Stop loading
  }
}
  

  // const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault()
    // TODO: Real submission logic (API, EmailJS, etc.)
    // console.log('Form submitted:', formData)
    // setSubmitted(true)
    // setTimeout(() => setSubmitted(false), 6000)
    // Reset form after success
    // setFormData({
    //   recipient: 'me',
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone: '',
    //   nameYouGoBy: '',
    //   dateOfBirth: '',
    //   state: '',
    //   additionalPhone: '',
    //   preferences: '',
    //   file: null,
    // })
  // }

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary/5 p-6 md:p-8 border-b border-border">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center">
              Send Message to Darlene Nicks
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-10">
            {/* Who is receiving care? */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Who would be receiving care?
              </h2>
              <RadioGroup
                value={formData.recipient}
                onValueChange={(value) => setFormData(prev => ({ ...prev, recipient: value }))}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="me" id="me" />
                  <Label htmlFor="me" className="text-base cursor-pointer">Me</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="partner" id="partner" />
                  <Label htmlFor="partner" className="text-base cursor-pointer">My partner and me</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="someone-else" id="someone-else" />
                  <Label htmlFor="someone-else" className="text-base cursor-pointer">Someone else</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Your Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Your Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    * First name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    * Last name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    * Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    * Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nameYouGoBy" className="text-sm font-medium">
                    Name you go by
                  </Label>
                  <Input
                    id="nameYouGoBy"
                    name="nameYouGoBy"
                    value={formData.nameYouGoBy}
                    onChange={handleChange}
                    placeholder="Preferred name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-sm font-medium">
                    * Date of birth
                  </Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    placeholder="mm/dd/yyyy"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="state" className="text-sm font-medium">
                    * State
                  </Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select the state you live in" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="AK">Alaska</SelectItem>
                      {/* ... add all 50 states + territories here ... */}
                      <SelectItem value="WY">Wyoming</SelectItem>
                      <SelectItem value="N/A">N/A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="additionalPhone" className="text-sm font-medium">
                    * What is your phone number
                  </Label>
                  <Input
                    id="additionalPhone"
                    name="additionalPhone"
                    type="tel"
                    value={formData.additionalPhone}
                    onChange={handleChange}
                    required
                    placeholder="Confirm your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Administrative - Driver's License Upload */}
            <div className="space-y-6 border-t border-border pt-8">
              <h2 className="text-2xl font-semibold text-foreground">Administrative</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">
                  Driver's license upload
                </h3>
                <p className="text-sm text-foreground/70 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Do not upload sensitive financial information such as credit card information.
                </p>

                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="license-upload"
                  />
                  <label
                    htmlFor="license-upload"
                    className="cursor-pointer flex flex-col items-center gap-3"
                  >
                    <Upload className="w-10 h-10 text-primary/70" />
                    <div>
                      <p className="text-lg font-medium text-foreground">
                        Front of document
                      </p>
                      <p className="text-sm text-foreground/60 mt-1">
                        Choose file or drag and drop file
                      </p>
                      <p className="text-xs text-foreground/50 mt-1">
                        Only JPG, PNG, & PDF files
                      </p>
                    </div>
                  </label>
                  {formData.file && (
                    <p className="mt-4 text-sm text-primary font-medium">
                      Selected: {formData.file.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Client Preferences */}
            <div className="space-y-6 border-t border-border pt-8">
              <h2 className="text-2xl font-semibold text-foreground">Client Preferences</h2>
              <div className="space-y-3">
                <Label htmlFor="preferences" className="text-lg font-medium">
                  Is there anything that the practitioner needs to know?
                </Label>
                <p className="text-sm text-foreground/70">
                  For example: what you'd like to focus on, insurance or payment questions, etc.
                </p>
                <Textarea
                  id="preferences"
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="min-h-[120px]"
                  maxLength={600}
                />
                <p className="text-xs text-foreground/60 text-right">
                  {formData.preferences.length} / 600 characters
                </p>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="space-y-4 text-sm text-foreground/70 bg-muted/50 p-6 rounded-xl">
              <p>
                For medical emergencies, contact your healthcare provider or call 911. For mental health crises, call or text 988.
              </p>
              <p>
                By submitting this form, you agree to the processing of your sensitive personal information, which may include protected health information (PHI). This information may be viewed by team members in this practice. You also agree not to submit any payment information, including credit or debit card details, through this form.
              </p>
            </div>

            {/* reCAPTCHA + Submit */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-border">
              {/* <div className="flex items-center gap-3"> */}
                {/* Placeholder for real reCAPTCHA v3 or checkbox */}
                {/* <div className="w-6 h-6 border-2 border-border rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">reCAPTCHA</span>
                </div>
                <p className="text-sm text-foreground/70">
                  I'm not a robot
                </p>
              </div> */}

              <Button
  type="submit"
  size="lg"
  disabled={isSending} // Disable button while sending
  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10"
>
  {isSending ? "SENDING..." : "SEND MESSAGE"}
  {!isSending && <Send className="ml-2 h-5 w-5" />}
</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}