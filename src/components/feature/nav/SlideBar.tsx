import { RefObject } from "react"
import { useRouter } from "next/router"
import { Tables } from "@/src/models/supabase"

import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { SlideBarCategoryList } from "./SlideBarCategoryList"
import { Button } from "../../shared/Button"

interface Props {
  categories?: Tables<"category">[]
  subCategories?: Tables<"sub_category">[]
  statusRef: RefObject<HTMLDivElement>
}

export const SlideBar = ({ categories, subCategories, statusRef }: Props) => {
  const router = useRouter()

  return (
    <Container
      ref={statusRef}
      data-status="closed"
      variant="other"
      className="status-slide fixed left-0 top-0 z-50 h-screen w-96 items-start rounded-l-none px-8 py-12 shadow-2xl transition"
    >
      <List className="flex w-full flex-col">
        <List.Row className="mb-4 flex gap-2">
          <Button variant="secondary" onClick={() => router.push("/")} className="flex-1">
            홈으로 가기
          </Button>
          <Button variant="primary" onClick={() => router.push("/write")} className="flex-1">
            새 게시물 쓰기
          </Button>
        </List.Row>
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
            />
          )
        })}
      </List>
    </Container>
  )
}
