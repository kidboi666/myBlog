import cn from "@/src/lib/cn"

interface Props {
  className?: string
  dot?: boolean
}

export const Line = ({ className, dot }: Props) => {
  return (
    <hr className={cn("w-full dark:border-slate-600", dot ? "border-dashed" : "", className)} />
  )
}
