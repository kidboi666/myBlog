import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ComponentProps, PropsWithChildren } from "react"

interface Props extends ComponentProps<"textarea"> {
  className?: string
  variant?: "primary" | "secondary"
}

const textAreaInputVariants = cva(
  "w-full resize-none rounded-lg border px-2 py-2 text-base text-slate-600 outline-none transition dark:bg-slate-800 dark:text-slate-400",
  {
    variants: {
      variant: {
        primary: "border-0 px-0 text-sm",
        secondary:
          "border-slate-300 bg-slate-50 hover:bg-slate-100 focus:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:placeholder:text-slate-500 dark:hover:bg-slate-700 dark:focus:bg-slate-800",
      },
    },
  },
)

export const TextAreaInput = ({
  children,
  className,
  variant = "primary",
  ...props
}: PropsWithChildren<Props>) => {
  return <textarea className={cn(textAreaInputVariants({ variant }), className)} {...props} />
}
