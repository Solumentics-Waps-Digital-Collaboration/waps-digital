import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'

// Interface defines the shape of data
interface ProjectCardProps {
  title: string
  category: string
  description: string
  image: string
  visitLink: string
  tags: string[]
}

export default function ProjectCard({ 
  title, 
  category, 
  description, 
  image, 
  visitLink, 
  tags 
}: ProjectCardProps) {
  return (
    // UPDATED: bg-white instead of bg-waps-dark. Added shadow-sm for depth on white background.
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-xl hover:border-waps-yellow/50 transition-all duration-300 h-full">
      
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`Projet ${title}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 500px"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a 
            href={visitLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-waps-yellow text-waps-black font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg"
          >
            Visiter le site <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category: Darker yellow or Black for better contrast on white */}
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-waps-yellow"></span>
          {category}
        </div>
        
        {/* Title: Black text */}
        <h3 className="text-2xl font-bold text-waps-black mb-3">
          {title}
        </h3>
        
        {/* Description: Gray text */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tags: Light gray background */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] uppercase font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
          <a 
            href={visitLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1"
          >
            Voir le résultat
          </a>
          
          <Link 
            href="#contact" 
            className="text-sm font-bold text-black hover:text-waps-yellow transition-colors flex items-center gap-2"
          >
            Je veux ce site <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}