import { PropsWithChildren, ReactNode } from "react"
import cn from "@/src/lib/cn"
import { Container } from "../Container"

interface Props {
  Header?: ReactNode
  Footer?: ReactNode
}

export const AppLayout = ({ children, Header, Footer }: PropsWithChildren<Props>) => {
  const isDevelop = process.env.NODE_ENV === "development"
  // 그라데이션 애니메이션 켜지면 내 오래된 맥북 터질것 같음
  return (
    <Container variant="background" className={cn(isDevelop ? "" : "animate-moveGradient")}>
      {Header}
      <Container as="main" variant="wrapper">
        {children}
      </Container>
      {Footer}
    </Container>
  )
}
