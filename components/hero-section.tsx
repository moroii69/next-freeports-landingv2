"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Terminal } from "@/components/ui/terminal"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  const [terminalLines, setTerminalLines] = useState<string[]>([])

  useEffect(() => {
    const lines = [
      "$ npx next-freeports list",
      "Scanning for active ports...",
      "PORT    PID     NAME",
      "3000    12345   next-dev",
      "5432    23456   postgres",
      "8080    34567   vite-dev",
      "$ _",
    ]

    let currentLineIndex = 0

    const interval = setInterval(() => {
      if (currentLineIndex < lines.length) {
        setTerminalLines((prev) => [...prev, lines[currentLineIndex]])
        currentLineIndex++
      } else {
        clearInterval(interval)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-primary/10 text-primary">
              Developer Tools
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Manage ports <span className="text-primary">effortlessly</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-[600px]">
              A modern CLI tool to list and kill processes running on specific ports. No more port conflicts, just
              smooth development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                MIT License
              </div>
              <div>v1.0.2</div>
              <div>100% JavaScript</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl opacity-70" />
            <Terminal lines={terminalLines} className="relative" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

