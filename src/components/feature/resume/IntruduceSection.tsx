import { useArrTypingEffect } from "@/src/hooks/useArrTypingEffect"
import { Title } from "../../shared/Title"
import { Text } from "../../shared/Text"
import { Line } from "../../shared/Line"
import { Underbar } from "../intro/Underbar"

const TEXT_CONTENT = ["안녕하세요!", "저는 이진욱 입니다."]

export const IntroduceSection = () => {
  const text = useArrTypingEffect(TEXT_CONTENT)
  return (
    <header className="flex flex-1 flex-col gap-12">
      <Title variant="resume" className="" as="h2">
        <Underbar>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </Underbar>
      </Title>
      <Text>
        머물러 있지 않고 성장하는 개발자가 되고 싶습니다. 빠르게 변화하는 프론트엔드 기술을 새로
        배워나가는 것을 좋아하며 그만큼 성장하는 것에 희열을 느낍니다. 작고 아기자기한, 그러나 사용
        경험에 자연스러움이 묻어나는 UI를 추구합니다.
      </Text>
      <Line />
    </header>
  )
}
