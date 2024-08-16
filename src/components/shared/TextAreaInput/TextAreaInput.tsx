import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ComponentProps, PropsWithChildren } from "react"

interface Props extends ComponentProps<"textarea"> {
  className?: string
  variant?: "primary" | "secondary"
}

const textAreaInputVariants = cva("w-full rounded-lg px-2 py-2 text-sm outline-none ring-1", {
  variants: {
    variant: {
      primary: "rounded-lg focus:ring-blue-300",
      secondary: "bg-slate-100 ring-slate-100 focus:ring-slate-300",
    },
  },
})

export const TextAreaInput = ({
  children,
  className,
  variant = "primary",
  ...props
}: PropsWithChildren<Props>) => {
  return <textarea className={cn(textAreaInputVariants({ variant }), className)} {...props} />
}
