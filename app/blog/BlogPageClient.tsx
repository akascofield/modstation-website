"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "../../navbar"
import { Calendar, User, Tag, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { blogData, type BlogPost } from "../../lib/blog-data"

export default function BlogPageClient() {
  const [blogDataState, setBlogData] = useState<{ posts: BlogPost[]; categories: string[] }>({
    posts: [],
    categories: [],
  })
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setBlogData(blogData)
    setFilteredPosts(blogData.posts.filter((post) => post.status === "published"))
    setLoading(false)
  }, [])

  useEffect(() => {
    let filtered = blogDataState.posts.filter((post) => post.status === "published")

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredPosts(filtered)
  }, [selectedCategory, searchTerm, blogDataState.posts])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  if (loading) {
    return (
      <div className="min-h-screen bg-gaming-black">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading blog posts...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gaming-black">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gaming-darkGray to-gaming-accent py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ModStation{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest product releases, security updates, and gaming insights from the ModStation
              team.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gaming-black border-blue-900/20 text-white placeholder-gray-400 focus:border-blue-500"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {blogDataState.categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "border-blue-900/20 text-gray-300 hover:border-blue-500/50 hover:text-white"
                    }`}
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gaming-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}/`}>
                  <article className="bg-gradient-to-br from-gaming-darkGray to-gaming-accent border border-blue-900/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs text-gray-400 bg-gaming-black px-2 py-1 rounded-full"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gradient-to-br from-gaming-darkGray to-gaming-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}/`}>
                <article className="bg-gaming-black border border-blue-900/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-gray-400 bg-gaming-darkGray px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No blog posts found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                }}
                className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

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
