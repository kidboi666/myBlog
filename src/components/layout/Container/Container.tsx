import cn from "@/src/lib/cn"
import { ComponentProps, ElementType, forwardRef, PropsWithRef } from "react"

interface Props extends ComponentProps<"div"> {
  className?: string
  as?: ElementType
}

export const Container = forwardRef<HTMLElement, PropsWithRef<Props>>(
  ({ as: Component = "div", children, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center rounded-3xl bg-white px-12 py-12 shadow-md xl:px-40",
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
