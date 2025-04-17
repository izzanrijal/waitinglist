import { Brain, GraduationCap, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ValueCards() {
  return (
    <section id="manfaat" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Mengapa Memilih <span className="text-primary">KuliahDimana</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-[700px] mx-auto">
            Kami membantu kamu menemukan jurusan kuliah yang sesuai dengan minat dan bakat, serta tahan terhadap
            perkembangan AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Penilaian AI Personal</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Dapatkan rekomendasi jurusan yang dipersonalisasi berdasarkan minat dan kekuatanmu.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Rekomendasi dari Universitas Indonesia</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Temukan jurusan yang ditawarkan oleh berbagai universitas di Indonesia.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Siap untuk Masa Depan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Pilih jurusan yang akan membekalimu dengan keterampilan yang relevan di masa depan dan tidak mudah
                tergantikan oleh AI.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
