import { blogData } from "../../../app/lib/blog-data"
import BlogPostPageClient from "./BlogPostPageClient"

// Static generation için gerekli
export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostPageClient params={params} />
}
