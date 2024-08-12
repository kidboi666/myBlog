import cn from "@/src/lib/cn"
import { ElementType, PropsWithChildren } from "react"

interface Props {
  className?: string
  as?: ElementType
}

export const Container = ({
  as: Component = "div",
  children,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <Component
      className={cn(
        "grid h-full w-full items-center justify-center rounded-3xl bg-white px-4 shadow-lg xl:px-40",
        className,
      )}
    >
      {children}
    </Component>
  )
}
