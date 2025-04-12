import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Exahire
            </Link>
            <p className="mt-2 text-gray-600 max-w-md">
              Membantu pelajar Indonesia menemukan jurusan kuliah yang sesuai dengan minat dan bakat, serta tahan
              terhadap perkembangan AI.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#tentang" className="text-gray-600 hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#manfaat" className="text-gray-600 hover:text-primary transition-colors">
                  Manfaat
                </Link>
              </li>
              <li>
                <Link href="#daftar" className="text-gray-600 hover:text-primary transition-colors">
                  Daftar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">info@exahire.com</li>
              <li className="text-gray-600">Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Exahire. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors text-sm">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors text-sm">
              Syarat dan Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
