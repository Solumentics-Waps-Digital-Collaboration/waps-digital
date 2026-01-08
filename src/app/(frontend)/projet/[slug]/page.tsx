import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Calendar, Layers, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Project, Media } from '@/payload-types' // Ensure this matches your types path

// 1. This function tells Next.js to fetch data from Payload
async function getProject(slug: string): Promise<Project | null> {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1, // We only expect one project per slug
  })

  return result.docs[0] || null
}

// 2. Main Page Component (Async Server Component)
export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const project = await getProject(slug)

  // 404 Handler if slug doesn't exist in DB
  if (!project) {
    return notFound()
  }

  // Type helper for Media objects (Payload sometimes returns ID instead of object)
  const getImageUrl = (media: string | Media | null | undefined) => {
    if (!media || typeof media === 'string') return ''
    return media.url || ''
  }

  // Helper to get image alt text
  const getImageAlt = (media: string | Media | null | undefined) => {
    if (!media || typeof media === 'string') return 'Project Screenshot'
    return media.alt || 'Project Screenshot'
  }

  return (
    <div className="min-h-screen bg-waps-black text-white font-poppins pt-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-waps-black via-waps-black/50 to-transparent z-10"></div>
        
        {/* Background Image (Using the first image from the gallery as hero) */}
        <div className="absolute inset-0 bg-gray-900">
           {project.projectImages && project.projectImages.length > 0 && (
             <Image 
               src={getImageUrl(project.projectImages[0].image)} 
               alt={getImageAlt(project.projectImages[0].image)}
               fill 
               className="object-cover opacity-50"
               priority
             />
           )}
        </div>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link href="/#realisations" className="inline-flex items-center text-waps-yellow hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Retour aux réalisations
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-waps-yellow text-black text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                {project.category}
              </span>
              <span className="bg-white/10 text-white border border-white/20 text-xs font-bold px-3 py-1 rounded flex items-center gap-2">
                <Calendar size={12} /> {new Date(project.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4">
              {project.url && (
                <Button asChild className="bg-white text-black hover:bg-gray-200 font-bold rounded-full h-12 px-6">
                  <Link href={project.url} target="_blank">
                    Voir le site en live <ExternalLink size={16} className="ml-2" />
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline" className="border-waps-yellow text-waps-yellow hover:bg-waps-yellow hover:text-black font-bold rounded-full h-12 px-6">
                <Link href="/commencer">
                  Je veux un site comme ça
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS GRID */}
      {project.stats && project.stats.length > 0 && (
        <div className="border-y border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {project.stats.map((stat, i) => (
                <div key={i} className="p-6 text-center">
                  <p className="text-3xl font-black text-waps-yellow mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
              <div className="p-6 text-center">
                <Layers size={32} className="text-waps-yellow mx-auto mb-2" />
                <p className="text-xs text-gray-400 uppercase tracking-widest">{project.stack}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. CONTENT & STORY */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Le Challenge</h2>
              <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-wrap">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">La Solution Waps</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                {project.solution}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-waps-yellow shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Architecture technique optimisée (Next.js).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-waps-yellow shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Design UI/UX Premium.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-waps-yellow shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Formation client incluse.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sticky Mobile Mockup area */}
          <div className="relative bg-gray-900 rounded-3xl border border-white/10 p-8 aspect-square flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-waps-yellow/5 group-hover:bg-waps-yellow/10 transition-colors"></div>
             {/* If there is a second image, assume it's mobile/detail view */}
             {project.projectImages && project.projectImages[1] ? (
                <div className="relative w-[60%] h-[90%] rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-2xl overflow-hidden border-4 border-gray-800">
                   <Image 
                     src={getImageUrl(project.projectImages[1].image)} 
                     alt="Mobile View"
                     fill
                     className="object-cover"
                   />
                </div>
             ) : (
                <div className="text-gray-600 font-bold">Mockup Mobile</div>
             )}
          </div>

        </div>
      </div>

      {/* 4. GALLERY (Dynamic) */}
      {project.projectImages && project.projectImages.length > 0 && (
        <div className="bg-white text-black py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
                Galerie du <span className="bg-black text-waps-yellow px-2">Projet.</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
               {project.projectImages.map((item, index) => (
                  <div key={index} className={`relative bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow ${index % 3 === 0 ? 'h-[400px]' : 'h-[300px]'}`}>
                     <Image 
                        src={getImageUrl(item.image)} 
                        alt={getImageAlt(item.image)}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                     />
                  </div>
               ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. NEXT STEPS CTA */}
      <div className="bg-waps-yellow py-20 text-center text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            Convaincu par le résultat ?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">
            Nous pouvons réaliser exactement la même qualité pour votre projet.
          </p>
          <Button asChild className="bg-black text-white hover:bg-white hover:text-black h-16 rounded-full px-10 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
            <Link href="/commencer">
              LANCER MON PROJET <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>

    </div>
  )
}