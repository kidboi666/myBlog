import { useState } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import cn from "@/src/lib/cn"
import { ISignUpForm } from "@/src/models/auth"
import { TextInput } from "../../shared/TextInput"
import { Text } from "../../shared/Text"

interface Props {
  name: string
  type: keyof ISignUpForm
  dirtyField?: boolean
  register: UseFormRegisterReturn
  error?: FieldError
}

export const AuthForm = ({ name, type, dirtyField, register, error }: Props) => {
  const [isFocus, setFocus] = useState(false)

  return (
    <label
      htmlFor={type}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className="relative"
    >
      <Text
        variant="caption"
        className={cn(
          "pointer-events-none absolute left-2 translate-y-[11px] px-2",
          isFocus || dirtyField ? "-translate-y-2 bg-white dark:bg-slate-800" : "",
        )}
      >
        {name}
      </Text>
      <TextInput
        variant="auth"
        type={type === "passwordConfirmation" ? "password" : type}
        error={error}
        register={register}
      />
    </label>
  )
}
