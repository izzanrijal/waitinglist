"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { useState } from "react"

interface ReportPreviewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ReportPreviewModal({ open, onOpenChange }: ReportPreviewModalProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 bg-white max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <DialogTitle className="text-xl">Laporan Potensi Karir & Jurusan</DialogTitle>
        </div>

        <div className="overflow-y-auto flex-grow p-6">
          {currentPage === 1 && (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Nama: Jonas Doe</h3>
                <p className="text-gray-600">Usia Saat Ini: 18 tahun</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">Kenali Dirimu Lebih Dalam</h3>

                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-primary">📍</span> Analisis Pribadi Berdasarkan Profil Psikometrik
                </h4>
                <p className="text-gray-700 mb-4">
                  Kamu adalah tipe pribadi yang menyukai eksplorasi gagasan dan pencarian makna di balik segala sesuatu.
                  Kamu cenderung merasa hidup ketika berada dalam ruang yang memberimu kebebasan untuk berpikir,
                  menganalisis, dan menciptakan. Tantangan yang bersifat konseptual atau strategis akan jauh lebih
                  menggugah daripada tugas-tugas praktis yang hanya mengandalkan ketelitian atau urutan kerja yang
                  tetap.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-primary">🌱</span> Jenis Pekerjaan dan Lingkungan Kerja yang Kamu Nikmati (atau
                  Hindari)
                </h4>
                <p className="text-gray-700 mb-3">
                  Kamu akan paling nyaman bekerja di lingkungan yang tenang, lebih banyak di dalam ruangan, dan
                  memberimu ruang untuk fokus serta berpikir mendalam. Kantor, perpustakaan, studio, atau bahkan home
                  office akan terasa ideal. Kamu menikmati pekerjaan mental yang menantang secara intelektual, daripada
                  pekerjaan fisik yang mengharuskan banyak gerak atau berada di lapangan.
                </p>
                <p className="text-gray-700">
                  Lingkungan yang terlalu terstruktur dan penuh prosedur ketat mungkin terasa membatasi. Kamu lebih
                  menyukai kebebasan untuk menjelajahi kemungkinan dan beradaptasi secara fleksibel dibandingkan
                  mengikuti rutinitas yang sudah ditentukan. Interaksi sosial dalam kerja tim bisa kamu nikmati dalam
                  dosis yang pas, tetapi terlalu banyak komunikasi intensif atau dinamika kelompok yang tidak terfokus
                  justru bisa melelahkan.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-primary">🧠</span> Gaya Berpikir dan Cara Kamu Memproses Informasi
                </h4>
                <p className="text-gray-700 mb-3">
                  Kamu memproses dunia dengan cara yang intuitif dan konseptual. Sering kali kamu menangkap pola besar,
                  potensi masa depan, atau kemungkinan-kemungkinan yang tidak langsung terlihat oleh orang lain.
                  Imajinasi dan intuisi adalah kekuatanmu — kamu bukan hanya ingin tahu apa yang terjadi, tetapi mengapa
                  dan bagaimana hal itu bisa berkembang.
                </p>
                <p className="text-gray-700">
                  Alih-alih tenggelam dalam detail teknis atau angka-angka kecil, kamu lebih tertarik pada pola besar
                  dan integrasi ide. Itu sebabnya kamu menikmati aktivitas seperti merancang strategi, mencipta solusi
                  baru, atau membuat hubungan antar konsep yang sebelumnya tidak terlihat.
                </p>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-primary">🧩</span> Cara Mengambil Keputusan & Berinteraksi dengan Orang Lain
                </h4>
                <p className="text-gray-700 mb-3">
                  Dalam membuat keputusan, kamu lebih mengandalkan prinsip, logika, dan kejelasan pikiran daripada
                  mempertimbangkan perasaan orang lain. Kamu sangat menjunjung objektivitas dan transparansi. Bagi kamu,
                  kebenaran yang jujur lebih penting daripada menyenangkan semua pihak.
                </p>
                <p className="text-gray-700">
                  Kamu tidak antisosial, tetapi energi sosialmu cepat habis jika harus terlalu sering berinteraksi
                  dengan banyak orang. Kamu lebih suka berdialog dalam kelompok kecil atau satu lawan satu. Dalam
                  situasi sosial, kamu cenderung jadi pengamat dan pendengar yang cermat dibandingkan jadi pusat
                  perhatian.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-primary">🔥</span> Pola Motivasi: Apa yang Menggugah dan Apa yang Melelahkan
                </h4>
                <p className="text-gray-700 mb-3">
                  Kamu akan merasa sangat hidup saat terlibat dalam proyek yang memberimu kebebasan berpikir, ruang
                  eksplorasi ide, dan tantangan intelektual. Hal-hal yang bersifat inovatif, strategis, atau menciptakan
                  sesuatu dari nol adalah bahan bakar utama semangatmu. Kamu sangat termotivasi ketika diberi
                  kepercayaan penuh untuk memimpin arah, memulai sesuatu, atau membangun dari ide menjadi kenyataan.
                </p>
                <p className="text-gray-700">
                  Sebaliknya, pekerjaan yang berulang, penuh aturan, mengutamakan ketelitian teknis, atau terlalu
                  praktikal bisa menguras energi. Jika tidak ada makna atau ruang untuk kreativitas dalam tugas
                  tersebut, kamu akan cepat merasa kehilangan motivasi.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-primary">💎</span> Kekuatan Utama dan Tantangan dalam Proses Belajar
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Kekuatan utama kamu</strong> adalah kemauan untuk berpikir dalam, melihat gambaran besar, dan
                  menggabungkan berbagai informasi jadi satu kesatuan utuh. Kamu bisa melihat hubungan antara hal-hal
                  yang tampaknya terpisah dan menjadikannya dasar untuk membuat inovasi atau solusi.
                </p>
                <p className="text-gray-700 mb-3">
                  Kamu juga cepat belajar dari pengalaman konseptual — misalnya, lewat refleksi, membaca, atau diskusi
                  yang memancing pikiran. Proses belajar yang memberimu ruang untuk menggali ide dan menyusun strategi
                  akan jauh lebih efektif dibanding pembelajaran teknis satu arah.
                </p>
                <p className="text-gray-700">
                  <strong>Tantangan utamamu</strong> mungkin muncul saat berhadapan dengan detail administratif, kerja
                  presisi, atau tugas-tugas dengan prosedur ketat yang tidak memberi ruang untuk improvisasi. Kamu
                  mungkin juga perlu melatih kesabaran untuk menyelesaikan bagian teknis dari proyek yang lebih besar —
                  bagian yang tidak selalu menarik, tapi tetap penting.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-primary">🧭</span> SWOT Pribadi
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-md">
                    <h5 className="font-medium text-green-800 mb-2">Strengths (Kekuatan)</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Pemikir strategis dengan intuisi kuat</li>
                      <li>Mandiri, reflektif, dan penuh inisiatif</li>
                      <li>Kreatif dalam menciptakan ide-ide baru</li>
                      <li>Nyaman dengan ketidakpastian dan kompleksitas</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-md">
                    <h5 className="font-medium text-red-800 mb-2">Weaknesses (Kelemahan)</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Cepat kehilangan minat pada detail teknis dan tugas rutin</li>
                      <li>Cenderung overthinking atau perfeksionis dalam pengambilan keputusan</li>
                      <li>Kurang cocok dalam lingkungan kerja yang penuh struktur ketat</li>
                      <li>Tidak terlalu nyaman dengan dinamika sosial intens</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md">
                    <h5 className="font-medium text-blue-800 mb-2">Opportunities (Peluang)</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Bisa unggul di bidang inovasi, strategi, atau kewirausahaan</li>
                      <li>Potensi besar untuk menciptakan dampak lewat pemikiran jangka panjang</li>
                      <li>
                        Cocok untuk profesi masa depan yang membutuhkan pemecahan masalah kompleks dan adaptasi cepat
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-md">
                    <h5 className="font-medium text-yellow-800 mb-2">Threats (Ancaman)</h5>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Risiko frustrasi jika terjebak dalam peran kerja yang terlalu operasional atau birokratis</li>
                      <li>Tantangan jika harus bekerja di tim besar dengan banyak komunikasi interpersonal</li>
                      <li>Terlalu banyak ide tanpa eksekusi bisa menimbulkan stagnasi atau overload</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <span className="text-primary">🎯</span> Kesimpulan
                </h4>
                <p className="text-gray-700 mb-4">
                  Kamu adalah sosok yang intuitif, mandiri, dan penuh visi. Kamu akan berkembang pesat di lingkungan
                  yang menghargai kreativitas, pemikiran strategis, dan fleksibilitas cara kerja. Dengan kombinasi
                  pemikiran konseptual yang kuat dan dorongan untuk memulai sesuatu dari nol, kamu sangat cocok menjadi
                  penggagas, pemikir, atau arsitek ide yang membawa perubahan.
                </p>
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Rekomendasi Jurusan Kuliah (S1) Berdasarkan Profilmu</h3>
                <p className="text-gray-700 mb-4">
                  Berikut adalah 5 rekomendasi jurusan yang selaras dengan profil kamu, memiliki potensi pengembangan
                  diri yang baik, dan relevan di masa depan:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-bold text-primary flex items-center gap-2">
                      <span>🎓</span> Informatika / Ilmu Komputer (Computer Science / Informatics)
                    </h4>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Why it fits:</span> Jurusan ini sangat cocok dengan minat tinggi
                      kamu pada analisis logis, penyelidikan mendalam terhadap cara kerja sistem, serta ketertarikan
                      pada teknologi dan pengembangan software/data. Gaya berpikir kamu yang konseptual, intuitif, dan
                      fokus pada pemecahan masalah kompleks akan sangat terpakai. Preferensi untuk bekerja mandiri atau
                      dalam kelompok kecil yang otonom di lingkungan indoor yang dominan mental juga sangat mendukung.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Future resilience:</span> Kemampuan merancang sistem kompleks,
                      memecahkan masalah non-standar, mengembangkan kecerdasan buatan, dan menjaga keamanan siber adalah
                      inti dari bidang ini. Meskipun AI dapat membantu dalam coding atau analisis data rutin, pemikiran
                      strategis, kreativitas dalam solusi teknologi, dan adaptasi terhadap perkembangan baru akan tetap
                      membutuhkan keahlian manusia tingkat tinggi.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Example career paths:</span> Software Architect, Data
                      Scientist/Analyst, AI/Machine Learning Engineer, Cybersecurity Specialist.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Risks or considerations:</span> Bidang ini berubah sangat cepat,
                      menuntut pembelajaran berkelanjutan seumur hidup. Tingkat persaingan bisa tinggi, terutama untuk
                      peran-peran bergengsi. Ada risiko terjebak dalam tugas coding yang lebih rutin jika tidak proaktif
                      mengembangkan keahlian strategis dan pemecahan masalah tingkat lanjut.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-bold text-accent flex items-center gap-2">
                      <span>🎓</span> Bisnis Digital (Digital Business)
                    </h4>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Why it fits:</span> Jurusan ini menggabungkan minat kuat kamu pada
                      strategi bisnis, analisis, dan teknologi. Sangat sesuai dengan ketertarikan kamu untuk memulai
                      atau mengembangkan inisiatif baru serta menganalisis informasi untuk menemukan pola atau solusi.
                      Fokus pada inovasi, pemanfaatan teknologi untuk keunggulan kompetitif, dan pemikiran strategis
                      cocok dengan preferensi kamu untuk tugas konseptual dan melihat kemungkinan di masa depan.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Future resilience:</span> Lanskap bisnis digital terus berkembang
                      pesat. Kemampuan untuk memahami interaksi kompleks antara teknologi, pasar, dan perilaku konsumen,
                      serta merumuskan strategi adaptif yang inovatif, sulit digantikan oleh AI. Fokusnya adalah pada
                      pengambilan keputusan strategis dalam lingkungan yang dinamis.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Example career paths:</span> Digital Marketing Strategist,
                      E-commerce Manager, Product Manager (Digital Products), Business Intelligence Analyst, Technology
                      Consultant.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Risks or considerations:</span> Membutuhkan pemahaman yang kuat baik
                      di sisi bisnis maupun teknologi. Industri ini sangat dinamis, membutuhkan adaptasi cepat terhadap
                      tren baru. Persaingan bisa ketat seiring dengan popularitas bidang ini.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-4 py-2">
                <h4 className="font-bold text-secondary-foreground flex items-center gap-2">
                  <span>🎓</span> Desain Komunikasi Visual (DKV) / Desain Produk
                </h4>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Why it fits:</span> Minat kamu pada desain estetika, penggunaan
                  imajinasi untuk ide inovatif, dan pemikiran konseptual sangat relevan di sini. Bidang ini memungkinkan
                  kamu menggabungkan kreativitas dengan pemecahan masalah (misalnya, bagaimana mengkomunikasikan pesan
                  secara efektif atau merancang produk yang fungsional dan menarik). Sifat pekerjaan seringkali berbasis
                  proyek, memungkinkan fleksibilitas dan eksplorasi ide baru yang sesuai dengan preferensi kamu.
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Future resilience:</span> Meskipun AI dapat menghasilkan aset visual
                  atau draf desain, kemampuan inti dalam DKV/Desain Produk—seperti empati terhadap pengguna (UX),
                  pemahaman konteks budaya, originalitas konseptual, dan storytelling visual yang strategis—tetap
                  merupakan keunggulan manusia. Fokus pada pengalaman pengguna (UX) dan desain strategis meningkatkan
                  relevansi jangka panjang.
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Example career paths:</span> UI/UX Designer, Brand Identity Designer,
                  Creative Director, Product Designer, Motion Graphics Artist.
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Risks or considerations:</span> Industri kreatif sangat kompetitif dan
                  seringkali membutuhkan portofolio yang kuat untuk menonjol. Penilaian karya bisa subjektif. Perlu
                  terus belajar tools dan teknologi desain baru, termasuk bagaimana memanfaatkan AI sebagai alat bantu.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-green-700 flex items-center gap-2">
                  <span>🎓</span> Kewirausahaan (Entrepreneurship)
                </h4>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Why it fits:</span> Ini adalah jalur langsung untuk minat tinggi kamu
                  dalam memulai, mengelola, dan mengembangkan usaha atau inisiatif baru. Sangat cocok untuk gaya
                  berpikir intuitif (melihat peluang), analitis (riset pasar, strategi), dan preferensi untuk
                  fleksibilitas serta otonomi. Keinginan untuk memimpin proyek atau tim bisa tersalurkan dalam membangun
                  bisnis sendiri.
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Future resilience:</span> Kewirausahaan pada intinya adalah tentang
                  identifikasi masalah, inovasi solusi, pengambilan risiko yang diperhitungkan, dan adaptasi terhadap
                  ketidakpastian – semuanya adalah keterampilan manusia yang kompleks dan sulit diotomatisasi. AI akan
                  menjadi alat yang kuat bagi wirausahawan, bukan pengganti mereka.
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Example career paths:</span> Startup Founder, Business Developer,
                  Venture Capital Analyst, Social Entrepreneur.
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Risks or considerations:</span> Tingkat risiko dan ketidakpastian yang
                  sangat tinggi. Membutuhkan ketahanan mental, kemampuan belajar cepat di berbagai area (pemasaran,
                  keuangan, operasi), dan seringkali jam kerja yang panjang. Tidak ada jaminan kesuksesan finansial.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-bold text-purple-700 flex items-center gap-2">
                  <span>🎓</span> Rekayasa Industri / Manajemen Rekayasa (Industrial Engineering)
                </h4>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Why it fits:</span> Bidang ini memadukan pemikiran analitis dan sistemik
                  (seperti teknik) dengan fokus pada efisiensi, strategi, dan optimalisasi proses bisnis atau
                  operasional. Ini selaras dengan minat kamu pada analisis logis, pemecahan masalah kompleks, dan
                  potensi memimpin proyek dari perspektif strategis. Gabungan antara tugas konseptual (merancang sistem)
                  dan hasil praktis (peningkatan efisiensi) juga cocok dengan preferensi kamu.
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Future resilience:</span> Fokus pada perbaikan sistem yang kompleks,
                  integrasi teknologi dan manusia dalam proses kerja, serta pengambilan keputusan strategis berbasis
                  data sulit diotomatisasi sepenuhnya. Kemampuan melihat gambaran besar dan merancang solusi optimal
                  untuk konteks spesifik menjadi nilai tambah utama.
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Example career paths:</span> Management Consultant, Operations
                  Analyst/Manager, Supply Chain Strategist, Process Improvement Specialist, Project Manager
                  (Teknis/Strategis).
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Risks or considerations:</span> Membutuhkan kemampuan kuantitatif yang
                  kuat serta keterampilan komunikasi untuk menjelaskan ide kompleks atau meyakinkan pemangku
                  kepentingan. Ada risiko terjebak dalam analisis data rutin jika tidak fokus pada aspek strategis dan
                  pemecahan masalah tingkat tinggi. Persaingan untuk peran konsultasi bisa sangat ketat.
                </p>
              </div>
            </div>
          )}

          {currentPage === 5 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Daftar Universitas Rekomendasi</h3>

              <div className="mb-6">
                <h4 className="font-medium mb-2 text-primary">Informatika / Ilmu Komputer (Computer Science)</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Program Studi Spesifik</th>
                        <th className="border px-4 py-2 text-left">Perguruan Tinggi</th>
                        <th className="border px-4 py-2 text-left">Akreditasi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Teknik Informatika</td>
                        <td className="border px-4 py-2">Institut Teknologi Bandung</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Sistem Dan Teknologi Informasi</td>
                        <td className="border px-4 py-2">Institut Teknologi Bandung</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Informatika</td>
                        <td className="border px-4 py-2">Institut Teknologi Sepuluh Nopember</td>
                        <td className="border px-4 py-2">A</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Informatika</td>
                        <td className="border px-4 py-2">Universitas Telkom</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Sistem Informasi</td>
                        <td className="border px-4 py-2">Universitas Indonesia</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Ilmu Komputer</td>
                        <td className="border px-4 py-2">Universitas Indonesia</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Ilmu Komputer</td>
                        <td className="border px-4 py-2">Universitas Gadjah Mada</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Teknik Informatika</td>
                        <td className="border px-4 py-2">Universitas Brawijaya</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Teknik Informatika</td>
                        <td className="border px-4 py-2">Universitas Ciputra Surabaya</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Informatika</td>
                        <td className="border px-4 py-2">Universitas Islam Indonesia</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-2 text-accent">Bisnis Digital (Digital Business)</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Program Studi Spesifik</th>
                        <th className="border px-4 py-2 text-left">Perguruan Tinggi</th>
                        <th className="border px-4 py-2 text-left">Akreditasi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Bisnis Digital</td>
                        <td className="border px-4 py-2">Universitas Padjadjaran</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">PJJ Bisnis Digital</td>
                        <td className="border px-4 py-2">Universitas Siber Asia</td>
                        <td className="border px-4 py-2">A</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Teknologi Bisnis Digital</td>
                        <td className="border px-4 py-2">Universitas Negeri Surabaya</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Manajemen Bisnis</td>
                        <td className="border px-4 py-2">Institut Teknologi Sepuluh Nopember</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Administrasi Bisnis</td>
                        <td className="border px-4 py-2">Universitas Telkom</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Administrasi Bisnis</td>
                        <td className="border px-4 py-2">Universitas Diponegoro</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Administrasi Bisnis</td>
                        <td className="border px-4 py-2">Universitas Katolik Indonesia Atma Jaya</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Ilmu Administrasi Bisnis</td>
                        <td className="border px-4 py-2">Universitas Padjadjaran</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Ilmu Administrasi Niaga</td>
                        <td className="border px-4 py-2">Universitas Indonesia</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Administrasi Bisnis</td>
                        <td className="border px-4 py-2">Institut IPMI</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-2 text-secondary-foreground">
                  Desain Komunikasi Visual (DKV) / Desain Produk
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Program Studi Spesifik</th>
                        <th className="border px-4 py-2 text-left">Perguruan Tinggi</th>
                        <th className="border px-4 py-2 text-left">Akreditasi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Desain Komunikasi Visual</td>
                        <td className="border px-4 py-2">Institut Teknologi Bandung</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Desain Produk</td>
                        <td className="border px-4 py-2">Institut Teknologi Bandung</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Desain Komunikasi Visual</td>
                        <td className="border px-4 py-2">Universitas Bina Nusantara</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Desain Komunikasi Visual</td>
                        <td className="border px-4 py-2">Institut Seni Indonesia Yogyakarta</td>
                        <td className="border px-4 py-2">A</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Desain Komunikasi Visual</td>
                        <td className="border px-4 py-2">Universitas Telkom</td>
                        <td className="border px-4 py-2">A</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Desain Komunikasi Visual</td>
                        <td className="border px-4 py-2">Universitas Sebelas Maret</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Desain Komunikasi Visual</td>
                        <td className="border px-4 py-2">Universitas Pelita Harapan</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Desain Interior</td>
                        <td className="border px-4 py-2">Institut Teknologi Bandung</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Desain Produk</td>
                        <td className="border px-4 py-2">Universitas Telkom</td>
                        <td className="border px-4 py-2">A</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Desain Produk</td>
                        <td className="border px-4 py-2">Universitas Surabaya</td>
                        <td className="border px-4 py-2">A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-2 text-green-700">Kewirausahaan (Entrepreneurship)</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Program Studi Spesifik</th>
                        <th className="border px-4 py-2 text-left">Perguruan Tinggi</th>
                        <th className="border px-4 py-2 text-left">Akreditasi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Kewirausahaan</td>
                        <td className="border px-4 py-2">Institut Teknologi Bandung</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Kewirausahaan</td>
                        <td className="border px-4 py-2">Universitas Brawijaya</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Kewirausahaan (Kampus Kota Malang)</td>
                        <td className="border px-4 py-2">Universitas Bina Nusantara</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Kewirausahaan Kampus Tasikmalaya</td>
                        <td className="border px-4 py-2">Universitas Pendidikan Indonesia</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Bisnis</td>
                        <td className="border px-4 py-2">Institut Pertanian Bogor</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-2 text-purple-700">Rekayasa Industri / Manajemen Rekayasa</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Program Studi Spesifik</th>
                        <th className="border px-4 py-2 text-left">Perguruan Tinggi</th>
                        <th className="border px-4 py-2 text-left">Akreditasi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Teknik Industri</td>
                        <td className="border px-4 py-2">Institut Teknologi Bandung</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Manajemen Rekayasa</td>
                        <td className="border px-4 py-2">Institut Teknologi Bandung</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Teknik Industri</td>
                        <td className="border px-4 py-2">Universitas Indonesia</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Teknik Industri</td>
                        <td className="border px-4 py-2">Institut Teknologi Sepuluh Nopember</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Teknik Industri</td>
                        <td className="border px-4 py-2">Universitas Gadjah Mada</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Teknik Industri</td>
                        <td className="border px-4 py-2">Universitas Brawijaya</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Teknik Industri</td>
                        <td className="border px-4 py-2">Universitas Bina Nusantara</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Teknik Industri</td>
                        <td className="border px-4 py-2">Universitas Telkom</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Teknik Industri</td>
                        <td className="border px-4 py-2">Universitas Diponegoro</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">Teknik Industri</td>
                        <td className="border px-4 py-2">Universitas Hasanuddin</td>
                        <td className="border px-4 py-2">Unggul</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrevPage} disabled={currentPage === 1}>
              <ChevronLeft className="h-4 w-4 mr-1" /> Sebelumnya
            </Button>
            <Button variant="outline" size="sm" onClick={handleNextPage} disabled={currentPage === totalPages}>
              Selanjutnya <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="text-sm text-gray-500">
            Halaman {currentPage} dari {totalPages}
          </div>
          <Button variant="outline" size="sm" onClick={() => onOpenChange(false)}>
            <Eye className="h-4 w-4 mr-1" /> Tutup Preview
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
