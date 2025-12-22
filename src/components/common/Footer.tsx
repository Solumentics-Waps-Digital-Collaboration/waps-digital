import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-waps-black border-t border-waps-dark-gray">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="WAPS Digital"
              width={150}
              height={35}
              className="h-8 w-auto"
            />
          </div>

          {/* Copyright */}
          <p className="text-waps-gray text-sm">
            © {currentYear} WAPS Digital. Tous droits réservés.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="text-waps-gray hover:text-waps-white text-sm transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-waps-gray hover:text-waps-white text-sm transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}