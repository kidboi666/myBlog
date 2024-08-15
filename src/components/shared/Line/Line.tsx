import cn from "@/src/lib/cn"

interface Props {
  className?: string
}

export const Line = ({ className }: Props) => {
  return <div className={cn("w-full border border-slate-300", className)} />
}
