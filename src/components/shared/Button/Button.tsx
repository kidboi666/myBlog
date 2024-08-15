import { ComponentProps, PropsWithChildren } from "react"
import { cva } from "class-variance-authority"
import cn from "@/src/lib/cn"
import { Size, Spinner } from "../Spinner/Spinner"

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "teritory" | "icon"
  isLoading?: boolean
}

const buttonVariants = cva(
  "group flex items-center justify-center gap-2 rounded-full font-semibold text-white",
  {
    variants: {
      active: {
        primary: "bg-slate-800 px-6 py-1 hover:bg-slate-300 hover:text-slate-800",
        secondary: "text-slate-500 hover:underline",
        teritory: "",
        icon: "text-slate-500 hover:text-slate-600",
      },
      disabled: {
        primary: "bg-slate-200 px-6 py-1",
        secondary: "",
        teritory: "",
        icon: "",
      },
    },
  },
)

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  disabled,
  isLoading,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(
        buttonVariants(isLoading ? { disabled: variant } : { active: variant }),
        className,
      )}
      {...props}
    >
      {children}
      {isLoading && <Spinner size={Size.s} />}
    </button>
  )
}
