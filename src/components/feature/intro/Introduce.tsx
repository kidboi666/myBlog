import { useTypingEffect } from "@/src/hooks/useTypingEffect"
import { Title } from "@/src/components/shared/Title"
import { Underbar } from "./Underbar"

export const Introduce = () => {
  const text1 = useTypingEffect("새로운 저의 블로그를 소개합니다.")

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <Title as="h3" variant="sub">
        환영합니다.
      </Title>
      <Title as="h2" className="text-3xl md:text-4xl xl:text-5xl">
        <Underbar>{text1}</Underbar>
      </Title>
    </div>
  )
}
