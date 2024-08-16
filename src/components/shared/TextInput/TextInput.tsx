import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface Props extends ComponentProps<"input"> {
  className?: string
  register?: UseFormRegisterReturn
  error?: FieldError
  variant?: "primary" | "secondary"
}

const InputVaraints = cva(
  "w-full rounded-lg px-2 py-2 text-sm outline-none ring-1 ring-slate-300",
  {
    variants: {
      variant: {
        primary: "focus:ring-slate-300",
        secondary: "bg-slate-100 ring-slate-100 focus:ring-slate-300",
      },
    },
  },
)

export const TextInput = ({ className, register, error, variant = "primary", ...props }: Props) => {
  return (
    <>
      <input
        className={cn(InputVaraints({ variant }), className, error && "ring-red-600")}
        {...register}
        {...props}
      />
      {error && <span className="mt-2 block text-xs text-red-600">{error.message}</span>}
    </>
  )
}
