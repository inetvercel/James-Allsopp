"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface CategoryCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
  delay: number
  onClick?: () => void
}

export function CategoryCard({ title, description, icon: Icon, color, delay, onClick }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <Card className={`glass-effect hover:glow-border transition-all duration-300 group overflow-hidden relative h-full border-white/10 hover:border-cyan-500/30`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mouseXSpring}px ${mouseYSpring}px, rgba(6, 182, 212, 0.1), transparent 40%)`,
          }}
        />
        
        <CardContent className="p-6 md:p-8 relative z-10 h-full flex flex-col">
          <div className="flex items-start space-x-4 flex-1">
            <motion.div 
              className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                {title}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
