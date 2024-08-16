import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ElementType, PropsWithChildren } from "react"

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

export const Text = ({
  as: Component = "p",
  variant = "body",
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Component className={cn(textVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  )
}
