import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

type HeroProps = {
  badge?: {
    icon?: LucideIcon
    text: string
  }
  title: string
  subtitle: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundImage?: string
  alignment?: 'left' | 'center' | 'right'
  minHeight?: string
}

export default function Hero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage = '/background.svg',
  alignment = 'left',
  minHeight = 'min-h-[120vh]',
}: HeroProps) {
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  const contentAlignment = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  return (
    <section
      className={`relative ${minHeight} flex items-center overflow-hidden -mt-20`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-waps-black/80 via-waps-black/40 to-transparent" />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-20">
        <div className={`flex ${contentAlignment[alignment]}`}>
          <div className={`flex flex-col ${alignmentClasses[alignment]} max-w-2xl space-y-4 md:space-y-6`}>
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 bg-waps-dark-gray/50 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-waps-yellow/20">
                {badge.icon && (
                  <badge.icon className="w-4 h-4 md:w-5 md:h-5 fill-waps-yellow text-waps-yellow" />
                )}
                <span className="text-xs md:text-sm text-waps-white font-medium">
                  {badge.text}
                </span>
              </div>
            )}

            {/* Title - Much smaller now */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-waps-white leading-tight">
              {title}
            </h1>

            {/* Subtitle - Also smaller */}
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                {primaryCta && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-waps-yellow text-waps-black hover:bg-waps-yellow/90 font-semibold px-6 md:px-8 text-sm md:text-base"
                  >
                    <Link href={primaryCta.href}>{primaryCta.text}</Link>
                  </Button>
                )}

                {secondaryCta && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-waps-white text-waps-white hover:bg-waps-white hover:text-waps-black font-semibold px-6 md:px-8 text-sm md:text-base"
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}