"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface StatProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  delay?: number
}

function AnimatedStat({ value, label, suffix = "", prefix = "", delay = 0 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const displayValue = useMotionValue(0)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value)
      }, delay)
    }
  }, [isInView, value, delay, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      displayValue.set(Math.round(latest))
    })
  }, [springValue, displayValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold mb-2">
        <span className="gradient-text">
          {prefix}
          <motion.span>{displayValue}</motion.span>
          {suffix}
        </span>
      </div>
      <p className="text-slate-400 text-lg">{label}</p>
    </motion.div>
  )
}

export function StatsCounter() {
  const currentYear = new Date().getFullYear()
  const yearsSince2013 = currentYear - 2013

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 glass-effect rounded-3xl p-12 border border-cyan-500/20">
          <AnimatedStat
            value={yearsSince2013}
            label="Years in Business"
            suffix="+"
            delay={200}
          />
          <AnimatedStat
            value={500}
            label="Projects Completed"
            suffix="+"
            delay={400}
          />
          <AnimatedStat
            value={100}
            label="Happy Clients"
            suffix="+"
            delay={600}
          />
        </div>
      </div>
    </section>
  )
}
