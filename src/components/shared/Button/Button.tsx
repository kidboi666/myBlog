import { ComponentProps, PropsWithChildren } from "react"
import { cva } from "class-variance-authority"
import cn from "@/src/lib/cn"

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "teritory" | "icon"
}

const buttonVariants = cva("group flex items-center rounded-full font-semibold text-white", {
  variants: {
    variant: {
      primary: "bg-slate-800 px-6 py-1 hover:bg-slate-300 hover:text-slate-800",
      secondary: "text-slate-500 hover:underline",
      teritory: "",
      icon: "text-slate-500 hover:text-slate-600",
    },
  },
})

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
