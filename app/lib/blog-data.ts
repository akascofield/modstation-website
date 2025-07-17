export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  image: string
  featured: boolean
  status: string
}

export interface BlogData {
  posts: BlogPost[]
  categories: string[]
}

export const blogData: BlogData = {
  posts: [
    {
      id: 1,
      slug: "modstation-partnership-program-launch",
      title: "ModStation Partnership Program - Official Launch",
      excerpt:
        "Introducing our new partnership program for content creators, streamers, and influencers. Join our media program and earn exclusive benefits while promoting premium gaming software.",
      content: `# ModStation Partnership Program - Official Launch

We're thrilled to announce the launch of our comprehensive **Partnership Program** designed specifically for content creators, streamers, and influencers in the gaming community.

## 🎯 Program Overview

Our Media Program is designed to support content creators who want to showcase premium gaming software while earning exclusive benefits and commissions.

### Who Can Join?
- **Gaming Content Creators** with 1,000+ subscribers/followers
- **Streamers** with regular gaming content
- **Gaming Influencers** with engaged audiences
- **Tech Reviewers** focusing on gaming software

## 💰 Partnership Benefits

### Tier 1: Content Creator (1K-10K followers)
- **15% commission** on all sales through your link
- **Free product access** for review purposes
- **Priority customer support**
- **Monthly performance bonuses**

### Tier 2: Influencer (10K-100K followers)
- **20% commission** on all sales
- **Exclusive early access** to new products
- **Custom discount codes** for your audience
- **Dedicated account manager**

### Tier 3: Partner (100K+ followers)
- **25% commission** on all sales
- **Co-marketing opportunities**
- **Custom integration support**
- **Revenue sharing on exclusive content**

## 🛠️ What We Provide

### Marketing Materials
- High-quality product screenshots and videos
- Professional banners and graphics
- Product demonstration videos
- Technical specification sheets

### Technical Support
- Dedicated technical support team
- Priority bug fixes and feature requests
- Beta testing opportunities
- Direct developer communication

## 📞 Get Started Today

Ready to join the ModStation Partnership Program?

### Contact Information
- **Discord**: Join our partner channel
- **Email**: partnerships@modstation.com
- **Application Form**: Available in our Discord server
- **Support**: 24/7 partner support available

---

**Join thousands of successful partners already earning with ModStation. Apply today and start monetizing your gaming content!**`,
      author: "ModStation Team",
      date: "2025-01-17",
      category: "Media Program",
      tags: ["partnership", "content-creators", "streamers", "benefits"],
      image: "/images/valorant-ui.png",
      featured: true,
      status: "published",
    },
    {
      id: 2,
      slug: "valorant-esp-update-january-2025",
      title: "Valorant ESP System - Major Update",
      excerpt:
        "Enhanced ESP features with improved agent detection, new skill visualization, and better performance optimization. Our most comprehensive Valorant update yet.",
      content: `# Valorant ESP System - Major Update

We're excited to announce our biggest Valorant update yet! This release brings significant improvements to both our Full and Premium versions.

## 🎯 New Features

### Enhanced ESP System
- **Improved Agent Detection**: Better recognition of all agents with enhanced visual indicators
- **New Skill ESP**: Now shows Sage walls, Brimstone smokes, and Chamber traps with precise positioning
- **Distance Optimization**: ESP now works effectively up to 150m with improved performance

### Aimbot Improvements
- **Prediction Algorithm**: New prediction system for moving targets with 95% accuracy
- **Recoil Control**: Enhanced recoil compensation for all weapons
- **Smooth Aiming**: More natural mouse movement patterns to avoid detection

## 🔧 Technical Improvements

### Performance Optimization
- **30% faster rendering** for ESP elements
- **Reduced memory footprint** by 25%
- **Better multi-threading** for smoother gameplay
- **Optimized draw calls** for higher FPS

### Security Enhancements
- **Advanced obfuscation** techniques implemented
- **Runtime protection** against detection systems
- **Memory encryption** for sensitive data
- **Anti-debugging** measures strengthened

## 📊 Update Statistics

- **Detection Rate**: 0% in the last 30 days
- **Performance Impact**: Reduced from 12% to 8%
- **User Satisfaction**: 98.5% positive feedback
- **Stability**: 99.7% uptime across all servers

---

**This update is automatically available to all active subscribers. Restart your client to receive the latest version!**`,
      author: "Development Team",
      date: "2025-01-16",
      category: "Updates",
      tags: ["valorant", "esp", "update", "performance"],
      image: "/images/valorant-premium-ui.png",
      featured: true,
      status: "published",
    },
    {
      id: 3,
      slug: "reseller-program-expansion-2025",
      title: "Reseller Program Expansion - New Opportunities",
      excerpt:
        "We're expanding our reseller program with better commission rates, exclusive products, and enhanced support. Join the ModStation reseller network today.",
      content: `# Reseller Program Expansion - New Opportunities

## 🚀 Program Overview

We're excited to announce major expansions to our reseller program, offering better opportunities for our partners to grow their business with ModStation products.

## 💰 New Commission Structure

### Bronze Tier (0-50 sales/month)
- **20% commission** on all sales
- **Basic marketing materials**
- **Email support**
- **Monthly performance reports**

### Silver Tier (51-150 sales/month)
- **25% commission** on all sales
- **Advanced marketing materials**
- **Priority support**
- **Monthly bonuses**
- **Custom discount codes**

### Gold Tier (151+ sales/month)
- **30% commission** on all sales
- **Exclusive products access**
- **Dedicated account manager**
- **Custom pricing options**
- **Co-marketing opportunities**

## 🎯 New Benefits

### Marketing Support
- **Professional graphics package** with logos and banners
- **Product demonstration videos** for your audience
- **Technical specification sheets** for detailed presentations
- **Social media content templates** for easy posting

### Technical Resources
- **API access** for automated sales tracking
- **White-label solutions** for your brand
- **Custom integration support** for your platform
- **Real-time inventory management** system

---

**Join our growing network of successful resellers and start building your gaming business today!**`,
      author: "Business Team",
      date: "2025-01-15",
      category: "Reselling",
      tags: ["reseller", "business", "commission", "partnership"],
      image: "/images/dist.png",
      featured: false,
      status: "published",
    },
    {
      id: 4,
      slug: "valorant-installation-guide-2025",
      title: "Complete Valorant Cheat Installation Guide",
      excerpt:
        "Step-by-step tutorial for installing and configuring Valorant cheats. Includes troubleshooting tips, security settings, and optimization recommendations.",
      content: `# Complete Valorant Cheat Installation Guide

## 📋 Prerequisites

Before installing any Valorant cheat, ensure your system meets these requirements:

### System Requirements
- **Windows 10/11** (latest updates)
- **Secure Boot disabled** in BIOS
- **TPM 2.0** (if available)
- **Administrator privileges**
- **Stable internet connection**

### Security Preparations
- **Disable Windows Defender** temporarily during installation
- **Close all unnecessary programs** to avoid conflicts
- **Ensure Valorant is closed** before starting
- **Create system restore point** as precaution

## 🔧 Installation Steps

### Step 1: Download the Software
1. **Join our Discord server** and verify your membership
2. **Navigate to the download channel** for your product
3. **Enter your license key** in the verification bot
4. **Download from the secure link** provided (expires in 24 hours)
5. **Extract files** to a dedicated folder (avoid Program Files)

### Step 2: System Configuration
1. **Disable antivirus** temporarily (add folder to exclusions)
2. **Run Windows Update** to ensure latest system files
3. **Close Riot Vanguard** if running
4. **Restart your computer** to ensure clean state

### Step 3: Software Installation
1. **Run the loader as Administrator** (right-click → Run as administrator)
2. **Enter your license key** when prompted
3. **Select your preferred injection method** (recommended: Manual)
4. **Configure basic settings** (hotkeys, ESP preferences)
5. **Wait for successful injection confirmation**

## ⚠️ Troubleshooting

### Common Issues

#### Injection Failed
- **Solution**: Restart both Valorant and the cheat loader
- **Alternative**: Try different injection timing
- **Last resort**: Reinstall Valorant and try again

#### Overlay Not Showing
- **Check**: Windows Defender real-time protection disabled
- **Verify**: Correct DirectX version installed
- **Try**: Running in compatibility mode

---

**Remember: Always follow our guidelines and use the software responsibly. Happy gaming!**`,
      author: "Support Team",
      date: "2025-01-14",
      category: "Tutorials",
      tags: ["tutorial", "valorant", "installation", "guide"],
      image: "/images/valorant-gameplay.png",
      featured: false,
      status: "published",
    },
  ],
  categories: ["All", "News", "Updates", "Reselling", "Media Program", "Tutorials"],
}

export function getBlogPosts(): BlogPost[] {
  return blogData.posts.filter(post => post.status === 'published');
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogData.posts.find(post => post.slug === slug && post.status === 'published');
}

export function getFeaturedPosts(): BlogPost[] {
  return blogData.posts.filter(post => post.featured && post.status === 'published');
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return getBlogPosts();
  return blogData.posts.filter(post => post.category === category && post.status === 'published');
}

export function getCategories(): string[] {
  return blogData.categories;
}
