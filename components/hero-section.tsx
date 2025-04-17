"use client"
import { ReportPreviewCard } from "./report-preview-card"
import { TrackingButton } from "./tracking-button"

export function HeroSection() {
  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container px-4 md:px-6 py-12 md:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-8">
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
              <TrackingButton size="lg" className="text-lg px-8" buttonName="hero_cta" href="#daftar">
                Gabung Waitlist
              </TrackingButton>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ReportPreviewCard />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>
  )
}
