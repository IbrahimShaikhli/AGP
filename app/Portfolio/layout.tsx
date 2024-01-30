import type { Metadata } from 'next'
import { Inter, Roboto, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100','300','400','500']
})

const monteserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Arabian Group Project Management - Project Library',
  description: 'Project Library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monteserrat.className}>{children}</body>
    </html>
  )
}
