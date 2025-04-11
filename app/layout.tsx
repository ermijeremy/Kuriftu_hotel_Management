import type React from "react"
import { Header } from "@/components/layout/header"
import { AIAssistant } from "@/components/ai-assistant"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kuriftu Resort & Spa",
  description: "Experience luxury and tranquility at our premium resort",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8E0C0]`}>
        <Header/>
        {children}
        <AIAssistant />
      </body>
    </html>
  )
}



import './globals.css'