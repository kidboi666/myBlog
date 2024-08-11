import { ComponentProps, PropsWithChildren } from "react"
import cn from "@/src/lib/cn"

interface Props extends ComponentProps<"ul"> {
  className?: string
}

export const List = ({ children, className, ...props }: PropsWithChildren<Props>) => {
  return (
    <ul className={cn("list-none", className)} {...props}>
      {children}
    </ul>
  )
}

interface RowProps extends ComponentProps<"li"> {
  className?: string
}

List.Row = ({ children, className, ...props }: PropsWithChildren<RowProps>) => {
  return (
    <li className={cn(className)} {...props}>
      {children}
    </li>
  )
}
