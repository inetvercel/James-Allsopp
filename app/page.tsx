"use client"

import { motion } from "framer-motion"
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
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black relative">
      {/* Scan lines overlay */}
      <div className="fixed inset-0 scan-lines pointer-events-none z-50 opacity-30" />
      
      {/* Holographic gradient overlay */}
      <div className="fixed inset-0 holographic pointer-events-none z-40 opacity-50" />
      
      <Navigation />
      <Hero />
      
      {/* Unique Magazine-Style Categories Section */}
      <section className="container mx-auto px-4 py-32 relative">
        {/* Floating background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Split header */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase">What I'm About</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold leading-none"
              >
                Not Your<br />
                <span className="gradient-text">Typical Blog</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              Real experiences from running an SEO agency for 11 years, building AI products, 
              managing Type 2 Diabetes, and everything in between. No fluff, just what actually happened.
            </motion.p>
          </div>

          {/* Asymmetric content blocks */}
          <div className="space-y-6">
            {/* Row 1 - Business Hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-12 md:p-16 hover:border-cyan-500/40 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 max-w-3xl">
                <Briefcase className="w-16 h-16 text-cyan-400 mb-6" />
                <h3 className="text-4xl md:text-5xl font-bold mb-4">{categories[0].title}</h3>
                <p className="text-xl text-slate-400 mb-6">{categories[0].description}</p>
                <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
                  <span>Explore</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Row 2 - Two columns */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all duration-500"
              >
                <Brain className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{categories[1].title}</h3>
                <p className="text-slate-400">{categories[1].description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 p-8 hover:border-emerald-500/40 transition-all duration-500"
              >
                <Heart className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{categories[2].title}</h3>
                <p className="text-slate-400">{categories[2].description}</p>
              </motion.div>
            </div>

            {/* Row 3 - Three columns */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 p-6 hover:border-teal-500/40 transition-all duration-500"
              >
                <Camera className="w-10 h-10 text-teal-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">{categories[3].title}</h3>
                <p className="text-sm text-slate-400">{categories[3].description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 p-6 hover:border-orange-500/40 transition-all duration-500"
              >
                <MapPin className="w-10 h-10 text-orange-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">{categories[4].title}</h3>
                <p className="text-sm text-slate-400">{categories[4].description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-500/10 to-zinc-500/10 border border-slate-500/20 p-6 hover:border-slate-500/40 transition-all duration-500"
              >
                <Lightbulb className="w-10 h-10 text-slate-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">{categories[5].title}</h3>
                <p className="text-sm text-slate-400">{categories[5].description}</p>
              </motion.div>
            </div>

            {/* Row 4 - Two columns reversed */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-8 hover:border-rose-500/40 transition-all duration-500"
              >
                <TrendingUp className="w-12 h-12 text-rose-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{categories[6].title}</h3>
                <p className="text-slate-400">{categories[6].description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 p-8 hover:border-indigo-500/40 transition-all duration-500"
              >
                <Gamepad2 className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{categories[7].title}</h3>
                <p className="text-slate-400">{categories[7].description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Tools Section - Unique Design */}
      <section className="container mx-auto px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-cyan-400 font-mono text-sm tracking-wider uppercase"
              >
                Interactive Tools
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold mt-2"
              >
                Built for <span className="gradient-text">Real Use</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <Sparkles className="w-20 h-20 text-cyan-400/20" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Blood Sugar Tracker", desc: "Real-time glucose monitoring", color: "from-emerald-500 to-teal-500" },
              { name: "SEO Calculator", desc: "ROI & traffic projections", color: "from-cyan-500 to-blue-500" },
              { name: "Domain Analyzer", desc: "Value estimation & metrics", color: "from-blue-500 to-indigo-500" },
              { name: "Productivity Timer", desc: "Focus tracking & analytics", color: "from-orange-500 to-amber-500" },
            ].map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-500/30 p-8 bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-xl transition-all duration-500 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                      <span className="text-2xl">→</span>
                    </div>
                    <motion.div
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <span className="font-mono text-sm">Launch</span>
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-slate-400">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
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
