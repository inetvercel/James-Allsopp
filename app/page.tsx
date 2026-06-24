"use client"

import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { CategoryCard } from "@/components/CategoryCard"
import { StatsCounter } from "@/components/StatsCounter"
import { 
  Briefcase, 
  Brain, 
  Heart, 
  MapPin, 
  Camera, 
  Lightbulb,
  TrendingUp,
  Gamepad2,
  Sparkles
} from "lucide-react"

export default function Home() {
  const categories = [
    {
      title: "Business & Entrepreneurship",
      description: "Running iNet Ventures SEO agency since 2013. Lessons from 10+ years in digital marketing, client acquisition, and building sustainable businesses.",
      icon: Briefcase,
      color: "from-cyan-400 to-blue-500",
      delay: 0.1
    },
    {
      title: "AI & Technology",
      description: "Building AskZyro and experimenting with AI tools. Exploring Vercel, modern web frameworks, and the future of development.",
      icon: Brain,
      color: "from-blue-500 to-cyan-400",
      delay: 0.2
    },
    {
      title: "Health & Diabetes",
      description: "Living with Type 2 Diabetes as an entrepreneur. Real experiences, blood sugar experiments, and what actually works.",
      icon: Heart,
      color: "from-emerald-400 to-teal-500",
      delay: 0.3
    },
    {
      title: "Travel & Photography",
      description: "Exploring Malta, UK trips, and capturing moments. Travel while managing health and running a business.",
      icon: Camera,
      color: "from-teal-400 to-cyan-500",
      delay: 0.4
    },
    {
      title: "Local Observations",
      description: "Life in Staffordshire and Cannock. Local photography, observations, and ideas for improvement.",
      icon: MapPin,
      color: "from-orange-400 to-amber-500",
      delay: 0.5
    },
    {
      title: "Projects & Experiments",
      description: "Failed projects, successful builds, and everything in between. Domain collecting, productivity hacks, and lessons learned.",
      icon: Lightbulb,
      color: "from-slate-400 to-zinc-500",
      delay: 0.6
    },
    {
      title: "Mental Health & Founder Life",
      description: "Stress, burnout, and mental health as a founder. Alcohol reduction experiments and finding balance.",
      icon: TrendingUp,
      color: "from-rose-400 to-pink-500",
      delay: 0.7
    },
    {
      title: "Gaming & GamerBolt",
      description: "Gaming insights through GamerBolt. The intersection of gaming, business, and entertainment.",
      icon: Gamepad2,
      color: "from-indigo-400 to-blue-500",
      delay: 0.8
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black">
      <Navigation />
      <Hero />
      
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Explore My World</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Not just another blog. A collection of experiences, experiments, and insights 
            from an entrepreneur's journey through business, technology, health, and life.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {/* Large card - Business */}
          <div className="md:col-span-2 lg:col-span-3 md:row-span-2">
            <CategoryCard {...categories[0]} />
          </div>
          
          {/* Medium cards */}
          <div className="md:col-span-2 lg:col-span-3">
            <CategoryCard {...categories[1]} />
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <CategoryCard {...categories[2]} />
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <CategoryCard {...categories[3]} />
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <CategoryCard {...categories[4]} />
          </div>
          
          {/* Large card - Projects */}
          <div className="md:col-span-2 lg:col-span-3 md:row-span-2">
            <CategoryCard {...categories[5]} />
          </div>
          
          <div className="md:col-span-2 lg:col-span-3">
            <CategoryCard {...categories[6]} />
          </div>
          
          <div className="md:col-span-4 lg:col-span-6">
            <CategoryCard {...categories[7]} />
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="container mx-auto px-4 py-20">
        <div className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
          <h3 className="text-3xl font-bold mb-4">Interactive Tools & Calculators</h3>
          <p className="text-muted-foreground mb-8">
            Beyond just reading - explore interactive tools for blood sugar tracking, 
            productivity analysis, domain valuation, and more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="glass-effect px-6 py-3 rounded-lg hover:glow-border transition-all cursor-pointer">
              Blood Sugar Tracker
            </div>
            <div className="glass-effect px-6 py-3 rounded-lg hover:glow-border transition-all cursor-pointer">
              SEO Calculator
            </div>
            <div className="glass-effect px-6 py-3 rounded-lg hover:glow-border transition-all cursor-pointer">
              Domain Analyzer
            </div>
            <div className="glass-effect px-6 py-3 rounded-lg hover:glow-border transition-all cursor-pointer">
              Productivity Timer
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 James Allsopp. Built with Next.js, Sanity, and a lot of curiosity.</p>
        </div>
      </footer>
    </main>
  )
}
