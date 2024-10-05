import { List } from "../../layout/List"
import { Line } from "../../shared/Line"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"

export const EducationSection = () => {
  return (
    <article className="flex flex-col gap-12">
      <Title variant="resume">기타 활동.</Title>
      <section className="flex flex-col gap-4">
        <Title as="h3">코드잇 스프린트 프론트엔드 과정</Title>
        <Text as="div">
          <List className="flex list-inside list-disc flex-col gap-4">
            <List.Row>프론트엔드 부트캠프 비대면 수업 과정</List.Row>
            <List.Row>
              매 주 마다 정해진 미션을 구현하여 멘토에게 코드 리뷰를 받고 지적 사항을 수정한 경험
            </List.Row>
            <List.Row>3번의 팀 프로젝트 과정 경험</List.Row>
          </List>
        </Text>
        <Text variant="caption">2024.02 - 2024.08</Text>
      </section>
      <Line />
    </article>
  )
}
