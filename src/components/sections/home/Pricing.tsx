import { Check, Plus, MessageSquare, PenTool, Camera, Shield, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Pricing() {
  
  const packs = [
    {
      name: "Pack Vitrine",
      price: "150.000",
      description: "L'essentiel pour crédibiliser votre entreprise en ligne.",
      features: [
        "Site Web Pro (5 Pages max)",
        "Nom de Domaine (.cm ou .com)",
        "Hébergement Haute Vitesse",
        "Adresses Emails Pros",
        "Bouton WhatsApp Flottant (Offert)", // Moved to Free
        "Intégration Google Maps (Offert)",  // Moved to Free
        "Certificat de Sécurité SSL",
        "Optimisation Mobile"
      ],
      isPopular: true,
      cta: "COMMANDER CE PACK"
    },
    {
      name: "Pack E-Commerce",
      price: "Sur Devis",
      description: "Pour vendre vos produits et encaisser des paiements.",
      features: [
        "Tout du Pack Vitrine",
        "Catalogue Produits illimité",
        "Paiement Mobile Money / Carte",
        "Gestion des Stocks",
        "Tableau de bord Ventes",
        "Formation à la gestion",
        "Campagne Pub Facebook offerte"
      ],
      isPopular: false,
      cta: "DEMANDER UN DEVIS"
    }
  ]

  // The Add-ons (Upsells)
  const addons = [
    {
      icon: PenTool,
      title: "Création de Logo Pro",
      price: "25.000 FCFA",
      desc: "3 propositions de logos uniques + Charte graphique simplifiée."
    },
    {
      icon: MessageSquare,
      title: "Livechat Pro", // Changed from Google Maps to Livechat
      price: "15.000 FCFA /mois",
      desc: "Système de chat en direct avancé (type Tawk.to ou Intercom) pour votre équipe."
    },
    {
      icon: Camera,
      title: "Shooting Photo Pro",
      price: "50.000 FCFA",
      desc: "Déplacement d'un photographe pour shooter vos locaux/produits."
    },
    {
      icon: Shield,
      title: "Maintenance VIP",
      price: "10.000 FCFA /mois",
      desc: "Mises à jour illimitées de vos textes et images 7j/7."
    }
  ]

  return (
    <section id="tarifs" className="py-24 bg-gray-50 text-waps-black border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-waps-black">
            Investissement <span className="text-waps-yellow bg-waps-black px-2">Clair.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Pas de frais cachés. Whatsapp et Google Maps sont inclus d'office.
          </p>
        </div>

        {/* Main Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {packs.map((pack, index) => (
            <div 
              key={index} 
              className={`relative p-8 md:p-12 rounded-3xl border transition-all duration-300 ${
                pack.isPopular 
                  ? 'bg-waps-black text-white border-waps-black shadow-2xl scale-105 z-10' 
                  : 'bg-white text-waps-black border-gray-200 hover:border-waps-yellow shadow-lg'
              }`}
            >
              {pack.isPopular && (
                <div className="absolute top-0 right-0 bg-waps-yellow text-waps-black text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                  Le Plus Populaire
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl md:text-5xl font-black ${pack.isPopular ? 'text-waps-yellow' : 'text-waps-black'}`}>
                  {pack.price}
                </span>
                {pack.price !== "Sur Devis" && <span className="text-sm opacity-60">FCFA</span>}
              </div>
              <p className={`mb-8 ${pack.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                {pack.description}
              </p>

              <ul className="space-y-4 mb-10">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${pack.isPopular ? 'bg-white/10 text-waps-yellow' : 'bg-green-100 text-green-700'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                className={`w-full h-14 font-bold text-lg rounded-full transition-all ${
                  pack.isPopular 
                    ? 'bg-waps-yellow text-waps-black hover:bg-white' 
                    : 'bg-waps-black text-white hover:bg-gray-800'
                }`}
              >
                <Link href="/commencer">{pack.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* --- ADDITIONAL SERVICES --- */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
             <div className="h-px bg-gray-300 flex-grow"></div>
             <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-400">
               Options à la carte
             </h3>
             <div className="h-px bg-gray-300 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
             {addons.map((addon, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-waps-yellow/50 hover:shadow-lg transition-all group">
                   <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-waps-black group-hover:text-waps-yellow transition-colors">
                      <addon.icon size={24} />
                   </div>
                   <h4 className="font-bold text-lg mb-1">{addon.title}</h4>
                   <p className="text-waps-yellow font-bold text-sm mb-3">{addon.price}</p>
                   <p className="text-gray-500 text-xs leading-relaxed">
                      {addon.desc}
                   </p>
                   <div className="mt-4 pt-4 border-t border-gray-50 flex justify-end">
                      <Link href="/commencer" className="text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                         <Plus size={12} /> Ajouter
                      </Link>
                   </div>
                </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  )
}