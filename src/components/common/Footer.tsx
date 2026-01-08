import Link from 'next/link'
import { Facebook, Linkedin, MessageCircle } from 'lucide-react' // Assuming you have these icons installed

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    // Added the border-t-2 border-waps-yellow for that premium signature
    <footer className="bg-waps-dark border-t-2 border-waps-yellow pt-16 pb-0">
      <div className="container mx-auto px-4 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Promise */}
          <div className="md:col-span-2 space-y-6">
             <div className="text-3xl font-black text-waps-white tracking-tighter">
              WAPS<span className="text-waps-yellow">.</span>
            </div>
            <p className="text-waps-gray text-sm leading-relaxed max-w-sm">
              Partenaire Digital Certifié MTN. Nous transformons les entreprises camerounaises avec des solutions web performantes, livrées en 72h chrono.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 bg-waps-black border border-waps-white/10 rounded flex items-center justify-center text-waps-gray hover:border-waps-yellow hover:text-waps-yellow transition-all cursor-pointer">
                <Linkedin size={20} />
              </div>
              <div className="w-10 h-10 bg-waps-black border border-waps-white/10 rounded flex items-center justify-center text-waps-gray hover:border-waps-yellow hover:text-waps-yellow transition-all cursor-pointer">
                <MessageCircle size={20} />
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-waps-white font-bold uppercase tracking-widest text-xs mb-6">Exploration</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/projets" className="text-waps-gray hover:text-waps-yellow transition-colors">
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link href="#tarifs" className="text-waps-white font-bold hover:text-waps-yellow transition-colors flex items-center gap-2">
                  Nos Offres <span className="bg-waps-yellow text-waps-black text-[10px] px-1.5 py-0.5 rounded font-extrabold">HOT</span>
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-waps-gray hover:text-waps-yellow transition-colors">
                  Questions Fréquentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-waps-white font-bold uppercase tracking-widest text-xs mb-6">Contact Direct</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-xs text-waps-gray mb-1">WhatsApp (24/7)</span>
                <a href="https://wa.me/237600000000" className="text-waps-white hover:text-waps-yellow font-mono text-lg">
                  +237 6XX XX XX XX
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-waps-gray mb-1">Email</span>
                <a href="mailto:contact@waps.cm" className="text-waps-white hover:text-waps-yellow">
                  contact@waps.cm
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* THE SOLUMENTICS BOTTOM BAR */}
      <div className="bg-waps-black border-t border-waps-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-waps-gray">
              © {currentYear} WAPS Digital. Tous droits réservés.
            </p>

            <div className="flex items-center gap-2 text-waps-gray">
              <span>Propulsé par</span>
              <a 
                href="https://solumentics.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-waps-white font-bold hover:text-waps-yellow transition-colors flex items-center gap-1 group"
              >
                Solumentics
                <span className="w-1.5 h-1.5 bg-waps-yellow rounded-full group-hover:animate-pulse"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}