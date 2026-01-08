import Link from 'next/link'
import ProjectCard from '@/components/common/ProjectCard'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Media } from '@/payload-types'

// Helper to get image URL safely from Payload
const getImageUrl = (media: string | Media | null | undefined) => {
  if (!media || typeof media === 'string') return '/placeholder.jpg' // Fallback if image missing
  return media.url || '/placeholder.jpg'
}

export default async function Portfolio() {
  // 1. DATABASE QUERY: Fetch the 3 latest projects
  const payload = await getPayload({ config: configPromise })
  const { docs: cmsProjects } = await payload.find({
    collection: 'projects',
    sort: '-date',
    limit: 3, // Matches your grid of 3
  })

  // 2. DATA TRANSFORMATION: Convert CMS data to match your ProjectCard props
  const projects = cmsProjects.map((p) => ({
    title: p.title,
    category: p.category,
    description: p.description, // Corresponds to 'Description Courte' in CMS
    image: getImageUrl(p.projectImages?.[0]?.image), // Gets the first image
    visitLink: `/projet/${p.slug}`, // Links to the detail page we created
    // Convert the "Stack" string (e.g. "Next.js, Tailwind") into an array for tags
    tags: p.stack ? p.stack.split(',').map(s => s.trim()) : [p.category] 
  }))

  return (
    // STYLE PRESERVED: bg-waps-white, text-waps-black
    <section id="realisations" className="py-24 bg-waps-white text-waps-black border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header - EXACT STYLE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-waps-black">
            Nos Dernières <span className="text-waps-yellow bg-waps-black px-2">Réalisations.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Nous ne vendons pas du rêve, nous livrons des résultats.
          </p>
        </div>

        {/* Grid - EXACT STYLE */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard 
                key={index}
                {...project}
              />
            ))
          ) : (
            // Empty state just in case database is empty
            <div className="col-span-3 text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500">Aucun projet publié pour le moment.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA - EXACT STYLE */}
        <div className="mt-16 text-center">
          <Link 
            href="/projets" 
            className="inline-block bg-waps-black hover:bg-waps-black/80 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all"
          >
            Voir tous les projets
          </Link>
        </div>

      </div>
    </section>
  )
}