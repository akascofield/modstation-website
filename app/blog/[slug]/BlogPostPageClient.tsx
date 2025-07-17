"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "../../../navbar"
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogData } from "../../../app/lib/blog-data"

export default function BlogPostPageClient({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Replace the entire useEffect with:
  useEffect(() => {
    // Find the specific post by slug
    const foundPost = blogData.posts.find((p: any) => p.slug === params.slug && p.status === "published")

    if (foundPost) {
      setPost(foundPost)

      // Get related posts from the same category
      const related = blogData.posts
        .filter((p: any) => p.id !== foundPost.id && p.category === foundPost.category && p.status === "published")
        .slice(0, 2)

      setRelatedPosts(related)
    }

    setLoading(false)
  }, [params.slug])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const sharePost = async () => {
    try {
      // Check if Web Share API is supported and available
      if (navigator.share && typeof navigator.share === "function") {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      }
    } catch (error) {
      // Handle any errors (permission denied, user cancelled, etc.)
      console.log("Share failed:", error)

      // Always fallback to clipboard copy
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      } catch (clipboardError) {
        // Final fallback if clipboard also fails
        console.log("Clipboard failed:", clipboardError)

        // Create a temporary input element to copy the URL
        const tempInput = document.createElement("input")
        tempInput.value = window.location.href
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand("copy")
        document.body.removeChild(tempInput)
        alert("Link copied to clipboard!")
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gaming-black">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading blog post...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gaming-black">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gaming-black">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gaming-darkGray to-gaming-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button
                variant="outline"
                className="mb-8 border-blue-900/20 text-gray-300 hover:border-blue-500/50 hover:text-white bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg overflow-hidden mb-8">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">{post.category}</span>
              <Button
                onClick={sharePost}
                variant="outline"
                size="sm"
                className="ml-auto border-blue-900/20 text-gray-300 hover:border-blue-500/50 hover:text-white bg-transparent"
              >
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-sm text-gray-400 bg-gaming-black px-3 py-1 rounded-full"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gaming-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-blue max-w-none">
              <div
                className="text-gray-300 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/^# /gm, '<h1 class="text-3xl font-bold text-white mb-4 mt-8">')
                    .replace(/^## /gm, '<h2 class="text-2xl font-semibold text-white mb-3 mt-6">')
                    .replace(/^### /gm, '<h3 class="text-xl font-medium text-blue-400 mb-2 mt-4">')
                    .replace(/^- /gm, '<li class="ml-4">')
                    .replace(/^\d+\. /gm, '<li class="ml-4 list-decimal">')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="text-blue-400">$1</em>')
                    .replace(/`(.*?)`/g, '<code class="bg-gaming-darkGray px-2 py-1 rounded text-blue-400">$1</code>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/^(?!<[h|l])/gm, '<p class="mb-4">')
                    .replace(/<\/h[123]>/g, "</h1></h2></h3>"),
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gaming-darkGray to-gaming-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost: any) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <article className="bg-gaming-black border border-blue-900/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                      <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 overflow-hidden">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(relatedPost.date)}
                          </span>
                          <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                            {relatedPost.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
