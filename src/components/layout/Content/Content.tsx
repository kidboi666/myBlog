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
    <Component className={cn("flex flex-col gap-2 rounded-md border p-2", className)}>
      <Title variant="sub">{title}</Title>
      {children}
    </Component>
  )
}
