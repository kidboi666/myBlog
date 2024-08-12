import cn from "@/src/lib/cn"
import { ComponentProps, ElementType, PropsWithChildren } from "react"

interface Props extends ComponentProps<"div"> {
  className?: string
  as?: ElementType
}

export const Container = ({
  as: Component = "div",
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Component
      className={cn(
        "grid h-full w-full items-center justify-center rounded-3xl bg-white p-12 shadow-md xl:px-40",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
