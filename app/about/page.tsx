"use client"

import { Navigation } from "@/components/Navigation"
import { motion } from "framer-motion"
import { Briefcase, Heart, MapPin, Mail, Twitter, Linkedin, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-4xl font-bold"
            >
              JA
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">James Allsopp</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Entrepreneur • SEO Specialist • AI Builder • Type 2 Diabetic • Domain Collector
            </p>
          </div>

          <Card className="glass-effect mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I've been running <strong>iNet Ventures</strong>, an SEO agency, since 2013. 
                  Over the years, I've helped dozens of businesses grow their online presence 
                  and learned that client acquisition is often harder than the actual work.
                </p>
                <p>
                  Currently building <strong>AskZyro</strong>, an AI-powered platform, while 
                  exploring the intersection of modern web technologies and practical business applications. 
                  I'm fascinated by what we can build with tools like Vercel, Next.js, and AI APIs.
                </p>
                <p>
                  Living in <strong>Staffordshire</strong> with Type 2 Diabetes has taught me 
                  to balance entrepreneurship with health management. It's not always easy, but 
                  it's given me unique perspectives on productivity, stress management, and what 
                  really matters.
                </p>
                <p>
                  I also run <strong>GamerBolt</strong>, collect domains (some good decisions, 
                  many regrets), and occasionally travel to Malta when I can step away from the keyboard.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Briefcase className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <h3 className="font-bold mb-2">Business</h3>
                <p className="text-sm text-muted-foreground">
                  10+ years in SEO and digital marketing
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 mx-auto mb-3 text-red-400" />
                <h3 className="font-bold mb-2">Health</h3>
                <p className="text-sm text-muted-foreground">
                  Managing Type 2 Diabetes as a founder
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-green-400" />
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Based in Staffordshire, UK
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-effect mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">What I Write About</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2 text-blue-400">Business & Entrepreneurship</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Running an SEO agency</li>
                    <li>• Client acquisition strategies</li>
                    <li>• Business lessons learned</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-purple-400">AI & Technology</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Building with AI tools</li>
                    <li>• Modern web development</li>
                    <li>• Tech experiments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-red-400">Health & Wellness</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Type 2 Diabetes management</li>
                    <li>• Founder mental health</li>
                    <li>• Work-life balance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-green-400">Life & Observations</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Travel and photography</li>
                    <li>• Local Staffordshire insights</li>
                    <li>• Random interesting things</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                Always happy to chat about SEO, AI, entrepreneurship, or health management.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Button>
                <Button variant="outline" className="gap-2">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Button>
                <Button variant="outline" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
