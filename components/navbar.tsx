import Link from "next/link"
import { TrackingButton } from "./tracking-button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            KuliahDimana
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#tentang" className="text-sm font-medium hover:text-primary transition-colors">
            Tentang Kami
          </Link>
          <Link href="#manfaat" className="text-sm font-medium hover:text-primary transition-colors">
            Manfaat
          </Link>
          <Link href="#daftar" className="text-sm font-medium hover:text-primary transition-colors">
            Daftar
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <TrackingButton asChild buttonName="navbar_cta">
            <a href="#daftar">Gabung Waitlist</a>
          </TrackingButton>
        </div>
      </div>
    </header>
  )
}
