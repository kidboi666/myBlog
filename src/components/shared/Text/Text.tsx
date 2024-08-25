import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ElementType, forwardRef, PropsWithChildren } from "react"

interface Props {
  as?: ElementType
  variant?: "body" | "description" | "caption" | "error"
  className?: string
  dataStatus?: string
}

const textVariants = cva("text-slate-600 transition dark:text-slate-400", {
  variants: {
    variant: {
      body: "text-sm",
      description: "text-xs text-slate-500",
      caption: "text-xs text-slate-400 dark:text-slate-500",
      error: "mt-2 block text-xs text-red-600 dark:text-red-600",
    },
  },
})

export const Text = forwardRef<HTMLElement, PropsWithChildren<Props>>(
  ({ as: Component = "p", variant = "body", children, className, dataStatus, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        data-status={dataStatus}
        className={cn(textVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
