import type { ReactNode } from "react"

interface SectionHeadingProps {
  icon: ReactNode
  title: string
}

export function SectionHeading({ icon, title }: SectionHeadingProps) {
  return (
    <h2 className="text-xl font-semibold flex items-center gap-3 mb-4">
      <span className="text-primary opacity-80">{icon}</span>
      {title}
    </h2>
  )
}

