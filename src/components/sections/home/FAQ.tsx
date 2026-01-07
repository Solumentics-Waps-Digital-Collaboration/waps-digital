import { ShieldCheck, Zap, RefreshCw, Clock } from 'lucide-react'
import Link from 'next/link'

export default function FAQ() {
  const faqs = [
    {
      icon: ShieldCheck,
      question: "Puis-je modifier le site moi-même ?",
      answer: "Non, et c'est pour votre sécurité. Contrairement à WordPress qui se fait souvent pirater, nos sites sont statiques et ultra-sécurisés. Pour toute modification (changer un numéro, une photo), contactez simplement votre agent sur WhatsApp. Nous gérons tout pour vous."
    },
    {
      icon: Zap,
      question: "Quelle technologie utilisez-vous ?",
      answer: "Nous n'utilisons pas de 'constructeurs' lents. Nous développons avec Next.js, la même technologie utilisée par Netflix et TikTok. Résultat : votre site charge instantanément, ce qui améliore votre positionnement sur Google."
    },
    {
      icon: RefreshCw,
      question: "Y a-t-il des frais annuels ?",
      answer: "Oui, la transparence est notre règle. Le Pack Vitrine inclut 1 an offert. Ensuite, le renouvellement est de 50.000 FCFA / an. Cela couvre votre Nom de Domaine (.cm ou .com), l'Hébergement haute vitesse et la maintenance de sécurité."
    },
    {
      icon: Clock,
      question: "Comment se passe le paiement ?",
      answer: "Le paiement est sécurisé et échelonné. Vous versez un acompte de 50% au démarrage (après validation du devis avec l'agent), et le solde de 50% uniquement à la livraison, une fois que vous êtes satisfait du résultat."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-white text-waps-black border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-waps-black">
            Questions <span className="text-waps-yellow bg-waps-black px-2">Fréquentes.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Tout ce que vous devez savoir avant de lancer votre projet.
          </p>
        </div>

        {/* Static Grid - 100% SSR Friendly */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-5 items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-waps-yellow/30 transition-colors">
              <div className="min-w-[50px] h-[50px] bg-waps-black text-waps-yellow rounded-xl flex items-center justify-center shadow-lg">
                <faq.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-waps-black">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Vous avez une autre question ?</p>
          <Link 
            href="https://wa.me/237600000000" // Replace with your WhatsApp
            className="text-waps-black font-bold border-b-2 border-waps-yellow hover:bg-waps-yellow transition-all px-1"
          >
            Discuter avec un agent sur WhatsApp
          </Link>
        </div>

      </div>
    </section>
  )
}