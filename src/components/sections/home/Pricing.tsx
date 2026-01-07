import { Check, Plus, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-waps-white text-waps-black relative overflow-hidden">
      {/* Decorative Slant */}
      <div className="absolute top-0 left-0 w-full h-32 bg-waps-black -skew-y-2 origin-top-left translate-y-[-50%] z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Tarifs & <span className="text-waps-yellow bg-waps-black px-2">Options.</span>
          </h2>
          <p className="text-waps-gray text-lg">
            Une offre claire pour démarrer. Des options pour grandir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          
          {/* --- LEFT CARD: THE 150K PACK --- */}
          <div className="bg-waps-black text-waps-white rounded-2xl p-8 md:p-12 shadow-2xl relative border border-waps-dark-gray flex flex-col h-full">
            <div className="absolute top-0 right-0 bg-waps-yellow text-waps-black text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl uppercase tracking-widest">
              Best-Seller
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Pack Vitrine Pro</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-waps-yellow">150.000</span>
              <span className="text-xl font-medium text-waps-gray">FCFA</span>
            </div>

            <p className="text-gray-400 mb-8 border-b border-gray-800 pb-8 text-sm">
              Votre agence digitale complète. Idéal pour PME, Commerces et Consultants.
            </p>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Site One-Page (Design Pro & Mobile)",
                "Création Pages Réseaux Sociaux (FB/Insta)",
                "2 Adresses Emails Pro",
                "Nom de domaine (.cm/.com) offert 1 an",
                "Hébergement Haute Performance inclus",
                "Rédaction de vos textes (Copywriting)",
                "Indexation Google (SEO de base)",
                "Support Technique 30 jours"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <Check className="w-5 h-5 text-waps-yellow" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Button asChild className="w-full bg-waps-yellow text-waps-black hover:bg-white font-bold h-14 text-lg mb-4">
                <Link href="#contact">COMMANDER (Acompte 50%)</Link>
              </Button>
              <p className="text-center text-xs text-gray-500">
                Livraison garantie en 72h ouvrées après validation des contenus.
              </p>
            </div>
          </div>

          {/* --- RIGHT CARD: THE OPTIONS (ADD-ONS) --- */}
          <div className="bg-gray-50 text-waps-black rounded-2xl p-8 md:p-12 border border-gray-200 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2">Options & Bonus</h3>
            <p className="text-gray-600 mb-8 text-sm border-b border-gray-200 pb-8">
              Personnalisez votre pack selon vos besoins spécifiques.
            </p>

            <div className="space-y-6 flex-grow">
              {/* Option 1: Bilingual */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div>
                  <div className="font-bold text-sm md:text-base">Site Bilingue (FR/EN)</div>
                  <div className="text-xs text-gray-500">Traduction complète incluse</div>
                </div>
                <div className="font-black text-waps-black whitespace-nowrap">
                  + 30.000 F
                </div>
              </div>

              {/* Option 2: Live Chat */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div>
                  <div className="font-bold text-sm md:text-base">Live Chat</div>
                  <div className="text-xs text-gray-500">WhatsApp / Tawk.to intégré</div>
                </div>
                <div className="font-black text-waps-black whitespace-nowrap">
                  + 25.000 F
                </div>
              </div>

              {/* Option 3: Videos */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div>
                  <div className="font-bold text-sm md:text-base">Intégration Vidéos</div>
                  <div className="text-xs text-gray-500">Pack de 3 à 4 vidéos</div>
                </div>
                <div className="font-black text-waps-black whitespace-nowrap">
                  + 5.000 F
                </div>
              </div>

              {/* Option 4: Emails */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div>
                  <div className="font-bold text-sm md:text-base">Email Supplémentaire</div>
                  <div className="text-xs text-gray-500">Par adresse / an</div>
                </div>
                <div className="font-black text-waps-black whitespace-nowrap">
                  + 5.000 F
                </div>
              </div>

               {/* Option 5: Custom Pages */}
               <div className="flex justify-between items-center border-b border-gray-200 pb-4 bg-yellow-50/50 p-2 rounded">
                <div>
                  <div className="font-bold text-sm md:text-base">Pages Supplémentaires</div>
                  <div className="text-xs text-gray-500">Fonctionnalités sur mesure</div>
                </div>
                <div className="font-black text-waps-dark-gray whitespace-nowrap text-sm bg-waps-yellow/20 px-2 py-1 rounded">
                  Sur Devis
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3 items-start">
              <div className="min-w-[20px] pt-1">
                 <AlertCircle className="w-5 h-5 text-waps-gray" />
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong>Note :</strong> Le renouvellement annuel (Nom de domaine + Hébergement) est facturé à 50.000 FCFA à partir de la 2ème année.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}