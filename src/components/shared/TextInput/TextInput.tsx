import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import { Text } from "../Text/Text"

interface Props extends ComponentProps<"input"> {
  className?: string
  register?: UseFormRegisterReturn
  error?: FieldError
  variant?: "primary" | "secondary" | "auth" | "tags"
}

const InputVaraints = cva(
  "w-full rounded-lg border border-slate-300 px-2 py-2 text-sm text-slate-600 outline-none transition",
  {
    variants: {
      variant: {
        primary: "border-0 px-0",
        secondary: "border-slate-300 bg-slate-50 hover:bg-slate-100 focus:bg-slate-100",
        auth: "border-slate-300",
        tags: "",
      },
    },
  },
)

export const TextInput = ({ className, register, error, variant = "primary", ...props }: Props) => {
  return (
    <>
      <input
        className={cn(InputVaraints({ variant }), className, error && "border-red-600")}
        {...register}
        {...props}
      />
      {error && (
        <Text as="span" variant="error">
          {error.message}
        </Text>
      )}
    </>
  )
}
