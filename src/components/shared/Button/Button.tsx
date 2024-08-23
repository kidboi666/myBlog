import { ComponentProps, ElementType, forwardRef, PropsWithRef } from "react"
import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { Size, Spinner } from "../Spinner/Spinner"

interface Props extends ComponentProps<"button"> {
  as?: ElementType
  variant?: "primary" | "secondary" | "teritory" | "icon" | "warn"
  isLoading?: boolean
  isSubmit?: boolean
}

const buttonVariants = cva(
  "group relative flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-sm font-semibold text-white transition",
  {
    variants: {
      active: {
        primary: "bg-blue-400 hover:bg-blue-500 active:bg-blue-600",
        secondary:
          "text-slate-500 ring-1 ring-slate-300 hover:bg-slate-300 hover:text-white active:bg-slate-400",
        teritory: "text-slate-500 hover:text-slate-600 hover:underline active:text-slate-400",
        icon: "p-4 text-slate-500 hover:bg-slate-300 hover:text-white",
        warn: "bg-red-500 text-white hover:bg-red-600",
      },
      disabled: {
        primary: "border-slate-300 bg-slate-300",
        secondary: "",
        teritory: "text-slate-200",
        icon: "",
        warn: "",
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
