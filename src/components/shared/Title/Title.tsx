import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ElementType, PropsWithChildren } from "react"

interface Props {
  as?: ElementType
  className?: string
  variant?: "title" | "sub"
  lang?: string
}

const titleVariants = cva("text-slate-500", {
  variants: {
    variant: {
      title: "text-xl font-bold",
      sub: "text-lg font-medium",
    },
  },
})

export const Title = ({
  as: Component = "h1",
  children,
  className,
  variant = "title",
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Component className={cn(titleVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  )
}
