import { MouseEvent, RefObject } from "react"
import { useRouter } from "next/router"
import { Tables } from "@/src/models/supabase"

import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { SlideBarCategoryList } from "./SlideBarCategoryList"
import { Button } from "../../shared/Button"
import { Xicon } from "../../icon/XIcon"
import { Line } from "../../shared/Line"

interface Props {
  categories?: Tables<"category">[]
  subCategories?: Tables<"sub_category">[]
  slideBarRef: RefObject<HTMLDivElement>
}

export const SlideBar = ({ categories, subCategories, slideBarRef }: Props) => {
  const router = useRouter()

  const closeSlideBar = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    slideBarRef.current?.setAttribute("data-status", "closed")
  }

  return (
    <Container
      ref={slideBarRef}
      data-status="closed"
      variant="other"
      className="status-slide fixed left-0 top-0 z-50 h-dvh w-full flex-col justify-between overflow-y-auto rounded-l-none px-4 py-4 shadow-2xl transition"
    >
      <div className="w-full">
        <div className="flex justify-between gap-4">
          <Button variant="icon" onClick={() => router.push("/")} className="">
            ORIGINAL .
          </Button>
          <Button variant="icon" onClick={closeSlideBar}>
            <Xicon />
          </Button>
        </div>
        <Line className="my-4 dark:border-slate-700" />
        <List className="flex w-full flex-col">
          {categories?.map((category) => {
            const pickSubCategories =
              subCategories?.filter(
                (subCategory) => category.id === subCategory.parent_category_id,
              ) || []
            return (
              <SlideBarCategoryList
                key={category.id}
                category={category}
                subCategories={pickSubCategories}
                slideBarRef={slideBarRef}
              />
            )
          })}
        </List>
      </div>
      <Button variant="primary" onClick={() => router.push("/write")} className="w-full">
        새 게시물 쓰기
      </Button>
    </Container>
  )
}
