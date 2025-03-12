"use client"

import { useEffect } from "react"

export function Analytics() {
  useEffect(() => {
    // Initialize Vercel Analytics
    window.va =
      window.va ||
      (() => {
        ;(window.vaq = window.vaq || []).push(arguments)
      })

    // Load the Vercel Analytics script
    const script = document.createElement("script")
    script.defer = true
    script.src = "/_vercel/insights/script.js"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}

