"use client"

import { Navigation } from "@/components/Navigation"
import { motion } from "framer-motion"
import { ExternalLink, Github, CheckCircle2, XCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "iNet Ventures",
      description: "Established SEO & Digital PR agency since 2013. Helping agencies and businesses scale through outreach, digital PR, link building and content marketing.",
      status: "active",
      technologies: ["SEO", "Digital PR", "Link Building", "Content Marketing"],
      url: "https://inetventures.com",
      lessons: "Building long-term client relationships and delivering consistent results is the foundation of a sustainable agency."
    },
    {
      title: "AskZyro",
      description: "AI assistant and productivity platform. An AI-powered assistant designed to help with business, productivity, content creation and everyday tasks.",
      status: "active",
      technologies: ["AI", "Next.js", "OpenAI", "Productivity"],
      url: "https://askzyro.com",
      lessons: "AI tools need to solve real problems, not just showcase technology. User experience matters more than features."
    },
    {
      title: "PS6News",
      description: "News, rumours and tracking for the next generation of PlayStation. Following PlayStation 6 developments, industry rumours, leaks and next-generation gaming news.",
      status: "active",
      technologies: ["WordPress", "Gaming News", "Content Strategy"],
      url: "https://ps6news.com",
      lessons: "Niche content sites can build dedicated audiences. Timing and consistency are everything."
    },
    {
      title: "GamerBolt",
      description: "Gaming news, guides and industry coverage. Covering gaming news, reviews, guides and industry developments across multiple platforms.",
      status: "active",
      technologies: ["WordPress", "Gaming", "Content Publishing"],
      url: "https://gamerbolt.com",
      lessons: "Quality content in competitive niches requires differentiation. Find your unique angle."
    },
    {
      title: "Click Travel Tips",
      description: "Travel planning, destinations and AI-powered travel tools. Travel inspiration, destination guides and AI-assisted trip planning resources.",
      status: "active",
      technologies: ["Travel", "AI Tools", "Content", "WordPress"],
      url: "https://clicktraveltips.com",
      lessons: "Combining AI with traditional content creates unique value. Users want both inspiration and practical tools."
    },
    {
      title: "Agile",
      description: "Business, technology and digital publishing platform. A long-running content and publishing project covering business, technology and related topics.",
      status: "active",
      technologies: ["Publishing", "Business Content", "WordPress"],
      url: "https://agile.org.uk",
      lessons: "Long-term content projects compound over time. Consistency beats intensity."
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />
      case "failed":
        return <XCircle className="w-5 h-5 text-red-500" />
      case "in-progress":
        return <Clock className="w-5 h-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active"
      case "failed":
        return "Failed"
      case "in-progress":
        return "In Progress"
      default:
        return status
    }
  }

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
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building digital products and businesses since 2013. Each project teaches something new.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-effect hover:glow-border transition-all duration-300 group h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(project.status)}
                        <span className="text-sm font-medium">
                          {getStatusText(project.status)}
                        </span>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                      <p className="text-sm text-muted-foreground italic">
                        "{project.lessons}"
                      </p>
                    </div>

                    {project.url && (
                      <div className="flex gap-2">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Visit Website
                          </Button>
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-cyan-500/20 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-3 gradient-text">JAMES ALLSOPP</h3>
                <p className="text-slate-400 text-sm">Building the future, one line at a time.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-cyan-400">Quick Links</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="/journal" className="hover:text-cyan-400 transition-colors">Journal</a></li>
                  <li><a href="/projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                  <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-cyan-400">Connect</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="https://twitter.com" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
                  <li><a href="https://linkedin.com" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                  <li><a href="https://github.com" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                © 2026 <span className="text-cyan-400 font-semibold">JAMES ALLSOPP</span>
                <span className="mx-2">•</span>
                <span className="font-mono">Powered by curiosity & caffeine</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
