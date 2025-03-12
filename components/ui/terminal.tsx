"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TerminalProps {
  lines: string[]
  className?: string
}

export function Terminal({ lines, className }: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div className={cn("rounded-xl border bg-black/90 p-4 shadow-xl", className)}>
      <div className="flex items-center gap-1.5 mb-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div ref={terminalRef} className="font-mono text-sm text-green-400 h-[300px] overflow-auto">
        {lines.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

