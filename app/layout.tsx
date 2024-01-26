import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Inputs',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} container flex h-screen flex-col items-center justify-center px-4 py-2 font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
