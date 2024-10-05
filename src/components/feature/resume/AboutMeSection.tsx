import { Line } from "../../shared/Line"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"

export const AboutMeSection = () => {
  return (
    <article className="flex flex-col gap-12">
      <Title variant="resume">자기 소개.</Title>
      <div className="flex flex-col gap-4">
        <Title as="h3">&ldquo;작은 문제에서 시작된 성장&rdquo;</Title>
        <Text>
          팀 프로젝트 중 백엔드에 있어야 할 엔드 포인트가 하나 빠져 있다는 걸 알게 됬을 때 대 부분은
          그 것을 우선 순위에서 밀어 냈습니다. 데이터 베이스의 지식이 필요하기에 프론트 지식만
          있었던 우리 팀에겐 역부족 이였습니다. 하지만 이렇게 포기하기엔 아쉬워 관련 기술을 스스로
          학습하기 시작 했습니다. 새로운 기술을 배우는데 거리낌이 없었던 저는 문제 해결을 위해
          프론트와 백의 영역을 가리지 않고 학습하며 도전을 이어갔습니다.
        </Text>
      </div>
      <div className="flex flex-col gap-4">
        <Title>&ldquo;문제 해결 그 자체가 보상이다.&rdquo;</Title>
        <Text as="h3">
          사소한 성과일 지라도 매일 조금씩 문제를 해결하면서 자신에게 보상을 주었고, 어려운 과제를
          해결하여 느낄 기쁨을 상상하며 끝까지 기능 구현에 임했습니다. 결국 데이터베이스에 관련 엔드
          포인트를 추가하여 원하던 기능을 구현할 수 있었고 프로젝트의 원할한 진행에 기여할 수
          있었습니다.
        </Text>
      </div>

      <div className="flex flex-col gap-4">
        <Title as="h3">&ldquo;문제 해결을 위한 도구&rdquo;</Title>
        <Text>
          저는 스스로를 문제 해결을 위한 도구라고 생각합니다. 어떤 집단이 특정 문제의 해결을
          원한다면, 그에 필요한 지식을 신속히 습득하고 활용하여 해결책을 제시할 수 있습니다.
          끊임없는 노력과 집요함은 제가 보유한 가장 강력한 기술 중 하나입니다.
        </Text>
      </div>
      <Line />
    </article>
  )
}
