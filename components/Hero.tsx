"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const avatarRotateX = useTransform(
    useMotionValue(mousePosition.y),
    [0, windowSize.height],
    [15, -15]
  )
  
  const avatarRotateY = useTransform(
    useMotionValue(mousePosition.x),
    [0, windowSize.width],
    [-15, 15]
  )

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      
      {/* Animated Star Field */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 3
          const duration = Math.random() * 3 + 2
          const delay = Math.random() * 2
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: size,
                height: size,
                background: `radial-gradient(circle, rgba(6, 182, 212, ${Math.random() * 0.8 + 0.2}) 0%, transparent 70%)`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </div>

      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            boxShadow: "0 0 20px 2px rgba(6, 182, 212, 0.8)",
          }}
          animate={{
            x: [0, -1000],
            y: [0, 500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 3,
            ease: "easeIn"
          }}
        />
      ))}

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Avatar Section - Follows Mouse */}
          <motion.div 
            className="relative w-64 h-64 lg:w-96 lg:h-96"
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              className="relative w-full h-full"
              style={{
                rotateX: avatarRotateX,
                rotateY: avatarRotateY,
                transformStyle: "preserve-3d",
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* 3D Avatar Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                  {/* Animated Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Profile Image */}
                  <motion.div
                    className="relative z-10 w-full h-full"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="https://cdn.sanity.io/images/iy5bneed/production/ef16b089d81e935d8248bf26e80188c8a9bb05c8-880x830.jpg"
                      alt="James Allsopp"
                      fill
                      className="object-cover rounded-full"
                      style={{ objectPosition: '50% 30%' }}
                      priority
                    />
                  </motion.div>
                  
                  {/* Orbiting Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: [0, Math.cos((i * Math.PI * 2) / 8) * 140],
                        y: [0, Math.sin((i * Math.PI * 2) / 8) * 140],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect mb-8 border border-cyan-500/20"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Entrepreneur • Builder • Explorer</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter">
              <motion.span 
                className="gradient-text inline-block neon-glow"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                James Allsopp
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl"
            >
              Running an SEO agency since 2013. Building with AI. Exploring life's interesting corners
              from Type 2 Diabetes to domain collecting, from Staffordshire to Malta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="text-lg group relative overflow-hidden px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all">
                <span className="relative z-10 font-semibold">Explore My World</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all">
                Latest Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
