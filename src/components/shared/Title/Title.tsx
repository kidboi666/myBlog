import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ElementType, forwardRef, PropsWithChildren } from "react"

interface Props {
  as?: ElementType
  className?: string
  variant?: "title" | "sub" | "post" | "resume"
  lang?: string
}

const titleVariants = cva("text-slate-600 dark:text-slate-400", {
  variants: {
    variant: {
      title: "text-xl font-bold",
      sub: "text-lg font-medium",
      post: "text-4xl font-bold md:text-5xl xl:text-6xl",
      resume: "text-5xl font-medium",
    },
  },
})

export const Title = forwardRef<HTMLElement, PropsWithChildren<Props>>(
  ({ as: Component = "h1", children, className, variant = "title", ...props }, ref) => {
    return (
      <Component ref={ref} className={cn(titleVariants({ variant }), className)} {...props}>
        {children}
      </Component>
    )
  },
)
