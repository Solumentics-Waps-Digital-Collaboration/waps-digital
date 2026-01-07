import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Header() {
  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Réalisations', href: '/#realisations' },
    { label: 'Nos Offres', href: '/#tarifs', isSpecial: true },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-waps-black/90 backdrop-blur-md border-b border-waps-white/10 transition-all">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 group">
            <span className="text-2xl font-black text-waps-white tracking-tighter">
              WAPS<span className="text-waps-yellow group-hover:animate-pulse">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-sm font-medium transition-all duration-200 
                  ${item.isSpecial 
                    ? 'text-waps-yellow border border-waps-yellow/30 px-4 py-2 rounded hover:bg-waps-yellow hover:text-waps-black uppercase tracking-wide' 
                    : 'text-waps-white hover:text-waps-yellow relative group'
                  }
                `}
              >
                {item.label}
                {!item.isSpecial && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-waps-yellow transition-all group-hover:w-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* UPDATED: Link points to /commencer */}
            <Button
              asChild
              className="hidden lg:inline-flex bg-waps-yellow text-waps-black hover:bg-waps-white hover:text-waps-black font-bold px-6 shadow-[0_0_15px_rgba(255,204,0,0.2)]"
            >
              <Link href="/commencer">LANCER MON PROJET</Link>
            </Button>

            {/* Mobile Trigger */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-waps-white hover:bg-waps-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-waps-black border-l border-waps-white/10 w-[300px] z-[60]">
                <nav className="flex flex-col space-y-6 mt-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-waps-white hover:text-waps-yellow text-xl font-bold tracking-tight"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-8 border-t border-waps-white/10">
                    {/* UPDATED: Mobile Link also points to /commencer */}
                    <Button
                      asChild
                      className="bg-waps-yellow text-waps-black hover:bg-white font-bold w-full py-6 text-lg"
                    >
                      <Link href="/commencer">LANCER MON PROJET</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}