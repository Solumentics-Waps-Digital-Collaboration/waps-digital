import Link from 'next/link'
import ProjectCard from '@/components/common/ProjectCard'

export default function Portfolio() {
  // This array simulates your future Payload CMS collection
  const projects = [
    {
      title: "Complexe Amasia",
      category: "Éducation",
      description: "Plateforme institutionnelle bilingue pour un établissement technique. Intégration des cycles scolaires, galeries photos et informations parents en temps réel.",
      image: "/portfolio/amasia.jpg",
      visitLink: "https://csb-amasia.com",
      tags: ["Bilingue", "Scolaire", "Technique"]
    },
    {
      title: "Ramana S.A.",
      category: "Corporate",
      description: "Digitalisation complète d'un distributeur agréé CANAL+. Présentation du réseau de distribution national et des services d'installation technique.",
      image: "/portfolio/ramana.jpg",
      visitLink: "https://ramanasa.com",
      tags: ["Distribution", "Catalogue", "Canal+"]
    },
    {
      title: "NADSCAM",
      category: "Association / ONG",
      description: "Transformation digitale de l'Association Nationale pour la Trisomie 21. Site institutionnel avec système de dons, blog d'actualités et présentation des formations spécialisées.",
      image: "/portfolio/nadscam.jpg", 
      visitLink: "https://nadscam.org",
      tags: ["Humanitaire", "Dons en ligne", "Inclusion"]
    }
  ]

  return (
    // UPDATED: bg-waps-black -> bg-waps-white, text-waps-white -> text-waps-black
    <section id="realisations" className="py-24 bg-waps-white text-waps-black border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-waps-black">
            Nos Dernières <span className="text-waps-yellow bg-waps-black px-2">Réalisations.</span>
          </h2>
          {/* UPDATED: text-gray-400 -> text-gray-600 for readability on white */}
          <p className="text-gray-600 text-lg">
            Nous ne vendons pas du rêve, nous livrons des résultats.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="#contact" 
            // UPDATED: Inverted colors for the button to pop on white background
            className="inline-block bg-waps-black hover:bg-waps-black/80 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all"
          >
            Voir tous les projets
          </Link>
        </div>

      </div>
    </section>
  )
}