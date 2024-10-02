import { TEXT_CONTENTS } from "@/src/constants/introduce"
import { Title } from "@/src/components/shared/Title"
import { useArrTypingEffect } from "@/src/hooks/useArrTypingEffect"
import { Underbar } from "./Underbar"

export const Introduce = () => {
  const text = useArrTypingEffect(TEXT_CONTENTS)

  return (
    <div
      lang="en"
      className="relative mt-[80px] flex h-[400px] w-full flex-col items-center justify-center gap-20"
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
