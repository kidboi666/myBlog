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
      resume:
        "sticky top-[142px] w-fit bg-white/80 text-3xl font-medium ring-4 ring-white backdrop-blur-sm md:top-[196px] md:text-5xl dark:bg-slate-800/60 dark:ring-slate-800",
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
