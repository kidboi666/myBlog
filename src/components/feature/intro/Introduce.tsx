import { TEXT_CONTENTS } from "@/src/constants/introduce"
import { useTypingEffect } from "@/src/hooks/useTypingEffect"
import { Title } from "@/src/components/shared/Title"
import { Underbar } from "./Underbar"

export const Introduce = () => {
  const text = useTypingEffect(TEXT_CONTENTS)

  return (
    <div
      lang="en"
      className="relative flex h-dvh w-full flex-col items-center justify-center gap-20"
    >
      <div className="flex flex-col items-center">
        <Title as="h3" variant="sub" className="animate-fadeIn">
          welcome.
        </Title>
        <Title as="h2" className="text-center text-2xl md:text-4xl xl:text-5xl">
          <Underbar>
            <span className="animate-fadeIn" dangerouslySetInnerHTML={{ __html: text }} />
          </Underbar>
        </Title>
      </div>
    </div>
  )
}
