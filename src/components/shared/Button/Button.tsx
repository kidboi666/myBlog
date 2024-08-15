import { ComponentProps, PropsWithChildren } from "react"
import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { Size, Spinner } from "../Spinner/Spinner"

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "teritory" | "icon"
  isLoading?: boolean
  isSubmit?: boolean
}

const buttonVariants = cva(
  "group flex items-center justify-center gap-2 rounded-full border border-slate-800 font-semibold text-white hover:border-slate-300",
  {
    variants: {
      active: {
        primary: "bg-slate-800 px-6 py-2 hover:bg-slate-300 hover:text-slate-800",
        secondary: "border-slate-300 px-6 py-2 text-slate-500 hover:bg-slate-300 hover:text-white",
        teritory: "border-none text-slate-500 hover:text-slate-600 hover:underline",
        icon: "border-none text-slate-500 hover:text-slate-600",
      },
      disabled: {
        primary: "border-slate-300 bg-slate-300 px-6 py-2",
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
  isSubmit,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(
        buttonVariants(isLoading || disabled ? { disabled: variant } : { active: variant }),
        className,
      )}
      {...props}
    >
      {children}
      {isLoading && <Spinner size={Size.s} />}
    </button>
  )
}
