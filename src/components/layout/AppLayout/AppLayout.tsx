import { PropsWithChildren, ReactNode } from "react"

interface Props {
  Header?: ReactNode
  Footer?: ReactNode
}

export const AppLayout = ({ children, Header, Footer }: PropsWithChildren<Props>) => {
  return (
    <div className="animate-moveGradient gradient-move">
      {Header}
      <main>{children}</main>
      {Footer}
    </div>
  )
}
