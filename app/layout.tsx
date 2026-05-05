import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Контуринг тела — Курс повышения квалификации · li_zagar_tan',
  description: 'Авторский курс по контурингу для практикующих мастеров моментального загара',
  openGraph: {
    title: 'Контуринг тела — Курс повышения квалификации',
    description: 'Авторский курс от li_zagar_tan',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter overflow-hidden">{children}</body>
    </html>
  )
}
