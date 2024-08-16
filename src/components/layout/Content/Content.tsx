import cn from "@/src/lib/cn"
import { ElementType, PropsWithChildren } from "react"
import { Title } from "../../shared/Title"

interface Props {
  as?: ElementType
  className?: string
  title: string
}

export const Content = ({
  title,
  children,
  className,
  as: Component = "div",
}: PropsWithChildren<Props>) => {
  return (
    <Component className={cn("rounded-md p-2 ring-1 ring-slate-200", className)}>
      <Title variant="sub">{title}</Title>
      {children}
    </Component>
  )
}
