"use client"

import { motion } from "framer-motion"
import { Zap, Terminal, Shield, Cpu, Workflow, Layers, Sparkles, Gauge, Lightbulb } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Scan and kill ports in milliseconds with optimized system calls",
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Simple CLI",
    description: "Intuitive commands with helpful output and error messages",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safe Operations",
    description: "Confirmation prompts prevent accidental termination of critical processes",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Cross Platform",
    description: "Works on macOS, Linux, and Windows with consistent behavior",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Workflow Integration",
    description: "Easily integrate with npm scripts and development workflows",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Zero Dependencies",
    description: "Lightweight installation with no external dependencies",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Interactive Mode",
    description: "Select processes to terminate from an interactive list",
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Performance Monitoring",
    description: "View resource usage of processes running on ports",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Smart Suggestions",
    description: "Get recommendations for fixing common port conflicts",
  },
]

export function FeatureGrid() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Features for Developers</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            Everything you need to manage ports and processes during development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl border p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

