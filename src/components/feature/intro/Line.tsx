import cn from "@/src/lib/cn"
import { useState } from "react"

interface Props {
  className?: string
}

export const Line = ({ className }: Props) => {
  const [isUnMount, setUnMount] = useState(false)
  return (
    <div
      onAnimationEnd={() => setUnMount(true)}
      className={cn(
        "animate-growUp sticky top-0 z-50 border-8 border-dashed border-slate-800",
        className,
      )}
    />
  )
}
