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

const InputVaraints = cva("w-full rounded-lg border px-4 py-2 outline-none", {
  variants: {
    variant: {
      primary: "focus:border-slate-300",
      secondary: "border-slate-100 bg-slate-100 focus:border-slate-300",
    },
  },
})

export const TextInput = ({ className, register, error, variant = "primary", ...props }: Props) => {
  return (
    <>
      <input
        className={cn(InputVaraints({ variant }), className, error && "border-red-600")}
        {...register}
        {...props}
      />
      {error && <span className="mt-2 block text-xs text-red-600">{error.message}</span>}
    </>
  )
}
