import Image from 'next/image'

const partners = [
  { name: 'MTN Cameroon', logo: '/partners/mtn.jpg', width: 80, height: 80 },
  { name: 'Ramana S.A.', logo: '/partners/ramana.jpg', width: 120, height: 60 },
  { name: 'Complexe Amasia', logo: '/partners/amasia.jpg', width: 100, height: 80 },
  { name: 'Nadscam', logo: '/partners/nadscam.png', width: 110, height: 70 },
]

export default function TrustedPartners() {
  return (
    <section className="bg-waps-dark border-y border-white/5 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-white text-xl md:text-2xl font-bold capitalize tracking-[0.2em] mb-8">
          Ils nous font confiance
        </p>
        
        {/* Removed grayscale and opacity classes completely */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map((partner) => (
            <div key={partner.name} className="relative h-12 w-32 md:w-40 flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="object-contain max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}