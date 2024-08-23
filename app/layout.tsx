import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


export const metadata: Metadata = {
  title: 'Anthony Qin',
  description: 'Anthony\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">{children}</body>
    </html>
  )
}
