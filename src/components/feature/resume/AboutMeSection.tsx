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
          팀 프로젝트 중 백엔드에 있어야할 엔드포인트가 하나 빠져있다는 걸 알게됬을 때 대부분은
          그것을 우선순위에서 밀어냈습니다. db의 지식이 필요하기에 프론트 지식만 있던 우리 팀에겐
          역부족이였습니다. 하지만 이렇게 포기하기엔 아쉬워 관련 기술을 스스로 학습하기
          시작했습니다. 새로운 기술을 배우는 데 거리낌이 없었던 저는 문제 해결을 위해 프론트와 백을
          가리지 않고 학습하며 도전을 이어갔습니다.
        </Text>
        <Text as="h3">
          이 과정에서 저는 도파민의 긍정적인 작용을 이용해 의도적으로 성취감에 중독될 수 있었습니다.
          사소한 성과일지라도 매일 조금씩 문제를 해결하면서 자신에게 보상을 주었고, 어려운 과제를
          해결하여 폭포수처럼 도파민이 쏟아지는 순간만을 상상하며 끝까지 기능 구현에 임했습니다.
          결국 관련 기능을 추가할 수 있었고 프로젝트의 원할한 진행에 기여할 수 있었습니다.
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
