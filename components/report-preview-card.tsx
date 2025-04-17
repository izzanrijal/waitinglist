"use client"

import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { useState } from "react"
import { ReportPreviewModal } from "./report-preview-modal"

export function ReportPreviewCard() {
  const [reportOpen, setReportOpen] = useState(false)

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b">
        <h3 className="font-bold text-lg">Temukan Potensi Tersembunyimu!</h3>
        <p className="text-sm text-gray-600">Lihat hasil analisis yang akan kamu dapatkan</p>
      </div>

      <div className="p-4">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-primary mt-1 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-sm">Analisis Kepribadian Mendalam</h4>
              <p className="text-xs text-gray-600">Pahami kekuatan unikmu yang sering tidak disadari</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-secondary mt-1 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-sm">Peta Kekuatan & Potensi</h4>
              <p className="text-xs text-gray-600">Analisis SWOT personal untuk melejitkan karirmu</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-accent mt-1 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-sm">Rekomendasi Jurusan Terbaik</h4>
              <p className="text-xs text-gray-600">5 jurusan yang paling cocok dengan bakatmu</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-sm">Panduan Universitas Lengkap</h4>
              <p className="text-xs text-gray-600">Daftar kampus terbaik untuk jurusan rekomendasimu</p>
            </div>
          </div>
        </div>

        <Button className="w-full mt-4 flex items-center gap-2" onClick={() => setReportOpen(true)}>
          <FileText className="h-4 w-4" />
          Lihat Contoh Hasil Analisis
        </Button>
      </div>

      <ReportPreviewModal open={reportOpen} onOpenChange={setReportOpen} />
    </div>
  )
}
