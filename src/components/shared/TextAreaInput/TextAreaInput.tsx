import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ComponentProps, PropsWithChildren } from "react"

interface Props extends ComponentProps<"textarea"> {
  className?: string
  variant?: "primary" | "secondary"
}

const textAreaInputVariants = cva("w-full rounded-lg border px-4 py-2 outline-none", {
  variants: {
    variant: {
      primary: "rounded-lg focus:border-slate-300",
      secondary: "border-slate-100 bg-slate-100 focus:border-slate-300",
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
