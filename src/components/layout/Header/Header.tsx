import { Container } from "../Container"
import { RightSection } from "../../feature/nav/RightSection"
import { LeftSection } from "../../feature/nav/LeftSection"

export const Header = () => {
  return (
    <Container
      as="header"
      variant="header"
      className="fixed top-0 z-50 h-fit justify-between rounded-t-none bg-slate-50 py-4 backdrop-blur-lg xl:px-40"
    >
      <LeftSection />
      <RightSection />
    </Container>
  )
}
