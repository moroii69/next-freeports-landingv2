"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple Pricing</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">Free forever</p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <Card className="border-primary/20">
            <CardHeader className="text-center pb-8 pt-6">
              <CardTitle className="text-3xl">Community Edition</CardTitle>
              <div className="mt-4 text-5xl font-bold">$0</div>
              <CardDescription className="mt-2">Free and open source forever</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "List active ports",
                  "Kill processes by port",
                  "Interactive selection mode",
                  "Cross-platform support",
                  "Multiple command aliases",
                  "Zero dependencies",
                  "MIT License",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full" asChild>
                <a href="https://www.npmjs.com/package/next-freeports" target="_blank" rel="noopener noreferrer">
                  Install Now
                </a>
              </Button>
              <p className="text-xs text-center text-muted-foreground">No credit card required. No strings attached.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

