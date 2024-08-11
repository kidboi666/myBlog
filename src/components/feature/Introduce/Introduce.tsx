import { Title } from "../../shared/Title"

export const Introduce = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <Title as="h3" variant="sub">
        환영합니다.
      </Title>
      <Title as="h2" className="text-5xl">
        새로운 저의 블로그를 소개합니다.
      </Title>
    </div>
  )
}
