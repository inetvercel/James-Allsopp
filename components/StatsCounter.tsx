"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface Stat {
  value: string
  label: string
  sublabel?: string
}

const statsSet1: Stat[] = [
  { value: "13+", label: "Years Building Online" },
  { value: "20+", label: "Projects Launched" },
  { value: "Media", label: "Quoted Expert" },
  { value: "Explorer", label: "Business • Travel • AI" },
]

const statsSet2: Stat[] = [
  { value: "2013", label: "Started iNet Ventures" },
  { value: "£1M+", label: "Business Revenue" },
  { value: "Media", label: "Quoted Expert" },
  { value: "Still", label: "Building New Things" },
]

export function StatsCounter() {
  const [showFirstSet, setShowFirstSet] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstSet((prev) => !prev)
    }, 10000) // Switch every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const currentStats = showFirstSet ? statsSet1 : statsSet2

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">By The Numbers</span>
          </h2>
          <p className="text-xl text-slate-400">
            A decade of building, learning, and growing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-effect rounded-3xl p-12 border border-cyan-500/20">
          <AnimatePresence mode="wait">
            {currentStats.map((stat, index) => (
              <motion.div
                key={`${showFirstSet ? 'set1' : 'set2'}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="gradient-text">{stat.value}</span>
                </div>
                <p className="text-slate-300 font-semibold text-sm md:text-base">
                  {stat.label}
                </p>
                {stat.sublabel && (
                  <p className="text-slate-500 text-xs md:text-sm mt-1">
                    {stat.sublabel}
                  </p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
