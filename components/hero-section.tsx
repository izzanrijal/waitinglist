"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useState } from "react"
import { VideoModal } from "./video-modal"

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container px-4 md:px-6 py-12 md:py-24 relative">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
          <div className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm text-primary mb-4">
            🚀 Persiapkan masa depanmu sekarang
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-float">
            Temukan Jurusan Kuliah Masa Depanmu
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-[700px]">
            Ikuti tes singkat dan dapatkan rekomendasi jurusan yang sesuai dengan minat dan bakatmu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#daftar">Gabung Waitlist</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 flex items-center gap-2"
              onClick={() => setVideoOpen(true)}
            >
              <Play size={18} />
              Tonton Video
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </section>
  )
}
