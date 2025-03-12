"use client"

import { useEffect, useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Terminal, Book, Github, Package, Heart, HelpCircle, Home, Sparkles, Zap } from "lucide-react"

export function CommandMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
        <button
          onClick={() => setOpen(true)}
          className="bg-muted/80 backdrop-blur-sm text-muted-foreground hover:text-foreground rounded-full px-3 py-2 text-sm flex items-center gap-2 shadow-lg border transition-colors"
        >
          <span>Press</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}>
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Features</span>
            </CommandItem>
            <CommandItem onSelect={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}>
              <Terminal className="mr-2 h-4 w-4" />
              <span>Interactive Demo</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Documentation">
            <CommandItem>
              <Book className="mr-2 h-4 w-4" />
              <span>Documentation</span>
            </CommandItem>
            <CommandItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>FAQ</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            <CommandItem onSelect={() => window.open("https://www.npmjs.com/package/next-freeports", "_blank")}>
              <Package className="mr-2 h-4 w-4" />
              <span>NPM Package</span>
            </CommandItem>
            <CommandItem onSelect={() => window.open("https://github.com/moroii69", "_blank")}>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub Repository</span>
            </CommandItem>
            <CommandItem>
              <Heart className="mr-2 h-4 w-4" />
              <span>Sponsor</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Commands">
            <CommandItem>
              <Zap className="mr-2 h-4 w-4" />
              <span>npx next-freeports list</span>
            </CommandItem>
            <CommandItem>
              <Zap className="mr-2 h-4 w-4" />
              <span>npx next-freeports kill</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

