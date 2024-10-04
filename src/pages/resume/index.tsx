import { Header } from "@/src/components/feature/nav"
import { AboutMeSection } from "@/src/components/feature/resume/AboutMeSection"
import { ContactSection } from "@/src/components/feature/resume/ContactSection"
import { EducationSection } from "@/src/components/feature/resume/EducationSection"
import { IntroduceSection } from "@/src/components/feature/resume/IntruduceSection"
import { ProjectSection } from "@/src/components/feature/resume/ProjectSection"
import { SkillsSection } from "@/src/components/feature/resume/SkillsSection"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Footer } from "@/src/components/layout/Footer"

const ResumePage = () => {
  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container variant="post" className="gap-16">
        <IntroduceSection>
          <ProjectSection />
          <EducationSection />
          <AboutMeSection />
          <SkillsSection />
          <ContactSection />
        </IntroduceSection>
      </Container>
    </AppLayout>
  )
}

export default ResumePage
