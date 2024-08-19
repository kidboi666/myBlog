import { RefObject } from "react"
import { useQuery } from "@tanstack/react-query"
import { categoryQuery } from "@/src/services/queries/category/categoryQuery"

import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { SlideBarCategoryList } from "./SlideBarCategoryList"

interface Props {
  targetRef: RefObject<HTMLDivElement>
}

export const SlideBar = ({ targetRef }: Props) => {
  const { data: categories } = useQuery(categoryQuery.parentCategory())
  const { data: subCategories } = useQuery(categoryQuery.subCategory())

  return (
    <Container
      ref={targetRef}
      data-status="closed"
      className="status-slide fixed left-0 top-0 h-screen w-80 items-start rounded-l-none transition"
    >
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
            />
          )
        })}
      </List>
    </Container>
  )
}
