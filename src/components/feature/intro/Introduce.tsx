import { Title } from "@/src/components/shared/Title"
import { useArrTypingEffect } from "@/src/hooks/useArrTypingEffect"
import { Underbar } from "./Underbar"

const TEXT_CONTENTS = ["끊임없는 호기심으로 성장을 이끄는 기술 블로그 입니다."]

export const Introduce = () => {
  const text = useArrTypingEffect(TEXT_CONTENTS)

  return (
    <div
      lang="en"
      className="relative flex h-[400px] w-full flex-col items-center justify-center gap-20"
    >
      <div className="absolute flex flex-col items-center">
        <Title as="h3" variant="sub" className="animate-fadeIn text-slate-800">
          안녕하세요.
        </Title>
        <Title
          as="h2"
          className="text-center text-3xl font-normal leading-3 text-slate-800 md:text-4xl xl:text-5xl"
        >
          <Underbar>
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </Underbar>
        </Title>
      </div>
    </div>
  )
}
