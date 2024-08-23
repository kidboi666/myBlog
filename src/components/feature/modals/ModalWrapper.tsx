import { ElementType, PropsWithChildren } from "react"
import { Container } from "../../layout/Container"
import { Content } from "../../layout/Content"

interface Props {
  as?: ElementType
  title: string
}

export const ModalWrapper = ({ children, title, as = "div" }: PropsWithChildren<Props>) => {
  return (
    <Container variant="modal">
      <Content as={as} title={title} className="flex w-full flex-col gap-4">
        {children}
      </Content>
    </Container>
  )
}
