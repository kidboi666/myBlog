import cn from "@/src/lib/cn"
import { PropsWithChildren, ReactNode } from "react"

interface Props {
  Header?: ReactNode
  Footer?: ReactNode
  className?: string
}

export const AppLayout = ({ children, Header, Footer, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        "relative flex min-h-dvh animate-moveGradient flex-col overflow-hidden gradient-move",
        className,
      )}
    >
      {Header}
      <main
        className={cn("flex w-full flex-1 flex-col items-center justify-center md:px-12 xl:px-40")}
      >
        {children}
      </main>
      {Footer}
    </div>
  )
}
