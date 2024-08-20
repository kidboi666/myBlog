import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ElementType, forwardRef, PropsWithChildren } from "react"

interface Props {
  as?: ElementType
  variant?: "body" | "description" | "caption"
  className?: string
}

const textVariants = cva("text-slate-600", {
  variants: {
    variant: {
      body: "text-base",
      description: "text-sm text-slate-500",
      caption: "text-xs text-slate-400",
    },
  },
})

export const Text = forwardRef<HTMLElement, PropsWithChildren<Props>>(
  ({ as: Component = "p", variant = "body", children, className, ...props }, ref) => {
    return (
      <Component ref={ref} className={cn(textVariants({ variant }), className)} {...props}>
        {children}
      </Component>
    )
  },
)
