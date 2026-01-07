import Hero from '@/components/common/Hero'
import { CheckCircle2 } from 'lucide-react'

export default function HomeHero() {
  return (
    <Hero
      badge={{
        icon: CheckCircle2,
        text: 'Partenaire Digital Certifié MTN Cameroon',
      }}
      title="Votre présence digitale professionnelle. En ligne en 48h chrono."
      subtitle="Ne perdez plus des semaines. Nous transformons votre activité en un site web performant, sécurisé et optimisé pour la vente. Validation rapide, déploiement immédiat."
      primaryCta={{
        text: 'VOIR LES PACKS (150K)',
        href: '#tarifs',
      }}
      secondaryCta={{
        text: 'Nos Réalisations',
        href: '#realisations',
      }}
      backgroundImage="/background.svg"
      alignment="left"
      minHeight="min-h-[140vh]"
    />
  )
}