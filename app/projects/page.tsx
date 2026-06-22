"use client"

import { Navigation } from "@/components/Navigation"
import { motion } from "framer-motion"
import { ExternalLink, Github, CheckCircle2, XCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "AskZyro",
      description: "AI-powered Q&A platform built with modern web technologies",
      status: "active",
      technologies: ["Next.js", "OpenAI", "Vercel", "TypeScript"],
      url: "#",
      github: "#",
      lessons: "Learning to ship fast and iterate based on real user feedback."
    },
    {
      title: "iNet Ventures",
      description: "SEO agency running since 2013, helping businesses grow online",
      status: "active",
      technologies: ["SEO", "Content Marketing", "Analytics"],
      url: "#",
      lessons: "Client acquisition is harder than delivery. Relationships matter more than tactics."
    },
    {
      title: "GamerBolt",
      description: "Gaming content and insights platform",
      status: "active",
      technologies: ["WordPress", "Content Strategy"],
      url: "#",
      lessons: "Niche content can build sustainable traffic over time."
    },
    {
      title: "Domain Portfolio",
      description: "Collection of premium domains acquired over the years",
      status: "in-progress",
      technologies: ["Domain Investment", "Branding"],
      lessons: "Some domains appreciate, most don't. Buy what you'd actually use."
    },
    {
      title: "Failed SaaS #1",
      description: "Productivity tool that never found product-market fit",
      status: "failed",
      technologies: ["React", "Node.js", "MongoDB"],
      lessons: "Built something I wanted, not what the market needed. Expensive lesson."
    },
    {
      title: "Failed SaaS #2",
      description: "Social media scheduling tool in an oversaturated market",
      status: "failed",
      technologies: ["Vue.js", "Firebase"],
      lessons: "Competition analysis matters. Don't compete on features alone."
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
              The good, the bad, and the lessons learned. Every failure teaches something valuable.
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

                    {(project.url || project.github) && (
                      <div className="flex gap-2">
                        {project.url && (
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Visit
                          </Button>
                        )}
                        {project.github && (
                          <Button variant="outline" size="sm" className="gap-2">
                            <Github className="w-4 h-4" />
                            Code
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 glass-effect rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Lessons from Failed Projects</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Failure isn't the opposite of success—it's part of the journey. Every failed project 
              taught me something that made the next one better. The key is to fail fast, learn faster, 
              and keep building.
            </p>
            <Button size="lg">
              Read Full Story
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
