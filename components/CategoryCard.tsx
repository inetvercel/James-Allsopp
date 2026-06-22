"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
  delay: number
  onClick?: () => void
}

export function CategoryCard({ title, description, icon: Icon, color, delay, onClick }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className={`glass-effect hover:glow-border transition-all duration-300 group overflow-hidden relative`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${color} shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
