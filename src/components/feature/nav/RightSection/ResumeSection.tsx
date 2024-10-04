import { QuestionMarkIcon } from "@/src/components/icon/QuestionMarkIcon"
import { List } from "@/src/components/layout/List"
import { Button } from "@/src/components/shared/Button"
import { useRouter } from "next/router"

export const ResumeSection = () => {
  const router = useRouter()
  const handleQuestionButtonClick = () => {
    router.push("/resume")
  }
  return (
    <List.Row>
      <Button variant="icon" onClick={handleQuestionButtonClick}>
        <QuestionMarkIcon />
      </Button>
    </List.Row>
  )
}
