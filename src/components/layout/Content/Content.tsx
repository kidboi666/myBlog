import cn from "@/src/lib/cn"
import { PropsWithChildren } from "react"

interface Props {
  className?: string
}

export const Content = ({ children, className }: PropsWithChildren<Props>) => {
  return <article className={cn("flex size-full flex-col", className)}>{children}</article>
}
