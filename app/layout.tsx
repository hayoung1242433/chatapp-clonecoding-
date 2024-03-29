import AuthContext from './context/AuthContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// TO TRIGGER TOAST
import ToasterContext from "./context/ToasterContext"

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthContext>
      <ToasterContext/>
      <body className={inter.className}>{children}</body>
      </AuthContext>
    </html>
  )}
