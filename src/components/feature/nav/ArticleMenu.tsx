import { useQuery } from "@tanstack/react-query"
import { RefObject, useEffect, useState } from "react"
import cn from "@/src/lib/cn"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"
import useAnimation from "@/src/hooks/useAnimation"
import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"
import { SectionMenu } from "./SectionMenu"

const portfolioMenuMock = [
  { name: "Rolling", id: 1 },
  { name: "Taskify", id: 2 },
  { name: "Mogazoa", id: 3 },
]

interface Props {
  targetRef: RefObject<HTMLElement>
  isOpenMenu: boolean
  isAnimation: boolean
  onAnimationEnd: () => void
}

export const ArticleMenu = ({ targetRef, isOpenMenu, isAnimation, onAnimationEnd }: Props) => {
  const [isOpenBlog, setOpenBlog] = useState(false)
  const [isOpenPortfolio, setOpenPortfolio] = useState(false)
  const [renderBlog, isAnimationBlog, handleAnimationEndBlog] = useAnimation(isOpenBlog)
  const [renderPortfolio, isAnimationPortfolio, handleAnimationEndPortfolio] =
    useAnimation(isOpenPortfolio)
  const { data: categories } = useQuery(categoryQuery.queryOptions())

  useEffect(() => {
    if (!isOpenMenu) {
      setOpenBlog(false)
      setOpenPortfolio(false)
    }
  }, [isOpenMenu])

  const handleOpenMenu = (value: "blog" | "portfolio") => {
    switch (value) {
      case "blog":
        setOpenPortfolio(false)
        setOpenBlog((prev) => !prev)
        break
      case "portfolio":
        setOpenBlog(false)
        setOpenPortfolio((prev) => !prev)
        break
      default:
        break
    }
  }

  return (
    <>
      <Container
        lang="en"
        ref={targetRef}
        onAnimationEnd={onAnimationEnd}
        className={cn(
          "fixed right-0 top-12 z-40 size-fit rounded-t-none bg-slate-100 pb-2 pt-12 md:pl-10",
          isAnimation ? "animate-slideDown" : "animate-slideUp",
        )}
      >
        <List className="flex gap-14">
          <List.Row className="relative">
            <Button
              variant="teritory"
              className="gap-2 text-sm"
              onClick={() => handleOpenMenu("blog")}
            >
              <svg
                width={12}
                height={12}
                className={cn(
                  "fill-slate-500 transition-normal group-hover:fill-slate-600",
                  isOpenBlog ? "rotate-0" : "-rotate-90",
                )}
                viewBox="0 0 12 12"
              >
                <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z" />
              </svg>
              Blog
            </Button>
          </List.Row>
          <List.Row className="relative">
            <Button
              variant="teritory"
              className="gap-2 text-sm"
              onClick={() => handleOpenMenu("portfolio")}
            >
              <svg
                width={12}
                height={12}
                className={cn(
                  "fill-slate-500 transition-normal group-hover:fill-slate-600",
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
            <Button
              variant="teritory"
              className="text-sm"
              onClick={() => {
                return null
              }}
            >
              Guest
            </Button>
          </List.Row>
        </List>
      </Container>
      {renderBlog && (
        <SectionMenu
          menuList={categories}
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
