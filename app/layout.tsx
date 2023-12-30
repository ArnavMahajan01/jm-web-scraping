import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const space_grotesk = Space_Grotesk({subsets: ['latin'], weight: ['300', '400', '500', '600', '700']})

export const metadata: Metadata = {
  title: 'PriceWise - Web Scraping Platform',
  description: 'Track Product Prices with Web Scraping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=''>
        {children}
        </main>

        </body>
    </html>
  )
}
