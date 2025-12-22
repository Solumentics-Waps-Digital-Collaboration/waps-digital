import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Header() {
  const navItems = [
    { label: 'Modèles', href: '#modeles' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Comment ça marche', href: '#comment-ca-marche' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-waps-black border-b border-waps-dark-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="WAPS Digital Logo"
              width={180}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-waps-white hover:text-waps-yellow transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Right */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden lg:inline-flex bg-waps-yellow text-waps-black hover:bg-waps-yellow/90 font-semibold px-6"
            >
              <Link href="#contact">LANCER MON PROJET</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-waps-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-waps-black border-waps-dark-gray">
                <nav className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-waps-white hover:text-waps-yellow transition-colors duration-200 text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="bg-waps-yellow text-waps-black hover:bg-waps-yellow/90 font-semibold w-full"
                  >
                    <Link href="#contact">LANCER MON PROJET</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}