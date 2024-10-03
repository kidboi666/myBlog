import { RightSection } from "@/src/components/feature/nav/RightSection"
import { LeftSection } from "@/src/components/feature/nav/LeftSection"
import { Container } from "@/src/components/layout/Container"

export const Header = () => {
  return (
    <Container
      as="header"
      variant="header"
      className="fixed top-0 z-50 h-fit justify-between rounded-t-none bg-slate-50 py-2 backdrop-blur-lg sm:py-4 xl:px-40"
    >
      <LeftSection />
      <RightSection />
    </Container>
  )
}
