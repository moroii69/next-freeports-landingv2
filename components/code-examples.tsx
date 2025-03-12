"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyButton } from "@/components/copy-button"
import { motion } from "framer-motion"

const codeExamples = {
  install: [
    {
      label: "NPX",
      code: "npx next-freeports list",
      description: "Run without installation",
    },
    {
      label: "Global Install",
      code: "npm i -g next-freeports",
      description: "Install globally for faster execution",
    },
  ],
  usage: [
    {
      label: "List Ports",
      code: "next-freeports list",
      description: "List all active ports",
    },
    {
      label: "Kill Port",
      code: "next-freeports kill --port 3000",
      description: "Kill a specific port",
    },
    {
      label: "Interactive",
      code: "next-freeports kill",
      description: "Interactive mode",
    },
  ],
  aliases: [
    {
      label: "Short Alias",
      code: "npx kp list",
      description: "List active ports (short alias)",
    },
    {
      label: "Alternative",
      code: "npx killport list",
      description: "List active ports (alternative alias)",
    },
    {
      label: "Short Kill",
      code: "npx kp kill",
      description: "Interactive port killing (short alias)",
    },
    {
      label: "Alt Kill",
      code: "npx killport kill --port 3000",
      description: "Kill a specific port (alternative alias)",
    },
  ],
}

export function CodeExamples() {
  const [activeTab, setActiveTab] = useState("install")

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple Commands, Powerful Results</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            Get started in seconds with these easy-to-use commands
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="install" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="install">Installation</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="aliases">Aliases</TabsTrigger>
            </TabsList>

            {Object.entries(codeExamples).map(([key, examples]) => (
              <TabsContent key={key} value={key} className="mt-6 space-y-4">
                {examples.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative bg-muted rounded-lg border overflow-hidden"
                  >
                    <div className="flex justify-between items-center px-4 py-2 bg-muted/50 border-b">
                      <span className="text-sm font-medium">{example.description}</span>
                      <span className="text-xs text-muted-foreground">{example.label}</span>
                    </div>
                    <div className="p-4 font-mono text-sm relative group">
                      {example.code}
                      <CopyButton text={example.code} />
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

