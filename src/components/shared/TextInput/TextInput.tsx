import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface Props extends ComponentProps<"input"> {
  className?: string
  register?: UseFormRegisterReturn
  error?: FieldError
  variant?: "primary" | "search"
}

const searchVariants = cva("border px-2 py-2 outline-none", {
  variants: {
    variant: {
      primary: "w-full rounded-lg focus:border-slate-300",
      search: "size-full rounded-3xl border-slate-100 bg-slate-100 pl-9 focus:border-slate-300",
    },
  },
})

export const TextInput = ({ className, register, error, variant = "primary", ...props }: Props) => {
  return (
    <>
      <input
        className={cn(searchVariants({ variant }), className, error && "border-red-600")}
        {...register}
        {...props}
      />
      <span className="mt-2 block text-xs text-red-600">{error && error.message}</span>
    </>
  )
}
