import { PropsWithChildren, ReactNode } from "react"
import { Container } from "../Container"

interface Props {
  Header?: ReactNode
  Footer?: ReactNode
}

export const AppLayout = ({ children, Header, Footer }: PropsWithChildren<Props>) => {
  return (
    <Container variant="background">
      {Header}
      <Container as="main" variant="wrapper">
        {children}
      </Container>
      {Footer}
    </Container>
  )
}
