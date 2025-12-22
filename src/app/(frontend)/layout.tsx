import React from 'react'
import { Poppins } from 'next/font/google'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import './styles.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'WAPS Digital - Création de sites web professionnels',
  description: 'WAPS Digital crée des sites web professionnels pour votre entreprise. Site vitrine, e-commerce, solutions sur mesure. Transformez votre présence en ligne dès aujourd\'hui.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fr" className={poppins.variable}>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}