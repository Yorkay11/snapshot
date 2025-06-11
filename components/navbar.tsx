"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, LogOut, User, Wallet, Search } from "lucide-react"
import Image from "next/image"
import { Input } from "./ui/input"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Discover" },
    { href: "/jobs", label: "Collections" },
    { href: "/analytics", label: "Analytics" },
  ]

  return (
    <nav className="top-0 z-50 pt-10">
      <div className="container mx-auto px-28 py-3">
        <div className="flex items-center justify-between">

          <div className="flex flex-row gap-20">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src={"/ultra.png"}
                alt="ultra-times"
                width={10}
                height={10}
                className="h-8 w-8 rounded-full"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <p
                    className="transition-all duration-300 hover:scale-105 text-white text-sm"
                  >
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative w-full">
              <Search className="absolute left-8 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search a factory or collection..."
                className="pl-16 pr-8 text-xs bg-muted-foreground/10 w-full text-white"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/ultra.png" alt="Factory Manager" />
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Factory Manager</p>
                    <p className="text-xs text-muted-foreground">manager@ultra-times.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Paramètres
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Se déconnecter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
