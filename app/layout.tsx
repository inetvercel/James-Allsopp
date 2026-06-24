import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk"
})

export const metadata: Metadata = {
  title: "James Allsopp - Entrepreneur, Builder, Explorer",
  description: "Personal site of James Allsopp - SEO agency owner, AI builder, entrepreneur, and explorer of life's interesting corners.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} custom-cursor antialiased`}>{children}</body>
    </html>
  )
}
