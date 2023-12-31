import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'

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
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
