// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const sora = Sora({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'PIB Leitores - Biblioteca Comunitária',
  description: 'Biblioteca Comunitária da Primeira Igreja Batista em Juscelino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}