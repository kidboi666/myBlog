import { PropsWithChildren, ReactNode } from "react"
import { Container } from "../Container"

interface Props {
  Header?: ReactNode
  Footer?: ReactNode
}

export const AppLayout = ({ children, Header, Footer }: PropsWithChildren<Props>) => {
  return (
    <Container variant="background">
      {/* // <Container
    //   variant="background"
    //   className="relative flex min-h-dvh animate-moveGradient flex-col overflow-hidden gradient-move"
    // > */}
      {Header}
      <Container as="main" variant="wrapper">
        {children}
      </Container>
      {Footer}
    </Container>
  )
}
