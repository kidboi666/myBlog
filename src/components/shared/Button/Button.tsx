import { ComponentProps, ElementType, forwardRef, PropsWithRef } from "react"
import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { Size, Spinner } from "../Spinner/Spinner"

interface Props extends ComponentProps<"button"> {
  as?: ElementType
  variant?: "primary" | "secondary" | "teritory" | "icon"
  isLoading?: boolean
  isSubmit?: boolean
}

const buttonVariants = cva(
  "group flex items-center justify-center gap-2 rounded-lg text-sm font-semibold text-white transition",
  {
    variants: {
      active: {
        primary: "bg-blue-400 px-6 py-2 hover:bg-blue-500",
        secondary:
          "px-6 py-2 text-slate-500 ring-1 ring-slate-300 hover:bg-slate-300 hover:text-white",
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

export const Button = forwardRef<HTMLButtonElement, PropsWithRef<Props>>(
  (
    { children, onClick, variant = "primary", className, disabled, isLoading, isSubmit, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
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
  },
)
