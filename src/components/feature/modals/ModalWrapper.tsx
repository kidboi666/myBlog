import { ElementType, PropsWithChildren } from "react"
import { Container } from "../../layout/Container"
import { Content } from "../../layout/Content"

interface Props {
  as?: ElementType
  title: string
}

export const ModalWrapper = ({ children, title, as = "div" }: PropsWithChildren<Props>) => {
  return (
    <Container className="fixed left-1/2 top-1/2 flex h-fit max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-md px-0 py-0 md:px-0">
      <Content as={as} title={title} className="flex w-full flex-col gap-4">
        {children}
      </Content>
    </Container>
  )
}
