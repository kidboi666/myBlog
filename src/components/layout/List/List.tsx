import { ComponentProps, PropsWithChildren, RefObject } from "react"
import cn from "@/src/lib/cn"

interface Props extends ComponentProps<"ul"> {
  className?: string
  targetRef?: RefObject<HTMLUListElement>
  dataStatus?: string
}

export const List = ({
  children,
  className,
  dataStatus,
  targetRef,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <ul ref={targetRef} data-status={dataStatus} className={cn("list-none", className)} {...props}>
      {children}
    </ul>
  )
}

interface RowProps extends ComponentProps<"li"> {
  className?: string
  targetRef?: RefObject<HTMLLIElement>
}

List.Row = ({ children, className, targetRef, ...props }: PropsWithChildren<RowProps>) => {
  return (
    <li ref={targetRef} className={cn(className)} {...props}>
      {children}
    </li>
  )
}
