import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-waps-black text-waps-white border-t border-waps-dark-gray relative overflow-hidden">
      
      {/* Background Decor (Subtle Glow) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-waps-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT COLUMN: Contact Info --- */}
          <div>
            <div className="inline-block bg-waps-yellow text-waps-black text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
              Contact Direct
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              Lançons votre <span className="text-waps-yellow">Projet.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Remplissez le formulaire et un de nos agents vous recontactera sous 24h pour valider vos besoins. Pas d'engagement, juste du conseil.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-waps-dark border border-waps-dark-gray rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-waps-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Appelez-nous</h3>
                  <p className="text-gray-400 mb-1">+237 600 00 00 00</p>
                  <p className="text-xs text-waps-yellow">Lundi - Vendredi, 8h - 18h</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-waps-dark border border-waps-dark-gray rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-waps-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Zone d'intervention</h3>
                  <p className="text-gray-400">Douala & Yaoundé</p>
                  <p className="text-xs text-gray-500">Déplacement gratuit pour signature</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-waps-dark border border-waps-dark-gray rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-waps-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Email</h3>
                  <p className="text-gray-400">contact@waps-digital.cm</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: The Form (Mockup) --- */}
          <div className="bg-waps-dark border border-waps-dark-gray rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Demande de Devis / RDV</h3>
            
            <form className="space-y-5">
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Nom Complet *</label>
                  <input 
                    type="text" 
                    placeholder="Votre nom" 
                    className="w-full h-12 bg-black/50 border border-waps-dark-gray rounded-lg px-4 text-white focus:border-waps-yellow focus:ring-1 focus:ring-waps-yellow outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Téléphone *</label>
                  <input 
                    type="tel" 
                    placeholder="6XX XX XX XX" 
                    className="w-full h-12 bg-black/50 border border-waps-dark-gray rounded-lg px-4 text-white focus:border-waps-yellow focus:ring-1 focus:ring-waps-yellow outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Nom de l'entreprise</label>
                <input 
                  type="text" 
                  placeholder="Ex: Boutique Fashion, Cabinet..." 
                  className="w-full h-12 bg-black/50 border border-waps-dark-gray rounded-lg px-4 text-white focus:border-waps-yellow focus:ring-1 focus:ring-waps-yellow outline-none transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                 <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Ville / Quartier</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Douala, Akwa" 
                    className="w-full h-12 bg-black/50 border border-waps-dark-gray rounded-lg px-4 text-white focus:border-waps-yellow focus:ring-1 focus:ring-waps-yellow outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Pack Intéressé</label>
                  <select className="w-full h-12 bg-black/50 border border-waps-dark-gray rounded-lg px-4 text-white focus:border-waps-yellow focus:ring-1 focus:ring-waps-yellow outline-none transition-all appearance-none cursor-pointer">
                    <option value="pack-vitrine">Pack Vitrine (150.000 F)</option>
                    <option value="pack-sur-mesure">Projet Sur Mesure</option>
                    <option value="autre">Autre Demande</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message (Optionnel)</label>
                <textarea 
                  rows={3}
                  placeholder="Décrivez brièvement votre besoin..." 
                  className="w-full bg-black/50 border border-waps-dark-gray rounded-lg p-4 text-white focus:border-waps-yellow focus:ring-1 focus:ring-waps-yellow outline-none transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <Button className="w-full bg-waps-yellow text-waps-black hover:bg-white font-bold h-14 text-lg mt-2">
                ENVOYER LA DEMANDE <Send className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-center text-xs text-gray-600 mt-4">
                <Clock className="w-3 h-3 inline-block mr-1" /> 
                Réponse garantie sous 24h ouvrées.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}