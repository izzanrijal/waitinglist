import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Harga <span className="text-primary">Terjangkau</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-[700px] mx-auto">
            Investasi kecil untuk masa depan yang cerah dengan rekomendasi jurusan yang tepat dan tahan terhadap
            perkembangan AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Harga Normal</CardTitle>
              <CardDescription className="text-base">Tanpa diskon</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Rp 38.500</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Tes psikometrik berbasis AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Laporan minat dan bakat lengkap</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Rekomendasi jurusan kuliah</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Prospek karir masa depan</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="#daftar">Gabung Waitlist</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">Hemat 50%</div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Harga Spesial</CardTitle>
              <CardDescription className="text-base">Dengan diskon WhatsApp</CardDescription>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">Rp 19.250</span>
                <span className="text-gray-500 line-through">Rp 38.500</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Tes psikometrik berbasis AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Laporan minat dan bakat lengkap</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Rekomendasi jurusan kuliah</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Prospek karir masa depan yang tahan terhadap AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">Prioritas akses saat peluncuran</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href="#daftar">Gabung & Dapatkan Diskon</a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p>* Diskon 50% hanya tersedia untuk pengguna yang bergabung dengan waitlist dan memberikan nomor WhatsApp</p>
        </div>
      </div>
    </section>
  )
}
