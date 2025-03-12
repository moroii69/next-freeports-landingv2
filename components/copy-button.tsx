"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)
  const { toast } = useToast()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)

    toast({
      title: "Copied!",
      description: "Command copied to clipboard",
      duration: 2000,
    })

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className={cn(
        "absolute top-3 right-3 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
        className,
      )}
    >
      {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copy</span>
    </Button>
  )
}

