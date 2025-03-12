"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, Github, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Terminal className="h-5 w-5" />
          <span>next-freeports</span>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="#features"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#demo"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <Link
              href="#docs"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="https://www.npmjs.com/package/next-freeports"
              target="_blank"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NPM
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button variant="outline" asChild className="justify-center">
                <Link href="https://github.com" target="_blank" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
              </Button>
              <Button className="justify-center">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

