import { RightSection } from "@/src/components/feature/nav/RightSection"
import { LeftSection } from "@/src/components/feature/nav/LeftSection"
import { Container } from "@/src/components/layout/Container"

export const Header = () => {
  return (
    <Container as="header" variant="header">
      <LeftSection />
      <RightSection />
    </Container>
  )
}
