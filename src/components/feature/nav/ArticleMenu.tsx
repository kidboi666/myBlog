import { useQuery } from "@tanstack/react-query"
import { RefObject, useState } from "react"
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
  statusRef: RefObject<HTMLDivElement>
}

export const ArticleMenu = ({ statusRef }: Props) => {
  const [isOpenBlog, setOpenBlog] = useState(false)
  const [isOpenPortfolio, setOpenPortfolio] = useState(false)
  const [renderBlog, isAnimationBlog, handleAnimationEndBlog] = useAnimation(isOpenBlog)
  const [renderPortfolio, isAnimationPortfolio, handleAnimationEndPortfolio] =
    useAnimation(isOpenPortfolio)
  const { data: categories } = useQuery(categoryQuery.queryOptions())

  // useEffect(() => {
  //   if (!isOpenMenu) {
  //     setOpenBlog(false)
  //     setOpenPortfolio(false)
  //   }
  // }, [isOpenMenu])

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
        ref={statusRef}
        dataStatus="closed"
        className={cn(
          "status-popup absolute right-10 top-14 z-40 size-fit origin-top bg-slate-100 px-4 py-4 transition duration-200 md:px-10 xl:px-4",
        )}
      >
        <List className="flex w-40 flex-col gap-4">
          {categories?.map((menu) => (
            <List.Row key={menu.id} className="flex-end">
              <Button variant="teritory" className="text-sm">
                {menu.name}
              </Button>
            </List.Row>
          ))}
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
