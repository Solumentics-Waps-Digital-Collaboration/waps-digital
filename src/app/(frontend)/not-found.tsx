import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-waps-black flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-[150px] font-black text-waps-yellow leading-none select-none opacity-20">
        404
      </h1>
      
      <div className="relative -top-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Page Introuvable
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Oups. La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        
        <Button 
          asChild 
          className="bg-waps-yellow text-waps-black hover:bg-white font-bold h-12 px-8 rounded-full"
        >
          <Link href="/">
            <Home size={18} className="mr-2" /> Retour à l'accueil
          </Link>
        </Button>
      </div>

    </div>
  )
}