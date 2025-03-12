"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does next-freeports work?",
    answer:
      "next-freeports scans your system for processes listening on specific ports. When you request to kill a port, it identifies the process ID (PID) associated with that port and safely terminates it.",
  },
  {
    question: "Is it safe to kill processes this way?",
    answer:
      "Yes, next-freeports uses the same system commands that you would use manually to terminate processes. In interactive mode, it shows you details about each process before termination, allowing you to make informed decisions.",
  },
  {
    question: "Does it work on all operating systems?",
    answer:
      "Yes, next-freeports is cross-platform and works on macOS, Linux, and Windows with consistent behavior and commands.",
  },
  {
    question: "Can I use it in my CI/CD pipeline?",
    answer:
      "next-freeports can be integrated into scripts and CI/CD pipelines to ensure ports are freed before starting new services.",
  },
]

export function FAQ() {
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
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            Everything you need to know about next-freeports
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

