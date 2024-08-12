import cn from "@/src/lib/cn"
import { ComponentProps } from "react"

interface Props extends ComponentProps<"input"> {
  name: string
  className?: string
}

export const TextInput = ({ name, className, ...props }: Props) => {
  return <input id={name} className={cn(className)} {...props} />
}
