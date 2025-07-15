import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ModdingStation - Precision Cheats. Premium Protection.",
  description:
    "ModStation is a private software collective focused on delivering high-end, undetected game enhancements for competitive players. Trusted by 20,000+ users worldwide with 99% undetected rate.",
  keywords: [
    "ModStation",
    "game cheats",
    "valorant cheats",
    "rust cheats",
    "undetected cheats",
    "gaming software",
    "aimbot",
    "ESP",
    "HWID spoofer",
    "FiveM cheats",
    "premium cheats",
  ],
  authors: [{ name: "ModdingStation Team" }],
  creator: "ModdingStation",
  publisher: "ModdingStation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moddingstation.com",
    siteName: "ModdingStation",
    title: "ModdingStation - Premium Gaming Software",
    description:
      "🎮 Undetected Game Enhancements | 20,000+ Users Worldwide | 99% Success Rate | 24/7 Support | Valorant • Rust • FiveM • HWID Spoofer",
    images: [
      {
        url: "/images/discord-embed.png",
        width: 1200,
        height: 630,
        alt: "ModdingStation - Premium Gaming Software",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ModStation",
    creator: "@ModdingStation",
    title: "ModdingStation - Premium Gaming Software",
    description: "🎮 Undetected Game Enhancements | 20,000+ Users | 99% Success Rate | 24/7 Support",
    images: ["/images/background-animation.gif"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3B82F6",
      },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://moddingstation.com"),
  alternates: {
    canonical: "https://moddingstation.com",
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "technology",
  classification: "Gaming Software",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "theme-color": "#0F0F23",
    "color-scheme": "dark",
    "msapplication-TileColor": "#0F0F23",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Discord/Social Media Embed Optimization */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:alt" content="ModStation - Premium Gaming Software" />

        {/* Additional Discord-specific meta tags */}
        <meta property="discord:server" content="https://discord.gg/modstation" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/background-animation.gif" as="image" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//discord.gg" />
        <link rel="dns-prefetch" href="//t.me" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
