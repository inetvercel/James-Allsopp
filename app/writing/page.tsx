"use client"

import { Navigation } from "@/components/Navigation"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function WritingPage() {
  const posts = [
    {
      title: "What Running a Business With Type 2 Diabetes Has Taught Me",
      excerpt: "Real talk about managing health while building companies. The lessons nobody tells you about.",
      category: "Health",
      date: "Jun 2024",
      readTime: "8 min read",
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Why Getting Clients is Harder Than People Think",
      excerpt: "10+ years of SEO agency experience distilled into what actually works for client acquisition.",
      category: "Business",
      date: "Jun 2024",
      readTime: "12 min read",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Building AskZyro: AI Experiments That Actually Work",
      excerpt: "What I learned building an AI product with Vercel and modern tools.",
      category: "AI & Technology",
      date: "May 2024",
      readTime: "10 min read",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "The Domain Collecting Habit: Wins and Regrets",
      excerpt: "Hundreds of domains later, here's what I wish I knew before starting.",
      category: "Entrepreneurship",
      date: "May 2024",
      readTime: "6 min read",
      color: "from-orange-400 to-amber-500"
    },
    {
      title: "Cannock Through a Photographer's Lens",
      excerpt: "Local observations and photography from Staffordshire.",
      category: "Local",
      date: "Apr 2024",
      readTime: "5 min read",
      color: "from-teal-400 to-cyan-500"
    },
    {
      title: "Mental Health as a Solo Founder: What Helped",
      excerpt: "Stress, burnout, and finding balance. The real story.",
      category: "Mental Health",
      date: "Apr 2024",
      readTime: "9 min read",
      color: "from-rose-400 to-pink-500"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Writing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on business, technology, health, and everything in between.
              Real experiences, no fluff.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-lg glass-effect border border-white/10 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-effect hover:glow-border transition-all duration-300 group cursor-pointer h-full">
                  <CardHeader>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${post.color} text-white`}>
                      {post.category}
                    </div>
                    <CardTitle className="group-hover:gradient-text transition-all duration-300">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
