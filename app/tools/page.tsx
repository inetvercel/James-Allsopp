"use client"

import { Navigation } from "@/components/Navigation"
import { motion } from "framer-motion"
import { Activity, Calculator, Globe, Timer, TrendingUp, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ToolsPage() {
  const tools = [
    {
      title: "Blood Sugar Tracker",
      description: "Track and analyze your blood glucose levels with real-time insights",
      icon: Activity,
      color: "from-emerald-400 to-teal-500",
      href: "/tools/blood-sugar",
      category: "Health"
    },
    {
      title: "SEO ROI Calculator",
      description: "Calculate the potential return on investment for SEO campaigns",
      icon: TrendingUp,
      color: "from-cyan-400 to-blue-500",
      href: "/tools/seo-calculator",
      category: "Business"
    },
    {
      title: "Domain Value Estimator",
      description: "Get an estimate of your domain's potential market value",
      icon: Globe,
      color: "from-blue-500 to-cyan-400",
      href: "/tools/domain-analyzer",
      category: "Business"
    },
    {
      title: "Productivity Timer",
      description: "Pomodoro-style timer with analytics and focus tracking",
      icon: Timer,
      color: "from-teal-400 to-cyan-500",
      href: "/tools/productivity-timer",
      category: "Productivity"
    },
    {
      title: "Content Idea Generator",
      description: "AI-powered content ideas based on your niche and keywords",
      icon: Zap,
      color: "from-orange-400 to-amber-500",
      href: "/tools/content-generator",
      category: "Technology"
    },
    {
      title: "Freelance Rate Calculator",
      description: "Calculate your ideal hourly or project rates based on expenses",
      icon: Calculator,
      color: "from-slate-400 to-zinc-500",
      href: "/tools/rate-calculator",
      category: "Business"
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
              <span className="gradient-text">Interactive Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free tools and calculators built from real-world needs. 
              No signup required, no data collected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={tool.href}>
                    <Card className="glass-effect hover:glow-border transition-all duration-300 group cursor-pointer h-full">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-xs font-medium text-muted-foreground mb-2">
                          {tool.category}
                        </div>
                        <CardTitle className="group-hover:gradient-text transition-all duration-300">
                          {tool.title}
                        </CardTitle>
                        <CardDescription>
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                          Try it now →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 p-8 glass-effect rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Why These Tools?</h3>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
              Each tool solves a problem I've personally faced as an entrepreneur. 
              From tracking health metrics to calculating business decisions, these are the 
              utilities I wish existed when I needed them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Free Forever</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">0</div>
                <div className="text-sm text-muted-foreground">Data Collected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Uses Allowed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
