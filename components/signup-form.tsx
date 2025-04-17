"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { WhatsAppModal } from "./whatsapp-modal"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { TrackingButton } from "./tracking-button"

export function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [emailError, setEmailError] = useState("")
  const { toast } = useToast()

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      setEmailError("Email diperlukan")
      return false
    } else if (!emailRegex.test(email)) {
      setEmailError("Format email tidak valid")
      return false
    }
    setEmailError("")
    return true
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmailInput(value)
    if (value) validateEmail(value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Validate email before showing WhatsApp modal
    if (!validateEmail(emailInput)) {
      return
    }

    // Store email for WhatsApp modal
    setSubmittedEmail(emailInput)

    // Show WhatsApp modal immediately
    setShowWhatsAppModal(true)
  }

  const handleSuccess = () => {
    // Reset form after successful submission
    setEmailInput("")
    setSubmittedEmail("")
  }

  return (
    <section id="daftar" className="py-16 md:py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Gabung Waitlist <span className="text-primary">KuliahDimana</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ikuti tes singkat dan dapatkan rekomendasi jurusan yang sesuai dengan minat dan bakatmu untuk masa depan
            yang cerah.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="w-full">
              <Input
                type="email"
                name="email"
                placeholder="Email kamu"
                value={emailInput}
                onChange={handleEmailChange}
                className="h-12 text-base w-full"
              />
              {emailError && <p className="text-sm text-red-500 text-left mt-1">{emailError}</p>}
            </div>
            <TrackingButton type="submit" disabled={isSubmitting} className="h-12" buttonName="signup_form_submit">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Memproses...
                </>
              ) : (
                "Gabung Waitlist"
              )}
            </TrackingButton>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Kami tidak akan pernah membagikan email atau identitas kamu dengan pihak lain dan hanya akan menghubungi
            kamu saat peluncuran.
          </p>
        </div>
      </div>

      <WhatsAppModal
        open={showWhatsAppModal}
        onOpenChange={setShowWhatsAppModal}
        email={submittedEmail}
        onSuccess={handleSuccess}
      />
    </section>
  )
}
