'use client'

import { useState, useRef } from 'react'
import { 
  ChevronRight, ChevronLeft, UploadCloud, CheckCircle2, 
  Building2, Palette, PenTool, Globe, FileText, Loader2, MessageCircle, AlertCircle, Plus 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const steps = [
  { id: 1, title: "L'Entreprise", icon: Building2 },
  { id: 2, title: "Branding", icon: Palette },
  { id: 3, title: "Contenu", icon: PenTool },
  { id: 4, title: "Technique", icon: Globe },
  { id: 5, title: "Validation", icon: FileText },
]

export default function StartProject() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileError, setFileError] = useState('')

  // Form State
  const [formData, setFormData] = useState({
    companyName: '', managerName: '', email: '', whatsapp: '', city: '', address: '',
    activitySector: '', visualStyle: '', colors: '', inspirationUrl: '',
    heroTitle: '', heroSubtitle: '', heroCta: '', services: '', whyUs: '',
    domainName: '', proEmail: '', facebook: '', instagram: '', linkedin: '', googleMaps: ''
  })

  // New State for Add-ons (Upsells)
  const [addons, setAddons] = useState<string[]>([])

  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle Add-ons Selection
  const toggleAddon = (addon: string) => {
    if (addons.includes(addon)) {
      setAddons(addons.filter(a => a !== addon))
    } else {
      setAddons([...addons, addon])
    }
  }

  const handleFileChange = (e: any) => {
    setFileError('')
    if (e.target.files) {
      const newFiles = Array.from(e.target.files as FileList)
      const validFiles = newFiles.filter(file => {
        const isTooBig = file.size > 5 * 1024 * 1024 
        if (isTooBig) {
            setFileError(`Le fichier "${file.name}" est trop lourd (>5MB). Envoyez-le sur WhatsApp.`)
            return false
        }
        return true
      })
      setFiles([...files, ...validFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      window.scrollTo(0, 0)
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      window.scrollTo(0, 0)
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Here you would include 'addons' in the data sent to API
    setTimeout(() => {
        alert("Cahier des charges envoyé ! (Simulation)")
        setIsSubmitting(false)
    }, 2000)
  }

  const openWhatsApp = () => {
    const text = "Bonjour Waps, je préfère discuter de mon projet directement ici."
    window.open(`https://wa.me/237600000000?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24 font-poppins text-gray-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-10 mt-20">
          <h1 className="text-3xl md:text-5xl font-black text-black uppercase mb-4">
            Constructeur de <span className="text-waps-yellow bg-black px-2">Projet.</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Définissez votre succès en 5 étapes simples.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT COLUMN: The Form */}
          <div className="lg:col-span-2">
             
            {/* Progress Bar */}
            <div className="flex justify-between items-center mb-8 relative px-2">
              <div className="absolute top-1/2 left-4 right-4 h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full"></div>
              <div 
                className="absolute top-1/2 left-4 h-1 bg-waps-yellow -z-10 -translate-y-1/2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              ></div>

              {steps.map((step) => {
                const isActive = step.id === currentStep
                const isCompleted = step.id < currentStep
                return (
                  <div key={step.id} className="flex flex-col items-center px-1">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive || isCompleted ? 'bg-black border-black text-waps-yellow shadow-lg scale-110' : 'bg-white border-gray-300 text-gray-300'}`}>
                      {isCompleted ? <CheckCircle2 size={16} /> : <step.icon size={16} />}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* FORM CARD */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden min-h-[500px] flex flex-col">
              <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                
                <div className="p-8 md:p-10 flex-grow">
                  
                  {/* STEP 1: L'ENTREPRISE */}
                  {currentStep === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6">
                      <h2 className="text-2xl font-bold text-black border-b border-gray-100 pb-2">Identité & Contact</h2>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                           <div>
                              <label className="text-xs font-bold text-gray-500 uppercase">Nom Entreprise *</label>
                              <input name="companyName" value={formData.companyName} onChange={handleInputChange} type="text" className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:ring-1 focus:ring-waps-yellow outline-none" />
                           </div>
                           <div>
                              <label className="text-xs font-bold text-gray-500 uppercase">Votre Nom *</label>
                              <input name="managerName" value={formData.managerName} onChange={handleInputChange} type="text" className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:ring-1 focus:ring-waps-yellow outline-none" />
                           </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                           <div>
                              <label className="text-xs font-bold text-gray-500 uppercase">WhatsApp *</label>
                              <input name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} type="tel" className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:ring-1 focus:ring-waps-yellow outline-none" />
                           </div>
                           <div>
                              <label className="text-xs font-bold text-gray-500 uppercase">Email *</label>
                              <input name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:ring-1 focus:ring-waps-yellow outline-none" />
                           </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: BRANDING */}
                  {currentStep === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6">
                      <h2 className="text-2xl font-bold text-black border-b border-gray-100 pb-2">Design & Marque</h2>
                      <div className="space-y-4">
                         <div>
                            <label className="text-xs font-bold text-gray-500 uppercase">Domaine d'activité</label>
                            <select name="activitySector" value={formData.activitySector} onChange={handleInputChange} className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:ring-1 focus:ring-waps-yellow outline-none">
                              <option value="">Sélectionner...</option>
                              <option value="Education">Education</option>
                              <option value="Commerce">Commerce</option>
                              <option value="Services">Services</option>
                              <option value="Autre">Autre</option>
                            </select>
                         </div>
                         <div>
                            <label className="text-xs font-bold text-gray-500 uppercase">Couleurs & Style</label>
                            <input name="colors" value={formData.colors} onChange={handleInputChange} type="text" className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:ring-1 focus:ring-waps-yellow outline-none" placeholder="Ex: Bleu et Blanc, Style épuré..." />
                         </div>

                         {/* UPSELLS: Branding */}
                         <div className="pt-4">
                            <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Options Créatives (Cochez si besoin)</label>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div 
                                onClick={() => toggleAddon('Logo (+25.000)')}
                                className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${addons.includes('Logo (+25.000)') ? 'border-waps-yellow bg-yellow-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                              >
                                <div className={`w-5 h-5 rounded border flex items-center justify-center ${addons.includes('Logo (+25.000)') ? 'bg-waps-yellow border-waps-yellow' : 'border-gray-300'}`}>
                                  {addons.includes('Logo (+25.000)') && <CheckCircle2 size={14} className="text-black" />}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-black">Création de Logo</p>
                                  <p className="text-xs text-gray-500">+25.000 FCFA</p>
                                </div>
                              </div>

                              <div 
                                onClick={() => toggleAddon('Shooting Photo (+50.000)')}
                                className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${addons.includes('Shooting Photo (+50.000)') ? 'border-waps-yellow bg-yellow-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                              >
                                <div className={`w-5 h-5 rounded border flex items-center justify-center ${addons.includes('Shooting Photo (+50.000)') ? 'bg-waps-yellow border-waps-yellow' : 'border-gray-300'}`}>
                                  {addons.includes('Shooting Photo (+50.000)') && <CheckCircle2 size={14} className="text-black" />}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-black">Shooting Photo Pro</p>
                                  <p className="text-xs text-gray-500">+50.000 FCFA</p>
                                </div>
                              </div>
                            </div>
                         </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: CONTENU */}
                  {currentStep === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6">
                      <h2 className="text-2xl font-bold text-black border-b border-gray-100 pb-2">Contenu</h2>
                      <div className="space-y-4">
                         <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <label className="text-xs font-bold text-yellow-800 uppercase block mb-1">Grand Titre (Hero)</label>
                            <input name="heroTitle" value={formData.heroTitle} onChange={handleInputChange} type="text" className="w-full h-12 bg-white border border-yellow-200 rounded-lg px-4 text-black focus:ring-1 focus:ring-waps-yellow outline-none" placeholder="Ex: L'Expertise Digitale." />
                         </div>
                         <div>
                            <label className="text-xs font-bold text-gray-500 uppercase">Services Principaux</label>
                            <textarea name="services" value={formData.services} onChange={handleInputChange} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-black focus:ring-1 focus:ring-waps-yellow outline-none" placeholder="Listez vos services..."></textarea>
                         </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: TECHNIQUE */}
                  {currentStep === 4 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6">
                      <h2 className="text-2xl font-bold text-black border-b border-gray-100 pb-2">Technique</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                         <div>
                            <label className="text-xs font-bold text-gray-500 uppercase">Nom de domaine</label>
                            <input name="domainName" value={formData.domainName} onChange={handleInputChange} type="text" className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black" placeholder="site.cm" />
                         </div>
                         <div>
                            <label className="text-xs font-bold text-gray-500 uppercase">Email Pro</label>
                            <input name="proEmail" value={formData.proEmail} onChange={handleInputChange} type="text" className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black" placeholder="contact@site.cm" />
                         </div>
                      </div>

                      {/* UPSELLS: Tech */}
                      <div className="pt-4">
                          <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Options Techniques (Cochez si besoin)</label>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div 
                              onClick={() => toggleAddon('Livechat Pro (+15k/mois)')}
                              className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${addons.includes('Livechat Pro (+15k/mois)') ? 'border-waps-yellow bg-yellow-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                            >
                              <div className={`w-5 h-5 rounded border flex items-center justify-center ${addons.includes('Livechat Pro (+15k/mois)') ? 'bg-waps-yellow border-waps-yellow' : 'border-gray-300'}`}>
                                {addons.includes('Livechat Pro (+15k/mois)') && <CheckCircle2 size={14} className="text-black" />}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-black">Livechat Pro</p>
                                <p className="text-xs text-gray-500">+15.000 FCFA/mois</p>
                              </div>
                            </div>

                            <div 
                              onClick={() => toggleAddon('Maintenance VIP (+10k/mois)')}
                              className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${addons.includes('Maintenance VIP (+10k/mois)') ? 'border-waps-yellow bg-yellow-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                            >
                              <div className={`w-5 h-5 rounded border flex items-center justify-center ${addons.includes('Maintenance VIP (+10k/mois)') ? 'bg-waps-yellow border-waps-yellow' : 'border-gray-300'}`}>
                                {addons.includes('Maintenance VIP (+10k/mois)') && <CheckCircle2 size={14} className="text-black" />}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-black">Maintenance VIP</p>
                                <p className="text-xs text-gray-500">+10.000 FCFA/mois</p>
                              </div>
                            </div>
                          </div>
                       </div>
                    </div>
                  )}

                  {/* STEP 5: FICHIERS */}
                  {currentStep === 5 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6">
                      <h2 className="text-2xl font-bold text-black border-b border-gray-100 pb-2">Fichiers</h2>
                      
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 hover:border-waps-yellow transition-colors group"
                      >
                        <input type="file" multiple ref={fileInputRef} className="hidden" onChange={handleFileChange} accept="image/*,.pdf,.doc" />
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-50 transition-colors">
                          <UploadCloud className="w-6 h-6 text-gray-400 group-hover:text-waps-yellow" />
                        </div>
                        <p className="font-bold text-gray-700 text-sm">Cliquez pour ajouter (Max 5MB/fichier)</p>
                      </div>

                      {fileError && (
                        <div className="bg-red-50 text-red-600 text-xs p-3 rounded flex items-center gap-2">
                           <AlertCircle size={14} /> {fileError}
                        </div>
                      )}

                      {files.length > 0 && (
                        <div className="space-y-2">
                          {files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-100 text-xs">
                              <span className="truncate max-w-[80%] text-gray-700">{file.name}</span>
                              <button type="button" onClick={() => removeFile(index)} className="text-red-500 font-bold px-2">X</button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                </div>

                {/* Footer Nav */}
                <div className="p-6 border-t border-gray-100 bg-white flex justify-between items-center">
                  <Button 
                    type="button" variant="ghost" onClick={handleBack} disabled={currentStep === 1}
                    className={`text-gray-500 ${currentStep === 1 ? 'opacity-0' : ''}`}
                  >
                    <ChevronLeft size={16} className="mr-2" /> Retour
                  </Button>

                  {currentStep < steps.length ? (
                    <Button type="button" onClick={handleNext} className="bg-black text-white hover:bg-gray-800 font-bold px-6 h-12 rounded-full">
                      Suivant <ChevronRight size={16} className="ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting} className="bg-waps-yellow text-black hover:bg-yellow-400 font-bold px-8 h-12 rounded-full shadow-lg">
                      {isSubmitting ? "Envoi..." : "ENVOYER LE BRIEF"}
                    </Button>
                  )}
                </div>

              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: WhatsApp */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-6">
             <div className="bg-black text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-waps-yellow/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-xl font-bold mb-4">Besoin d'aide ?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                   Vous n'aimez pas les formulaires ? Discutez directement avec nous.
                </p>
                <Button 
                   onClick={openWhatsApp}
                   className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold h-14 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-105"
                >
                   <MessageCircle size={24} />
                   Discuter sur WhatsApp
                </Button>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}