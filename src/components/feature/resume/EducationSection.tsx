import { Line } from "../../shared/Line"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"

export const EducationSection = () => {
  return (
    <article className="flex flex-col gap-12">
      <Title variant="resume">기타 활동.</Title>
      <section>
        <Title as="h3">코드잇 스프린트 프론트엔드 과정</Title>
        <Text>프론트엔드 부트캠프 비대면 수업 과정으로 3번의 팀 프로젝트 경험</Text>
        <Text variant="caption">2024.02 - 2024.08</Text>
      </section>
      <Line />
    </article>
  )
}
