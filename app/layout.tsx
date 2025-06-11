import type React from "react"
import type { Metadata } from "next"
import { Cabin, Quicksand } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import Exchange from "@/components/dashboard/exchange"
import { Loading } from "@/components/loading"

const cabin = Cabin({ 
  subsets: ["latin"],
  variable: '--font-cabin'
})

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-quicksand'
})

export const metadata: Metadata = {
  title: "UltraTimes Snapshots",
  description: "Web3 Snapshots Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${cabin.variable} ${quicksand.variable} font-quicksand bg-foreground min-h-screen`}>
        <Loading />
        {children}
      </body>
    </html>
  )
}
