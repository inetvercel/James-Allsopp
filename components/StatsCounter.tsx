"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface Stat {
  value: string
  label: string
  sublabel?: string
}

const statsSet1: Stat[] = [
  { value: "13+", label: "Years", sublabel: "Building Online" },
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
    <section className="container mx-auto px-4 py-20 relative">
      {/* Background glow effects */}
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute right-1/4 top-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono mb-4">
            ACHIEVEMENTS
          </span>
        </motion.div>

        <div className="relative">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-black/40 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-cyan-500/10">
            <AnimatePresence mode="wait">
              {currentStats.map((stat, index) => (
                <motion.div
                  key={`${showFirstSet ? 'set1' : 'set2'}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-center relative group"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-xl transition-colors duration-300" />
                  
                  <div className="relative">
                    <div className="text-3xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-200">
                      {stat.value}
                    </div>
                    <div className="h-px w-12 mx-auto bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-2" />
                    <p className="text-slate-300 font-medium text-xs md:text-sm tracking-wide">
                      {stat.label}
                    </p>
                    {stat.sublabel && (
                      <p className="text-slate-500 text-xs mt-1 font-mono">
                        {stat.sublabel}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
