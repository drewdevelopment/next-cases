import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import App from './_app'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Next Cases',
  description: 'Next application by Drew.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <App>
          {children}
        </App>
      </body>
    </html>
  )
}
