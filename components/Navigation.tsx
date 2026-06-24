"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const navHeight = useTransform(scrollY, [0, 100], [80, 64])
  const navBlur = useTransform(scrollY, [0, 100], [0, 20])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Journal", href: "/journal" },
    { label: "Projects", href: "/projects" },
    { label: "Media", href: "/media" },
    { label: "Tools", href: "/tools" },
    { label: "Travel", href: "/travel" },
    { label: "Timeline", href: "/timeline" },
    { label: "Experiments", href: "/experiments" },
    { label: "Recommendations", href: "/recommendations" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ 
        height: navHeight,
        backdropFilter: scrolled ? `blur(${navBlur}px)` : "blur(0px)",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10" : "glass-effect border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <a href="/">
            <motion.div
              whileHover={{ scale: 1.02, letterSpacing: "0.1em" }}
              transition={{ duration: 0.3 }}
              className="relative cursor-pointer group"
            >
              <div className="text-xl md:text-2xl font-bold tracking-wider">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white font-mono">
                  JAMES
                </span>
                <span className="mx-1 text-cyan-400/50">•</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 font-mono">
                  ALLSOPP
                </span>
              </div>
              {/* Underline glow effect on hover */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="/contact">
              <Button variant="outline" size="sm">
                Contact
              </Button>
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
