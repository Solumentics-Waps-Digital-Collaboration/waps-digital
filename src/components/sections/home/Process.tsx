import { Users, FileCheck, Laptop, Key } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Process() {
  const steps = [
    {
      icon: Users,
      title: "1. Rencontre & Audit",
      description: "Un de nos agents experts vous rencontre (ou appel vidéo) pour analyser vos besoins et vous conseiller la meilleure stratégie."
    },
    {
      icon: FileCheck,
      title: "2. Validation du Pack",
      description: "Nous définissons ensemble le cahier des charges. Vous validez le devis et versez l'acompte de démarrage (50%)."
    },
    {
      icon: Laptop,
      title: "3. Production (72h)",
      description: "Notre équipe technique prend le relais. Design, Rédaction et Développement de votre site en 3 jours ouvrés."
    },
    {
      icon: Key,
      title: "4. Livraison & Formation",
      description: "Nous vous remettons vos accès. Votre site est en ligne, sécurisé et vos emails professionnels sont configurés."
    }
  ]

  return (
    // SSR-Friendly: Simple background colors, standard Tailwind classes, no client-side motion libraries.
    <section id="process" className="py-24 bg-gray-50 text-waps-black border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-waps-black">
            Comment ça <span className="text-waps-yellow bg-waps-black px-2">Marche ?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Une approche humaine soutenue par une technologie puissante.
          </p>
        </div>

        {/* The Steps Grid */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Pure CSS, visible only on Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Icon Circle - Static with simple CSS hover effect */}
              <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-waps-yellow transition-colors duration-300">
                <step.icon className="w-10 h-10 text-waps-black group-hover:text-waps-yellow transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA Block */}
        <div className="mt-20 text-center bg-waps-black rounded-3xl p-8 md:p-12 shadow-2xl mx-auto max-w-4xl relative overflow-hidden">
           {/* Static decoration (CSS only) */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-waps-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="relative z-10">
             <h3 className="text-3xl font-bold text-white mb-6">Un agent est prêt à vous accompagner.</h3>
             <p className="text-gray-400 mb-8 max-w-xl mx-auto">
               Ne restez pas seul face à la technique. Discutons de votre projet dès aujourd'hui.
             </p>
             <Button asChild className="bg-waps-yellow text-waps-black hover:bg-white font-bold h-14 px-10 text-lg rounded-full shadow-lg transition-all">
                <Link href="#contact">DEMANDER UN RDV</Link>
             </Button>
           </div>
        </div>

      </div>
    </section>
  )
}