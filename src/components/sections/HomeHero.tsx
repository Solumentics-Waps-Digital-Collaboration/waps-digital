import Hero from '@/components/common/Hero'
import { Star } from 'lucide-react'

export default function HomeHero() {
  return (
    <Hero
      badge={{
        icon: Star,
        text: 'Déjà plus de 50 entreprises digitalisées au Cameroun',
      }}
      title="Votre présence digitale professionnelle. En ligne en 48h chrono."
      subtitle="Ne perdez plus des semaines. Nous transformons les infos de votre entreprise en un site web performant, sécurisé et optimisé pour la vente."
      primaryCta={{
        text: 'LANCER MON PROJET',
        href: '#contact',
      }}
      secondaryCta={{
        text: 'Voir les exemples',
        href: '#exemples',
      }}
      backgroundImage="/background.svg"
      alignment="left"
      minHeight="min-h-[140vh]"
    />
  )
}