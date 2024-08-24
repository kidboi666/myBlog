import cn from "@/src/lib/cn"

interface Props {
  className?: string
}

export const Line = ({ className }: Props) => {
  return <hr className={cn("w-full dark:border-slate-600", className)} />
}
