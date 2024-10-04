/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from "next/link"
import cn from "@/src/lib/cn"
import useIntersect from "@/src/hooks/useIntersect"
import { Button } from "../../shared/Button"
import { Text } from "../../shared/Text"
import { Container } from "../Container"
import { GithubIcon } from "../../icon/GithubIcon"
import { OneSentenceIcon } from "../../icon/OneSentenceIcon"

export const Footer = () => {
  const [target, isIntersecting] = useIntersect<HTMLDivElement>({ threshold: 0.1 })
  return (
    <Container
      as="footer"
      variant="footer"
      className={cn(isIntersecting ? "translate-y-0" : "translate-y-40")}
    >
      <div ref={target} />
      <Text>새로운 기능이 계속해서 추가됩니다.</Text>

      <div className="flex gap-2">
        <Button variant="icon" className="justify-self-center p-2 text-slate-500">
          <Link href="https://github.com/kidboi666" target="_blank">
            <GithubIcon />
          </Link>
        </Button>
        <Button variant="icon" className="justify-self-center p-2 text-slate-500">
          <Link href="https://one-sentence-gray.vercel.app/" target="_blank">
            <OneSentenceIcon />
          </Link>
        </Button>
      </div>
    </Container>
  )
}
