import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Media } from '@/payload-types'

export const dynamic = 'force-dynamic'

async function getAllProjects() {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'projects',
    sort: '-date',
    limit: 100,
  })
  return result.docs
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  // Helper to handle Payload Media
  const getImageUrl = (media: string | Media | null | undefined) => {
    if (!media || typeof media === 'string') return ''
    return media.url || ''
  }

  return (
    <div className="min-h-screen bg-waps-black text-white font-poppins pt-24 pb-24">
      
      {/* 1. Header Section */}
      <div className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Nos <span className="text-waps-yellow bg-white/5 px-2 rounded-lg">Réalisations.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Une collection de plateformes digitales performantes, conçues pour transformer l'image de nos partenaires au Cameroun et à l'international.
          </p>
        </div>
      </div>

      {/* 2. The Grid */}
      <div className="container mx-auto px-4 lg:px-8">
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <Link 
                href={`/projet/${project.slug}`} 
                key={project.id}
                className="group block relative"
              >
                {/* Image Card */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 mb-6 transition-all duration-500 group-hover:border-waps-yellow/50 group-hover:shadow-[0_0_30px_rgba(255,204,0,0.1)]">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                   
                   {/* Image */}
                   {project.projectImages && project.projectImages[0] ? (
                     <Image
                       src={getImageUrl(project.projectImages[0].image)}
                       alt={project.title}
                       fill
                       className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                     />
                   ) : (
                     <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                       <Layers className="text-gray-700 w-12 h-12" />
                     </div>
                   )}

                   {/* Overlay Button */}
                   <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-12 h-12 bg-waps-yellow text-black rounded-full flex items-center justify-center font-bold shadow-xl">
                        <ArrowUpRight size={24} />
                      </div>
                   </div>
                </div>

                {/* Text Content */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-waps-yellow text-xs font-bold uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-waps-yellow transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="hidden md:block">
                     <span className="text-gray-500 text-sm font-medium border border-white/10 px-3 py-1 rounded-full">
                       {new Date(project.date).getFullYear()}
                     </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <Layers className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-300">Aucun projet publié</h3>
            <p className="text-gray-500 mb-6">Ajoutez vos projets dans le Payload Admin.</p>
            <Button asChild className="bg-waps-yellow text-black">
              <Link href="/admin">Accéder à l'Admin</Link>
            </Button>
          </div>
        )}
      </div>

      {/* 3. Bottom CTA */}
      <div className="container mx-auto px-4 lg:px-8 mt-32">
        <div className="bg-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase">
              Prêt à rejoindre <br/> cette galerie ?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Chaque projet commence par une simple discussion. Parlez-nous de votre vision.
            </p>
            <Button asChild className="bg-black text-white hover:bg-gray-800 h-16 rounded-full px-10 text-xl font-bold">
              <Link href="/commencer">
                LANCER MON PROJET
              </Link>
            </Button>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-waps-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-waps-yellow/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>

    </div>
  )
}