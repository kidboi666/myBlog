import cn from "@/src/lib/cn"
import { ComponentProps, ElementType, forwardRef, PropsWithRef } from "react"

interface Props extends ComponentProps<"div"> {
  className?: string
  as?: ElementType
  dataStatus?: string
}

export const Container = forwardRef<HTMLElement, PropsWithRef<Props>>(
  ({ as: Component = "div", dataStatus, children, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        data-status={dataStatus}
        className={cn(
          "flex h-full w-full items-center justify-center rounded-3xl bg-white px-4 py-12 shadow-md md:px-12",
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

// #06b6d4 0%, #3b82f6 25%, #3b82f6 50%, #06b6d4 75%, #3b82f6 100%)
