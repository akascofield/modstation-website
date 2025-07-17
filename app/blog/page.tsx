import BlogPageClient from "./BlogPageClient"

// Static generation için metadata
export const metadata = {
  title: "ModStation Blog - Latest Updates & News",
  description: "Stay updated with the latest product releases, security updates, and gaming insights from ModStation.",
}

// Static generation zorla
export const dynamic = "force-static"

export default function BlogPage() {
  return <BlogPageClient />
}
