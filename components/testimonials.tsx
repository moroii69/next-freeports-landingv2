"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "next-freeports has become an essential part of my development workflow. No more 'port already in use' errors!",
    author: "Sarah Johnson",
    role: "Senior Frontend Developer",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "The interactive mode is a game-changer. I can quickly see and kill processes without memorizing PIDs.",
    author: "Michael Chen",
    role: "Full Stack Engineer",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "I use this tool daily. It's simple, fast, and does exactly what it promises.",
    author: "Emma Rodriguez",
    role: "DevOps Engineer",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "The best port management tool I've used. Clean interface and reliable performance.",
    author: "David Kim",
    role: "Software Architect",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function Testimonials() {
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
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Loved by Developers</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            See what others are saying about next-freeports
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="border-t pt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

