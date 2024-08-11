import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ElementType, PropsWithChildren } from "react"

interface Props {
  as?: ElementType
  className?: string
  variant?: "title" | "sub"
}

const titleVariants = cva("text-slate-800", {
  variants: {
    variant: {
      title: "text-xl font-semibold",
      sub: "text-lg font-medium",
    },
  },
})

export const Title = ({
  as: Component = "h1",
  children,
  className,
  variant = "title",
}: PropsWithChildren<Props>) => {
  return <Component className={cn(titleVariants({ variant }), className)}>{children}</Component>
}
