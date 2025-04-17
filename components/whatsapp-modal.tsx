"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitEmailAndWhatsApp } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"
import { Check, Loader2 } from "lucide-react"
import { Label } from "@/components/ui/label"

interface WhatsAppModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  email: string
  onSuccess?: () => void
}

export function WhatsAppModal({ open, onOpenChange, email, onSuccess }: WhatsAppModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [whatsapp, setWhatsapp] = useState("")
  const [error, setError] = useState("")
  const { toast } = useToast()

  // WhatsApp validation
  const validateWhatsApp = (value: string) => {
    // Basic validation for Indonesian numbers
    const whatsappRegex = /^08[0-9]{8,11}$/
    if (!value) {
      setError("Nomor WhatsApp diperlukan")
      return false
    } else if (!whatsappRegex.test(value)) {
      setError("Format nomor WhatsApp tidak valid (contoh: 081234567890)")
      return false
    }
    setError("")
    return true
  }

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setWhatsapp(value)
    if (value) validateWhatsApp(value)
  }

  // Update the handleSubmit function to make it asynchronous
  async function handleSubmit(formData: FormData) {
    // Validate WhatsApp before submission
    if (!validateWhatsApp(whatsapp)) {
      return
    }

    setIsSubmitting(true)
    formData.append("email", email)

    // Show success immediately without waiting for the database operation
    setSuccess(true)
    if (onSuccess) onSuccess()

    // Process the submission asynchronously
    submitEmailAndWhatsApp(formData)
      .catch((error) => {
        console.error("Error submitting form:", error)
        toast({
          title: "Error",
          description: "Terjadi kesalahan saat menyimpan data. Namun, kamu tetap terdaftar.",
          variant: "destructive",
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  // Update the handleSkip function to make it asynchronous
  const handleSkip = () => {
    setIsSubmitting(true)

    // Close modal immediately without waiting for the database operation
    toast({
      title: "Berhasil",
      description: "Kamu telah berhasil terdaftar di waitlist.",
    })
    onOpenChange(false)
    if (onSuccess) onSuccess()

    // Process the submission asynchronously
    const formData = new FormData()
    formData.append("email", email)

    submitEmailAndWhatsApp(formData)
      .catch((error) => {
        console.error("Error submitting form:", error)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {!success ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Dapatkan Diskon 50%!</DialogTitle>
              <DialogDescription className="text-base pt-2">
                <span className="block mb-2">Email kamu sedang diproses.</span>
                Berikan nomor WhatsApp kamu untuk mendapatkan diskon 50% dari harga normal Rp 38.500 saat peluncuran
                KuliahDimana
              </DialogDescription>
            </DialogHeader>
            <form action={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-sm font-medium">
                  Nomor WhatsApp
                </Label>
                <Input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={whatsapp}
                  onChange={handleWhatsAppChange}
                  placeholder="08xxxxxxxxxx"
                  required
                  className="h-12 text-base"
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <p className="text-xs text-gray-500">Format: 08xxxxxxxxxx (tanpa +62)</p>
              </div>
              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={handleSkip} disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                  Lewati
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                  Dapatkan Diskon
                </Button>
              </div>
              <p className="text-xs text-gray-500 pt-2">
                Kami tidak akan pernah membagikan nomor WhatsApp kamu dengan pihak lain dan hanya akan menghubungi kamu
                saat peluncuran.
              </p>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Terima Kasih!</h3>
            <p className="text-gray-600 mb-6">
              Kamu telah berhasil terdaftar dan akan mendapatkan diskon 50% saat peluncuran KuliahDimana.
            </p>
            <Button onClick={() => onOpenChange(false)}>Tutup</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
