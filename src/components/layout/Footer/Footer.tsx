import Link from "next/link"
import cn from "@/src/lib/cn"
import useIntersect from "@/src/hooks/useIntersect"
import { Button } from "../../shared/Button"
import { Text } from "../../shared/Text"
import { Container } from "../Container"
import { GithubIcon } from "../../icon/GithubIcon"

export const Footer = () => {
  const [target, isIntersecting] = useIntersect<HTMLDivElement>({ threshold: 0.1 })
  return (
    <>
      <div ref={target} />
      <Container
        as="footer"
        className={cn(
          "relative translate-y-40 flex-col gap-4 rounded-b-none transition-slow xl:px-40",
          isIntersecting ? "translate-y-0" : "translate-y-40",
        )}
      >
        <Text>새로운 기능이 계속해서 추가됩니다.</Text>
        <Button variant="icon" className="justify-self-center text-slate-500">
          <Link href="https://github.com/kidboi666" target="_blank">
            <GithubIcon />
          </Link>
        </Button>
      </Container>
    </>
  )
}
