"use client"

import { Menu, MessageCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden hover:bg-blue-900/20">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-gaming-black border-blue-900/20">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/images/modstation-logo.png" alt="ModStation" className="h-8 w-8 object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                ModStation
              </span>
            </Link>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="relative p-3 text-left text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 group rounded-lg"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="relative p-3 text-left text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 group rounded-lg"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="relative p-3 text-left text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 group rounded-lg"
              >
                <span className="relative z-10">Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("status")}
                className="relative p-3 text-left text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 group rounded-lg"
              >
                <span className="relative z-10">Status</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="relative p-3 text-left text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 group rounded-lg"
              >
                <span className="relative z-10">FAQ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <div className="flex flex-col gap-2 mt-6 pt-6 border-t border-blue-900/20">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <a href="https://discord.gg/modstation" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Discord
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-8">
          <img src="/images/modstation-logo.png" alt="ModStation" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
            ModStation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <button
            onClick={() => scrollToSection("home")}
            className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection("products")}
            className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection("status")}
            className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">Status</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection("faq")}
            className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">FAQ</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            <a href="https://discord.gg/modstation" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              Discord
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
