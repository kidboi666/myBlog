import cn from "@/lib/cn"
import { cva } from "class-variance-authority"
import { ComponentProps, PropsWithChildren } from "react"

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "teritory"
}

const buttonVariants = cva("rounded-full px-6 py-1 text-white", {
  variants: {
    variant: {
      primary: "bg-slate-800 hover:bg-slate-300 hover:text-slate-800",
      secondary: "",
      teritory: "",
    },
  },
})

export const Button = ({ children, onClick, variant = "primary" }: PropsWithChildren<Props>) => {
  return (
    <button type="button" onClick={onClick} className={cn(buttonVariants({ variant }))}>
      {children}
    </button>
  )
}
