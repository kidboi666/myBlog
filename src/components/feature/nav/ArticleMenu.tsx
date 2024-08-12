import { useState } from "react"
import cn from "@/src/lib/cn"
import useAnimation from "@/src/hooks/useAnimation"
import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"
import { SectionMenu } from "./SectionMenu"

const blogMenuMock = [
  { name: "리액트", id: 1 },
  { name: "자바스크립트", id: 2 },
  { name: "타입스크립트", id: 3 },
]

const portfolioMenuMock = [
  { name: "Rolling", id: 1 },
  { name: "Taskify", id: 2 },
  { name: "Mogazoa", id: 3 },
]

interface Props {
  isAnimation: boolean
  onAnimationEnd: () => void
}

export const ArticleMenu = ({ isAnimation, onAnimationEnd }: Props) => {
  const [isOpenBlog, setOpenBlog] = useState(false)
  const [isOpenPortfolio, setOpenPortfolio] = useState(false)
  const [renderBlog, isAnimationBlog, handleAnimationEndBlog] = useAnimation(isOpenBlog)
  const [renderPortfolio, isAnimationPortfolio, handleAnimationEndPortfolio] =
    useAnimation(isOpenPortfolio)

  return (
    <>
      <Container
        onAnimationEnd={onAnimationEnd}
        className={cn(
          "fixed left-0 top-8 z-40 h-fit grid-cols-3 rounded-t-none pb-2 pt-12",
          isAnimation ? "animate-slideDown" : "animate-slideUp",
        )}
      >
        <List className="flex w-fit items-start gap-40 self-center">
          <List.Row className="flex-1 flex-col">
            <Button variant="secondary" onClick={() => setOpenBlog((prev) => !prev)}>
              <svg
                width={12}
                height={12}
                className={cn(
                  "transition-normal fill-slate-500 group-hover:fill-slate-600",
                  isOpenBlog ? "rotate-0" : "-rotate-90",
                )}
                viewBox="0 0 12 12"
              >
                <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z" />
              </svg>
              Blog
            </Button>
          </List.Row>
          <List.Row>
            <Button variant="secondary" onClick={() => setOpenPortfolio((prev) => !prev)}>
              <svg
                width={12}
                height={12}
                className={cn(
                  "transition-normal fill-slate-500 group-hover:fill-slate-600",
                  isOpenPortfolio ? "rotate-0" : "-rotate-90",
                )}
                viewBox="0 0 12 12"
              >
                <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z" />
              </svg>
              PortFolio
            </Button>
          </List.Row>
          <List.Row>
            <Button variant="secondary" onClick={() => console.log("asdf")}>
              Guest
            </Button>
          </List.Row>
        </List>
      </Container>
      {renderBlog && (
        <SectionMenu
          menuList={blogMenuMock}
          isAnimation={isAnimationBlog}
          onAnimationEnd={handleAnimationEndBlog}
        />
      )}
      {renderPortfolio && (
        <SectionMenu
          menuList={portfolioMenuMock}
          isAnimation={isAnimationPortfolio}
          onAnimationEnd={handleAnimationEndPortfolio}
        />
      )}
    </>
  )
}
