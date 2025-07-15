"use client"

import Navbar from "../navbar"
import { ArrowRight, Shield, Zap, Users, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export default function Page() {
  const [isValorantFullModalOpen, setIsValorantFullModalOpen] = useState(false)
  const [isValorantPremiumModalOpen, setIsValorantPremiumModalOpen] = useState(false)
  const [isFiveMDevKitModalOpen, setIsFiveMDevKitModalOpen] = useState(false)
  const [isPermWooferModalOpen, setIsPermWooferModalOpen] = useState(false)
  const [isOneClickWooferModalOpen, setIsOneClickWooferModalOpen] = useState(false)
  const [isRustFullModalOpen, setIsRustFullModalOpen] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Background */}
      <section
        id="home"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-40 flex items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                ModStation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-semibold">
              Precision Cheats. Premium Protection.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-16">
              <div className="flex items-center gap-2 bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-200">Secure & Safe</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-200">High Performance</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-200">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
              <button
                onClick={() => scrollToSection("products")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Products
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Gradient Fade at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gaming-black via-gaming-black/80 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gaming-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                WHO ARE{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">WE?</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                ModStation is a private software collective focused on delivering high-end, undetected game enhancements
                for competitive players. With expertise in both cybersecurity and performance engineering, our team
                develops advanced aimbot, ESP, and protection systems tailored for maximum security. At ModStation, we
                don't just build cheats, we build trust, stability, and dominance. Join a platform where stealth meets
                innovation.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 10+ Years Experience */}
              <div className="bg-gaming-darkGray border border-blue-900/20 rounded-lg p-6 text-center hover:border-blue-500/40 transition-all duration-300 group">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>

              {/* 20000+ Worldwide Clients */}
              <div className="bg-gaming-darkGray border border-purple-900/20 rounded-lg p-6 text-center hover:border-purple-500/40 transition-all duration-300 group">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">20000+</div>
                <div className="text-gray-400 text-sm">Worldwide Clients</div>
              </div>

              {/* 99% Undetected */}
              <div className="bg-gaming-darkGray border border-blue-900/20 rounded-lg p-6 text-center hover:border-blue-500/40 transition-all duration-300 group">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-400 text-sm">Undetected</div>
              </div>

              {/* 24/7 Always Available Support */}
              <div className="bg-gaming-darkGray border border-purple-900/20 rounded-lg p-6 text-center hover:border-purple-500/40 transition-all duration-300 group">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM12 6v6l4 2"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Always Available Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-gradient-to-br from-gaming-darkGray to-gaming-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Products
                </span>
              </h2>
            </div>

            {/* Products Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {/* Valorant */}
              <AccordionItem
                value="valorant"
                className="bg-gaming-black border border-blue-900/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      Valorant
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Valorant Full */}
                    <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                            Valorant Full
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-white">$6</span>
                          <span className="text-gray-400 text-sm">starting from</span>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => setIsValorantFullModalOpen(true)}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Valorant Premium */}
                    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                            Valorant Premium
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-white">$10</span>
                          <span className="text-gray-400 text-sm">starting from</span>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => setIsValorantPremiumModalOpen(true)}
                            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* FiveM */}
              <AccordionItem
                value="fivem"
                className="bg-gaming-black border border-purple-900/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-purple-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      FiveM
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* FiveM Development Kit */}
                    <div className="bg-gradient-to-br from-green-900/20 to-orange-900/20 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                            FiveM Development Kit
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-white">$10</span>
                          <span className="text-gray-400 text-sm">starting from</span>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => setIsFiveMDevKitModalOpen(true)}
                            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Coming Soon Placeholder */}
                    <div className="bg-gradient-to-br from-orange-900/20 to-green-900/20 border border-orange-500/30 rounded-lg p-6 hover:border-orange-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                            New Products Coming Soon!
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-500">TBA</span>
                          <span className="text-gray-400 text-sm">pricing</span>
                        </div>

                        <div className="pt-2">
                          <button
                            disabled
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 py-2 px-4 rounded-lg font-medium cursor-not-allowed opacity-50"
                          >
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Fortnite */}
              <AccordionItem
                value="fortnite"
                className="bg-gaming-black border border-blue-900/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      Fortnite
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Coming Soon Placeholder 1 */}
                    <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                            New Products Coming Soon!
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-500">TBA</span>
                          <span className="text-gray-400 text-sm">pricing</span>
                        </div>

                        <div className="pt-2">
                          <button
                            disabled
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 py-2 px-4 rounded-lg font-medium cursor-not-allowed opacity-50"
                          >
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Coming Soon Placeholder 2 */}
                    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                            New Products Coming Soon!
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-500">TBA</span>
                          <span className="text-gray-400 text-sm">pricing</span>
                        </div>

                        <div className="pt-2">
                          <button
                            disabled
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 py-2 px-4 rounded-lg font-medium cursor-not-allowed opacity-50"
                          >
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Rust */}
              <AccordionItem
                value="rust"
                className="bg-gaming-black border border-purple-900/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-orange-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                      Rust
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Rust Full */}
                    <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-lg p-6 hover:border-orange-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                            Rust Full
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-white">$60</span>
                          <span className="text-gray-400 text-sm">starting from</span>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => setIsRustFullModalOpen(true)}
                            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Coming Soon Placeholder 2 */}
                    <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-6 hover:border-red-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-red-300 transition-colors duration-300">
                            New Products Coming Soon!
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-500">TBA</span>
                          <span className="text-gray-400 text-sm">pricing</span>
                        </div>

                        <div className="pt-2">
                          <button
                            disabled
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 py-2 px-4 rounded-lg font-medium cursor-not-allowed opacity-50"
                          >
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Apex Legends */}
              <AccordionItem
                value="apex"
                className="bg-gaming-black border border-blue-900/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-orange-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                      Apex Legends
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Coming Soon Placeholder 1 */}
                    <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-lg p-6 hover:border-orange-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                            New Products Coming Soon!
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-500">TBA</span>
                          <span className="text-gray-400 text-sm">pricing</span>
                        </div>

                        <div className="pt-2">
                          <button
                            disabled
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 py-2 px-4 rounded-lg font-medium cursor-not-allowed opacity-50"
                          >
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Coming Soon Placeholder 2 */}
                    <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
                            New Products Coming Soon!
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-500">TBA</span>
                          <span className="text-gray-400 text-sm">pricing</span>
                        </div>

                        <div className="pt-2">
                          <button
                            disabled
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 py-2 px-4 rounded-lg font-medium cursor-not-allowed opacity-50"
                          >
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Counter-Strike 2 */}
              <AccordionItem
                value="cs2"
                className="bg-gaming-black border border-purple-900/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      Counter-Strike 2
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Coming Soon Placeholder 1 */}
                    <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 border border-blue-500/30 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                            New Products Coming Soon!
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-500">TBA</span>
                          <span className="text-gray-400 text-sm">pricing</span>
                        </div>

                        <div className="pt-2">
                          <button
                            disabled
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 py-2 px-4 rounded-lg font-medium cursor-not-allowed opacity-50"
                          >
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Coming Soon Placeholder 2 */}
                    <div className="bg-gradient-to-br from-gray-900/20 to-blue-900/20 border border-gray-500/30 rounded-lg p-6 hover:border-gray-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                            New Products Coming Soon!
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-500">TBA</span>
                          <span className="text-gray-400 text-sm">pricing</span>
                        </div>

                        <div className="pt-2">
                          <button
                            disabled
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 py-2 px-4 rounded-lg font-medium cursor-not-allowed opacity-50"
                          >
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* HWID Spoofer */}
              <AccordionItem
                value="hwid"
                className="bg-gaming-black border border-blue-900/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-green-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                      HWID Spoofer
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Perm Woofer */}
                    <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                            Perm Woofer
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-white">$20</span>
                          <span className="text-gray-400 text-sm">starting from</span>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => setIsPermWooferModalOpen(true)}
                            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* OneClick Woofer */}
                    <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/30 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                            OneClick Woofer
                          </h4>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-white">$40</span>
                          <span className="text-gray-400 text-sm">starting from</span>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => setIsOneClickWooferModalOpen(true)}
                            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section id="status" className="bg-gaming-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Product{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Status
                </span>
              </h2>
            </div>

            {/* Status Legend */}
            <div className="bg-gaming-darkGray border border-blue-900/20 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Status Legend</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">Undetected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">Updating</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">Risky</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">Detected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">Maintenance</span>
                </div>
              </div>
            </div>

            {/* Product Status List */}
            <div className="space-y-4">
              {/* Valorant Full */}
              <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                      Valorant Full
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-medium">Undetected</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Valorant Premium */}
              <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                      Valorant Premium
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-medium">Undetected</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* FiveM Development Kit */}
              <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                      FiveM Development Kit
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-medium">Undetected</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Rust Full */}
              <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                      Rust Full
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-medium">Undetected</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Perm Woofer */}
              <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                      Perm Woofer
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-medium">Undetected</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* OneClick Woofer */}
              <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-4 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      OneClick Woofer
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-medium">Maintenance</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                Last updated:{" "}
                {new Date().toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "UTC",
                })}{" "}
                UTC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gradient-to-br from-gaming-darkGray to-gaming-accent py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {/* Who is ModStation */}
            <AccordionItem
              value="who-is-modstation"
              className="bg-gaming-black border border-blue-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    Who is ModStation?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    ModStation is a private software provider specializing in undetected, performance-optimized tools
                    for competitive games like Valorant, CS2, and more. Our platform is trusted by thousands of users
                    worldwide for its stability, privacy, and cutting-edge features.
                  </p>
                  <p>
                    We operate with a security-first mindset, offering premium solutions that remain safe, streamproof,
                    and constantly updated.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Safety */}
            <AccordionItem
              value="safety"
              className="bg-gaming-black border border-green-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-green-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                    Are ModStation products safe to use?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    Yes, all ModStation products are completely safe to use. Our team prioritizes security, ensuring
                    that every tool we develop is fully undetected and reliable.
                  </p>
                  <p>
                    We continuously monitor and update our software to stay ahead of anti-cheat systems, providing our
                    users with peace of mind and a seamless gaming experience.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* What makes different */}
            <AccordionItem
              value="different"
              className="bg-gaming-black border border-purple-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-purple-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    What makes ModStation different from other providers?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    ModStation stands out with its in-house developed software, ensuring unmatched quality and
                    reliability. Unlike other providers, we focus on creating high-performance tools that deliver
                    exceptional results.
                  </p>
                  <p>
                    Additionally, our commitment to fast and continuous updates ensures that our products remain ahead
                    of the curve, providing users with a superior experience.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Updates */}
            <AccordionItem
              value="updates"
              className="bg-gaming-black border border-orange-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-orange-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                    How often are the products updated?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    Our products are updated regularly to maintain compatibility with the latest game versions and
                    features. Whether it's a major game patch or minor tweaks, we ensure that our software is always
                    optimized for performance and safety.
                  </p>
                  <p>
                    Updates are delivered swiftly, so you can continue enjoying your favorite games without
                    interruptions.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Supported Games */}
            <AccordionItem
              value="supported-games"
              className="bg-gaming-black border border-blue-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    What games are supported by ModStation?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    ModStation offers support for a wide range of popular online games, including Valorant, Apex
                    Legends, and more. Our team continuously expands our library to cater to the needs of gamers across
                    various platforms.
                  </p>
                  <p>Check our website or contact us to see the full list of supported games.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Refund Policy */}
            <AccordionItem
              value="refunds"
              className="bg-gaming-black border border-red-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-red-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-300 transition-colors duration-300">
                    What is your refund policy?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    <strong>Important:</strong> Refunds are not provided if our products enter maintenance for updates
                    or become detected. Additionally, licenses that have been used are strictly non-refundable.
                  </p>
                  <p>
                    Refunds are only issued for product issues that are entirely caused by us. However, if a product is
                    permanently disabled or becomes unusable, refunds will not be provided.
                  </p>
                  <p>
                    By purchasing any of our products, users agree to these terms and conditions, ensuring they are
                    fully aware of our refund policy.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Resell and Panel */}
            <AccordionItem
              value="resell-panel"
              className="bg-gaming-black border border-purple-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-purple-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    Do you offer resell and panel?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    Yes, this is our founding purpose as DistService ({" "}
                    <a
                      href="https://distservice.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300"
                    >
                      https://distservice.xyz
                    </a>
                    ). We exist to ensure that sellers in the market can access and sell quality products.
                  </p>
                  <p>
                    Additionally, sellers can purchase panels from our products if they wish. You can contact us for all
                    reseller and panel systems.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Account Bans */}
            <AccordionItem
              value="account-bans"
              className="bg-gaming-black border border-yellow-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-yellow-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    What happens if my account is banned while using your software?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    While our products are designed to be undetected, using cheats always carries a risk. ModStation is
                    not responsible for any bans or account restrictions resulting from the use of our software.
                  </p>
                  <p>We recommend following our guidelines and using the tools responsibly to minimize risks.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Free Trials */}
            <AccordionItem
              value="free-trials"
              className="bg-gaming-black border border-gray-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-gray-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                    Do you offer free trials or demos for your products?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    Currently, ModStation does not offer free trials or demos. All our products are premium and designed
                    for the best experience.
                  </p>
                  <p>
                    To ensure you are confident in your purchase, we provide detailed product descriptions and support
                    to help you make an informed decision.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Customer Support */}
            <AccordionItem
              value="customer-support"
              className="bg-gaming-black border border-green-900/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger-no-underline px-6 py-4 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-green-400 animate-pulse group-hover:animate-none transition-all duration-300 animate-bounce-x" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                    Do you offer customer support?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-300 space-y-3">
                  <p>
                    Absolutely! At ModStation, we pride ourselves on providing top-notch customer support. Whether you
                    need assistance with installation, troubleshooting, or general inquiries, our dedicated team is here
                    to help.
                  </p>
                  <p>
                    You can reach us through our Discord server or email, ensuring a quick and helpful response every
                    time.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Valorant Full Modal */}
      <Dialog open={isValorantFullModalOpen} onOpenChange={setIsValorantFullModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gaming-black border border-blue-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Valorant Full
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-blue-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/valorant-ui.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/valorant-ui.png"
                  alt="Valorant Full UI Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-purple-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/valorant-gameplay.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/valorant-gameplay.png"
                  alt="Valorant Full ESP Gameplay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features Accordion */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {/* Supported */}
                <AccordionItem value="supported" className="bg-gaming-darkGray border border-blue-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-blue-300">
                    Supported
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• External</li>
                      <li>• Windows 10 & 11 All Versions</li>
                      <li>• Intel & AMD CPU's</li>
                      <li>• Borderless & Windowed</li>
                      <li>• Hvci (Core Isolation) ON & OFF</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Visuals */}
                <AccordionItem value="visuals" className="bg-gaming-darkGray border border-purple-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-purple-300">
                    Visuals
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Player ESP</li>
                      <li>• Box</li>
                      <li>• Head Circle</li>
                      <li>• Distance</li>
                      <li>• Bones</li>
                      <li>• Healthbar</li>
                      <li>• Shieldbar</li>
                      <li>• Agent Name</li>
                      <li>• Weapon Name</li>
                      <li>• World ESP</li>
                      <li>• Bomb Timer</li>
                      <li>• Sage Wall</li>
                      <li>• Brimstonbe Molly</li>
                      <li>• Brimstone Smoke</li>
                      <li>• Chamber Trap</li>
                      <li>• Chamber Teleport</li>
                      <li>• Cyber Wire</li>
                      <li>• Cyber Cage</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Aimbot */}
                <AccordionItem value="aimbot" className="bg-gaming-darkGray border border-blue-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-blue-300">
                    Aimbot
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Enable Aimbot</li>
                      <li>• Key (Customizable)</li>
                      <li>• Draw FOV</li>
                      <li>• Visible Check</li>
                      <li>• FOV Scale</li>
                      <li>• Smooth</li>
                      <li>• Hitbox</li>
                      <li>• Recoil Control</li>
                      <li>• Recoil Delay</li>
                      <li>• Recoil Delta X</li>
                      <li>• Recoil Delta Y</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Misc */}
                <AccordionItem value="misc" className="bg-gaming-darkGray border border-purple-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-purple-300">
                    Misc
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Lineup Helper</li>
                      <li>• Customizable Colors</li>
                      <li>• StreamProof</li>
                      <li>• Anti-Screenshot</li>
                      <li>• Custom Overlay</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-4 text-center hover:border-blue-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Day</div>
                  <div className="text-2xl font-bold text-blue-400">$6</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Week</div>
                  <div className="text-2xl font-bold text-purple-400">$25</div>
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-4 text-center hover:border-blue-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Month</div>
                  <div className="text-2xl font-bold text-blue-400">$50</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Lifetime</div>
                  <div className="text-2xl font-bold text-purple-400">$120</div>
                </div>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="pt-4">
              <button
                onClick={() => window.open("https://discord.gg/modstation", "_blank")}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Purchase Now
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Valorant Premium Modal */}
      <Dialog open={isValorantPremiumModalOpen} onOpenChange={setIsValorantPremiumModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gaming-black border border-purple-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Valorant Premium
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-purple-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/valorant-premium-ui.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/valorant-premium-ui.png"
                  alt="Valorant Premium UI Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-blue-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/valorant-premium-gameplay.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/valorant-premium-gameplay.png"
                  alt="Valorant Premium ESP Gameplay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features Accordion */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {/* Supported */}
                <AccordionItem value="supported" className="bg-gaming-darkGray border border-purple-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-purple-300">
                    Supported
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• External</li>
                      <li>• Windows 10 & 11 All Versions</li>
                      <li>• Intel & AMD CPU's</li>
                      <li>• Borderless & Windowed</li>
                      <li>• Hvci (Core Isolation) ON & OFF</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Visuals */}
                <AccordionItem value="visuals" className="bg-gaming-darkGray border border-blue-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-blue-300">
                    Visuals
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Agent Name</li>
                      <li>• Healthbar</li>
                      <li>• Weapon</li>
                      <li>• Draw Bones</li>
                      <li>• Bounding Box</li>
                      <li>• Corner Box</li>
                      <li>• 2D Box</li>
                      <li>• 3D Box</li>
                      <li>• Trap ESP</li>
                      <li>• Skill ESP</li>
                      <li>• ESP Preview</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Aimbot */}
                <AccordionItem value="aimbot" className="bg-gaming-darkGray border border-purple-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-purple-300">
                    Aimbot
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Enable Aimbot</li>
                      <li>• Aimbot Prediction</li>
                      <li>• FOV Circle</li>
                      <li>• Aimbot Key</li>
                      <li>• Presets (Legit & Rage)</li>
                      <li>• Smoothing</li>
                      <li>• FOV</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Misc */}
                <AccordionItem value="misc" className="bg-gaming-darkGray border border-blue-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-blue-300">
                    Misc
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Spike ESP</li>
                      <li>• Spike Timer</li>
                      <li>• Spike Informer Preview</li>
                      <li>• Lineup Helper (All Agents)</li>
                      <li>• Unique Per-User Builds</li>
                      <li>• StreamProof</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Day</div>
                  <div className="text-2xl font-bold text-purple-400">$10</div>
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-4 text-center hover:border-blue-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Week</div>
                  <div className="text-2xl font-bold text-blue-400">$30</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Month</div>
                  <div className="text-2xl font-bold text-purple-400">$60</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Lifetime</div>
                  <div className="text-2xl font-bold text-purple-400">$-</div>
                </div>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="pt-4">
              <button
                onClick={() => window.open("https://discord.gg/modstation", "_blank")}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Purchase Now
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* FiveM Development Kit Modal */}
      <Dialog open={isFiveMDevKitModalOpen} onOpenChange={setIsFiveMDevKitModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gaming-black border border-green-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">
              FiveM Development Kit
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="aspect-video bg-gradient-to-br from-green-900/20 to-orange-900/20 border border-green-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-green-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/fivem-ui-new.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/fivem-ui-new.png"
                  alt="FiveM Development Kit UI Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="aspect-video bg-gradient-to-br from-orange-900/20 to-green-900/20 border border-orange-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-orange-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/fivem-ingame.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/fivem-ingame.png"
                  alt="FiveM Development Kit In-Game Usage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features Accordion */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {/* Supported */}
                <AccordionItem value="supported" className="bg-gaming-darkGray border border-green-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-green-300">
                    Supported
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Internal</li>
                      <li>• Windows 10 & 11 All Versions</li>
                      <li>• All Resolutions</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Development Tools */}
                <AccordionItem value="devtools" className="bg-gaming-darkGray border border-orange-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-orange-300">
                    Features
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• EVENT LOGGER | You can Log All Your Events</li>
                      <li>• RESOURCE STOPPER | You can stop any Resource/Plugin</li>
                      <li>• EXECUTOR | Execute any lua with that</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-green-900/20 to-orange-900/20 border border-green-500/30 rounded-lg p-4 text-center hover:border-green-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Week</div>
                  <div className="text-2xl font-bold text-green-400">$10</div>
                </div>
                <div className="bg-gradient-to-br from-orange-900/20 to-green-900/20 border border-orange-500/30 rounded-lg p-4 text-center hover:border-orange-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Month</div>
                  <div className="text-2xl font-bold text-orange-400">$20</div>
                </div>
                <div className="bg-gradient-to-br from-green-900/20 to-orange-900/20 border border-green-500/30 rounded-lg p-4 text-center hover:border-green-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">3 Months</div>
                  <div className="text-2xl font-bold text-green-400">$50</div>
                </div>
                <div className="bg-gradient-to-br from-orange-900/20 to-green-900/20 border border-orange-500/30 rounded-lg p-4 text-center hover:border-orange-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Lifetime</div>
                  <div className="text-2xl font-bold text-orange-400">$150</div>
                </div>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="pt-4">
              <button
                onClick={() => window.open("https://discord.gg/modstation", "_blank")}
                className="w-full bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-500 hover:to-orange-500 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Purchase Now
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Perm Woofer Modal */}
      <Dialog open={isPermWooferModalOpen} onOpenChange={setIsPermWooferModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gaming-black border border-green-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Perm Woofer
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="aspect-video bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-green-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/perm-woofer-ui.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/perm-woofer-ui.png"
                  alt="Perm Woofer ModStation Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="aspect-video bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-emerald-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/oneclick-woofer-noimage.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/oneclick-woofer-noimage.png"
                  alt="Perm Woofer Loader Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features Accordion */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {/* Supported */}
                <AccordionItem value="supported" className="bg-gaming-darkGray border border-green-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-green-300">
                    Supported
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Windows 10 & 11 All Versions</li>
                      <li>• Tournament Supported</li>
                      <li>• All Anticheats Supported</li>
                      <li>• All Games Supported</li>
                      <li>• All Motherboards Supported</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Spoofing Features */}
                <AccordionItem value="spoofing" className="bg-gaming-darkGray border border-emerald-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-emerald-300">
                    Required
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Reinstall Windows</li>
                      <li>• Wipe All Disks</li>
                      <li>• BIOS Up/Down</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Security */}
                <AccordionItem value="security" className="bg-gaming-darkGray border border-green-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-green-300">
                    Features
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• IPv4 Spoof</li>
                      <li>• Disk Spoof</li>
                      <li>• MAC Spoof</li>
                      <li>• ID Spoof</li>
                      <li>• GPU Spoof</li>
                      <li>• UUID Spoof</li>
                      <li>• One Click Perm Spoof</li>
                      <li>• TPM Spoof</li>
                      <li>• TPM/SB/HVCI ON Support</li>
                      <li>• Remove Spoof</li>
                      <li>• Easy One Click Process</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-4 text-center hover:border-green-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">OneTime</div>
                  <div className="text-2xl font-bold text-green-400">$20</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/30 rounded-lg p-4 text-center hover:border-emerald-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Lifetime</div>
                  <div className="text-2xl font-bold text-emerald-400">$40</div>
                </div>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="pt-4">
              <button
                onClick={() => window.open("https://discord.gg/modstation", "_blank")}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Purchase Now
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* OneClick Woofer Modal */}
      <Dialog open={isOneClickWooferModalOpen} onOpenChange={setIsOneClickWooferModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gaming-black border border-emerald-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              OneClick Woofer
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="aspect-video bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-emerald-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/oneclick-woofer-noimage.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/oneclick-woofer-noimage.png"
                  alt="OneClick Woofer Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="aspect-video bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-green-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/oneclick-woofer-noimage.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/oneclick-woofer-noimage.png"
                  alt="OneClick Woofer Premium Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features Accordion */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {/* Supported */}
                <AccordionItem value="supported" className="bg-gaming-darkGray border border-emerald-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-emerald-300">
                    Supported
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Windows 10 & 11 All Versions</li>
                      <li>• Tournament Supported</li>
                      <li>• All Anticheats Supported</li>
                      <li>• All Games Supported</li>
                      <li>• All Motherboards Supported</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Advanced Spoofing */}
                <AccordionItem value="advanced" className="bg-gaming-darkGray border border-green-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-green-300">
                    Required
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Not Required Reinstall Windows</li>
                      <li>• Not Required Wipe All Disks</li>
                      <li>• Required BIOS Up/Down</li>
                      <li>• Required Valorant/Vanguard Uninstall</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Premium Security */}
                <AccordionItem value="security" className="bg-gaming-darkGray border border-emerald-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-emerald-300">
                    Features
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• InBuilt Cleaner</li>
                      <li>• IPv4 Spoof</li>
                      <li>• Disk Spoof</li>
                      <li>• MAC Spoof</li>
                      <li>• ID Spoof</li>
                      <li>• GPU Spoof</li>
                      <li>• UUID Spoof</li>
                      <li>• One Click Perm Spoof</li>
                      <li>• TPM Spoof</li>
                      <li>• TPM/SB/HVCI ON & OFF Support</li>
                      <li>• Remove Spoof</li>
                      <li>• Easy One Click Process</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/30 rounded-lg p-4 text-center hover:border-emerald-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Month</div>
                  <div className="text-2xl font-bold text-emerald-400">$40</div>
                </div>
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-4 text-center hover:border-green-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Lifetime</div>
                  <div className="text-2xl font-bold text-green-400">$100</div>
                </div>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="pt-4">
              <button
                onClick={() => window.open("https://discord.gg/modstation", "_blank")}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                Purchase Now
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rust Full Modal */}
      <Dialog open={isRustFullModalOpen} onOpenChange={setIsRustFullModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gaming-black border border-orange-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Rust Full
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="aspect-video bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-orange-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/rust-ui.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/rust-ui.png"
                  alt="Rust Full UI Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="aspect-video bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg overflow-hidden cursor-pointer hover:border-red-400/50 transition-all duration-300 group"
                onClick={() => {
                  setSelectedImage("/images/rust-ingame.png")
                  setImageModalOpen(true)
                }}
              >
                <img
                  src="/images/rust-ingame.png"
                  alt="Rust Full In-Game ESP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features Accordion */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {/* Supported */}
                <AccordionItem value="supported" className="bg-gaming-darkGray border border-orange-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-orange-300">
                    Supported
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• External</li>
                      <li>• Windows 10 & 11 All Versions</li>
                      <li>• Intel & AMD CPU's</li>
                      <li>• Borderless & Windowed</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Visuals */}
                <AccordionItem value="visuals" className="bg-gaming-darkGray border border-red-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-red-300">
                    Rage
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Enable Aimbot</li>
                      <li>• Aimbot Type</li>
                      <li>• Draw Fov</li>
                      <li>• Prediction</li>
                      <li>• Silent Aim</li>
                      <li>• Fov Outline</li>
                      <li>• Fov Automatic</li>
                      <li>• Fov Type</li>
                      <li>• Skip Downed</li>
                      <li>• Hitbox</li>
                      <li>• Field of view</li>
                      <li>• Display Target</li>
                      <li>• Aimbot Misc Enable</li>
                      <li>• Hitchance</li>
                      <li>• Hitchange Value</li>
                      <li>• Smoothing</li>
                      <li>• Max Distance</li>
                      <li>• No Recoil</li>
                      <li>• Recoil X</li>
                      <li>• Recoil Y</li>
                      <li>• Randomize No Recoil</li>
                      <li>• No Spread</li>
                      <li>• Spread Value</li>
                      <li>• Burst</li>
                      <li>• Fast Burst</li>
                      <li>• Automatic</li>
                      <li>• Instant EOKA</li>
                      <li>• Aimbot Key</li>
                      <li>• Much More...</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Aimbot */}
                <AccordionItem value="aimbot" className="bg-gaming-darkGray border border-red-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-red-300">
                    Visuals
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Box Type</li>
                      <li>• Skeleton</li>
                      <li>• Head Circle</li>
                      <li>• Health Bar</li>
                      <li>• Name</li>
                      <li>• Distance</li>
                      <li>• Held Item</li>
                      <li>• Wounded ESP</li>
                      <li>• Show Scientists</li>
                      <li>• Show Sleepers</li>
                      <li>• Visuals Distance</li>
                      <li>• Time Changer</li>
                      <li>• Time Value</li>
                      <li>• Bright Night</li>
                      <li>• Change Light Intensity</li>
                      <li>• Brightness</li>
                      <li>• Fov Changer</li>
                      <li>• Fov Value</li>
                      <li>• Zoom</li>
                      <li>• Zoom Value</li>
                      <li>• Shoot While Falling</li>
                      <li>• Camera Changer</li>
                      <li>• Camera Type</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Misc */}
                <AccordionItem value="misc" className="bg-gaming-darkGray border border-red-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-red-300">
                    World ESP
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Enable</li>
                      <li>• Dropped Items</li>
                      <li>• Large Storage</li>
                      <li>• Broken Box</li>
                      <li>• Battery</li>
                      <li>• Corpses</li>
                      <li>• Turrets</li>
                      <li>• Traps</li>
                      <li>• Tcs</li>
                      <li>• Bags</li>
                      <li>• Generators</li>
                      <li>• Food Box</li>
                      <li>• Stone</li>
                      <li>• Sulfur</li>
                      <li>• Metal</li>
                      <li>• Wood Pile</li>
                      <li>• Elite Crate</li>
                      <li>• Normal Crate</li>
                      <li>• Military Crate</li>
                      <li>• Loot Barrel</li>
                      <li>• Furnace</li>
                      <li>• SamSites</li>
                      <li>• Medkit</li>
                      <li>• Locked Crate</li>
                      <li>• Supply Drop</li>
                      <li>• Wolf Animal</li>
                      <li>• Boar Animal</li>
                      <li>• Diesel Collectable</li>
                      <li>• Dropped Item Image</li>
                      <li>• World Distance</li>
                      <li>• Test</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Misc 2 */}
                <AccordionItem value="misc2" className="bg-gaming-darkGray border border-red-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-red-300">
                    Settings
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Box Color</li>
                      <li>• Username Color</li>
                      <li>• Distance Color</li>
                      <li>• HeldItem Color</li>
                      <li>• Wounded Color</li>
                      <li>• Skeleton Color</li>
                      <li>• Watermark</li>
                      <li>• Info Tab</li>
                      <li>• Fonts</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Misc 3 */}
                <AccordionItem value="misc3" className="bg-gaming-darkGray border border-red-900/20 rounded-lg">
                  <AccordionTrigger className="accordion-trigger-no-underline px-4 py-3 text-white hover:text-red-300">
                    Config
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Save Config</li>
                      <li>• Load Config</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-lg p-4 text-center hover:border-orange-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Month</div>
                  <div className="text-2xl font-bold text-orange-400">$60</div>
                </div>
				<div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-lg p-4 text-center hover:border-orange-400/50 transition-colors">
                  <div className="text-lg font-semibold text-white">Lifetime</div>
                  <div className="text-2xl font-bold text-orange-400">$200</div>
                </div>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="pt-4">
              <button
                onClick={() => window.open("https://discord.gg/modstation", "_blank")}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Purchase Now
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="max-w-6xl max-h-[95vh] bg-gaming-black border border-blue-500/30 p-2">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gaming-black border-t border-blue-900/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - ModStation Logo & Text */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center gap-3">
                <img src="/images/modstation-logo.png" alt="ModStation" className="h-10 w-10 object-contain" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                  ModStation
                </span>
              </div>
              <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
                Precision Cheats. Premium Protection. Trusted by thousands worldwide.
              </p>
              <div className="text-gray-500 text-xs">© 2025 ModStation. All rights reserved.</div>
            </div>

            {/* Center - Sponsor Logos */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-white font-semibold text-sm mb-2">Our Partners</h3>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <a
                  href="https://www.elitepvpers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                  <img
                    src="/images/epvplogo.png"
                    alt="Elite PVPers"
                    className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform transition-transform"
                  />
                </a>
                <a
                  href="https://distservice.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                  <img
                    src="/images/dist.png"
                    alt="Distributor"
                    className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform transition-transform"
                  />
                </a>
                <a
                  href="https://cheatglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                  <img
                    src="/images/cglogo.png"
                    alt="CG Cheat"
                    className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Right - Social Links */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <h3 className="text-white font-semibold text-sm">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://discord.gg/modstation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg px-4 py-2 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span className="text-white text-sm group-hover:text-blue-300 transition-colors">Discord</span>
                </a>
                <a
                  href="https://t.me/distservice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 rounded-lg px-4 py-2 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span className="text-white text-sm group-hover:text-cyan-300 transition-colors">Telegram</span>
                </a>
              </div>
              <div className="text-gray-500 text-xs text-center md:text-right">
                <div>24/7 Support Available</div>
                <div className="mt-1">Secure • Reliable • Undetected</div>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="mt-8 pt-6 border-t border-blue-900/10">
            <div className="text-center text-gray-500 text-xs">
              <p>ModStation acts as a hosting provider. Use at your own risk.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
